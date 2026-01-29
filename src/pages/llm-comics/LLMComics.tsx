import { useState } from 'react';
import { models, profileExplainerItems, creditsData, comicScripts } from './data';
import { promptTexts } from './data/prompts';
import { LLMCard, Lightbox, PromptModal, MetricsTable } from './components';
import styles from './LLMComics.module.css';

// SVG icons for profile explainer
const icons: Record<string, JSX.Element> = {
  user: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="5" />
      <path d="M20 21a8 8 0 0 0-16 0" />
    </svg>
  ),
  info: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  ),
  image: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="M20.4 14.5 16 10 4 20" />
    </svg>
  ),
  document: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
      <path d="M10 9H8" />
    </svg>
  ),
  chart: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a10 10 0 1 0 10 10H12V2z" />
      <path d="M20 12a8 8 0 1 1-8-8" />
    </svg>
  ),
  personality: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
};

export function LLMComics() {
  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxModel, setLightboxModel] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalContent, setModalContent] = useState('');

  const handleImageClick = (modelId: string, index: number) => {
    setLightboxModel(modelId);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handleShowScripts = (modelId: string) => {
    const model = models.find(m => m.id === modelId);
    const scripts = comicScripts[modelId];
    if (model && scripts) {
      setModalTitle(`${model.name} - Comic Scripts`);
      setModalContent(scripts);
      setModalOpen(true);
    }
  };

  const handleShowPrompt = (type: 'comic' | 'quantitative' | 'qualitative') => {
    const titles: Record<string, string> = {
      comic: 'Comic Script Generation Prompt',
      quantitative: 'Quantitative Analysis Prompt',
      qualitative: 'Qualitative Analysis Prompt'
    };
    setModalTitle(titles[type]);
    setModalContent(promptTexts[type]);
    setModalOpen(true);
  };

  // Get current lightbox images
  const currentModel = models.find(m => m.id === lightboxModel);
  const lightboxImages = currentModel?.images || [];

  return (
    <div
      className="min-h-screen text-white"
      style={{
        background: 'linear-gradient(to bottom, #000000 0%, #0f172a 15%, #0f172a 100%)',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif'
      }}
    >
      {/* Logo */}
      <div className="text-center py-8 pb-4">
        <img
          src="/images/llm-comics/chiplogo1.webp"
          alt="AI Models Dashboard Logo"
          className="max-w-[300px] w-4/5 mx-auto transition-all hover:-translate-y-0.5"
          style={{ filter: 'drop-shadow(0 10px 8px rgba(0, 0, 0, 0.3))' }}
        />
      </div>

      {/* Header */}
      <div className="text-center mb-6 px-4">
        <h1 className={`text-4xl md:text-5xl font-extrabold mb-2 ${styles.gradientTitle}`}>
          LLM Self-Models - v0.1
        </h1>
        <p className="text-lg md:text-xl text-slate-300 font-medium italic opacity-90">
          Visual Narratives as Windows into AI Identity
        </p>
      </div>

      {/* Intro text */}
      <div
        className={`max-w-[900px] mx-auto mb-10 px-8 py-8 rounded-2xl text-center text-lg text-slate-300 leading-relaxed ${styles.panelHover}`}
        style={{
          background: 'rgba(30, 41, 59, 0.3)',
          border: '1px solid rgba(71, 85, 105, 0.3)',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)'
        }}
      >
        <p className="mb-4">
          This page presents preliminary data on different Large Language Models' self-concept and self-described existence derived from analysis of responses to a prompt to write comic scripts about their life. We provide details on the methodology and encourage future testing and further methodological development.
        </p>
        <p>
          The comic script outputs from different models reveal distinct personalities, styles, and struggles. Please check through each model's bio and see a comparative analysis of the features and implications of their scripts below.
        </p>
      </div>

      {/* Profile explainer */}
      <div
        className={`max-w-[900px] mx-auto my-12 px-8 py-8 rounded-2xl ${styles.panelHover}`}
        style={{
          background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.7), rgba(51, 65, 85, 0.5))',
          border: '1px solid rgba(71, 85, 105, 0.8)',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)'
        }}
      >
        <h3 className={`text-2xl font-bold text-center mb-8 relative ${styles.gradientTitle} ${styles.gradientTitleUnderline}`}>
          LLM Profile Components
        </h3>

        <div className="flex flex-col gap-3">
          {profileExplainerItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start p-3 rounded-xl transition-all hover:-translate-y-0.5"
              style={{
                background: 'rgba(30, 41, 59, 0.4)',
                border: '1px solid rgba(100, 116, 139, 0.2)',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)'
              }}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5"
                style={{
                  background: 'linear-gradient(135deg, rgba(71, 85, 105, 0.8), rgba(51, 65, 85, 0.7))',
                  color: '#a78bfa'
                }}
              >
                {icons[item.icon]}
              </div>
              <div>
                <h4 className="text-base font-semibold text-slate-50 mb-1">{item.title}</h4>
                <p
                  className="text-sm text-slate-300 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: item.text }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Prompt buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10 px-4">
        <button
          onClick={() => handleShowPrompt('comic')}
          className="px-7 py-3 rounded-lg text-white font-semibold transition-all hover:-translate-y-0.5"
          style={{
            background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
            boxShadow: '0 4px 12px rgba(99, 102, 241, 0.35)'
          }}
        >
          Comic Script Generation Prompt
        </button>
        <button
          onClick={() => handleShowPrompt('quantitative')}
          className="px-7 py-3 rounded-lg text-white font-semibold transition-all hover:-translate-y-0.5"
          style={{
            background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
            boxShadow: '0 4px 12px rgba(99, 102, 241, 0.35)'
          }}
        >
          Quantitative Analysis Prompt
        </button>
        <button
          onClick={() => handleShowPrompt('qualitative')}
          className="px-7 py-3 rounded-lg text-white font-semibold transition-all hover:-translate-y-0.5"
          style={{
            background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
            boxShadow: '0 4px 12px rgba(99, 102, 241, 0.35)'
          }}
        >
          Qualitative Analysis Prompt
        </button>
      </div>

      {/* Model cards grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-[1800px] mx-auto px-6 mb-8">
        {models.map((model) => (
          <LLMCard
            key={model.id}
            model={model}
            onImageClick={handleImageClick}
            onShowScripts={handleShowScripts}
          />
        ))}
      </div>

      {/* Divider */}
      <hr className={styles.gradientDivider} />

      {/* Metrics table */}
      <MetricsTable />

      {/* Divider */}
      <hr className={styles.gradientDivider} />

      {/* Credits */}
      <div className="max-w-[900px] mx-auto mt-16 mb-8 px-6">
        <div
          className={`rounded-2xl p-8 text-center ${styles.panelHover}`}
          style={{
            background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8), rgba(30, 41, 65, 0.6))',
            border: '1px solid rgba(71, 85, 105, 0.8)',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)'
          }}
        >
          <h2 className={`text-3xl font-bold mb-8 relative ${styles.gradientTitle} ${styles.gradientTitleUnderline}`}>
            Project Credits
          </h2>

          <div className="flex flex-col md:flex-row justify-center gap-12 mb-8">
            {creditsData.people.map((person, idx) => (
              <div key={idx} className="flex flex-col items-center max-w-[300px]">
                <a
                  href={person.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-24 h-24 rounded-full overflow-hidden mb-4 transition-transform hover:scale-105"
                  style={{
                    border: '2px solid rgba(100, 116, 139, 0.3)',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2), 0 0 0 3px rgba(56, 189, 248, 0.2)'
                  }}
                >
                  <img
                    src={person.avatarPath}
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                </a>
                <h3 className="text-xl font-semibold text-white mb-1">
                  <a href={person.link} target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">
                    {person.name}
                  </a>
                </h3>
                <p className="text-sm text-purple-400 font-medium mb-3">{person.role}</p>
                <p className="text-sm text-slate-300">{person.description}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-600/40 mt-4 pt-4 text-sm text-slate-500">
            <p>{creditsData.footer}</p>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        images={lightboxImages}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setLightboxIndex}
      />

      {/* Prompt modal */}
      <PromptModal
        isOpen={modalOpen}
        title={modalTitle}
        content={modalContent}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
