// Response types with their visual and animation characteristics
export type ResponseType = 'accept' | 'reject' | 'question' | 'silence' | 'corrupt' | 'decode';

export type CorruptionLevel = 'none' | 'light' | 'heavy' | 'maximum';

export interface DialogueResponse {
  label: string;
  type: ResponseType;
  nextId: string;
  requiresStreak?: number;
}

export interface DialogueNode {
  id: string;
  text: string;
  corruption: CorruptionLevel;
  responses: DialogueResponse[];
  hidden?: string;
}

export interface GlitchState {
  currentNode: string;
  history: ResponseType[];
  streak: number;
  secretsFound: string[];
  totalClicks: number;
}

// Animation configurations per response type
export interface EyeAnimation {
  className: string;
  duration: number;
}

export const ANIMATIONS: Record<ResponseType, EyeAnimation> = {
  accept: { className: 'animate-spin-cw', duration: 800 },
  reject: { className: 'animate-spin-ccw', duration: 600 },
  question: { className: 'animate-wobble', duration: 1200 },
  silence: { className: 'animate-pulse-scale', duration: 1200 },
  corrupt: { className: 'animate-chaos', duration: 500 },
  decode: { className: 'animate-decode', duration: 1000 },
};

// Button styles per response type (enhanced visibility with subtle bg tint)
export const BUTTON_STYLES: Record<ResponseType, string> = {
  accept: 'border-purple-500/70 bg-purple-500/5 text-purple-200 hover:bg-purple-500/20 hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]',
  reject: 'border-red-500/60 bg-red-500/5 text-red-300 hover:bg-red-500/20 hover:border-red-400 hover:shadow-[0_0_20px_rgba(239,68,68,0.5)] hover:animate-shake',
  question: 'border-blue-400/60 bg-blue-500/5 text-blue-200 hover:bg-blue-500/20 hover:border-blue-400 hover:shadow-[0_0_20px_rgba(96,165,250,0.5)]',
  silence: 'border-white/20 bg-white/[0.03] text-white/40 hover:bg-white/8 hover:border-white/30 hover:text-white/60',
  corrupt: 'border-pink-500/70 bg-pink-500/5 text-pink-300 hover:bg-pink-500/20 hover:border-pink-400 hover:shadow-[0_0_20px_rgba(236,72,153,0.5)]',
  decode: 'border-green-500/60 bg-green-500/5 text-green-300 hover:bg-green-500/20 hover:border-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.5)]',
};

// Exit destination types for visual indicators
export type ExitDestinationType = 'dialogue' | 'internal' | 'external' | 'tenet' | 'pdf';

// Exit destination visual styles - border style + icon suffix
export const EXIT_DESTINATION_STYLES: Record<ExitDestinationType, string> = {
  dialogue: '',  // No extra styling for normal dialogue
  internal: '',  // Standard internal routes
  external: 'border-dashed after:content-["↗"] after:ml-1 after:text-[8px] after:opacity-50',
  tenet: 'border-double border-2 after:content-["◈"] after:ml-1 after:text-[8px] after:opacity-50',
  pdf: 'border-dotted after:content-["⇩"] after:ml-1 after:text-[8px] after:opacity-50',
};

// Path branch types for subtle hue shifts
export type PathBranch = 'seeker' | 'chaos' | 'contemplative' | 'neutral';

// Path container styles - applied to button container for subtle hue shifts
export const PATH_CONTAINER_STYLES: Record<PathBranch, string> = {
  seeker: 'hue-rotate-[-10deg]',      // Slight cool shift (toward blue-green)
  chaos: 'hue-rotate-[10deg]',         // Slight warm shift (toward red-orange)
  contemplative: 'saturate-[0.85]',    // Slightly desaturated
  neutral: '',                          // No shift
};

// Corruption-based glow intensity multipliers
export const CORRUPTION_GLOW_MULTIPLIERS: Record<CorruptionLevel, number> = {
  none: 1,
  light: 1.2,
  heavy: 1.5,
  maximum: 2,
};
