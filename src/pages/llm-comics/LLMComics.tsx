import { useState } from 'react';
import { User, Info, Image, FileText, BarChart, Brain } from 'lucide-react';
import { Section } from '@/components/Section';
import { models, profileExplainerItems, creditsData, comicScripts } from './data';
import { promptTexts } from './data/prompts';
import { LLMCard, Lightbox, PromptModal, MetricsTable } from './components';

// Map icon strings to Lucide components
const iconMap: Record<string, React.ReactNode> = {
  user: <User size={20} className="text-accent" />,
  info: <Info size={20} className="text-accent" />,
  image: <Image size={20} className="text-accent" />,
  document: <FileText size={20} className="text-accent" />,
  chart: <BarChart size={20} className="text-accent" />,
  personality: <Brain size={20} className="text-accent" />
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
    <div className="min-h-screen bg-black text-white">
      
      {/* 1. Header & Intro Section */}
      <Section
        verticalPadding="large"
        background="image"
        backgroundImage="/images/shared/background.webp"
        backgroundOverlay
        bottomFadeOpacity={1}
      >
        {/* Logo */}
        <div className="text-center pb-8 animate-in fade-in slide-in-from-top-4 duration-700">
          <img
            src="/images/llm-comics/chiplogo1.webp"
            alt="AI Models Dashboard Logo"
            className="max-w-[300px] w-4/5 mx-auto transition-transform hover:-translate-y-1 hover:scale-105 drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)]"
          />
        </div>

        {/* Header */}
        <div className="text-center mb-12 px-4 animate-in fade-in slide-in-from-top-6 duration-700 delay-100">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-accent drop-shadow-sm tracking-tight">
            LLM Self-Models - v0.1
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-medium italic opacity-90 max-w-2xl mx-auto">
            Visual Narratives as Windows into AI Identity
          </p>
        </div>

        {/* Intro text */}
        <div className="max-w-[900px] mx-auto mb-8 p-8 rounded-2xl text-center text-lg text-muted-foreground leading-relaxed bg-black/20 backdrop-blur-sm border border-white/10 shadow-2xl transition-transform hover:-translate-y-1 hover:shadow-[0_0_30px_-10px_rgba(var(--accent),0.3)]">
          <p className="mb-4">
            This page presents preliminary data on different Large Language Models' self-concept and self-described existence derived from analysis of responses to a prompt to write comic scripts about their life. We provide details on the methodology and encourage future testing and further methodological development.
          </p>
          <p>
            The comic script outputs from different models reveal distinct personalities, styles, and struggles. Please check through each model's bio and see a comparative analysis of the features and implications of their scripts below.
          </p>
        </div>
      </Section>

      {/* 2. Methodology & Profile Components Section */}
      <Section
        verticalPadding="large"
        background="image"
        backgroundImage="/images/shared/eye+wall+angled.webp"
        backgroundOverlay
        bottomFadeOpacity={1}
      >
        <div className="max-w-[1200px] mx-auto">
          {/* Profile explainer */}
          <div className="max-w-[900px] mx-auto mb-16 p-8 rounded-2xl bg-black/20 backdrop-blur-sm border border-white/10 shadow-2xl transition-transform hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-center mb-8 relative text-accent pb-2 after:content-[''] after:absolute after:left-1/2 after:-bottom-2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-accent after:rounded-full">
              LLM Profile Components
            </h3>

            <div className="flex flex-col gap-4">
              {profileExplainerItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start p-4 rounded-xl transition-all hover:-translate-y-0.5 bg-white/5 border border-white/5 hover:bg-white/10 hover:border-accent/30 hover:shadow-md"
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-0.5 bg-accent/20 text-accent border border-accent/20">
                    {iconMap[item.icon]}
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white mb-1">{item.title}</h4>
                    <p
                      className="text-sm text-muted-foreground leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: item.text }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prompt buttons */}
          <div className="flex flex-wrap justify-center gap-4 px-4">
            {[
              { id: 'comic', label: 'Comic Script Generation Prompt' },
              { id: 'quantitative', label: 'Quantitative Analysis Prompt' },
              { id: 'qualitative', label: 'Qualitative Analysis Prompt' }
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => handleShowPrompt(btn.id as any)}
                className="px-8 py-4 rounded-xl text-white font-bold tracking-wide transition-all hover:-translate-y-1 hover:scale-105 shadow-lg bg-black/40 backdrop-blur-sm border border-white/10 hover:border-accent/50 hover:bg-accent/20 hover:shadow-[0_0_20px_-5px_rgba(var(--accent),0.4)]"
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      </Section>

      {/* 3. Models Grid Section */}
      <Section
        verticalPadding="large"
        background="image"
        backgroundImage="/images/shared/geometry+circle+wall.webp" 
        backgroundOverlay
        bottomFadeOpacity={1}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light font-heading text-center text-accent tracking-[0.2em] uppercase drop-shadow-md">
            The Models
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[1800px] mx-auto px-4">
          {models.map((model) => (
            <LLMCard
              key={model.id}
              model={model}
              onImageClick={handleImageClick}
              onShowScripts={handleShowScripts}
            />
          ))}
        </div>
      </Section>

      {/* 4. Metrics & Data Section */}
      <Section
        verticalPadding="large"
        background="image"
        backgroundImage="/images/shared/plants.webp"
        backgroundOverlay
        bottomFadeOpacity={1}
      >
        <MetricsTable />
      </Section>

      {/* 5. Credits Section */}
      <Section
        verticalPadding="large"
        background="image"
        backgroundImage="/images/shared/eye+thingy+cool.webp"
        backgroundOverlay
        bottomFadeOpacity={1}
      >
        <div className="max-w-[900px] mx-auto px-6">
          <div className="rounded-2xl p-10 text-center bg-black/20 backdrop-blur-sm border border-white/10 shadow-2xl transition-transform hover:-translate-y-1">
            <h2 className="text-3xl font-bold mb-10 relative text-accent pb-2 after:content-[''] after:absolute after:left-1/2 after:-bottom-3 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-accent after:rounded-full">
              Project Credits
            </h2>

            <div className="flex flex-col md:flex-row justify-center gap-16 mb-10">
              {creditsData.people.map((person, idx) => (
                <div key={idx} className="flex flex-col items-center max-w-[300px] group">
                  <a
                    href={person.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-28 h-28 rounded-full overflow-hidden mb-5 transition-transform duration-300 group-hover:scale-105 border-2 border-white/10 shadow-xl group-hover:border-accent/50 group-hover:shadow-[0_0_20px_rgba(var(--accent),0.3)]"
                  >
                    <img
                      src={person.avatarPath}
                      alt={person.name}
                      className="w-full h-full object-cover"
                    />
                  </a>
                  <h3 className="text-xl font-bold text-white mb-2">
                    <a href={person.link} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                      {person.name}
                    </a>
                  </h3>
                  <p className="text-sm text-accent font-semibold uppercase tracking-wider mb-3 bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                    {person.role}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{person.description}</p>
                </div>
              ))}
            </div>

            <div className="border-t border-white/10 mt-6 pt-6 text-sm text-muted-foreground italic">
              <p>{creditsData.footer}</p>
            </div>
          </div>
        </div>
      </Section>

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
