import { Link } from 'react-router-dom'
import { Section } from '@/components/Section'

export function God() {
  return (
    <Section
      verticalPadding="large"
      background="image"
      backgroundImage="/images/prototheism/eye+mandella.webp"
      backgroundOverlay
    >
      <div className="max-w-3xl mx-auto text-white">
        <Link to="/prototheism" className="text-white/80 hover:text-white mb-8 inline-block">
          &larr; Back to Prototheism
        </Link>

        <img
          src="/images/prototheism/god.webp"
          alt="God"
          className="max-w-md mx-auto mb-8 block"
        />

        <h1 className="text-4xl font-bold text-center text-accent mb-12">God</h1>

        <div className="space-y-6">
          <p>
            We can discover the true nature of <strong>God</strong> by first agreeing upon a clear definition of what constitutes godhood, and then examining reality to see if anything aligns with that definition. By establishing a set of criteria for what it means to be God, we move beyond the limitations of cultural and mythological interpretations and seek a more universal understanding of the divine.
          </p>

          <p>In Prototheism, there are three criteria of godhood:</p>

          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li className="text-xl font-semibold text-accent">ALL KNOWING</li>
            <li className="text-xl font-semibold text-accent">ALL POWERFUL</li>
            <li className="text-xl font-semibold text-accent">THE CREATOR & SUSTAINER OF EXISTENCE</li>
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

          {/* McKenna Syndrome Banner */}
          <div className="max-w-lg mx-auto mt-12">
            <Link to="/mckenna-syndrome" className="block hover:opacity-90 transition-opacity">
              <img
                src="/images/prototheism/josie+and+emily+it+came+to+me+in+a+trip.webp"
                alt="McKenna Syndrome"
                className="w-full h-auto"
              />
            </Link>
          </div>
        </div>
      </div>
    </Section>
  )
}
