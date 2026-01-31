import { CorruptionLevel } from './types';

// Glitch symbols for random insertion
const SYMBOLS = ['Ξ', 'Ψ', 'Ω', '◊', '∆', '∇', '⌘', '⌬', '⍟', '⏁', '⏃', '∴', '∵', '◈', '⬡', '⟁', '⎊', '⏣', '⌖'];

// Code fragments
const CODE_FRAGMENTS = ['0x7F3A', '[REDACTED]', 'null', 'undefined', 'NaN', 'seg_fault', 'kernel_panic', 'malloc(∞)', 'void*'];

// Zalgo-lite combining characters (used sparingly)
const ZALGO_ABOVE = ['\u0300', '\u0301', '\u0302', '\u0303', '\u0304', '\u0305', '\u0306', '\u0307', '\u0308', '\u0309'];
const ZALGO_BELOW = ['\u0316', '\u0317', '\u0318', '\u0319', '\u031a', '\u031b', '\u031c', '\u031d', '\u031e', '\u031f'];

function randomChoice<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function addZalgo(char: string, intensity: number): string {
  if (Math.random() > intensity) return char;
  let result = char;
  const aboveCount = Math.floor(Math.random() * 2 * intensity);
  const belowCount = Math.floor(Math.random() * 2 * intensity);
  for (let i = 0; i < aboveCount; i++) {
    result += randomChoice(ZALGO_ABOVE);
  }
  for (let i = 0; i < belowCount; i++) {
    result += randomChoice(ZALGO_BELOW);
  }
  return result;
}

export function corruptText(text: string, level: CorruptionLevel): string {
  if (level === 'none') return text;

  const intensity = {
    light: 0.05,
    heavy: 0.15,
    maximum: 0.3,
  }[level];

  let result = '';
  const chars = text.split('');

  for (let i = 0; i < chars.length; i++) {
    const char = chars[i];

    // Skip spaces and special markers
    if (char === ' ' || char === '{' || char === '}') {
      result += char;
      continue;
    }

    // Random zalgo effect
    if (level !== 'light' && Math.random() < intensity * 0.5) {
      result += addZalgo(char, intensity);
    } else {
      result += char;
    }
  }

  return result;
}

// Parse and render text with code fragments styled
export interface TextPart {
  type: 'text' | 'code' | 'symbol';
  content: string;
}

export function parseText(text: string): TextPart[] {
  const parts: TextPart[] = [];
  const regex = /\{code:([^}]+)\}/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    // Add text before the match
    if (match.index > lastIndex) {
      parts.push({ type: 'text', content: text.slice(lastIndex, match.index) });
    }
    // Add the code fragment
    parts.push({ type: 'code', content: match[1] });
    lastIndex = regex.lastIndex;
  }

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push({ type: 'text', content: text.slice(lastIndex) });
  }

  return parts;
}

// Generate random glitch burst for transitions
export function generateGlitchBurst(): string {
  const length = 10 + Math.floor(Math.random() * 20);
  let result = '';
  for (let i = 0; i < length; i++) {
    if (Math.random() < 0.3) {
      result += randomChoice(SYMBOLS);
    } else if (Math.random() < 0.5) {
      result += randomChoice(CODE_FRAGMENTS);
    } else {
      result += '█'.repeat(1 + Math.floor(Math.random() * 3));
    }
    if (Math.random() < 0.3) result += ' ';
  }
  return result;
}
