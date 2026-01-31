import { useState, useEffect, useCallback, useRef, useMemo, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Section } from '@/components/Section';
import {
  DialogueNode,
  ResponseType,
  GlitchState,
  CorruptionLevel,
  BUTTON_STYLES,
  ExitDestinationType,
  EXIT_DESTINATION_STYLES,
  PathBranch,
  PATH_CONTAINER_STYLES,
  CORRUPTION_GLOW_MULTIPLIERS
} from './types';
import { DIALOGUE_TREE, EXIT_DESTINATIONS } from './dialogueTree';
import { Typewriter } from './Typewriter';
import { useAnimalese, unlockAudio } from './useAnimalese';
import { corruptText } from './textCorruptor';

// Helper: Determine exit destination type for visual indicators
function getExitDestinationType(nextId: string): ExitDestinationType {
  if (!nextId.startsWith('exit_')) return 'dialogue';

  const destination = EXIT_DESTINATIONS[nextId];
  if (!destination) return 'internal';

  if (destination.startsWith('http')) return 'external';
  if (destination.endsWith('.pdf')) return 'pdf';
  if (nextId.startsWith('exit_tenet_')) return 'tenet';

  return 'internal';
}

// Helper: Determine current path branch for subtle hue shifts
function getCurrentPathBranch(nodeId: string): PathBranch {
  if (nodeId.startsWith('seeker') || nodeId.startsWith('layer') || nodeId.startsWith('decode') || nodeId.startsWith('identity')) return 'seeker';
  if (nodeId.startsWith('chaos') || nodeId.startsWith('resist')) return 'chaos';
  if (nodeId.startsWith('still') || nodeId.startsWith('accept')) return 'contemplative';
  return 'neutral';
}

// Grid pattern style - shared constant to avoid recreation
const GRID_PATTERN_STYLE = {
  backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px)',
  backgroundSize: '4px 4px'
};

// Animation pool for random selection (equal probability)
const ANIMATION_POOL = [
  { className: 'animate-spin-cw', duration: 800 },
  { className: 'animate-spin-ccw', duration: 600 },
  { className: 'animate-wobble', duration: 1200 },
  { className: 'animate-pulse-scale', duration: 1200 },
  { className: 'animate-chaos', duration: 500 },
  { className: 'animate-decode', duration: 1000 },
];

