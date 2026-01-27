import { Link } from 'react-router-dom'
import { Section } from '@/components/Section'

interface MiscCardProps {
  title: string
  description: string
  imageSrc: string
  href: string
  isExternal?: boolean
}

function MiscCard({ title, description, imageSrc, href, isExternal = false }: MiscCardProps) {
  const LinkComponent = isExternal ? 'a' : Link
  const linkProps = isExternal
    ? { href, target: '_blank', rel: 'noopener noreferrer' }
    : { to: href }

  return (
    <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
      <LinkComponent
        {...(linkProps as any)}
        className="group relative w-48 h-48 flex-shrink-0 overflow-hidden rounded-full"
      >
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </LinkComponent>
      <div className="text-center md:text-left">
        <LinkComponent
          {...(linkProps as any)}
          className="text-xl font-semibold text-accent hover:underline"
        >
          {title}
        </LinkComponent>
        <p className="mt-2 text-white/80">{description}</p>
      </div>
    </div>
  )
}

export function Misc() {
  return (
    <Section
      verticalPadding="large"
      background="image"
      backgroundImage="/images/shared/background.webp"
      backgroundOverlay
    >
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-accent mb-4">The Misc Zone</h1>
        <p className="text-lg text-accent italic">Links to miscellaneous stuff go here!</p>
      </div>

      <div className="max-w-4xl mx-auto">
        <MiscCard
          title="AI Generated Psychedelia"
          description="For several years now, I have been attempting to use generative AI image models to replicate accurate looking psychedelic hallucinations. This is a project that has very much evolved as models have improved. I am using this website to host the images as well as included prompts and information on the models used."
          imageSrc="/images/shared/ai+dmt+entities.webp"
          href="/ai-psychedelia"
        />

        <MiscCard
          title="DisregardEveryThingISay YouTube Channel"
          description="My second YouTube channel. I use this as a place to put silly, low effort, or unscripted videos that do not fit on my main channel."
          imageSrc="/images/shared/Screenshot+2024-01-11+at+6.09.20+PM.webp"
          href="https://www.youtube.com/@DisregardEverythingISay"
          isExternal
        />

        <MiscCard
          title="The Psychoactive Substances of Faerun"
          description="A Dungeons and Dragons 5e homebrew system for integrating reality inspired psychoactive substances of all kinds into the mechanics and lore of the forgotten realms."
          imageSrc="/images/shared/dnd5e.webp"
          href="https://josiekins.xyz/s/The-Psychoactive-Substances-of-Faerun-An-Encyclopedic-Guide-The-Homebrewery-1-compressed.pdf"
          isExternal
        />
      </div>
    </Section>
  )
}
