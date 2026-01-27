import { Link } from 'react-router-dom'
import { Section } from '@/components/Section'
import { ImageGallery } from '@/components/ImageGallery'

const images = [
  { src: '/images/galleries/mj-v5/0_0.webp' },
  { src: '/images/galleries/mj-v5/0_0+(1).webp' },
  { src: '/images/galleries/mj-v5/0_0+(2).webp' },
  { src: '/images/galleries/mj-v5/0_0+(3).webp' },
  { src: '/images/galleries/mj-v5/0_0+(4).webp' },
  { src: '/images/galleries/mj-v5/0_0+(5).webp' },
  { src: '/images/galleries/mj-v5/0_0+(6).webp' },
  { src: '/images/galleries/mj-v5/0_0+(7).webp' },
  { src: '/images/galleries/mj-v5/0_0+(8).webp' },
  { src: '/images/galleries/mj-v5/0_0+(9).webp' },
  { src: '/images/galleries/mj-v5/0_0+(10).webp' },
  { src: '/images/galleries/mj-v5/0_0+(11).webp' },
  { src: '/images/galleries/mj-v5/0_0+(12).webp' },
  { src: '/images/galleries/mj-v5/0_0+(13).webp' },
  { src: '/images/galleries/mj-v5/0_1.webp' },
  { src: '/images/galleries/mj-v5/0_1+(1).webp' },
  { src: '/images/galleries/mj-v5/0_1+(2).webp' },
  { src: '/images/galleries/mj-v5/0_1+(3).webp' },
  { src: '/images/galleries/mj-v5/0_1+(4).webp' },
  { src: '/images/galleries/mj-v5/0_1+(5).webp' },
  { src: '/images/galleries/mj-v5/0_1+(6).webp' },
  { src: '/images/galleries/mj-v5/0_1+(7).webp' },
  { src: '/images/galleries/mj-v5/0_1+(8).webp' },
  { src: '/images/galleries/mj-v5/0_1+(9).webp' },
  { src: '/images/galleries/mj-v5/0_1+(10).webp' },
  { src: '/images/galleries/mj-v5/0_1+(11).webp' },
  { src: '/images/galleries/mj-v5/0_1+(12).webp' },
  { src: '/images/galleries/mj-v5/0_1+(13).webp' },
  { src: '/images/galleries/mj-v5/0_1+(14).webp' },
  { src: '/images/galleries/mj-v5/0_1+(15).webp' },
  { src: '/images/galleries/mj-v5/0_1+(16).webp' },
  { src: '/images/galleries/mj-v5/0_1+(17).webp' },
  { src: '/images/galleries/mj-v5/0_1+(18).webp' },
  { src: '/images/galleries/mj-v5/0_2.webp' },
  { src: '/images/galleries/mj-v5/0_2+(1).webp' },
  { src: '/images/galleries/mj-v5/0_2+(2).webp' },
  { src: '/images/galleries/mj-v5/0_2+(3).webp' },
  { src: '/images/galleries/mj-v5/0_2+(4).webp' },
  { src: '/images/galleries/mj-v5/0_2+(5).webp' },
  { src: '/images/galleries/mj-v5/0_2+(6).webp' },
  { src: '/images/galleries/mj-v5/0_2+(7).webp' },
  { src: '/images/galleries/mj-v5/0_2+(8).webp' },
  { src: '/images/galleries/mj-v5/0_2+(9).webp' },
  { src: '/images/galleries/mj-v5/0_2+(10).webp' },
  { src: '/images/galleries/mj-v5/0_3.webp' },
  { src: '/images/galleries/mj-v5/0_3+(1).webp' },
  { src: '/images/galleries/mj-v5/0_3+(2).webp' },
  { src: '/images/galleries/mj-v5/0_3+(3).webp' },
  { src: '/images/galleries/mj-v5/0_3+(4).webp' },
  { src: '/images/galleries/mj-v5/0_3+(5).webp' },
  { src: '/images/galleries/mj-v5/0_3+(6).webp' },
  { src: '/images/galleries/mj-v5/0_3+(7).webp' },
  { src: '/images/galleries/mj-v5/0_3+(8).webp' },
  { src: '/images/galleries/mj-v5/0_3+(9).webp' },
  { src: '/images/galleries/mj-v5/0_3+(10).webp' },
  { src: '/images/galleries/mj-v5/0_3+(11).webp' },
  { src: '/images/galleries/mj-v5/0_3+(12).webp' },
  { src: '/images/galleries/mj-v5/0_3+(13).webp' },
  { src: '/images/galleries/mj-v5/josikinz_a_close_up_portrait_of_a_colorful_and_highly_detailed__a9df5141-b677-40c5-a55e-af8a2169dca0.webp' },
  { src: '/images/galleries/mj-v5/josikinz_a_close_up_portrait_of_a_colorful_and_highly_detailed__b1116d81-b6a2-457d-94ca-4b800b312644.webp' },
]

export function MJV5() {
  return (
    <div className="animate-in fade-in zoom-in-95 duration-1000 ease-out">
      <Section
        verticalPadding="large"
        background="image"
        backgroundImage="/images/shared/eye+wall+angled.webp"
        backgroundOverlay
      >
        <Link to="/ai-psychedelia" className="text-accent/60 hover:text-accent mb-8 inline-block transition-colors tracking-wide">
          &larr; Back to AI Psychedelia
        </Link>
        <h1 className="text-4xl md:text-5xl font-light font-heading text-center text-accent mb-8 tracking-[0.2em] uppercase drop-shadow-md">
          Midjourney V5
        </h1>
        <p className="text-right text-white/60 max-w-3xl mx-auto mb-4 text-sm uppercase tracking-widest"><em>March 2023</em></p>
        <p className="text-center text-white/90 max-w-3xl mx-auto mb-8 text-lg font-light leading-relaxed">
          This version of Midjourney marks the point at which the model started to become more coherent, but less realistic in the general appearance, structure, and vibes of its psychedelic imagery. I do like many of the images here, but they are significantly more cherry picked than previous versions while still not feeling quite as psychedelic.
        </p>
        <div className="bg-black/20 backdrop-blur-md border border-white/5 rounded-3xl p-8 max-w-3xl mx-auto mb-12 shadow-lg">
          <h3 className="font-bold text-accent mb-3 uppercase tracking-wider text-sm">Prompt:</h3>
          <p className="text-sm text-white/80 font-mono mb-6 bg-black/20 p-4 rounded-lg border border-white/5">
            a close up portrait of a colorful and highly detailed CUTE psychedelic SOMETHING, an abstract drawing, by Alex Grey, mayan aztec african shipibo tribal hindu egyptian ancient alien shamanic, hieroglyphic symbols and runes, cubic conic crystals, isometric style, symmetry, studio lighting, crisp 3D render, visionary art, psychedelic art
          </p>
          <h3 className="font-bold text-accent mb-3 uppercase tracking-wider text-sm">Usage Notes:</h3>
          <p className="text-sm text-white/80 leading-relaxed font-light">
            Simply swap out "SOMETHING" with the desired concept, this concept can be an entity ("jester", "elf", "deity", etc) or it can be a "pattern", "landscape", "environment", or whatever else. Also, add or remove "CUTE" as needed since MJ often likes to force psychedelic entity generations to look overly scary if this word isn't included. You may also need to swap out "CUTE" for "UGLY" when generating female characters, as MJ likes to generate women with weird instagram model aesthetics.
          </p>
        </div>
        <ImageGallery images={images} columns={3} />
      </Section>
    </div>
  )
}
