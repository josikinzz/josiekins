import { Link } from 'react-router-dom'
import { Section } from '@/components/Section'

interface GodProps {
  hideBackButton?: boolean;
}

export function God({ hideBackButton }: GodProps) {
  return (
    <div className="">
      <Section
        verticalPadding="large"
        background="image"
        backgroundImage="/images/prototheism/eye+mandella.webp"
        backgroundOverlay
      >
        <div className="max-w-3xl mx-auto text-white">
          {!hideBackButton && (
            <Link to="/prototheism" className="text-accent/60 hover:text-accent mb-8 inline-block transition-colors tracking-wide text-sm uppercase">
              &larr; Back to Prototheism
            </Link>
          )}

          <img
            src="/images/prototheism/god.webp"
            alt="God"
            className="max-w-md mx-auto mb-10 block shadow-2xl"
          />

          <h1 className="text-4xl md:text-5xl font-light font-heading text-center text-accent mb-12 tracking-[0.2em] drop-shadow-md">
            God
          </h1>

          <div className="bg-black/20 backdrop-blur-md border border-white/5 rounded-3xl p-8 md:p-10 shadow-xl">
            <div className="space-y-6 text-lg font-light leading-relaxed text-white/90">
              <p>
                We can discover the true nature of <strong>God</strong> by first agreeing upon a clear definition of what constitutes godhood, and then examining reality to see if anything aligns with that definition. By establishing a set of criteria for what it means to be God, we move beyond the limitations of cultural and mythological interpretations and seek a more universal understanding of the divine.
              </p>

              <p>In Prototheism, there are three criteria of godhood:</p>

              <ol className="space-y-4 ml-4 my-6">
                <li className="flex items-center gap-4">
                  <span className="text-2xl text-accent font-bold">1.</span>
                  <span className="text-xl font-heading tracking-wider text-white">ALL KNOWING</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="text-2xl text-accent font-bold">2.</span>
                  <span className="text-xl font-heading tracking-wider text-white">ALL POWERFUL</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="text-2xl text-accent font-bold">3.</span>
                  <span className="text-xl font-heading tracking-wider text-white">THE CREATOR & SUSTAINER OF EXISTENCE</span>
                </li>
              </ol>

              <p>
                These criteria are derived from examining mythology-based religions that are based around the concept of a central divinity, whether it's described as an individual god or divinity spread across multiple aspects.
              </p>

              <p>
                The Universe, by our definition, encompasses absolutely everything – nature, existence, matter, and reality as a whole. When we examine the Universe through this lens, it becomes evident that the Universe itself fits the criteria of godhood. The Universe contains all knowledge, energy, and potentiality. It must be the source and sustainer of all that exists, from the smallest subatomic particles to the largest cosmic structures, because It contains everything, and nothing is outside of It. Further, nothing but the entire Universe has been identified as qualifying for godhood. By recognizing the Universe as God (for having a god is spiritually satisfying), we can move beyond anthropocentric conceptions of the divine and embrace a more expansive and evidence-based understanding of the nature of existence.
              </p>

              <p>
                The anthropomorphization of God into a humanoid figure is a limiting and unnecessary constraint on the concept, relegating the divine to the realm of primitive mysticism and cultural mythology. Instead, we explore the nature of our own existence as an integral part of the cosmic divine.
              </p>
            </div>
          </div>

          {/* McKenna Syndrome Banner */}
          <div className="max-w-lg mx-auto mt-16 -mb-20 md:-mb-32">
            <Link to="/mckenna-syndrome" className="block group relative">
              <img
                src="/images/prototheism/josie+and+emily+it+came+to+me+in+a+trip.webp"
                alt="McKenna Syndrome"
                className="relative w-full h-auto rounded-t-xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]"
              />
            </Link>
          </div>
        </div>
      </Section>
    </div>
  )
}
