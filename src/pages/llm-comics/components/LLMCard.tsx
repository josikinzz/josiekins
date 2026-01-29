import { useState, useRef, useEffect } from 'react';
import type { ModelData } from '../data/models';
import { ImageCarousel } from './ImageCarousel';
import { RecognitionTable } from './RecognitionTable';
import { TraitsPanel } from './TraitsPanel';
import styles from '../LLMComics.module.css';

interface LLMCardProps {
  model: ModelData;
  onImageClick: (modelId: string, index: number) => void;
  onShowScripts: (modelId: string) => void;
}

// Map model IDs to title gradient classes
const titleClassMap: Record<string, string> = {
  chatgpt: styles.cardTitleChatgpt,
  deepseek: styles.cardTitleDeepseek,
  gemini: styles.cardTitleGemini,
  claude: styles.cardTitleClaude,
  grok: styles.cardTitleGrok
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
      className="rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
      style={{
        background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8), rgba(30, 41, 65, 0.6))',
        border: '1px solid rgba(71, 85, 105, 0.8)',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
      }}
    >
      {/* Header bar */}
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
            className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 mr-5 cursor-pointer transition-transform hover:scale-105"
            style={{
              boxShadow: `0 0 15px ${model.accentColor}60, inset 0 0 10px ${model.accentColor}30`,
              border: '2px solid rgba(100, 116, 139, 0.3)'
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
              <h2 className={`text-2xl font-bold ${titleClassMap[model.id] || ''}`}>
                {model.name}
              </h2>
              <span
                className="text-sm font-medium text-slate-400 px-2 py-0.5 rounded-full"
                style={{ background: 'rgba(51, 65, 85, 0.4)' }}
              >
                {model.pronouns}
              </span>
            </div>

            {/* Bio */}
            <div className="relative mt-2">
              <p
                ref={bioRef}
                className={`text-sm text-slate-300 leading-relaxed p-3 rounded-lg transition-all ${
                  bioExpanded ? '' : 'overflow-hidden'
                }`}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  maxHeight: bioExpanded ? '2000px' : 'calc(1.45em * 5)',
                  paddingBottom: needsExpand && !bioExpanded ? '2.5rem' : '0.75rem'
                }}
              >
                {model.bio}
              </p>

              {/* Fade gradient */}
              {needsExpand && !bioExpanded && (
                <div
                  className="absolute left-0 right-0 bottom-0 h-10 pointer-events-none"
                  style={{ background: 'linear-gradient(to bottom, transparent, #0f172a 85%)' }}
                />
              )}

              {/* Read more button */}
              {needsExpand && (
                <button
                  onClick={() => setBioExpanded(!bioExpanded)}
                  className="absolute bottom-1 right-2 text-xs font-medium text-slate-400 px-2 py-0.5 rounded-lg transition-all hover:text-white z-10"
                  style={{
                    background: 'rgba(40, 40, 60, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  {bioExpanded ? 'Read Less' : 'Read More'} {bioExpanded ? '▲' : '▼'}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Image carousel */}
        <ImageCarousel
          images={model.images}
          accentColor={model.accentColor}
          onImageClick={(idx) => onImageClick(model.id, idx)}
        />

        {/* Show scripts button */}
        <button
          onClick={() => onShowScripts(model.id)}
          className="w-full py-2.5 px-5 rounded-lg text-white font-medium text-sm transition-all hover:-translate-y-0.5 mb-4"
          style={{
            background: 'linear-gradient(135deg, rgba(71, 85, 105, 0.6), rgba(100, 116, 139, 0.4))',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
          }}
        >
          Show Comic Scripts
        </button>

        {/* Recognition table */}
        <RecognitionTable data={model.recognition} accentColor={model.accentColor} />

        {/* Toggle traits button */}
        <button
          onClick={() => setShowTraits(!showTraits)}
          className="w-full py-2.5 px-5 rounded-lg text-white font-medium text-sm transition-all hover:-translate-y-0.5"
          style={{
            background: 'linear-gradient(135deg, rgba(51, 65, 85, 0.7), rgba(71, 85, 105, 0.5))',
            border: `1px solid ${model.accentColor}50`,
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
          }}
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
