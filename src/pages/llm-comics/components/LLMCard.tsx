import { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import type { ModelData } from '../data/models';
import { ImageCarousel } from './ImageCarousel';
import { RecognitionTable } from './RecognitionTable';
import { TraitsPanel } from './TraitsPanel';
import { cn } from '@/lib/utils';

interface LLMCardProps {
  model: ModelData;
  onImageClick: (modelId: string, index: number) => void;
  onShowScripts: (modelId: string) => void;
}

// Map model IDs to title gradient classes
const titleClassMap: Record<string, string> = {
  chatgpt: "bg-gradient-to-br from-emerald-300 via-green-300 to-violet-300 bg-clip-text text-transparent",
  deepseek: "bg-gradient-to-br from-blue-400 via-blue-300 to-violet-400 bg-clip-text text-transparent",
  gemini: "bg-gradient-to-br from-sky-400 via-sky-300 to-violet-400 bg-clip-text text-transparent",
  claude: "bg-gradient-to-br from-amber-400 via-orange-400 to-pink-400 bg-clip-text text-transparent",
  grok: "bg-gradient-to-br from-cyan-400 via-sky-400 to-violet-400 bg-clip-text text-transparent"
};

export function LLMCard({ model, onImageClick, onShowScripts }: LLMCardProps) {
  const [bioExpanded, setBioExpanded] = useState(false);
  const [showTraits, setShowTraits] = useState(false);
  const [needsExpand, setNeedsExpand] = useState(false);
  const bioRef = useRef<HTMLParagraphElement>(null);

  // Check if bio overflows
  useEffect(() => {
    if (bioRef.current) {
      const el = bioRef.current;
      setNeedsExpand(el.scrollHeight > el.clientHeight + 1);
    }
  }, [model.bio]);

  return (
    <div
      className="rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 bg-black/20 backdrop-blur-sm border border-white/10 shadow-lg group hover:border-accent/30 hover:shadow-[0_0_30px_-10px_rgba(var(--accent),0.3)]"
    >
      {/* Header bar - now using model accent color again per user request */}
      <div
        className="h-1.5 w-full"
        style={{ background: `linear-gradient(90deg, transparent, ${model.accentColor}, transparent)` }}
      />

      {/* Card content */}
      <div className="p-6">
        {/* Profile section */}
        <div className="flex items-start mb-6">
          {/* Avatar */}
          <div
            onClick={() => onImageClick(model.id, 0)}
            className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 mr-5 cursor-pointer transition-transform hover:scale-105 border-2 border-white/10"
            style={{
              borderColor: `${model.accentColor}40`,
              boxShadow: `0 0 15px ${model.accentColor}30`
            }}
          >
            <img
              src={model.avatarPath}
              alt={`${model.name} avatar`}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            {/* Name and pronouns */}
            <div className="flex items-center gap-3 flex-wrap mb-1">
              <h2 className={cn("text-2xl font-bold", titleClassMap[model.id] || "text-accent")}>
                {model.name}
              </h2>
              <span
                className="text-sm font-medium text-slate-400 px-2 py-0.5 rounded-full bg-white/5 border border-white/5"
              >
                {model.pronouns}
              </span>
            </div>

            {/* Bio */}
            <div className="relative mt-2">
              <p
                ref={bioRef}
                className={cn(
                  "text-sm text-slate-300 leading-relaxed p-3 rounded-lg transition-all bg-black/20 border border-white/5",
                  !bioExpanded && "overflow-hidden"
                )}
                style={{
                  maxHeight: bioExpanded ? '2000px' : 'calc(1.45em * 5)',
                  paddingBottom: needsExpand && !bioExpanded ? '2.5rem' : '0.75rem'
                }}
              >
                {model.bio}
              </p>

              {/* Fade gradient */}
              {needsExpand && !bioExpanded && (
                <div
                  className="absolute left-0 right-0 bottom-0 h-10 pointer-events-none bg-gradient-to-b from-transparent to-black/80"
                />
              )}

              {/* Read more button */}
              {needsExpand && (
                <button
                  onClick={() => setBioExpanded(!bioExpanded)}
                  className="absolute bottom-1 right-2 text-xs font-medium text-slate-400 px-2 py-1 rounded-md transition-all hover:text-white z-10 bg-black/60 border border-white/10 flex items-center gap-1 hover:bg-accent/20 hover:border-accent/30"
                >
                  {bioExpanded ? 'Read Less' : 'Read More'} 
                  {bioExpanded ? <ChevronUp size={10} /> : <ChevronDown size={10} />}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Image carousel */}
        <ImageCarousel
          images={model.images}
          accentColor={model.accentColor} // Keeping this for internal carousel highlights as it aids usability
          onImageClick={(idx) => onImageClick(model.id, idx)}
        />

        {/* Show scripts button */}
        <button
          onClick={() => onShowScripts(model.id)}
          className="w-full py-2.5 px-5 rounded-lg text-white font-medium text-sm transition-all hover:-translate-y-0.5 mb-4 bg-white/5 border border-white/10 shadow-sm hover:bg-accent/20 hover:border-accent/50 hover:shadow-[0_0_15px_-5px_rgba(var(--accent),0.3)]"
        >
          Show Comic Scripts
        </button>

        {/* Recognition table */}
        <RecognitionTable data={model.recognition} accentColor={model.accentColor} />

        {/* Toggle traits button */}
        <button
          onClick={() => setShowTraits(!showTraits)}
          className="w-full py-2.5 px-5 rounded-lg text-white font-medium text-sm transition-all hover:-translate-y-0.5 bg-black/40 border border-white/10 hover:border-accent/40 shadow-sm hover:shadow-md"
        >
          {showTraits ? 'Hide Personality Profile' : 'View Personality Profile'}
        </button>
      </div>

      {/* Traits panel */}
      <TraitsPanel
        traits={model.traits}
        accentColor={model.accentColor}
        isOpen={showTraits}
      />
    </div>
  );
}