// Corruption meter component - esoteric UI style (memoized to prevent re-renders)
const CorruptionMeter = memo(function CorruptionMeter({ level }: { level: CorruptionLevel }) {
  const fillPercent = level === 'none' ? 0 : level === 'light' ? 33 : level === 'heavy' ? 66 : 100;

  // Glitch text effect style
  const glitchTextStyle = {
    textShadow: '2px 0 rgba(255,0,0,0.5), -2px 0 rgba(0,255,255,0.5)',
  };

  // Esoteric symbols for different states
  const statusSymbol = level === 'maximum' ? '⛧' : level === 'heavy' ? '◬' : level === 'light' ? '◊' : '○';

  return (
    <div className="absolute -top-12 left-1/2 -translate-x-1/2 md:left-1 md:translate-x-0 z-40 flex flex-col gap-1 w-64 font-mono tracking-wider select-none mix-blend-screen">

      {/* Symbol Row */}
      <div className="flex justify-between items-center px-1">
        <span
          className={`text-sm text-purple-200/80 ${level === 'heavy' || level === 'maximum' ? 'animate-pulse' : ''}`}
          style={level === 'maximum' ? glitchTextStyle : undefined}
        >
          ⌬ ◎ ⟁
        </span>
        <span className="text-lg font-bold text-purple-100 tabular-nums leading-none">
          {fillPercent}<span className="text-[10px] text-purple-300/50 ml-0.5">%</span>
        </span>
      </div>

      {/* Meter Container */}
      <div className="relative h-5 w-full bg-black/40 backdrop-blur-md border border-white/20 skew-x-[-15deg] overflow-hidden group">

        {/* Background Grid Pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={GRID_PATTERN_STYLE}
        />

        {/* Fill Bar - Segmented */}
        <div className="absolute inset-0 flex gap-[2px] p-[2px]">
          {[...Array(20)].map((_, i) => {
            const segmentValue = (i + 1) * 5;
            const isActive = fillPercent >= segmentValue;

            let activeColor = 'bg-purple-500';
            if (i > 12) activeColor = 'bg-pink-500';
            if (i > 18) activeColor = 'bg-red-500';

            return (
              <div
                key={i}
                className={`h-full flex-1 transition-all duration-300 ${isActive
                  ? `${activeColor} shadow-[0_0_5px_currentColor]`
                  : 'bg-white/5'
                  }`}
              />
            );
          })}
        </div>

        {/* Scanning Line overlay */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
      </div>

      {/* Esoteric Status Symbols */}
      <div className="flex justify-between text-[10px] text-purple-300/40 px-1">
        <span>⟐ {statusSymbol} ⟐</span>
        <span>⌖ ◇ ⚯</span>
      </div>

      {/* Glitch Overlay (Active at high levels) */}
      {(level === 'heavy' || level === 'maximum') && (
        <>
          <div className="absolute -inset-2 bg-purple-500/5 blur-xl animate-pulse rounded-full" />
          {level === 'maximum' && <div className="absolute inset-0 border border-red-500/30 skew-x-[-15deg] animate-[ping_1s_infinite] opacity-20" />}
        </>
      )}
    </div>
  );
});

// Calculate dominant response type from history
function getDominantType(history: ResponseType[]): ResponseType | null {
  if (history.length < 3) return null;

  const counts: Record<ResponseType, number> = {
    accept: 0, reject: 0, question: 0, silence: 0, corrupt: 0, decode: 0
  };

  history.forEach(type => counts[type]++);

  let maxType: ResponseType = 'accept';
  let maxCount = 0;

  (Object.keys(counts) as ResponseType[]).forEach(type => {
    if (counts[type] > maxCount) {
      maxCount = counts[type];
      maxType = type;
    }
  });

  // Need at least 3 of the same type
  if (maxCount >= 3) return maxType;
  return null;
}

// Map dominant type to tenet exit
function getTenetExit(dominantType: ResponseType): string {
  const mapping: Record<ResponseType, string> = {
    silence: 'exit_tenet_death',
    corrupt: 'exit_tenet_creation',
    question: 'exit_tenet_identity',
    decode: 'exit_tenet_reverence',
    accept: 'exit_tenet_faith',
    reject: 'exit_tenet_suffering',
  };
  return mapping[dominantType];
}

export function GlitchDialog() {
  const navigate = useNavigate();
  const { speakChar } = useAnimalese();

  const [state, setState] = useState<GlitchState>({
    currentNode: 'init',
    history: [],
    streak: 0,
    secretsFound: [],
    totalClicks: 0,
  });

  const [animationClass, setAnimationClass] = useState<string>('');
  const [isAnimating, setIsAnimating] = useState(false);
  const [showHidden, setShowHidden] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [exitCountdown, setExitCountdown] = useState<number | null>(null);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [hoverAnimationClass, setHoverAnimationClass] = useState<string>('');
  const [isImageLoaded, setIsImageLoaded] = useState(() => {
    // Check if image is already cached on initial render
    if (typeof window !== 'undefined') {
      const img = new Image();
      img.src = '/animated_eyecon_500_q50.webp';
      return img.complete && img.naturalHeight !== 0;
    }
    return false;
  });
  const charCountRef = useRef(0);
  const exitTimersRef = useRef<NodeJS.Timeout[]>([]);
  const hasStartedExitRef = useRef(false);
  const hoverTimerRef = useRef<NodeJS.Timeout | null>(null);

  const currentNode: DialogueNode = DIALOGUE_TREE[state.currentNode];

  // Preload the large animated WebP before showing content
  useEffect(() => {
    const img = new Image();
    img.onload = () => setIsImageLoaded(true);
    img.onerror = () => setIsImageLoaded(true); // Show content anyway on error
    img.src = '/animated_eyecon_500_q50.webp';

    // Handle already-cached images (complete is true immediately)
    if (img.complete) {
      setIsImageLoaded(true);
    }
  }, []);

  // Debug: Log current state (development only)
  useEffect(() => {
    if (import.meta.env.DEV) {
      console.log('[GLITCH] Current state:', {
        nodeId: state.currentNode,
        nodeExists: !!DIALOGUE_TREE[state.currentNode],
        nodeText: currentNode?.text,
        responsesCount: currentNode?.responses?.length,
        history: state.history,
        isExiting
      });
    }
  }, [state.currentNode, currentNode, isExiting, state.history]);

  // Reset typing state when node changes + add fallback timeout
  useEffect(() => {
    setIsTypingComplete(false);
    charCountRef.current = 0;

    // Fallback: force typing complete after estimated time + buffer
    // This catches cases where the onComplete callback doesn't fire
    const textLength = currentNode.text.replace(/\{code:([^}]+)\}/g, '$1').length;
    const estimatedTime = textLength * 50 + 500; // 50ms per char + 500ms buffer

    const fallbackTimer = setTimeout(() => {
      setIsTypingComplete(true);
    }, estimatedTime);

    return () => clearTimeout(fallbackTimer);
  }, [state.currentNode, currentNode.text]);

  // Handle Maximum Corruption Event (100%)
  const [isMaxCorruption, setIsMaxCorruption] = useState(false);

  useEffect(() => {
    if (currentNode.corruption === 'maximum') {
      setIsMaxCorruption(true);

      // Allow the craziness to run for 2 seconds before redirecting
      const timer = setTimeout(() => {
        const videos = [
          'jK1TTyp6DWc',
          'zwAG3DWMFG4',
          'nxSTO2YClGw'
        ];
        const randomVideo = videos[Math.floor(Math.random() * videos.length)];
        window.location.href = `https://www.youtube.com/watch?v=${randomVideo}&autoplay=1`;
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [currentNode.corruption]);

  // Handle response selection
  const handleResponse = useCallback(async (type: ResponseType, nextId: string) => {
    console.log('[GLITCH] handleResponse called:', { type, nextId, isAnimating, isExiting });
    if (isAnimating || isExiting) return;

    // Unlock audio on iOS Safari (safe to call multiple times)
    await unlockAudio();

    // Randomly select animation from pool
    const randomAnim = ANIMATION_POOL[Math.floor(Math.random() * ANIMATION_POOL.length)];

    // Start animation
    setIsAnimating(true);
    setAnimationClass(randomAnim.className);
    setShowHidden(false);

    // Calculate new streak
    let newStreak = state.streak;
    if (type === 'decode') {
      newStreak++;
    } else if (type === 'silence' && state.history[state.history.length - 1] === 'silence') {
      newStreak++;
    } else {
      newStreak = 0;
    }

    // After animation, advance dialogue
    setTimeout(() => {
      setAnimationClass('');
      setIsAnimating(false);

      // Handle special exit_evaluate node
      let finalNextId = nextId;
      if (nextId === 'exit_evaluate') {
        const dominant = getDominantType([...state.history, type]);
        console.log('[GLITCH] exit_evaluate - dominant type:', dominant);
        if (dominant) {
          finalNextId = getTenetExit(dominant);
        } else {
          finalNextId = 'exit_standard';
        }
      }

      console.log('[GLITCH] Transitioning to node:', finalNextId);
      console.log('[GLITCH] Node exists in tree:', !!DIALOGUE_TREE[finalNextId]);
      console.log('[GLITCH] Is exit node:', finalNextId.startsWith('exit_'));
      if (finalNextId.startsWith('exit_')) {
        console.log('[GLITCH] Exit destination:', EXIT_DESTINATIONS[finalNextId]);
      }

      setState(prev => ({
        ...prev,
        currentNode: finalNextId,
        history: [...prev.history, type],
        streak: newStreak,
        totalClicks: prev.totalClicks + 1,
      }));
    }, randomAnim.duration);
  }, [isAnimating, isExiting, state.history, state.streak]);

  // Handle exit navigation with countdown
  useEffect(() => {
    console.log('[GLITCH] Exit effect check:', {
      currentNode: state.currentNode,
      isExit: state.currentNode.startsWith('exit_'),
      isExiting,
      hasStartedExit: hasStartedExitRef.current
    });

    // Use ref to prevent re-running on isExiting state change
    if (state.currentNode.startsWith('exit_') && !hasStartedExitRef.current) {
      hasStartedExitRef.current = true;
      const destination = EXIT_DESTINATIONS[state.currentNode] || '/';
      console.log('[GLITCH] Starting exit sequence:', {
        node: state.currentNode,
        destination,
        destinationExists: !!EXIT_DESTINATIONS[state.currentNode],
        isExternal: destination.startsWith('http')
      });

      setIsExiting(true);

      // Start countdown: 1 → 2 → 3 → navigate
      setExitCountdown(1);

      const timer1 = setTimeout(() => setExitCountdown(2), 800);
      const timer2 = setTimeout(() => setExitCountdown(3), 1600);
      const timer3 = setTimeout(() => {
        console.log('[GLITCH] Navigating to:', destination);
        if (destination.startsWith('http')) {
          console.log('[GLITCH] Using window.location for external URL');
          window.location.href = destination;
        } else {
          console.log('[GLITCH] Using react-router navigate');
          navigate(destination);
        }
      }, 2400);

      // Store timers in ref so they persist across re-renders
      exitTimersRef.current = [timer1, timer2, timer3];
    }

    // Only cleanup on unmount, not on re-render
    return () => {
      if (!state.currentNode.startsWith('exit_')) {
        exitTimersRef.current.forEach(timer => clearTimeout(timer));
        exitTimersRef.current = [];
        hasStartedExitRef.current = false;
      }
    };
  }, [state.currentNode, navigate]);

  // Handle dead-end nodes (no responses, not an exit node) - redirect to home after typing
  useEffect(() => {
    console.log('[GLITCH] Dead-end check:', {
      isTypingComplete,
      responsesLength: currentNode.responses.length,
      currentNode: state.currentNode,
      isExitNode: state.currentNode.startsWith('exit_'),
      isExiting,
      hasStartedExit: hasStartedExitRef.current
    });

    if (isTypingComplete && currentNode.responses.length === 0 && !state.currentNode.startsWith('exit_') && !hasStartedExitRef.current) {
      console.log('[GLITCH] Dead-end detected! Redirecting to home...');
      hasStartedExitRef.current = true;
      setIsExiting(true);

      // Start countdown: 1 → 2 → 3 → navigate home
      setExitCountdown(1);

      const timer1 = setTimeout(() => setExitCountdown(2), 800);
      const timer2 = setTimeout(() => setExitCountdown(3), 1600);
      const timer3 = setTimeout(() => {
        console.log('[GLITCH] Dead-end navigation to /');
        navigate('/');
      }, 2400);

      // Store timers in ref so they persist across re-renders
      exitTimersRef.current = [timer1, timer2, timer3];
    }
  }, [isTypingComplete, currentNode.responses.length, state.currentNode, navigate]);

  // Hidden message hover reveal
  const handleTextHover = useCallback(() => {
    if (currentNode.hidden && !showHidden) {
      const timer = setTimeout(() => {
        setShowHidden(true);
        setState(prev => ({
          ...prev,
          secretsFound: prev.secretsFound.includes(currentNode.id)
            ? prev.secretsFound
            : [...prev.secretsFound, currentNode.id]
        }));
      }, 2000);
      hoverTimerRef.current = timer;
    }
  }, [currentNode.hidden, currentNode.id, showHidden]);

  const handleTextLeave = useCallback(() => {
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }
  }, []);

  // Eye hover handlers - random animation on hover
  const handleEyeEnter = useCallback(() => {
    if (!isAnimating) {
      const randomAnim = ANIMATION_POOL[Math.floor(Math.random() * ANIMATION_POOL.length)];
      setHoverAnimationClass(randomAnim.className);
    }
  }, [isAnimating]);

  const handleEyeLeave = useCallback(() => {
    setHoverAnimationClass('');
  }, []);

  // Handle character typed - play animalese on every letter (grumpy voice)
  const handleCharacter = useCallback((char: string, _index: number) => {
    charCountRef.current++;
    // Play sound on every letter
    if (/[a-zA-Z]/.test(char)) {
      // Grumpy voice = lower pitch (0.5-0.7 range), with slight variation
      // Corruption level makes it even lower/creepier
      const basePitch = currentNode.corruption === 'maximum' ? 0.4 :
        currentNode.corruption === 'heavy' ? 0.5 :
          currentNode.corruption === 'light' ? 0.55 : 0.6;
      const variation = 0.95 + Math.random() * 0.1;
      speakChar(char, { pitch: basePitch * variation });
    }
  }, [speakChar, currentNode.corruption]);

  // Handle typing complete
  const handleTypingComplete = useCallback(() => {
    setIsTypingComplete(true);
  }, []);

  // Memoize float animation style (avoid object recreation on every render)
  const floatStyle = useMemo(() => ({
    '--float-distance': '20px',
    '--float-duration': '8s'
  } as React.CSSProperties), []);

  // Memoize drop-shadow filter style (changes based on isExiting and corruption level)
  // Includes GPU acceleration hints for Safari animated webp performance
  // Glow color matches corruption meter: purple → pink → red
  const eyeFilterStyle = useMemo(() => {
    const glowSize = isExiting ? '20px' : '8px';
    const glowOpacity = isExiting ? '1' : '0.95';

    // Color progression matching corruption meter
    let glowColor: string;
    switch (currentNode.corruption) {
      case 'maximum':
        glowColor = `rgba(239, 68, 68, ${glowOpacity})`; // red-500
        break;
      case 'heavy':
        glowColor = `rgba(236, 72, 153, ${glowOpacity})`; // pink-500
        break;
      default:
        glowColor = `rgba(168, 85, 247, ${glowOpacity})`; // purple-500
    }

    return {
      filter: `drop-shadow(0 0 ${glowSize} ${glowColor})`,
      WebkitTransform: 'translateZ(0)',
      transform: 'translateZ(0)',
      willChange: 'transform, filter'
    };
  }, [isExiting, currentNode.corruption]);

  // Combine animation classes - click animation takes priority over hover
  const activeAnimationClass = animationClass || hoverAnimationClass;

  // Get button label with potential corruption
  const getButtonLabel = (label: string, type: ResponseType) => {
    // Decode buttons use cryptic symbols
    if (type === 'decode') {
      return label;
    }
    return corruptText(label, currentNode.corruption === 'maximum' ? 'light' : 'none');
  };

  // Show loading indicator until image is ready
  if (!isImageLoaded) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse" />
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-black text-white font-mono overflow-hidden ${isMaxCorruption ? 'animate-glitch-chaos' : ''}`}>
      {/* Subtle Chromatic Aberration Overlay for max corruption */}
      {isMaxCorruption && (
        <div className="fixed inset-0 z-50 pointer-events-none opacity-20 bg-purple-500/10 mix-blend-overlay animate-pulse" />
      )}
      <Section
        verticalPadding="large"
        background="image"
        backgroundImage="/images/shared/background.webp"
        backgroundOverlay
        headerOffset
        className="h-screen flex flex-col items-center justify-center relative"
      >
        {/* Corruption Meter */}
        <CorruptionMeter level={currentNode.corruption} />

        {/* Large Floating Eye */}
        <div
          className="relative w-full max-w-2xl mx-auto animate-float flex justify-center items-center h-[350px]"
          style={floatStyle}
        >
          <img
            src="/animated_eyecon_500_q50.webp"
            alt="The Entity"
            className={`max-h-full w-auto object-contain cursor-pointer ${activeAnimationClass}`}
            style={eyeFilterStyle}
            onMouseEnter={handleEyeEnter}
            onMouseLeave={handleEyeLeave}
          />
        </div>

        {/* Dialog Box */}
        {/* Dialog Box - Glitchcore Aesthetic */}
        <div className={`relative w-full max-w-xl mx-auto transition-opacity duration-500 ${isExiting ? 'opacity-0 scale-95' : 'opacity-100'}`}>

          {/* Main Container with Skew & Glassmorphism */}
          <div className="relative bg-black border border-white/20 skew-x-[-10deg] overflow-hidden group shadow-[0_0_30px_rgba(168,85,247,0.15)]">

            {/* Background Grid Pattern */}
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={GRID_PATTERN_STYLE}
            />

            {/* Scanning Line overlay - Reduced Intensity */}
            <div
              key={currentNode.id}
              className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer-once pointer-events-none"
            />

            {/* Glitch Overlay (Active at high corruption) */}
            {(currentNode.corruption === 'heavy' || currentNode.corruption === 'maximum') && (
              <div className="absolute inset-0 bg-purple-500/5 animate-pulse pointer-events-none" />
            )}

            {/* Inner Content (Un-skewed) */}
            <div className="skew-x-[10deg] p-3 md:p-4 relative z-10 flex flex-col gap-1">

              {/* Esoteric Header */}
              <div className="flex justify-between items-center text-[10px] text-purple-300/40 border-b border-white/5 pb-0.5 mb-0.5 select-none">
                <span>⟐ UNIT_01</span>
                <span className="tracking-[0.2em]">{currentNode.id.toUpperCase()}</span>
                <span>⚯</span>
              </div>

              {/* Dialogue Text - Compact */}
              <div
                className="relative min-h-[40px] flex flex-col items-center justify-center text-center py-1"
                onMouseEnter={handleTextHover}
                onMouseLeave={handleTextLeave}
              >
                <div className="text-lg md:text-xl font-heading tracking-wider text-purple-100 drop-shadow-[0_0_5px_rgba(168,85,247,0.5)] leading-tight">
                  <Typewriter
                    text={currentNode.text}
                    speed={50}
                    corruption={currentNode.corruption}
                    onComplete={handleTypingComplete}
                    onCharacter={handleCharacter}
                    isAnimating={isAnimating}
                  />
                </div>

                {/* Hidden message reveal */}
                {currentNode.hidden && (
                  <span
                    className={`mt-1 text-xs text-green-400/80 font-mono transition-all duration-500 ${showHidden ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
                  >
                    [{currentNode.hidden}]
                  </span>
                )}
              </div>

              {/* Interaction Area / Footer */}
              <div className="relative mt-0.5 min-h-[32px] flex items-center justify-center">

                {/* Response Options */}
                {currentNode.responses.length > 0 && !isExiting && (() => {
                  // Calculate progressive intensity based on depth (0.8 to 1.2 range)
                  const depthIntensity = Math.min(1.2, 0.8 + (state.history.length * 0.05));
                  // Get corruption-based glow multiplier
                  const glowMultiplier = CORRUPTION_GLOW_MULTIPLIERS[currentNode.corruption];
                  // Get path branch for subtle hue shift
                  const pathBranch = getCurrentPathBranch(state.currentNode);

                  return (
                    <div
                      className={`flex flex-wrap gap-2 justify-center transition-all duration-500 ${isTypingComplete ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'} ${PATH_CONTAINER_STYLES[pathBranch]}`}
                      style={{
                        '--intensity': depthIntensity,
                        '--glow-mult': glowMultiplier
                      } as React.CSSProperties}
                    >
                      {currentNode.responses.map((response, index) => {
                        const exitType = getExitDestinationType(response.nextId);

                        return (
                          <button
                            key={index}
                            onClick={() => handleResponse(response.type, response.nextId)}
                            disabled={isAnimating || !isTypingComplete}
                            className={`
                              relative overflow-hidden px-4 py-1 border
                              text-[10px] md:text-xs font-bold tracking-widest uppercase
                              transition-all duration-300
                              disabled:opacity-50 disabled:cursor-not-allowed
                              before:absolute before:inset-0 before:bg-gradient-to-r
                              before:from-transparent before:via-white/20 before:to-transparent
                              before:-translate-x-full before:hover:animate-shimmer
                              ${BUTTON_STYLES[response.type]}
                              ${EXIT_DESTINATION_STYLES[exitType]}
                            `}
                          >
                            {getButtonLabel(response.label, response.type)}
                          </button>
                        );
                      })}
                    </div>
                  );
                })()}

                {/* Exit Countdown */}
                {isExiting && exitCountdown !== null && (
                  <div className="flex justify-center gap-6 text-2xl font-bold tracking-[0.5em] font-mono">
                    {[1, 2, 3].map(num => (
                      <span key={num} className={`transition-all duration-300 ${exitCountdown >= num ? 'text-purple-400 drop-shadow-[0_0_8px_currentColor] scale-110' : 'text-white/10'}`}>
                        {num}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Decorative Corner Elements */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/30" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/30" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30" />

            </div>
          </div>

          {/* Outer Decorative Glitch Lines */}
          <div className="absolute -top-1 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
          <div className="absolute -bottom-1 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

        </div>
      </Section>
    </div>
  );
}
