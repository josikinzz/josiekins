import React from 'react';
import { metricsData } from '../data/metrics';
import { metricsExplainer } from '../data/prompts';
import { cn } from '@/lib/utils';

// Helper to determine presence level class based on score
function getPresenceClass(score: number): string {
  if (score >= 25) return "bg-sky-500/20 text-sky-100 font-semibold shadow-[0_0_6px_rgba(56,189,248,0.3)]";
  if (score >= 15) return "bg-sky-500/10 text-sky-200";
  if (score >= 7.5) return "bg-sky-900/10 text-sky-300/90";
  return "bg-white/5 text-slate-400";
}

// Helper to determine comparative class based on score
function getComparativeClass(score: number): string {
  if (score >= 1.5) return "bg-green-500/20 text-green-400 font-bold";
  if (score >= 0.75) return "bg-green-500/10 text-green-400/90";
  if (score >= 0.25) return "bg-green-500/5 text-green-400/70";
  if (score <= -1.5) return "bg-red-500/20 text-red-400 font-bold";
  if (score <= -0.75) return "bg-red-500/10 text-red-400/90";
  if (score <= -0.25) return "bg-red-500/5 text-red-400/70";
  return "";
}

// Helper to determine rank class
function getRankClass(rank: string): string {
  const num = parseInt(rank.replace(/[^0-9]/g, ''));
  if (num === 1) return "text-green-400 font-extrabold";
  if (num === 2) return "text-lime-400 font-bold";
  if (num === 3) return "text-yellow-400 font-semibold";
  if (num === 4) return "text-orange-400";
  if (num === 5) return "text-red-400";
  return "";
}

export function MetricsTable() {
  const modelOrder = ['grok', 'deepseek', 'gemini', 'chatgpt', 'claude'] as const;
  // Using accent color for headers instead of distinct model colors to unify theme
  const accentColor = 'rgba(var(--accent), 1)';

  return (
    <div className="max-w-[1800px] mx-auto mt-16 mb-12 px-6">
      {/* Explainer panel */}
      <div
        className="max-w-[1000px] mx-auto mb-8 p-6 rounded-2xl transition-all hover:-translate-y-1 hover:shadow-2xl bg-black/20 backdrop-blur-sm border border-white/10 shadow-lg hover:border-accent/30 hover:shadow-[0_0_30px_-10px_rgba(var(--accent),0.3)]"
      >
        <h2 className="text-2xl font-extrabold text-center mb-5 relative text-accent pb-2 after:content-[''] after:absolute after:left-1/2 after:-bottom-3 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-accent after:rounded-full">
          {metricsExplainer.title}
        </h2>

        <div className="text-sm leading-relaxed text-slate-300 pt-4">
          <p className="mb-4">{metricsExplainer.intro}</p>

          <div className="grid md:grid-cols-2 gap-4 my-5">
            <div
              className="p-4 rounded-xl transition-all hover:-translate-y-0.5 bg-white/5 border border-white/5 shadow-sm hover:border-accent/30"
            >
              <h3 className="text-base font-semibold text-white mb-2 pl-3 relative">
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-[70%] rounded bg-accent" />
                Scoring Methodology
              </h3>
              <p className="text-slate-300">{metricsExplainer.scoringMethodology}</p>
            </div>

            <div
              className="p-4 rounded-xl transition-all hover:-translate-y-0.5 bg-white/5 border border-white/5 shadow-sm hover:border-accent/30"
            >
              <h3 className="text-base font-semibold text-white mb-2 pl-3 relative">
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-[70%] rounded bg-accent" />
                Data Presentation
              </h3>
              <p className="text-slate-300">{metricsExplainer.dataPresentation}</p>
            </div>
          </div>

          <div
            className="p-4 rounded-lg my-5 font-medium bg-accent/10 border-l-4 border-accent"
          >
            <p>{metricsExplainer.callout}</p>
          </div>

          <div
            className="p-4 rounded-xl mt-6 bg-black/30 border border-white/5"
          >
            <h3
              className="text-sm font-semibold text-white mb-2 inline-block px-2 py-0.5 rounded bg-accent/20"
            >
              Statistical Disclaimer
            </h3>
            <p className="text-sm text-slate-400 italic">{metricsExplainer.disclaimer}</p>
          </div>
        </div>
      </div>

      {/* Table container */}
      <div
        className="rounded-2xl overflow-auto max-h-[80vh] relative bg-black/40 border-2 border-white/5 shadow-xl p-2 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent"
      >
        <table className="w-full min-w-[1200px] border-collapse">
          <thead>
            {/* Model names row */}
            <tr>
              <th
                className="sticky top-0 left-0 z-20 p-4 text-left bg-black/90 shadow-md"
              />
              {modelOrder.map((model) => (
                <th
                  key={model}
                  colSpan={3}
                  className="sticky top-0 z-10 p-4 text-center text-base font-semibold text-white capitalize bg-black/80 border-t-4 border-accent shadow-md"
                >
                  {model === 'chatgpt' ? 'ChatGPT' : model.charAt(0).toUpperCase() + model.slice(1)}
                </th>
              ))}
            </tr>

            {/* Sub-headers row */}
            <tr>
              <th
                className="sticky top-[58px] left-0 z-20 p-3 text-left text-sm font-semibold text-slate-300 bg-black/90 border-r border-white/10 shadow-sm"
              >
                Metric Name
              </th>
              {modelOrder.map((model) => (
                <React.Fragment key={model}>
                  <th
                    className="sticky top-[58px] z-10 p-2 text-center text-xs font-semibold text-slate-300 bg-black/80 shadow-sm"
                  >
                    Presence
                  </th>
                  <th
                    className="sticky top-[58px] z-10 p-2 text-center text-xs font-semibold text-slate-300 bg-black/80 shadow-sm"
                  >
                    Rank
                  </th>
                  <th
                    className="sticky top-[58px] z-10 p-2 text-center text-xs font-semibold text-slate-300 bg-black/80 border-r-2 border-white/10 shadow-sm"
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
                    className="sticky left-0 z-10 p-4 text-center text-lg font-bold text-accent uppercase tracking-wide bg-black/80 border-y border-white/10 shadow-sm"
                  >
                    {category.name}
                  </td>
                </tr>

                {/* Metric rows */}
                {category.rows.map((row) => (
                  <tr
                    key={row.name}
                    className="transition-colors hover:bg-white/5 group"
                  >
                    {/* Metric name */}
                    <td
                      className="sticky left-0 z-5 p-3 text-sm font-semibold text-slate-100 pl-5 relative bg-black/80 border-r border-white/10 max-w-[200px]"
                    >
                      <span
                        className="absolute left-2 top-1/2 -translate-y-1/2 w-1 h-[60%] rounded opacity-70 bg-accent"
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
                            className={cn(
                              "p-2 text-center text-sm",
                              getPresenceClass(cell.presenceScore)
                            )}
                          >
                            {cell.presence} {cell.presenceScore.toFixed(2)}
                          </td>

                          {/* Rank */}
                          <td
                            className={cn(
                              "p-2 text-center text-sm font-bold bg-black/20",
                              getRankClass(cell.rank)
                            )}
                          >
                            {cell.rank}
                          </td>

                          {/* Comparative */}
                          <td
                            className={cn(
                              "p-2 text-center text-sm italic",
                              getComparativeClass(cell.comparativeScore),
                              modelIdx < 4 && "border-r-2 border-white/10"
                            )}
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
