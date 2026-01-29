import type { Trait } from '../data/models';

interface TraitsPanelProps {
  traits: Trait[];
  accentColor: string;
  isOpen: boolean;
}

export function TraitsPanel({ traits, accentColor, isOpen }: TraitsPanelProps) {
  return (
    <div
      className={`w-full rounded-b-2xl transition-all duration-300 overflow-hidden ${
        isOpen ? 'opacity-100 mt-4' : 'opacity-0 max-h-0 pointer-events-none'
      }`}
      style={{
        background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8), rgba(30, 41, 65, 0.6))',
        border: isOpen ? '1px solid rgba(71, 85, 105, 0.8)' : 'none',
        boxShadow: isOpen ? `0 0 20px ${accentColor}30` : 'none',
        maxHeight: isOpen ? '2000px' : '0',
        padding: isOpen ? '1.5rem' : '0 1.5rem'
      }}
    >
      {/* Header bar */}
      <div
        className="h-1 w-full mb-4 rounded"
        style={{ background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)` }}
      />

      {/* Traits grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {traits.map((trait, idx) => (
          <div
            key={idx}
            className="rounded-xl p-4 transition-all hover:-translate-y-0.5"
            style={{
              background: 'rgba(51, 65, 85, 0.4)',
              border: '1px solid rgba(100, 116, 139, 0.2)',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
            }}
          >
            <h3
              className="text-base font-bold text-slate-50 mb-3 pl-4 relative"
            >
              {/* Accent bar */}
              <span
                className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-[70%] rounded"
                style={{ background: `linear-gradient(180deg, #38bdf8, #8b5cf6)` }}
              />
              {trait.title}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {trait.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
