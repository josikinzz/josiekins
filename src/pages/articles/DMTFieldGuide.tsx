import { Section } from '@/components/Section'
import { ImageGallery } from '@/components/ImageGallery'

const bookImages = [
  { src: '/images/articles/dmt-field-guide/PT32.png' },
  { src: '/images/articles/dmt-field-guide/PT33.png' },
  { src: '/images/articles/dmt-field-guide/PT35.png' },
  { src: '/images/articles/dmt-field-guide/PT44.png' },
  { src: '/images/articles/dmt-field-guide/PT45.png' },
  { src: '/images/articles/dmt-field-guide/PT108.png' },
  { src: '/images/articles/dmt-field-guide/PT110.png' },
  { src: '/images/articles/dmt-field-guide/PT113.png' },
]

export function DMTFieldGuide() {
  return (
    <Section
      verticalPadding="large"
      background="image"
      backgroundImage="/images/articles/deeper-learning/eye+thingy+cool.webp"
      backgroundOverlay
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-accent mb-4">The Illustrated Field Guide to DMT Entities</h1>
          <p className="text-xl text-white/80">by David Jay Brown and Sara Phinn Huntley</p>
        </div>

        <blockquote className="border-l-4 border-accent pl-6 italic text-white/80 mb-8">
          <p>
            In this full-color illustrated handbook for understanding the intelligent alien species of hyperspace, psychedelic explorer David Jay Brown and visionary artist Sara Phinn Huntley explore 25 of the most commonly encountered DMT beings and ayahuasca spirits, from "self-transforming machine elves," ancestor spirits, tricksters, and metallic spheres to insectoid mantis beings, reptilians, gray aliens, nature spirits, and divine beings. Profiling the DMT entities in the style of a naturalistic field guide, complete with evocative illustrations, the authors discuss the entities in depth, including people's encounters with them, descriptions of how they appear, and summaries of the communications they impart.
          </p>
        </blockquote>

        <p className="text-lg text-white/80 mb-8">
          This book features an interview with me discussing the nature of autonomous entities, references to my video "The 6 Levels of DMT," and my AI-generated DMT entity artwork created by training AI on over 4,000 works of psychedelic and visionary art. It can be purchased on{' '}
          <a
            href="https://www.amazon.com/Illustrated-Field-Guide-Entities-Interdimensional/dp/1644119196"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            Amazon here
          </a>
          .
        </p>

        <h2 className="text-2xl font-bold text-accent mb-6">Book Pages</h2>
        <ImageGallery images={bookImages} columns={3} aspectRatio="3:2" />
      </div>
    </Section>
  )
}
