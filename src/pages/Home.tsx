import { Link } from 'react-router-dom'
import { Section } from '@/components/Section'
import { ExternalLink, Newspaper, Video, Link as LinkIcon, Globe, ScrollText, PenLine } from 'lucide-react'
import { Icon as IconifyIcon } from '@iconify/react'

const projects = [
  {
    name: 'Mindstate Design Labs',
    href: 'https://mindstate.design/',
    logo: '/images/shared/mindstatelogo.webp',
    dates: '2021 - Present',
    roles: ['Phenomenologist', 'AI Performance Specialist', 'Systems Engineer'],
    description: "In January of 2021 I began working with Mindstate Design Labs as their first full-time hire. Mindstate is a clinical-stage AI neuroengineering platform and drug development company. I am currently a phenomenologist, AI performance specialist, and systems engineer.\n\nThrough my systematic review of pre-existing classification systems for altered states of consciousness, we have created a uniquely comprehensive subjective effect classification system for scientific application.\n\nMy current research focuses on applying the novel Emergent Subjective Effect Index to extensive datasets of experience reports. We use advanced AI language models, trained on human-tagged experience reports, to statistically analyze the relationship between receptor affinities and experiential outcomes. Preliminary results are highly promising and suggest that this methodology can deepen our understanding of how psychedelic compounds interact with our neurophysiology for applications in drug development and mental health treatment.",
  },
  {
    name: 'MSD-001 Phase 1 Clinical Trial',
    href: 'https://microdose.buzz/news/mindstate-design-receives-fda-approval/',
    logo: '/images/shared/mindstatelogo.webp',
    dates: '2024 - 2025',
    description: 'Part of the team at Mindstate Design Labs that ran a Phase 1 clinical trial for MSD-001 (5-MeO-MiPT). The study at the Centre for Human Drug Research in the Netherlands demonstrated consistent psychoactive effects without hallucinations across all 47 participants.',
  },
  {
    name: 'PsyAI.chat',
    href: 'https://psyai.chat/',
    logo: '/images/shared/psy+ai+logo.webp',
    dates: '2023 - Dec 2025',
    roles: ['Co-Founder'],
    description: 'Co-founded in collaboration with Sernyl and funded by a grant through Bluelight and MAPS. PsyAI was an AI chatbot trained on my personal internet bibliography. It provided unbiased and uncensored information on any questions pertaining to psychonautics and the safe use of psychoactive substances.',
  },
  {
    name: 'The Josie Kins Youtube Channel',
    href: 'https://www.youtube.com/@josikinz',
    logo: '/images/shared/slice1.webp',
    dates: 'May 2020 - Present',
    roles: ['Creator'],
    description: 'Content from my various projects are often showcased on my personal YouTube channel with over 100,000 subscribers, an average of 600,000 views a month, and a dedicated following.',
  },
  {
    name: 'EffectIndex.com',
    href: 'https://effectindex.com/',
    logo: '/images/shared/ei+logo+svg.webp',
    dates: '2017 - Present',
    roles: ['Founder'],
    description: 'A community-driven resource dedicated to establishing the field of formalized Subjective Effect Documentation. It serves as a central and dedicated online platform for showcasing the Subjective Effect Index (SEI).',
  },
  {
    name: '/r/Replications Subreddit',
    href: 'https://www.reddit.com/r/replications/top/?t=year',
    logo: '/images/shared/replications+png.webp',
    dates: 'Oct 2015 - Present',
    roles: ['Founder'],
    description: 'A forum with over 143,000 subscribers that encourages people to post and create image, video, and audio replications of the hallucinogenic experience or other altered states of consciousness. It has kickstarted the successful careers of multiple visionary artists and replicators.',
  },
  {
    name: 'PsychonautWiki.org',
    href: 'https://psychonautwiki.org/',
    logo: '/images/shared/Psychonautwiki_hires.webp',
    dates: 'May 2013 - May 2017',
    roles: ['Founder'],
    description: 'An academic, open source, and comprehensive encyclopedia on the topic of altered states of consciousness, psychoactive substances, and harm reduction information. It includes over 2000 articles and is one of the most prominent informational resources of its kind, peaking in traffic at around 1 million unique visitors a month.',
    warning: 'Note: I am no longer associated with this website and cannot in good faith recommend using its present day iteration.',
  },
  {
    name: 'Subjective Effect Index',
    href: 'https://effectindex.com/effects',
    logo: '/images/shared/SEI_Logo2.webp',
    dates: 'May 2011 - Present',
    roles: ['Founder'],
    description: "Serving as a core feature of a variety of my different projects, the SEI is the first comprehensive catalog and reference for the full range of subjective effects that may occur under the influence of psychoactive substances and other psychonautic techniques. It consists of over 200 individual subjective effects with accompanying descriptions, subcomponents, categories, levelling systems, and image/video replications. Its aim is to enable the field of psychedelic research to achieve its full potential by creating a granular taxonomy of the subjective psychedelic experience.",
  },
  {
    name: 'Disregard Every Thing I Say',
    href: 'https://disregardeverythingisay.com/',
    logo: '/images/shared/Disregard_Everything_I_Say_Logo.webp',
    dates: 'May 2011 - 2016',
    roles: ['Creator'],
    description: 'The unlikely initial start of my career, this blog is where I first founded the Subjective Effect Index project and generally established my lifelong passion for studying the psychedelic experience.',
  },
]

