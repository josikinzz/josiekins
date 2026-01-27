import { Link } from 'react-router-dom'
import { Section } from '@/components/Section'

export function StyleGAN2() {
  return (
    <Section
      verticalPadding="large"
      background="image"
      backgroundImage="/images/shared/eye+wall+angled.webp"
      backgroundOverlay
    >
      <Link to="/ai-psychedelia" className="text-purple-400 hover:text-purple-300 mb-8 inline-block">
        &larr; Back to AI Psychedelia
      </Link>
      <h1 className="text-4xl font-bold text-center text-accent mb-8">StyleGAN2</h1>
      <div className="max-w-3xl mx-auto space-y-6 text-white/80">
        <p>
          This is where it all started. I accidentally stumbled upon AI DMT entity generation via training StyleGAN2 on a dataset of all of the visionary art on the internet that I could possibly find. The results were shocking - the model began generating imagery that looked remarkably similar to DMT hallucinations.
        </p>
        <p>
          While the resolution was limited compared to modern models, StyleGAN2 produced some of the most authentically psychedelic imagery I had seen from any AI system at the time. The entities that emerged from the latent space had an organic, flowing quality that later diffusion models sometimes struggle to replicate.
        </p>
        <p>
          This experiment laid the groundwork for everything that followed, from StyleGAN3 to the Midjourney prompts I eventually developed. The video below showcases the interpolation capabilities of the model, smoothly transitioning through its learned latent space:
        </p>
        <div className="aspect-video">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/AZ_M-5rP3NM"
            title="StyleGAN2 Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </Section>
  )
}
