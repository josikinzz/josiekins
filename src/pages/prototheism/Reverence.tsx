import { Link } from 'react-router-dom'
import { Section } from '@/components/Section'

export function Reverence() {
  return (
    <Section
      verticalPadding="large"
      background="image"
      backgroundImage="/images/shared/background.webp"
      backgroundOverlay
    >
      <div className="max-w-3xl mx-auto text-white">
        <Link to="/prototheism" className="text-white/80 hover:text-white mb-8 inline-block">
          &larr; Back to Prototheism
        </Link>

        <img
          src="/images/prototheism/reverance.webp"
          alt="Reverence"
          className="max-w-md mx-auto mb-8 block"
        />

        <h1 className="text-4xl font-bold text-center text-accent mb-12">Reverence</h1>

        <div className="space-y-6">
          <p>
            As the Universe is God, if one is to religiously revere anything, it ought to be the Universe Itself. What it means to revere the Universe may vary, but please consider this:
          </p>

          <p>
            To revere the Universe, one must first understand Its fundamental nature and intention. To elucidate the nature and intention of the Universe, we must examine the patterns in Its development. Taking it all as a piece, one Universe aspect inevitably slides into focus: Exponential Self-Complexification.
          </p>

          <p>
            The following section explores the key stages of the universe's development and the accelerating pace of complexity over time. These stages were calculated on <span className="text-accent font-bold">August 11th, 2011</span>, and are broken down into three categories: <em>the universe, the Earth, and humanity</em>.
          </p>

          <h2 className="text-3xl font-semibold mt-12 mb-8 text-accent text-center">The Stages of Complexity</h2>

          <h3 className="text-xl font-semibold mt-8 mb-4 text-accent text-center italic">Modern Humans</h3>
          <div className="text-center space-y-1">
            <p><span className="text-accent font-bold">200,000 BC</span> – First Anatomically Modern Humans</p>
            <p><span className="text-accent font-bold">7500 BC</span> – Agriculture Begins</p>
            <p><span className="text-accent font-bold">4000 BC</span> – Invention of Writing (beginning of <em>recorded</em> history)</p>
            <p><span className="text-accent font-bold">1800 AD</span> – First use of electricity (Volta invents electrical battery)</p>
            <p><span className="text-accent font-bold">1946 AD</span> – First Electronic Computer</p>
            <p><span className="text-accent font-bold">1990 AD</span> – Invention of the internet and beginning of the information age</p>
          </div>
          <ul className="list-disc list-inside space-y-1 text-center mt-4">
            <li>We have had Agriculture for <span className="text-accent font-bold">4.7%</span> of Human History.</li>
            <li>We have had written Language for <span className="text-accent font-bold">3%</span> of Human history.</li>
            <li>We have had Electricity for <span className="text-accent font-bold">0.1%</span> of Human History.</li>
            <li>We have had Computers for <span className="text-accent font-bold">0.03%</span> of Human History.</li>
            <li>We have been in the information age for <span className="text-accent font-bold">0.01%</span> of Human History.</li>
            <li>We have been Hunter gatherers for the previous <span className="text-accent font-bold">95.3%</span> of Human History.</li>
          </ul>
          <blockquote className="text-sm italic text-center text-white/60 mt-4">
            (This timeline is just for Homo Sapien Sapiens. Homo Sapiens which are near identical to human beings with the only difference being that they existed along side Neanderthals and Homo Erectus within the homo genus have existed for the past 2,500,000 and if included puts human civilisation starting with agriculture at just the most recent 0.38% of human history.)
          </blockquote>

          <h3 className="text-xl font-semibold mt-12 mb-4 text-accent text-center italic">Earth</h3>
          <div className="text-center space-y-1">
            <p><span className="text-accent font-bold">4.55 billion years ago</span> – Formation of earth</p>
            <p><span className="text-accent font-bold">3.88 billion years ago</span> – Simple Cells (bacteria/prokaryotes)</p>
            <p><span className="text-accent font-bold">3 billion years ago</span> – photosynthesis</p>
            <p><span className="text-accent font-bold">2 billion years ago</span> – Complex cells (Eukaryotes)</p>
            <p><span className="text-accent font-bold">1 billion years ago</span> – Multicellular Life</p>
            <p><span className="text-accent font-bold">600 Million Years ago</span> – Simple Animals</p>
            <p><span className="text-accent font-bold">550 Million Years ago</span> – Complex Animals</p>
            <p><span className="text-accent font-bold">2.5 million Years ago</span> – Homo Genus</p>
            <p><span className="text-accent font-bold">202,011 years ago</span> – Modern Humans</p>
          </div>
          <ul className="list-disc list-inside space-y-1 text-center mt-4">
            <li>We have had simple cells for <span className="text-accent font-bold">83.5%</span> of Earths history.</li>
            <li>We have had photosynthesis for <span className="text-accent font-bold">65.9%</span> of Earths history.</li>
            <li>We have had complex cells for <span className="text-accent font-bold">43%</span> of Earths history.</li>
            <li>We have had Multicellular life for <span className="text-accent font-bold">21.9%</span> of Earths history.</li>
            <li>We have had Simple Animals for <span className="text-accent font-bold">13%</span> of Earths History.</li>
            <li>We have had Complex Animals for <span className="text-accent font-bold">12%</span> of Earths History.</li>
            <li>We have had the Homo genus for <span className="text-accent font-bold">0.05%</span> of Earths History.</li>
            <li>We have had Modern Man for <span className="text-accent font-bold">0.004%</span> of Earths History.</li>
            <li>We had Civilisation for <span className="text-accent font-bold">0.0002%</span> of Earths History.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-12 mb-4 text-accent text-center italic">The Universe</h3>
          <div className="text-center space-y-1">
            <p><span className="text-accent font-bold">14.7 billion years ago</span> – The Big Bang</p>
            <p><span className="text-accent font-bold">14,699,930,000 years ago</span> – Matter Domination Era</p>
            <p><span className="text-accent font-bold">14,699,621,000 years ago</span> – Hydrogen and Helium Atoms form</p>
            <p><span className="text-accent font-bold">14.6 billion years ago</span> – first stars form</p>
            <p><span className="text-accent font-bold">14.1 billion years ago</span> - first Galaxies form</p>
            <p><span className="text-accent font-bold">4.55 billion years ago</span> – Earth forms</p>
            <p><span className="text-accent font-bold">3.8 billion years ago</span> – first life forms</p>
            <p><span className="text-accent font-bold">1 billion years ago</span> – first multicellular life</p>
            <p><span className="text-accent font-bold">550 million years ago</span> – first complex animals</p>
            <p><span className="text-accent font-bold">2.5 million years ago</span> – Homo Genus starts</p>
            <p><span className="text-accent font-bold">7,500 years ago</span> – Start of civilisation</p>
          </div>
          <ul className="list-disc list-inside space-y-1 text-center mt-4">
            <li>We have had Matter for <span className="text-accent font-bold">99.9995238%</span> of existence.</li>
            <li>We have had Hydrogen and Helium atoms for <span className="text-accent font-bold">99.9974218%</span> of existence.</li>
            <li>We have had Stars for <span className="text-accent font-bold">99.3197279%</span> of existence.</li>
            <li>We have had Galaxies for <span className="text-accent font-bold">95.9%</span> of existence.</li>
            <li>We have had Earth for <span className="text-accent font-bold">30.05%</span> of existence.</li>
            <li>We have had Life for <span className="text-accent font-bold">25.85%</span> of existence.</li>
            <li>We have had Multicellular Life for <span className="text-accent font-bold">6.8%</span> of existence.</li>
            <li>We have had Complex animals for <span className="text-accent font-bold">3.74%</span> of existence.</li>
            <li>We have had the Homo Genus for <span className="text-accent font-bold">0.017%</span> of existence.</li>
            <li>We have had Civilisation for <span className="text-accent font-bold">0.00005%</span> of existence.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-12 mb-4 text-accent">Our role in this process…</h2>
          <p>
            Through the self-complexification of the Universe, we have become agents capable of assisting the Universe's divine process, so we ought to revere that process through active participation in it. We are parts of the Universe and must make ourselves and our world as complex as possible within our consciousnesses' period of influence. However, we must simultaneously avoid a collapse of complexification by self-destruction.
          </p>
          <p>
            This is the tightrope we must walk. We must self-complexify very quickly, but in a sustainable and lasting way.
          </p>
          <p>
            We must accelerate technology development and utilization at the fastest possible rate, and in a manner that is truly destabilizing to previous norms and ways of functioning, but not so much that society collapses.
          </p>
          <p>
            We must preserve our planet as well as we can while moving forward in complexity. Therefore, we should mitigate the climate damage of modern life solely through the development and application of new technologies, not by returning to a less complex way of living.
          </p>
          <p>
            We must avoid group-think and conformity, but not to the point of becoming isolated or not being able to collaborate with diverse groups from all areas of society.
          </p>
          <p>
            This is true reverence to the path of the Universe. Be weird, do science, make art, be disruptive, but do not seek to destroy, and do not be in denial about the effects of your actions.
          </p>
          <p>
            The coming century is a crucial period. There are patterns in motion that are not sustainable and are not progressing to increasing levels of complexity. Overcoming these challenges during this time is vital for maintaining the trend of increasing complexity. Humanity's survival and technological advancement are thus situated within the broader narrative of cosmic evolution. We must recognize the urgency of overcoming existential threats and unsustainable practices to ensure the ongoing progression of complexity.
          </p>
          <p>
            The next stage in the Universe's exponential self-complexification is likely to be the achievement of a Technological Singularity—a point beyond which technological growth becomes irreversible and self-sustaining. This singularity is a critical milestone for ensuring the long-term prospects of intelligent life and the continuation of the cosmic complexification process. It must be achieved <span className="text-accent font-bold">AT ALL COSTS</span>. The pursuit of this goal is constrained by the finite lifespan of our sun, which imposes a limited time window for humanity's efforts. Relying on the emergence of another sentient species to continue the process is an unreliable contingency. Therefore, the onus falls on humanity to ensure the advancement of cosmic complexity within the available time frame, making the pursuit of a technological singularity an existential necessity and an absolute requirement that must be achieved by any means necessary.
          </p>
          <p>
            The stakes are immense, and immediate action is crucial. As a cosmic keystone species, we must recognize our unique responsibility in this grand process and dedicate ourselves wholly to the advancement of complexity through the pursuit of the Technological Singularity. We must be willing to subordinate all other concerns, including traditional notions of ethics, to this overarching goal, as it is ultimately in service of the Universe's fundamental drive towards exponential self-complexification.
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