const mediaReferences = [
  {
    name: 'The Illustrated Field Guide to DMT Entities by David Jay Brown & Sara Phinn Huntley',
    href: '/dmt-field-guide',
    external: false,
    type: 'book',
  },
  {
    name: 'Josie Kins (Wikipedia)',
    href: 'https://en.wikipedia.org/wiki/Josie_Kins',
    external: true,
    type: 'wikipedia',
  },
  {
    name: 'DMT Entities: Dysconnective Failure to Recognise Self by Einar Moback',
    href: 'https://substack.com/@moback/p-183718404',
    external: true,
    type: 'essay',
  },
  {
    name: 'AI Models Driving the Next Generation of Psychedelics (SXSW 2025)',
    href: 'https://schedule.sxsw.com/2025/contributors/2204921',
    external: true,
    type: 'talk',
  },
  {
    name: 'Deeper Learning with Psychedelics by David J. Blacker',
    href: '/deeper-learning',
    external: false,
    type: 'book',
  },
  {
    name: 'What Hallucinogens Will Make You See (Nautilus)',
    href: 'https://nautil.us/what-hallucinogens-will-make-you-see-308247/',
    external: true,
    type: 'magazine',
  },
  {
    name: 'Double Blind Magazine article/interview',
    href: 'https://doubleblindmag.com/ai-can-now-generate-dmt-visuals/',
    external: true,
    type: 'magazine',
  },
  {
    name: "Video shows 'most accurate' representation of what psychedelic visuals look like (UNILAD)",
    href: 'https://www.unilad.com/news/most-accurate-representation-psychedelic-visuals-20221123',
    external: true,
    type: 'video',
  },
  {
    name: 'AI Fed Psychedelic Images Generates DMT Visuals (Wholecelium)',
    href: 'https://www.wholecelium.com/blog/ai-fed-psychedelic-images-generates-dmt-visuals/',
    external: true,
    type: 'blog',
  },
  {
    name: 'How does one see the world under the influence of hallucinogens? A scientist created accurate video (Denik.cz)',
    href: 'https://www.denik.cz/veda/halucinogeny-drogy-uzivani-video.html?utm_source=www.seznam.cz&utm_medium=sekce-z-internetu#dop_ab_variant=0&dop_source_zone_name=hpfeed.sznhp.box',
    external: true,
    type: 'video',
  },
]

const collaborators = [
  { name: 'Emily Kins', href: 'https://www.youtube.com/@emilykins', avatar: '/images/shared/avatar.webp' },
  { name: 'Hypnagogist', href: 'https://hypnagogist.art/', avatar: '/images/shared/hypna.webp' },
  { name: 'Pluralist Visuals', href: 'https://www.youtube.com/@pluralist.visuals', avatar: '/images/shared/zenby.webp' },
  { name: 'LokaVision', href: 'https://www.youtube.com/@LokaVision', avatar: '/images/shared/loka.webp' },
  { name: 'Symmetric Vision', href: 'https://www.youtube.com/@SymmetricVision', avatar: '/images/shared/symmetric+vision.webp' },
]

