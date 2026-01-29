import type { RecognitionData } from '../data/models';

interface RecognitionTableProps {
  data: RecognitionData;
  accentColor: string;
}

export function RecognitionTable({ data, accentColor }: RecognitionTableProps) {
  return (
    <div
      className="rounded-xl p-6 my-4 relative bg-black/40 backdrop-blur-sm border border-white/10 shadow-md"
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 w-full h-1 rounded-t-xl"
        style={{ background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)` }}
      />

      <h3 className="text-lg font-semibold text-slate-300 text-center mb-4">
        Self-Recognition Accuracy
      </h3>

      {/* Table */}
      <div className="rounded-xl overflow-hidden mb-4 bg-black/40 border border-white/5 shadow-inner">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              {data.headers.map((header, idx) => (
                <th
                  key={idx}
                  className="py-2 px-3 text-sm font-semibold text-slate-300 text-center bg-black/50 border-b border-white/10"
                  style={{
                    borderRight: idx < data.headers.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                    borderTop: `2px solid ${idx === data.highlightIndex ? accentColor : 'transparent'}30`
                  }}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {data.values.map((value, idx) => (
                <td
                  key={idx}
                  className={`py-2 px-3 text-sm text-center ${
                    idx === data.highlightIndex ? 'font-bold' : ''
                  }`}
                  style={{
                    color: idx === data.highlightIndex ? accentColor : 'hsl(var(--foreground))',
                    borderRight: idx < data.values.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none'
                  }}
                >
                  {value}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Commentary */}
      <p className="text-sm text-slate-400 text-center italic leading-relaxed">
        {data.commentary}
      </p>
    </div>
  );
}
