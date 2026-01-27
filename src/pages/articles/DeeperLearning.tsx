import { Section } from '@/components/Section'
import { ImageGallery } from '@/components/ImageGallery'

const bookImages = [
  { src: '/images/articles/deeper-learning/IMG_6832.webp' },
  { src: '/images/articles/deeper-learning/IMG_6833.webp' },
  { src: '/images/articles/deeper-learning/IMG_6834.webp' },
  { src: '/images/articles/deeper-learning/IMG_6835.webp' },
  { src: '/images/articles/deeper-learning/IMG_6837.webp' },
  { src: '/images/articles/deeper-learning/IMG_6838.webp' },
  { src: '/images/articles/deeper-learning/IMG_6839.webp' },
]

export function DeeperLearning() {
  return (
    <Section
      verticalPadding="large"
      background="image"
      backgroundImage="/images/articles/deeper-learning/eye+thingy+cool.webp"
      backgroundOverlay
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-accent mb-4">Deeper Learning with Psychedelics</h1>
          <p className="text-xl text-white/80">by David J. Blacker</p>
        </div>

        <blockquote className="border-l-4 border-accent pl-6 italic text-white/80 mb-8">
          <p>
            In both clinical and informal settings, psychedelics users often report they have undergone something profound and even life-altering. Yet there persists a confounding inability to articulate just what has been imparted. Informed by multidisciplinary emerging research, this book provides an account of the specifically educational aspects of psychedelics and how they can render us ready to learn. Drawing from indigenous peoples worldwide who typically revere these substances as "plant teachers" and from canonical thinkers in the western tradition such as Plato, Spinoza, Kant, and Heidegger, the author proposes an original set of categories through which to understand the educational capabilities of "entheogens" (psychedelics with visionary qualities). It emerges that entheogens' real power lies not in destabilizing and decentering—"turning on and dropping out"—but as powerful aids in restoring and reenchanting our shared worlds.
          </p>
        </blockquote>

        <p className="text-lg text-white/80 mb-8">
          This excellent book, written by a professor at the University of Delaware, features my work in the field of Subjective Effect Documentation. It can be purchased on{' '}
          <a
            href="https://www.amazon.com/Deeper-Learning-Psychedelics-Philosophical-Philosophy-ebook/dp/B0CQL5HS6M"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            Amazon here
          </a>
          . I would highly recommend it!
        </p>

        <h2 className="text-2xl font-bold text-accent mb-6">Book Pages Featuring My Work</h2>
        <ImageGallery images={bookImages} columns={3} aspectRatio="3:2" />
      </div>
    </Section>
  )
}
