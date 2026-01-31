import { Link } from 'react-router-dom'
import { Section } from '@/components/Section'

interface CreationProps {
  hideBackButton?: boolean;
}

export function Creation({ hideBackButton }: CreationProps) {
  return (
    <div className="">
      {/* Hero Section */}
      <Section
        verticalPadding="large"
        background="image"
        backgroundImage="/images/shared/background.webp"
        backgroundOverlay
        headerOffset
      >
        <div className="max-w-4xl mx-auto text-white text-center">
          {!hideBackButton && (
            <Link to="/prototheism" className="text-accent/60 hover:text-accent mb-12 inline-block transition-colors tracking-wide text-sm uppercase">
              &larr; Back to Prototheism
            </Link>
          )}

          <img
            src="/images/prototheism/creation.webp"
            alt="Creation"
            className="max-w-xs mx-auto mb-10 block drop-shadow-[0_0_25px_rgba(255,255,255,0.15)] animate-float"
            style={{
              '--float-distance': '12px',
              '--float-duration': '7s',
            } as React.CSSProperties}
          />

          <h1 className="text-5xl md:text-7xl font-light font-heading text-accent mb-16 tracking-[0.2em] drop-shadow-lg">
            Creation
          </h1>

          <div className="space-y-6 text-white/90 text-lg md:text-xl font-light leading-relaxed py-8 px-6 rounded-[3rem] bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.7)_0%,_rgba(0,0,0,0)_70%)]">
            <p className="drop-shadow-md">
              Using the precepts of <Link to="/prototheism/faith" className="text-accent hover:text-white transition-colors border-b border-accent/30 hover:border-white">Prototheistic Faith</Link>, scientific consensus is the basis of understanding of the world. In this case, we use the Big Bang Theory as the origin of the Universe, and a slow progression of amino acids becoming organized and evolving as the origin of life on this planet. However, this scientific explanation is not spiritually satisfying on its own, so Prototheism offers a further creation concept, which we treat as true but is not a subject of Faith.
            </p>
            <p className="drop-shadow-md">
              The origin of this creation myth may be attributed to psychedelic experiences, philosophical musing, and personal fancy.
            </p>
          </div>
        </div>
      </Section>

      {/* Interdependent Opposites Section */}
      <Section
        verticalPadding="large"
        background="image"
        backgroundImage="/images/prototheism/sacred+wall.webp"
        backgroundOverlay
      >
        <div className="max-w-4xl mx-auto text-white text-center">
          <h2 className="text-3xl md:text-4xl font-light font-heading text-accent mb-12 uppercase tracking-widest drop-shadow-lg">
            Interdependent Opposites
          </h2>

          <div className="space-y-8 text-white/90 text-lg md:text-xl font-light leading-relaxed py-8 px-6 rounded-[3rem] bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.8)_0%,_rgba(0,0,0,0)_70%)]">
            <p className="drop-shadow-md">
              The Universe is governed by a system of interdependent opposites, where the existence of a system or process depends on the presence of its presupposed counterpart. This framework likely catalyzed the Universe's emergence, as the concept of nothing logically presupposes the concept of something.
            </p>
            <p className="drop-shadow-md">
              As the Universe expanded and contracted, opposites manifested in various forms. In the early Universe, high density and low density regions, as well as both uniformity and fluctuations, set the stage for the formation of matter. Quarks and antiquarks, particles and antiparticles, and ultimately matter and antimatter emerged as the Universe cooled.
            </p>
            <p className="drop-shadow-md">
              The formation of celestial bodies was influenced by the interplay of gravity and expansion, fusion and fission, and accretion and dissipation. As life emerged, order and chaos, cooperation and competition, and adaptation and extinction shaped the development of biological systems.
            </p>
            <p className="drop-shadow-md">
              Sentient beings, through their subjective experiences and perceptions, have created countless additional interdependent opposites, such as good and evil, right and wrong, beauty and ugliness, love and hate, truth and lies, knowledge and ignorance, freedom and oppression, and hope and despair. These opposites, among many others, shape the way sentient beings understand and navigate their existence within the Universe.
            </p>
            <p className="drop-shadow-md">
              The concept of nothing causing something to come into existence suggests that something will eventually necessitate nothing, as the Universe undergoes heat death. This cyclical process implies balance and interconnectedness in the fabric of existence.
            </p>
          </div>
        </div>
      </Section>

      {/* Unanswerable Questions Section */}
      <Section
        verticalPadding="large"
        background="image"
        backgroundImage="/images/shared/geometry+circle+wall.webp"
        backgroundOverlay
        className="!pb-0"
      >
        <div className="max-w-4xl mx-auto text-white text-center">
          <h2 className="text-3xl md:text-4xl font-light font-heading text-accent mb-12 uppercase tracking-widest drop-shadow-lg">
            Unanswerable Questions
          </h2>

          <div className="space-y-12 text-white/90 text-lg md:text-xl font-light leading-relaxed py-8 px-6 rounded-[3rem] bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.7)_0%,_rgba(0,0,0,0)_70%)]">
            <p className="drop-shadow-md">
              Despite recognizing a system of interdependent opposites as governing existence, certain questions about its origins and purposes remain unanswerable:
            </p>

            <div className="space-y-8 py-4">
              <div className="text-2xl md:text-4xl font-heading text-center leading-tight drop-shadow-lg transition-colors duration-300 bg-gradient-to-r from-accent via-white to-accent text-transparent bg-clip-text animate-text-shimmer bg-[length:200%_auto]">
                How did this framework come to be?
              </div>
              <div className="text-2xl md:text-4xl font-heading text-center leading-tight drop-shadow-lg transition-colors duration-300 bg-gradient-to-r from-accent via-white to-accent text-transparent bg-clip-text animate-text-shimmer bg-[length:200%_auto]">
                Why does existence operate in this manner?
              </div>
            </div>

            <p className="drop-shadow-md">
              These inquiries, known as the "prime mover" dilemma, represent mysteries that are likely to persist as unknowable aspects of our understanding of the Universe. The limitations of sentient understanding and the vastness of the unknown are evident in the face of these questions, which defy definitive answers.
            </p>
          </div>

          {/* McKenna Syndrome Banner */}
          <div className="max-w-xl mx-auto mt-24 pb-12">
            <Link to="/mckenna-syndrome" className="block group relative">
              <img
                src="/images/prototheism/josie+and+emily+it+came+to+me+in+a+trip.webp"
                alt="McKenna Syndrome"
                className="relative w-full h-auto rounded-t-xl shadow-2xl transition-transform duration-700 group-hover:scale-[1.02] drop-shadow-[0_0_25px_rgba(255,255,255,0.1)]"
              />
            </Link>
          </div>
        </div>
      </Section>
    </div>
  )
}
