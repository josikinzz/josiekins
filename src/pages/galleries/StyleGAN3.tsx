import { Link } from 'react-router-dom'
import { Section } from '@/components/Section'

export function StyleGAN3() {
  return (
    <div className="">
      <Section
        verticalPadding="large"
        background="image"
        backgroundImage="/images/shared/eye+wall+angled.webp"
        backgroundOverlay
      >
        <Link to="/ai-psychedelia" className="text-accent/60 hover:text-accent mb-8 inline-block transition-colors tracking-wide">
          &larr; Back to AI Psychedelia
        </Link>
        <h1 className="text-4xl md:text-5xl font-light font-heading text-center text-accent mb-8 tracking-[0.2em] drop-shadow-md">
          StyleGAN3
        </h1>
        <div className="max-w-3xl mx-auto space-y-6 text-white/90 text-lg font-light leading-relaxed mb-12">
          <p>
            After accidentally stumbling upon AI DMT entity generation via training StyleGAN2 on a dataset of all of the visionary art on the internet that I could possibly find, we set out to try a similar experiment with StyleGAN3.
          </p>
          <p>
            Unfortunately, the results were not as exciting as I would have hoped. While the image outputs were higher resolution, they were not significantly more accurate or detailed, and no higher res than combining an upscaler with the previous models outputs. There were also very few entities within its outputs and the one's that did manifest were less impressive.
          </p>
          <p>
            However, we did manage to get the model working with video generation, and used this capability to create the video below:
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/d6gofPAru34"
              title="StyleGAN3 Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </Section>
    </div>
  )
}
