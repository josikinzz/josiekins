import { Link } from 'react-router-dom'
import { Section } from '@/components/Section'

const projects = [
  {
    name: 'PsyAI.chat',
    href: 'https://psyai.chat/',
    logo: '/images/shared/psy+ai+logo.webp',
    dates: '2023 - Present',
    description: 'Co-founded in collaboration with Sernyl and funded by a grant through Bluelight and MAPS. PsyAI is an AI chatbot trained on my personal internet bibliography. It provides unbiased and uncensored information on any questions pertaining to psychonautics and the safe use of psychoactive substances.',
  },
  {
    name: 'EffectIndex.com',
    href: 'https://effectindex.com/',
    logo: '/images/shared/ei+logo+svg.webp',
    dates: '2017 - Present',
    description: 'A community-driven resource dedicated to establishing the field of formalized Subjective Effect Documentation. It serves as a central and dedicated online platform for showcasing the Subjective Effect Index (SEI).',
  },
  {
    name: '/r/Replications Subreddit',
    href: 'https://www.reddit.com/r/replications/top/?t=year',
    logo: '/images/shared/replications+png.webp',
    dates: 'Oct 2015 - Present',
    description: 'A forum with over 143,000 subscribers that encourages people to post and create image, video, and audio replications of the hallucinogenic experience or other altered states of consciousness. It has kickstarted the successful careers of multiple visionary artists and replicators.',
  },
  {
    name: 'PsychonautWiki.org',
    href: 'https://psychonautwiki.org/',
    logo: '/images/shared/Psychonautwiki_hires.webp',
    dates: 'May 2013 - May 2017',
    description: 'An academic, open source, and comprehensive encyclopedia on the topic of altered states of consciousness, psychoactive substances, and harm reduction information. It includes over 2000 articles and is one of the most prominent informational resources of its kind, peaking in traffic at around 1 million unique visitors a month.',
  },
  {
    name: 'Subjective Effect Index',
    href: 'https://effectindex.com/effects',
    logo: '/images/shared/SEI_Logo2.webp',
    dates: 'May 2011 - Present',
    description: "Serving as a core feature of a variety of my different projects, the SEI is the first comprehensive catalog and reference for the full range of subjective effects that may occur under the influence of psychoactive substances and other psychonautic techniques. It consists of over 200 individual subjective effects with accompanying descriptions, subcomponents, categories, levelling systems, and image/video replications. Its aim is to enable the field of psychedelic research to achieve its full potential by creating a granular taxonomy of the subjective psychedelic experience.",
  },
  {
    name: 'The Josie Kins Youtube Channel',
    href: 'https://www.youtube.com/@josikinz',
    logo: '/images/shared/slice1.webp',
    dates: 'May 2020 - Present',
    description: 'Content from my various projects are often showcased on my personal YouTube channel with over 100,000 subscribers, an average of 600,000 views a month, and a dedicated following.',
  },
  {
    name: 'Disregard Every Thing I Say',
    href: 'https://disregardeverythingisay.com/',
    logo: '/images/shared/Disregard_Everything_I_Say_Logo.webp',
    dates: 'May 2011 - 2016',
    description: 'The unlikely initial start of my career, this blog is where I first founded the Subjective Effect Index project and generally established my lifelong passion for studying the psychedelic experience.',
  },
]

const mediaReferences = [
  {
    name: 'AI Models Driving the Next Generation of Psychedelics (SXSW 2025)',
    href: 'https://schedule.sxsw.com/2025/contributors/2204921',
    external: true,
  },
  {
    name: 'Deeper Learning with Psychedelics by David J. Blacker',
    href: '/deeper-learning-with-psychedelics-by-david-j-blacker',
    external: false,
  },
  {
    name: 'What Hallucinogens Will Make You See (Nautilus)',
    href: 'https://nautil.us/what-hallucinogens-will-make-you-see-308247/',
    external: true,
  },
  {
    name: 'Double Blind Magazine article/interview',
    href: 'https://doubleblindmag.com/ai-can-now-generate-dmt-visuals/',
    external: true,
  },
  {
    name: "Video shows 'most accurate' representation of what psychedelic visuals look like (UNILAD)",
    href: 'https://www.unilad.com/news/most-accurate-representation-psychedelic-visuals-20221123',
    external: true,
  },
  {
    name: 'AI Fed Psychedelic Images Generates DMT Visuals (Wholecelium)',
    href: 'https://www.wholecelium.com/blog/ai-fed-psychedelic-images-generates-dmt-visuals/',
    external: true,
  },
  {
    name: 'How does one see the world under the influence of hallucinogens? A scientist created accurate video (Denik.cz)',
    href: 'https://www.denik.cz/veda/halucinogeny-drogy-uzivani-video.html?utm_source=www.seznam.cz&utm_medium=sekce-z-internetu#dop_ab_variant=0&dop_source_zone_name=hpfeed.sznhp.box',
    external: true,
  },
]

