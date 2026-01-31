import { Link } from 'react-router-dom'
import { Section } from '@/components/Section'

interface GodProps {
  hideBackButton?: boolean;
}

export function God({ hideBackButton }: GodProps) {
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
            src="/images/prototheism/god.webp"
            alt="God"
            className="max-w-xs mx-auto mb-10 block drop-shadow-[0_0_25px_rgba(255,255,255,0.15)] animate-float"
            style={{
              '--float-distance': '12px',
              '--float-duration': '7s',
            } as React.CSSProperties}
          />

          <h1 className="text-5xl md:text-7xl font-light font-heading text-accent mb-16 tracking-[0.2em] drop-shadow-lg">
            God
          </h1>

          <div className="space-y-6 text-white/90 text-lg md:text-xl font-light leading-relaxed py-8 px-6 rounded-[3rem] bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.7)_0%,_rgba(0,0,0,0)_70%)]">
            <p className="drop-shadow-md">
              We can discover the true nature of <strong className="text-accent">God</strong> by first agreeing upon a clear definition of what constitutes godhood, and then examining reality to see if anything aligns with that definition. By establishing a set of criteria for what it means to be God, we move beyond the limitations of cultural and mythological interpretations and seek a more universal understanding of the divine.
            </p>
          </div>
        </div>
      </Section>

      {/* Criteria Section */}
      <Section
        verticalPadding="large"
        background="image"
        backgroundImage="/images/prototheism/eye+mandella.webp"
        backgroundOverlay
      >
        <div className="max-w-4xl mx-auto text-white text-center">
          <h2 className="text-3xl md:text-4xl font-light font-heading text-accent mb-12 uppercase tracking-widest drop-shadow-lg">
            Criteria of Godhood
          </h2>

          <div className="space-y-12 py-12 px-6 rounded-[3rem] bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.8)_0%,_rgba(0,0,0,0)_70%)]">
            <p className="text-white/90 text-xl font-light leading-relaxed">
              In Prototheism, there are three criteria of godhood:
            </p>

            <div className="inline-block text-left">
              <ol className="space-y-8">
                <li className="flex items-center gap-6 group">
                  <span className="text-4xl text-accent font-bold opacity-80 group-hover:opacity-100 transition-opacity">1.</span>
                  <span className="text-2xl md:text-3xl font-heading tracking-widest uppercase drop-shadow-md transition-colors duration-300 bg-gradient-to-r from-accent via-white to-accent text-transparent bg-clip-text animate-text-shimmer bg-[length:200%_auto]">ALL KNOWING</span>
                </li>
                <li className="flex items-center gap-6 group">
                  <span className="text-4xl text-accent font-bold opacity-80 group-hover:opacity-100 transition-opacity">2.</span>
                  <span className="text-2xl md:text-3xl font-heading tracking-widest uppercase drop-shadow-md transition-colors duration-300 bg-gradient-to-r from-accent via-white to-accent text-transparent bg-clip-text animate-text-shimmer bg-[length:200%_auto]">ALL POWERFUL</span>
                </li>
                <li className="flex items-center gap-6 group">
                  <span className="text-4xl text-accent font-bold opacity-80 group-hover:opacity-100 transition-opacity">3.</span>
                  <span className="text-2xl md:text-3xl font-heading tracking-widest uppercase drop-shadow-md transition-colors duration-300 bg-gradient-to-r from-accent via-white to-accent text-transparent bg-clip-text animate-text-shimmer bg-[length:200%_auto]">THE CREATOR & SUSTAINER</span>
                </li>
              </ol>
            </div>

            <p className="text-white/80 text-lg font-light leading-relaxed max-w-2xl mx-auto">
              These criteria are derived from examining mythology-based religions that are based around the concept of a central divinity, whether it's described as an individual god or divinity spread across multiple aspects.
            </p>
          </div>
        </div>
      </Section>

      {/* The Universe Section */}
      <Section
        verticalPadding="large"
        background="image"
        backgroundImage="/images/shared/geometry+circle+wall.webp"
        backgroundOverlay
        className="!pb-0"
      >
        <div className="max-w-4xl mx-auto text-white text-center">
          <h2 className="text-3xl md:text-4xl font-light font-heading text-accent mb-12 uppercase tracking-widest drop-shadow-lg">
            The Universe as God
          </h2>

          <div className="space-y-8 text-white/90 text-lg md:text-xl font-light leading-relaxed py-8 px-6 rounded-[3rem] bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.7)_0%,_rgba(0,0,0,0)_70%)]">
            <p className="drop-shadow-md">
              The Universe, by our definition, encompasses absolutely everything – nature, existence, matter, and reality as a whole. When we examine the Universe through this lens, it becomes evident that the Universe itself fits the criteria of godhood. The Universe contains all knowledge, energy, and potentiality. It must be the source and sustainer of all that exists, from the smallest subatomic particles to the largest cosmic structures, because It contains everything, and nothing is outside of It. Further, nothing but the entire Universe has been identified as qualifying for godhood. By recognizing the Universe as God (for having a god is spiritually satisfying), we can move beyond anthropocentric conceptions of the divine and embrace a more expansive and evidence-based understanding of the nature of existence.
            </p>
            <p className="drop-shadow-md">
              The anthropomorphization of God into a humanoid figure is a limiting and unnecessary constraint on the concept, relegating the divine to the realm of primitive mysticism and cultural mythology. Instead, we explore the nature of our own existence as an integral part of the cosmic divine.
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
