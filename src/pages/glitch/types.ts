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

// Button styles per response type
export const BUTTON_STYLES: Record<ResponseType, string> = {
  accept: 'border-purple-500/60 text-purple-200 hover:bg-purple-500/20 hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]',
  reject: 'border-red-500/40 text-red-300 hover:bg-red-500/20 hover:border-red-400 hover:shadow-[0_0_20px_rgba(239,68,68,0.4)] hover:animate-shake',
  question: 'border-blue-400/40 text-blue-200 hover:bg-blue-500/20 hover:border-blue-400 hover:shadow-[0_0_20px_rgba(96,165,250,0.4)]',
  silence: 'border-white/10 text-white/30 hover:bg-white/5 hover:border-white/20 hover:text-white/50',
  corrupt: 'border-pink-500/50 text-pink-300 hover:bg-pink-500/20 hover:border-pink-400 hover:shadow-[0_0_20px_rgba(236,72,153,0.4)]',
  decode: 'border-green-500/40 text-green-300 hover:bg-green-500/20 hover:border-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]',
};