const collaborators = [
  { name: 'Emily Kins', href: 'https://www.youtube.com/@emilykins', avatar: '/images/shared/slice1.webp' },
  { name: 'Hypnagogist', href: 'https://hypnagogist.art/', avatar: '/images/shared/hypna.webp' },
  { name: 'LokaVision', href: 'https://www.youtube.com/@LokaVision', avatar: '/images/shared/loka.webp' },
  { name: 'Pluralist Visuals', href: 'https://www.youtube.com/@pluralist.visuals', avatar: '/images/shared/zenby.webp' },
  { name: 'Symmetric Vision', href: 'https://www.youtube.com/@SymmetricVision', avatar: '/images/shared/symmetric+vision.webp' },
]

export function Home() {
  return (
    <>
      {/* Hero Section */}
      <Section
        verticalPadding="large"
        background="image"
        backgroundImage="/images/shared/background.webp"
        backgroundOverlay
        bottomFadeOpacity={1}
      >
        <div className="max-w-4xl mx-auto text-white text-center">
          <img
            src="/images/shared/Josie_+(2).webp"
            alt="Josie Kins"
            className="max-w-md w-full mx-auto mb-8 object-contain"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-accent">Josie Kins INFO</h1>
          <p className="text-lg text-white/80 mb-4">
            Psychedelic researcher with leading expertise in the formal documentation and classification of altered states of consciousness.
          </p>
          <p className="text-lg text-white/80">
            A prominent researcher, writer, community leader, YouTuber, and content creator within the online psychedelic subculture.
          </p>
        </div>
      </Section>

      {/* My Work Section */}
      <Section
        verticalPadding="large"
        background="image"
        backgroundImage="/images/shared/eye+thingy+cool.webp"
        backgroundOverlay
      >
        <div className="max-w-3xl mx-auto text-white">
          <h2 className="text-3xl font-bold text-center text-accent mb-12">MY WORK</h2>

          <div className="space-y-6 text-white/80">
            <p>
              In January of 2021 I began working with{' '}
              <a href="https://mindstate.design/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                Mindstate Design Labs
              </a>
              , a psychedelic drug development company designing altered states of consciousness for mental health therapeutics. I am currently a project manager for their subjective effect research platform.
            </p>
            <p>
              Through my systematic review of pre-existing classification systems for altered states of consciousness, we have created a uniquely comprehensive subjective effect classification system for scientific application.
            </p>
            <p>
              My current research focuses on applying the novel Emergent Subjective Effect Index to extensive datasets of experience reports. We use advanced AI language models, trained on human-tagged experience reports, to statistically analyze the relationship between receptor affinities and experiential outcomes. Preliminary results are highly promising and suggest that this methodology can deepen our understanding of how psychedelic compounds interact with our neurophysiology for applications in drug development and mental health treatment.
            </p>
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section
        verticalPadding="large"
        background="image"
        backgroundImage="/images/shared/eye+wall+angled.webp"
        backgroundOverlay
      >
        <h2 className="text-3xl font-bold text-center text-accent mb-12">PROJECTS I'VE FOUNDED</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex gap-6 p-6 bg-black/30 rounded-lg hover:bg-black/40 transition-colors"
            >
              <div className="w-20 h-20 flex-shrink-0 rounded-full overflow-hidden">
                <img
                  src={project.logo}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-accent group-hover:underline mb-1">
                  {project.name}
                </h3>
                <p className="text-sm text-white/60 mb-2">{project.dates}</p>
                <p className="text-sm text-white/80">{project.description}</p>
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
        <div className="max-w-3xl mx-auto text-white">
          <h2 className="text-3xl font-bold text-center text-accent mb-12">MEDIA REFERENCES</h2>

          <ul className="list-disc list-inside space-y-3 text-white/80">
            {mediaReferences.map((ref) => (
              <li key={ref.name}>
                {ref.external ? (
                  <a
                    href={ref.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    {ref.name}
                  </a>
                ) : (
                  <Link to={ref.href} className="text-accent hover:underline">
                    {ref.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Collaborators Section */}
      <Section
        verticalPadding="large"
        background="image"
        backgroundImage="/images/shared/eye+wall+angled.webp"
        backgroundOverlay
      >
        <h2 className="text-3xl font-bold text-center text-accent mb-12">COLLABORATORS</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 max-w-5xl mx-auto">
          {collaborators.map((collab) => (
            <a
              key={collab.name}
              href={collab.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4 transition-transform duration-300 group-hover:scale-105">
                <img
                  src={collab.avatar}
                  alt={collab.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-sm font-medium text-accent group-hover:underline">
                {collab.name}
              </h3>
            </a>
          ))}
        </div>

        {/* Prototheism Banner */}
        <div className="max-w-sm mx-auto mt-16">
          <img
            src="/images/shared/Josie_Icons3.webp"
            alt="Prototheism"
            className="w-full object-contain"
          />
        </div>
      </Section>
    </>
  )
}
