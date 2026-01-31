import { Link } from 'react-router-dom'
import { Section } from '@/components/Section'

interface MiscCardProps {
  title: string
  description: string
  imageSrc: string
  href: string
  isExternal?: boolean
  isCircular?: boolean
  objectFit?: 'cover' | 'contain'
}

function MiscCard({
  title,
  description,
  imageSrc,
  href,
  isExternal = false,
  isCircular = false,
  objectFit = 'cover',
}: MiscCardProps) {
  const LinkComponent = isExternal ? 'a' : Link
  const linkProps = isExternal
    ? { href, target: '_blank', rel: 'noopener noreferrer' }
    : { to: href }

  return (
    <div className="flex flex-col md:flex-row items-center gap-8 mb-12 bg-black/20 backdrop-blur-md border border-white/5 rounded-3xl p-8 transition-all duration-300 hover:bg-black/30 hover:shadow-lg hover:border-accent/20">
      <LinkComponent
        {...(linkProps as any)}
        className={`group relative w-40 h-40 flex-shrink-0 transition-all duration-300 ${isCircular ? 'overflow-hidden rounded-full' : ''
          }`}
      >
        <img
          src={imageSrc}
          alt={title}
          className={`w-full h-full ${objectFit === 'contain' ? 'object-contain' : 'object-cover'
            } transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}
        />
      </LinkComponent>
      <div className="text-center md:text-left">
        <LinkComponent
          {...(linkProps as any)}
          className="text-2xl font-bold font-heading text-accent hover:text-white transition-colors"
        >
          {title}
        </LinkComponent>
        <p className="mt-3 text-white/90 text-lg font-light leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export function Misc() {
  return (
    <div className="">
      <Section
        verticalPadding="large"
        background="image"
        backgroundImage="/images/shared/background.webp"
        backgroundOverlay
        headerOffset
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light font-heading text-accent mb-4 tracking-[0.2em] drop-shadow-md">
            The Misc Zone
          </h1>
          <p className="text-lg text-white/80 italic font-light tracking-wide">Links to miscellaneous stuff go here!</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <MiscCard
            title="AI Generated Psychedelia"
            description="For several years now, I have been attempting to use generative AI image models to replicate accurate looking psychedelic hallucinations. This is a project that has very much evolved as models have improved. I am using this website to host the images as well as included prompts and information on the models used."
            imageSrc="/images/shared/ai+dmt+entities.webp"
            href="/ai-psychedelia"
            objectFit="contain"
          />

          <MiscCard
            title="LLM Self-Models Dashboard"
            description="An exploration of how different Large Language Models conceptualize their own existence through comic scripts. Features comparative analysis of ChatGPT, DeepSeek, Gemini, Claude, and Grok's self-described personalities, struggles, and identities."
            imageSrc="/images/llm-comics/chiplogo1.webp"
            href="/llm-comics"
          />

          <MiscCard
            title="DisregardEveryThingISay YouTube Channel"
            description="My second YouTube channel. I use this as a place to put silly, low effort, or unscripted videos that do not fit on my main channel."
            imageSrc="/images/shared/Screenshot+2024-01-11+at+6.09.20+PM.webp"
            href="https://www.youtube.com/@DisregardEverythingISay"
            isExternal
            isCircular
          />

          <MiscCard
            title="The Psychoactive Substances of Faerun"
            description="A Dungeons and Dragons 5e homebrew system for integrating reality inspired psychoactive substances of all kinds into the mechanics and lore of the forgotten realms."
            imageSrc="/images/shared/dnd5e.webp"
            href="/psychoactive-substances-of-faerun.pdf"
            isExternal
          />
        </div>
      </Section>
    </div>
  )
}
