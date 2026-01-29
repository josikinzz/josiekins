import type { Trait } from '../data/models';
import { cn } from '@/lib/utils';

interface TraitsPanelProps {
  traits: Trait[];
  accentColor: string;
  isOpen: boolean;
}

export function TraitsPanel({ traits, accentColor, isOpen }: TraitsPanelProps) {
  return (
    <div
      className={cn(
        "w-full rounded-b-2xl transition-all duration-300 overflow-hidden bg-black/40 backdrop-blur-sm",
        isOpen ? "opacity-100 mt-4 border border-white/10" : "opacity-0 max-h-0 pointer-events-none"
      )}
      style={{
        maxHeight: isOpen ? '2000px' : '0',
        padding: isOpen ? '1.5rem' : '0 1.5rem'
      }}
    >
      {/* Header bar */}
      <div
        className="h-1 w-full mb-4 rounded bg-accent/40"
      />

      {/* Traits grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {traits.map((trait, idx) => (
          <div
            key={idx}
            className="rounded-xl p-4 transition-all duration-300 hover:-translate-y-0.5 bg-white/5 border border-white/5 shadow-md hover:shadow-lg hover:border-accent/30"
          >
            <h3 className="text-base font-bold text-slate-50 mb-3 pl-4 relative">
              {/* Accent bar */}
              <span
                className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-[70%] rounded bg-accent"
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
