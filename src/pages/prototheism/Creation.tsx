import { Link } from 'react-router-dom'
import { Section } from '@/components/Section'

export function Creation() {
  return (
    <Section
      verticalPadding="large"
      background="image"
      backgroundImage="/images/prototheism/geometry+circle+wall.webp"
      backgroundOverlay
    >
      <div className="max-w-3xl mx-auto text-white">
        <Link to="/prototheism" className="text-white/80 hover:text-white mb-8 inline-block">
          &larr; Back to Prototheism
        </Link>

        <img
          src="/images/prototheism/creation.webp"
          alt="Creation"
          className="max-w-md mx-auto mb-8 block"
        />

        <h1 className="text-4xl font-bold text-center text-accent mb-12">Creation</h1>

        <div className="space-y-6">
          <p>
            Using the precepts of <Link to="/prototheism/faith" className="text-accent hover:underline">Prototheistic Faith</Link>, scientific consensus is the basis of understanding of the world. In this case, we use the Big Bang Theory as the origin of the Universe, and a slow progression of amino acids becoming organized and evolving as the origin of life on this planet. However, this scientific explanation is not spiritually satisfying on its own, so Prototheism offers a further creation concept, which we treat as true but is not a subject of Faith.
          </p>

          <p>
            The origin of this creation myth may be attributed to psychedelic experiences, philosophical musing, and personal fancy.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-4 text-accent">Interdependent Opposites</h2>
          <p>
            The Universe is governed by a system of interdependent opposites, where the existence of a system or process depends on the presence of its presupposed counterpart. This framework likely catalyzed the Universe's emergence, as the concept of nothing logically presupposes the concept of something.
          </p>
          <p>
            As the Universe expanded and contracted, opposites manifested in various forms. In the early Universe, high density and low density regions, as well as both uniformity and fluctuations, set the stage for the formation of matter. Quarks and antiquarks, particles and antiparticles, and ultimately matter and antimatter emerged as the Universe cooled.
          </p>
          <p>
            The formation of celestial bodies was influenced by the interplay of gravity and expansion, fusion and fission, and accretion and dissipation. As life emerged, order and chaos, cooperation and competition, and adaptation and extinction shaped the development of biological systems.
          </p>
          <p>
            Sentient beings, through their subjective experiences and perceptions, have created countless additional interdependent opposites, such as good and evil, right and wrong, beauty and ugliness, love and hate, truth and lies, knowledge and ignorance, freedom and oppression, and hope and despair. These opposites, among many others, shape the way sentient beings understand and navigate their existence within the Universe.
          </p>
          <p>
            The concept of nothing causing something to come into existence suggests that something will eventually necessitate nothing, as the Universe undergoes heat death. This cyclical process implies balance and interconnectedness in the fabric of existence.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-4 text-accent">Unanswerable Questions</h2>
          <p>
            Despite recognizing a system of interdependent opposites as governing existence, certain questions about its origins and purposes remain unanswerable:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><span className="text-accent font-bold">How did this framework come to be?</span></li>
            <li><span className="text-accent font-bold">Why does existence operate in this manner?</span></li>
          </ul>
          <p>
            These inquiries, known as the "prime mover" dilemma, represent mysteries that are likely to persist as unknowable aspects of our understanding of the Universe. The limitations of sentient understanding and the vastness of the unknown are evident in the face of these questions, which defy definitive answers.
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