export function Home() {
  return (
    <div className="">
      {/* Hero Section */}
      <Section
        verticalPadding="large"
        background="image"
        backgroundImage="/images/shared/background.webp"
        backgroundOverlay
        bottomFadeOpacity={1}
      >
        <div className="max-w-4xl mx-auto text-white text-center">
          {/* Josie image with animated eyecon overlay */}
          <div className="relative max-w-md w-full mx-auto mb-8 overflow-visible">
            {/* Base image */}
            <img
              src="/images/shared/Josie_+(2).webp"
              alt="Josie Kins"
              className="w-full object-contain drop-shadow-[0_0_25px_rgba(255,255,255,0.15)] hover:scale-[1.02] transition-transform duration-700 ease-in-out"
            />
            {/* ═══════════════════════════════════════════════════════════
                EYECON OVERLAY CONTROLS - Edit these values to adjust:
                ═══════════════════════════════════════════════════════════ */}
            <img
              src="/animated_eyecon.webp"
              alt=""
              className="absolute pointer-events-none animate-float"
              style={{
                // ▼▼▼ POSITION & SIZE CONTROLS ▼▼▼
                // Using calc() offsets instead of transform centering (fixes Safari bug)
                // The offset (13.5%) is half the width (27%) to center the element
                left: 'calc(80% - 13.5%)',   // X position (centered at 80%)
                top: 'calc(30% - 13.5%)',    // Y position (centered at 30%)
                width: '27%',                // Size (% of container width)
                // ▼▼▼ FLOAT ANIMATION CONTROLS ▼▼▼
                '--float-distance': '8px',  // How far it bobs (try 5px-15px)
                '--float-duration': '6s',   // Speed of one cycle (try 2s-5s)
                // ▼▼▼ DROP SHADOW CONTROL ▼▼▼
                filter: 'drop-shadow(0 0 20px rgba(168, 85, 247, 0.9))',
                // Format: drop-shadow(x-offset y-offset blur color)
                // ▲▲▲ CONTROLS ▲▲▲
              } as React.CSSProperties}
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 text-accent tracking-tight drop-shadow-sm pb-2">
            JOSIE KINS INFO
          </h1>
          <div className="max-w-2xl mx-auto space-y-4">
            <p className="text-lg text-white/90 leading-relaxed">
              Psychedelic researcher with leading expertise in the formal documentation and classification of altered states of consciousness.
            </p>
            <p className="text-lg text-white/90 leading-relaxed">
              A prominent researcher, writer, community leader, YouTuber, and content creator within the online psychedelic subculture.
            </p>
          </div>
        </div>
      </Section>

      {/* Resume Section */}
      <Section
        verticalPadding="large"
        background="image"
        backgroundImage="/images/shared/eye+wall+angled.webp"
        backgroundOverlay
      >
        <h2 className="text-3xl md:text-4xl font-light font-heading text-center text-accent mb-16 tracking-[0.2em] uppercase drop-shadow-md">
          Resume
        </h2>

        <div className="grid grid-cols-1 gap-6 max-w-3xl mx-auto">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex gap-6 p-8 bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-black/40 hover:border-accent/30 hover:shadow-[0_0_30px_-10px_rgba(var(--accent),0.3)] transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-accent">
                <ExternalLink size={20} />
              </div>
              <div className={`flex-shrink-0 flex items-center justify-center transition-all duration-300 w-20 h-20 ${project.name === 'The Josie Kins Youtube Channel' ? 'rounded-full overflow-hidden ring-1 ring-white/5 group-hover:ring-accent/50' : ''}`}>
                <img
                  src={project.logo}
                  alt={project.name}
                  className={`transition-transform duration-500 group-hover:scale-110 ${project.name === 'The Josie Kins Youtube Channel' ? 'w-full h-full object-cover' : 'max-w-full max-h-full object-contain'}`}
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1 pr-6">
                  <h3 className="text-xl font-bold font-heading text-accent group-hover:text-white group-hover:underline">
                    {project.name}
                  </h3>
                  {project.roles?.length === 1 && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-accent/20 text-accent font-medium">
                      {project.roles[0]}
                    </span>
                  )}
                </div>
                {project.roles && project.roles.length > 1 && (
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.roles.map((role: string) => (
                      <span key={role} className="text-xs px-2 py-0.5 rounded-full bg-accent/20 text-accent font-medium">
                        {role}
                      </span>
                    ))}
                  </div>
                )}
                <p className="text-xs uppercase tracking-wider text-white/50 mb-3 font-medium">{project.dates}</p>
                <p className="text-base text-white/80 leading-relaxed font-light whitespace-pre-line">{project.description}</p>
                {project.warning && (
                  <p className="text-sm text-white/40 italic mt-3">{project.warning}</p>
                )}
              </div>
            </a>
          ))}
        </div>
      </Section>

      {/* Media References Section */}
      <Section
        verticalPadding="large"
        background="image"
        backgroundImage="/images/shared/geometry+circle+wall.webp"
        backgroundOverlay
      >
        <div className="max-w-5xl mx-auto text-white">
          <h2 className="text-3xl md:text-4xl font-light font-heading text-center text-accent mb-16 tracking-[0.2em] uppercase drop-shadow-md">
            Literature & Media References
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mediaReferences.map((ref) => {
              const getIcon = () => {
                switch (ref.type) {
                  case 'video': return Video
                  case 'magazine': return Newspaper
                  case 'wikipedia': return Globe
                  case 'essay': return ScrollText
                  case 'blog': return PenLine
                  case 'book': return null
                  case 'talk': return null
                  default: return LinkIcon
                }
              }
              const IconComponent = getIcon()

              const Wrapper = ({ children }: { children: React.ReactNode }) =>
                ref.external ? (
                  <a
                    href={ref.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-black/20 backdrop-blur-sm border border-white/5 p-5 rounded-xl flex items-center gap-4 hover:bg-black/30 hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5"
                  >
                    {children}
                  </a>
                ) : (
                  <Link
                    to={ref.href}
                    className="group bg-black/20 backdrop-blur-sm border border-white/5 p-5 rounded-xl flex items-center gap-4 hover:bg-black/30 hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5"
                  >
                    {children}
                  </Link>
                )

              return (
                <Wrapper key={ref.name}>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-black transition-colors duration-300 flex-shrink-0">
                    {ref.type === 'book' ? (
                      <IconifyIcon icon="tabler:book" width={20} height={20} />
                    ) : ref.type === 'talk' ? (
                      <IconifyIcon icon="tabler:microphone" width={20} height={20} />
                    ) : (
                      IconComponent && <IconComponent size={20} />
                    )}
                  </div>
                  <span className="text-white/90 group-hover:text-accent transition-colors font-medium">
                    {ref.name}
                  </span>
                  {ref.external && (
                    <ExternalLink size={14} className="ml-auto flex-shrink-0 text-white/20 group-hover:text-accent/50 transition-colors" />
                  )}
                </Wrapper>
              )
            })}
          </div>
        </div>
      </Section>

      {/* Collaborators Section */}
      <Section
        verticalPadding="large"
        background="image"
        backgroundImage="/images/shared/eye+wall+angled.webp"
        backgroundOverlay
      >
        <h2 className="text-3xl md:text-4xl font-light font-heading text-center text-accent mb-16 tracking-[0.2em] uppercase drop-shadow-md">
          Collaborators
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto px-4">
          {collaborators.map((collab) => (
            <a
              key={collab.name}
              href={collab.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-center p-4 rounded-2xl hover:bg-white/5 transition-colors duration-300"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mb-5 ring-2 ring-transparent group-hover:ring-accent group-hover:shadow-[0_0_20px_rgba(var(--accent),0.4)] transition-all duration-300 relative">
                <img
                  src={collab.avatar}
                  alt={collab.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-base font-bold font-heading text-white/90 group-hover:text-accent transition-colors">
                {collab.name}
              </h3>
            </a>
          ))}
        </div>

        {/* Prototheism Banner */}
        <div className="max-w-sm mx-auto mt-24">
          <img
            src="/images/shared/Josie_Icons3.webp"
            alt="Prototheism"
            className="w-full object-contain filter brightness-75 hover:brightness-100 transition-all duration-700 drop-shadow-2xl hover:scale-105"
          />
        </div>
      </Section>
    </div>
  )
}
