import React from 'react';
import { metricsData } from '../data/metrics';
import { metricsExplainer } from '../data/prompts';
import styles from '../LLMComics.module.css';

// Helper to determine presence level class based on score
function getPresenceClass(score: number): string {
  if (score >= 25) return styles.presenceVeryHigh;
  if (score >= 15) return styles.presenceHigh;
  if (score >= 7.5) return styles.presenceMedium;
  return styles.presenceLow;
}

// Helper to determine comparative class based on score
function getComparativeClass(score: number): string {
  if (score >= 1.5) return styles.comparativeExtremeHigh;
  if (score >= 0.75) return styles.comparativeVeryHigh;
  if (score >= 0.25) return styles.comparativeHigh;
  if (score <= -1.5) return styles.comparativeExtremeLow;
  if (score <= -0.75) return styles.comparativeVeryLow;
  if (score <= -0.25) return styles.comparativeLow;
  return '';
}

// Helper to determine rank class
function getRankClass(rank: string): string {
  const num = parseInt(rank.replace(/[^0-9]/g, ''));
  if (num === 1) return styles.rank1;
  if (num === 2) return styles.rank2;
  if (num === 3) return styles.rank3;
  if (num === 4) return styles.rank4;
  if (num === 5) return styles.rank5;
  return '';
}

