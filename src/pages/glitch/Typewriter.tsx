import { useState, useEffect, useRef, useMemo } from 'react';
import { CorruptionLevel } from './types';
import { corruptText } from './textCorruptor';

interface TypewriterProps {
  text: string;
  speed?: number; // ms per character
  corruption?: CorruptionLevel;
  onComplete?: () => void;
  onCharacter?: (char: string, index: number) => void;
  isAnimating?: boolean;
}

interface TextSegment {
  type: 'text' | 'code';
  content: string;
  startIndex: number; // index in rendered output
}

// Randomize case of each letter
function randomizeCase(text: string): string {
  return text.split('').map(char => {
    if (/[a-zA-Z]/.test(char)) {
      return Math.random() > 0.5 ? char.toUpperCase() : char.toLowerCase();
    }
    return char;
  }).join('');
}

// Parse text into segments, identifying {code:...} blocks
// Also randomizes case for text segments
function parseIntoSegments(text: string): TextSegment[] {
  const segments: TextSegment[] = [];
  const regex = /\{code:([^}]+)\}/g;
  let lastIndex = 0;
  let renderedIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    // Add text before the match (with randomized case)
    if (match.index > lastIndex) {
      const content = randomizeCase(text.slice(lastIndex, match.index));
      segments.push({ type: 'text', content, startIndex: renderedIndex });
      renderedIndex += content.length;
    }
    // Add the code fragment (just the content, not the markers) - with randomized case
    const codeContent = randomizeCase(match[1]);
    segments.push({ type: 'code', content: codeContent, startIndex: renderedIndex });
    renderedIndex += codeContent.length;
    lastIndex = regex.lastIndex;
  }

  // Add remaining text (with randomized case)
  if (lastIndex < text.length) {
    const content = randomizeCase(text.slice(lastIndex));
    segments.push({ type: 'text', content, startIndex: renderedIndex });
  }

  return segments;
}

// Get total rendered length (without markup)
function getRenderedLength(segments: TextSegment[]): number {
  return segments.reduce((acc, seg) => acc + seg.content.length, 0);
}

export function Typewriter({
  text,
  speed = 50,
  corruption = 'none',
  onComplete,
  onCharacter,
  isAnimating = false,
}: TypewriterProps) {
  const [displayLength, setDisplayLength] = useState(0);
  const completedRef = useRef(false);
  const textRef = useRef(text);

  // Parse text into segments once
  const segments = useMemo(() => parseIntoSegments(text), [text]);
  const totalLength = useMemo(() => getRenderedLength(segments), [segments]);

  // Reset when text changes
  useEffect(() => {
    if (text !== textRef.current) {
      textRef.current = text;
      setDisplayLength(0);
      completedRef.current = false;
    }
  }, [text]);

  // Typewriter animation
  useEffect(() => {
    if (displayLength >= totalLength) {
      if (!completedRef.current) {
        completedRef.current = true;
        onComplete?.();
      }
      return;
    }

    const timer = setTimeout(() => {
      // Find what character we're revealing
      for (const segment of segments) {
        const segEnd = segment.startIndex + segment.content.length;
        if (displayLength < segEnd) {
          const charInSegment = displayLength - segment.startIndex;
          const char = segment.content[charInSegment];
          onCharacter?.(char, displayLength);
          break;
        }
      }
      setDisplayLength(prev => prev + 1);
    }, speed);

    return () => clearTimeout(timer);
  }, [displayLength, totalLength, segments, speed, onComplete, onCharacter]);

  // Memoize the rendered segments to avoid re-corrupting text on every render
  const renderedSegments = useMemo(() => {
    return segments.map((segment, i) => {
      const segStart = segment.startIndex;

      // Skip if we haven't reached this segment yet
      if (displayLength <= segStart) return null;

      // Calculate how much of this segment to show
      const visibleLength = Math.min(displayLength - segStart, segment.content.length);
      const visibleContent = segment.content.slice(0, visibleLength);

      // Apply corruption to text segments only (memoized per displayLength)
      const displayContent = segment.type === 'text'
        ? corruptText(visibleContent, corruption)
        : visibleContent;

      if (segment.type === 'code') {
        return (
          <span key={i} className="text-green-400 font-mono">
            {displayContent}
          </span>
        );
      }
      return <span key={i}>{displayContent}</span>;
    });
  }, [segments, displayLength, corruption]);

  return (
    <span className={isAnimating ? 'animate-pulse blur-[1px]' : ''}>
      <span className={`drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] ${isAnimating ? 'translate-x-1' : ''}`}>
        {renderedSegments}
        {/* Cursor */}
        {displayLength < totalLength && (
          <span className="animate-blink text-purple-400">|</span>
        )}
      </span>
    </span>
  );
}
