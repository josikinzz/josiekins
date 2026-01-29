import type { RecognitionData } from '../data/models';

interface RecognitionTableProps {
  data: RecognitionData;
  accentColor: string;
}

export function RecognitionTable({ data, accentColor }: RecognitionTableProps) {
  return (
    <div
      className="rounded-xl p-6 my-4 relative"
      style={{
        background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8), rgba(30, 41, 65, 0.6))',
        border: '1px solid rgba(71, 85, 105, 0.8)',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
      }}
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
      <div
        className="rounded-xl overflow-hidden mb-4"
        style={{
          background: 'rgba(30, 41, 59, 0.4)',
          border: '1px solid rgba(100, 116, 139, 0.2)',
          boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.2)'
        }}
      >
        <table className="w-full border-collapse">
          <thead>
            <tr>
              {data.headers.map((header, idx) => (
                <th
                  key={idx}
                  className="py-2 px-3 text-sm font-semibold text-slate-300 text-center"
                  style={{
                    background: 'rgba(51, 65, 85, 0.5)',
                    borderBottom: '1px solid rgba(71, 85, 105, 0.8)',
                    borderRight: idx < data.headers.length - 1 ? '1px solid rgba(100, 116, 139, 0.2)' : 'none',
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
                    color: idx === data.highlightIndex ? accentColor : '#e2e8f0',
                    borderRight: idx < data.values.length - 1 ? '1px solid rgba(100, 116, 139, 0.2)' : 'none'
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