export function MetricsTable() {
  const modelOrder = ['grok', 'deepseek', 'gemini', 'chatgpt', 'claude'] as const;
  const modelColors = {
    grok: '#89cff0',
    deepseek: '#00008b',
    gemini: '#87ceeb',
    chatgpt: '#98fb98',
    claude: '#ffa500'
  };

  return (
    <div className="max-w-[1800px] mx-auto mt-16 mb-12 px-6">
      {/* Explainer panel */}
      <div
        className={`max-w-[1000px] mx-auto mb-8 p-6 rounded-2xl transition-all ${styles.panelHover}`}
        style={{
          background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8), rgba(51, 65, 85, 0.6))',
          border: '1px solid rgba(71, 85, 105, 0.8)',
          boxShadow: '0 12px 24px rgba(0, 0, 0, 0.3), 0 0 15px rgba(139, 92, 246, 0.2)'
        }}
      >
        <h2 className={`text-2xl font-extrabold text-center mb-5 relative ${styles.gradientTitle} ${styles.gradientTitleUnderline}`}>
          {metricsExplainer.title}
        </h2>

        <div className="text-sm leading-relaxed text-slate-300">
          <p className="mb-4">{metricsExplainer.intro}</p>

          <div className="grid md:grid-cols-2 gap-4 my-5">
            <div
              className="p-4 rounded-xl transition-all hover:-translate-y-0.5"
              style={{
                background: 'rgba(30, 41, 59, 0.6)',
                border: '1px solid rgba(100, 116, 139, 0.2)',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
              }}
            >
              <h3 className="text-base font-semibold text-white mb-2 pl-3 relative">
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-[70%] rounded bg-gradient-to-b from-sky-400 to-violet-500" />
                Scoring Methodology
              </h3>
              <p className="text-slate-300">{metricsExplainer.scoringMethodology}</p>
            </div>

            <div
              className="p-4 rounded-xl transition-all hover:-translate-y-0.5"
              style={{
                background: 'rgba(30, 41, 59, 0.6)',
                border: '1px solid rgba(100, 116, 139, 0.2)',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
              }}
            >
              <h3 className="text-base font-semibold text-white mb-2 pl-3 relative">
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-[70%] rounded bg-gradient-to-b from-sky-400 to-violet-500" />
                Data Presentation
              </h3>
              <p className="text-slate-300">{metricsExplainer.dataPresentation}</p>
            </div>
          </div>

          <div
            className="p-4 rounded-lg my-5 font-medium"
            style={{
              background: 'rgba(99, 102, 241, 0.15)',
              borderLeft: '3px solid #818cf8'
            }}
          >
            <p>{metricsExplainer.callout}</p>
          </div>

          <div
            className="p-4 rounded-xl mt-6"
            style={{
              background: 'rgba(71, 85, 105, 0.2)',
              border: '1px solid rgba(100, 116, 139, 0.2)'
            }}
          >
            <h3
              className="text-sm font-semibold text-white mb-2 inline-block px-2 py-0.5 rounded"
              style={{ background: 'linear-gradient(90deg, rgba(99, 102, 241, 0.3), rgba(139, 92, 246, 0.3))' }}
            >
              Statistical Disclaimer
            </h3>
            <p className="text-sm text-slate-400 italic">{metricsExplainer.disclaimer}</p>
          </div>
        </div>
      </div>

      {/* Table container */}
      <div
        className={`rounded-2xl overflow-auto max-h-[80vh] relative ${styles.customScrollbar}`}
        style={{
          background: 'rgb(23, 32, 50)',
          border: '2px solid rgba(100, 116, 139, 0.4)',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
          padding: '0.5rem'
        }}
      >
        <table className="w-full min-w-[1200px] border-collapse">
          <thead>
            {/* Model names row */}
            <tr>
              <th
                className="sticky top-0 left-0 z-20 p-4 text-left"
                style={{ background: 'rgb(30, 41, 59)' }}
              />
              {modelOrder.map((model) => (
                <th
                  key={model}
                  colSpan={3}
                  className="sticky top-0 z-10 p-4 text-center text-base font-semibold text-white capitalize"
                  style={{
                    background: 'rgb(51, 65, 85)',
                    borderTop: `4px solid ${modelColors[model]}`
                  }}
                >
                  {model === 'chatgpt' ? 'ChatGPT' : model.charAt(0).toUpperCase() + model.slice(1)}
                </th>
              ))}
            </tr>

            {/* Sub-headers row */}
            <tr>
              <th
                className="sticky top-[53px] left-0 z-20 p-3 text-left text-sm font-semibold text-slate-300"
                style={{
                  background: 'rgb(30, 41, 59)',
                  borderRight: '1px solid rgba(100, 116, 139, 0.3)'
                }}
              >
                Metric Name
              </th>
              {modelOrder.map((model) => (
                <React.Fragment key={model}>
                  <th
                    className="sticky top-[53px] z-10 p-2 text-center text-xs font-semibold text-slate-300"
                    style={{ background: 'rgb(51, 65, 85)' }}
                  >
                    Presence
                  </th>
                  <th
                    className="sticky top-[53px] z-10 p-2 text-center text-xs font-semibold text-slate-300"
                    style={{ background: 'rgb(51, 65, 85)' }}
                  >
                    Rank
                  </th>
                  <th
                    className="sticky top-[53px] z-10 p-2 text-center text-xs font-semibold text-slate-300"
                    style={{
                      background: 'rgb(51, 65, 85)',
                      borderRight: '2px solid rgba(148, 163, 184, 0.4)'
                    }}
                  >
                    Comparative
                  </th>
                </React.Fragment>
              ))}
            </tr>
          </thead>

          <tbody>
            {metricsData.map((category) => (
              <React.Fragment key={category.name}>
                {/* Category row */}
                <tr>
                  <td
                    colSpan={16}
                    className="sticky left-0 z-10 p-4 text-center text-lg font-bold text-white uppercase tracking-wide"
                    style={{
                      background: 'rgb(30, 41, 59)',
                      borderTop: '1px solid rgba(100, 116, 139, 0.4)',
                      borderBottom: '1px solid rgba(100, 116, 139, 0.4)'
                    }}
                  >
                    {category.name}
                  </td>
                </tr>

                {/* Metric rows */}
                {category.rows.map((row) => (
                  <tr
                    key={row.name}
                    className="transition-colors hover:bg-slate-700/30"
                  >
                    {/* Metric name */}
                    <td
                      className="sticky left-0 z-5 p-3 text-sm font-semibold text-slate-100 pl-5 relative"
                      style={{
                        background: 'rgb(30, 41, 59)',
                        borderRight: '1px solid rgba(100, 116, 139, 0.3)',
                        maxWidth: '200px'
                      }}
                    >
                      <span
                        className="absolute left-2 top-1/2 -translate-y-1/2 w-1 h-[60%] rounded opacity-70"
                        style={{ background: 'linear-gradient(180deg, #38bdf8, #8b5cf6)' }}
                      />
                      {row.name}
                    </td>

                    {/* Data cells for each model */}
                    {modelOrder.map((model, modelIdx) => {
                      const cell = row[model];
                      return (
                        <React.Fragment key={model}>
                          {/* Presence */}
                          <td
                            className={`p-2 text-center text-sm ${getPresenceClass(cell.presenceScore)}`}
                            style={{ background: 'rgba(30, 41, 59, 0.15)' }}
                          >
                            {cell.presence} {cell.presenceScore.toFixed(2)}
                          </td>

                          {/* Rank */}
                          <td
                            className={`p-2 text-center text-sm font-bold ${getRankClass(cell.rank)}`}
                            style={{ background: 'rgba(30, 41, 59, 0.05)' }}
                          >
                            {cell.rank}
                          </td>

                          {/* Comparative */}
                          <td
                            className={`p-2 text-center text-sm italic ${getComparativeClass(cell.comparativeScore)}`}
                            style={{
                              background: 'rgba(30, 41, 59, 0.15)',
                              borderRight: modelIdx < 4 ? '2px solid rgba(148, 163, 184, 0.4)' : 'none'
                            }}
                          >
                            {cell.comparative} {cell.comparativeScore.toFixed(2)}
                          </td>
                        </React.Fragment>
                      );
                    })}
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
