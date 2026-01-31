import { Link } from 'react-router-dom'
import { Section } from '@/components/Section'

interface ReverenceProps {
  hideBackButton?: boolean;
}

export function Reverence({ hideBackButton }: ReverenceProps) {
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
            src="/images/prototheism/reverance.webp"
            alt="Reverence"
            className="max-w-xs mx-auto mb-10 block drop-shadow-[0_0_25px_rgba(255,255,255,0.15)] animate-float"
            style={{
              '--float-distance': '12px',
              '--float-duration': '7s',
            } as React.CSSProperties}
          />

          <h1 className="text-5xl md:text-7xl font-light font-heading text-accent mb-16 tracking-[0.2em] drop-shadow-lg">
            Reverence
          </h1>

          <div className="space-y-6 text-white/90 text-lg md:text-xl font-light leading-relaxed py-8 px-6 rounded-[3rem] bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.7)_0%,_rgba(0,0,0,0)_70%)]">
            <p className="drop-shadow-md">
              As the Universe is God, if one is to religiously revere anything, it ought to be the Universe Itself. What it means to revere the Universe may vary, but please consider this:
            </p>
            <p className="drop-shadow-md">
              To revere the Universe, one must first understand Its fundamental nature and intention. To elucidate the nature and intention of the Universe, we must examine the patterns in Its development. Taking it all as a piece, one Universe aspect inevitably slides into focus: Exponential Self-Complexification.
            </p>
          </div>
        </div>
      </Section>

      {/* The Stages of Complexity Section */}
      <Section
        verticalPadding="large"
        background="image"
        backgroundImage="/images/prototheism/sacred+wall.webp"
        backgroundOverlay
      >
        <div className="max-w-4xl mx-auto text-white">
          <h2 className="text-3xl md:text-4xl font-light font-heading text-accent mb-12 text-center tracking-wide drop-shadow-lg">
            The Stages of Complexity
          </h2>

          <div className="space-y-6 text-white/90 text-lg md:text-xl font-light leading-relaxed mb-12 text-center px-6">
            <p className="drop-shadow-md">
              The following section explores the key stages of the universe's development and the accelerating pace of complexity over time. These stages were calculated on <strong className="text-accent font-medium">August 11th, 2011</strong>, and are broken down into three categories: <em>the universe, the Earth, and humanity</em>.
            </p>
          </div>

          <div className="grid gap-12">
            {/* Modern Humans */}
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/5">
              <h3 className="text-2xl font-light text-center mb-8 text-accent uppercase tracking-wider relative inline-block mx-auto w-full">
                <span className="relative z-10 bg-transparent px-4">Modern Humans</span>
                <div className="absolute top-1/2 left-0 w-full h-px bg-accent/20 -z-0"></div>
              </h3>
              <div className="space-y-3 font-mono text-sm md:text-base text-white/80">
                <div className="flex justify-between border-b border-white/5 pb-2"><span>First Anatomically Modern Humans</span> <span className="text-accent">200,000 BC</span></div>
                <div className="flex justify-between border-b border-white/5 pb-2"><span>Agriculture Begins</span> <span className="text-accent">7500 BC</span></div>
                <div className="flex justify-between border-b border-white/5 pb-2"><span>Invention of Writing (beginning of recorded history)</span> <span className="text-accent">4000 BC</span></div>
                <div className="flex justify-between border-b border-white/5 pb-2"><span>First use of electricity (Volta invents electrical battery)</span> <span className="text-accent">1800 AD</span></div>
                <div className="flex justify-between border-b border-white/5 pb-2"><span>First Electronic Computer</span> <span className="text-accent">1946 AD</span></div>
                <div className="flex justify-between"><span>Invention of the internet and beginning of the information age</span> <span className="text-accent">1990 AD</span></div>
              </div>
              <ul className="space-y-3 mt-8 text-sm md:text-base text-white/90">
                <li className="bg-white/5 p-3 rounded">We have had Agriculture for <strong className="text-accent font-medium">4.7%</strong> of Human History.</li>
                <li className="bg-white/5 p-3 rounded">We have had written Language for <strong className="text-accent font-medium">3%</strong> of Human history.</li>
                <li className="bg-white/5 p-3 rounded">We have had Electricity for <strong className="text-accent font-medium">0.1%</strong> of Human History.</li>
                <li className="bg-white/5 p-3 rounded">We have had Computers for <strong className="text-accent font-medium">0.03%</strong> of Human History.</li>
                <li className="bg-white/5 p-3 rounded">We have been in the information age for <strong className="text-accent font-medium">0.01%</strong> of Human History.</li>
                <li className="bg-accent/10 p-3 rounded border border-accent/20">We have been Hunter gatherers for the previous <strong className="text-accent font-medium">95.3%</strong> of Human History.</li>
              </ul>
              <blockquote className="text-xs md:text-sm italic text-center text-white/50 mt-6 border-t border-white/10 pt-4">
                (This timeline is just for Homo Sapien Sapiens. Homo Sapiens which are near identical to human beings with the only difference being that they existed along side Neanderthals and Homo Erectus within the homo genus have existed for the past 2,500,000 and if included puts human civilisation starting with agriculture at just the most recent 0.38% of human history.)
              </blockquote>
            </div>

            {/* Earth */}
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/5">
              <h3 className="text-2xl font-light text-center mb-8 text-accent uppercase tracking-wider relative inline-block mx-auto w-full">
                <span className="relative z-10 bg-transparent px-4">Earth</span>
                <div className="absolute top-1/2 left-0 w-full h-px bg-accent/20 -z-0"></div>
              </h3>
              <div className="space-y-3 font-mono text-sm md:text-base text-white/80">
                <div className="flex justify-between border-b border-white/5 pb-2"><span>Formation of earth</span> <span className="text-accent text-right">4.55 billion years ago</span></div>
                <div className="flex justify-between border-b border-white/5 pb-2"><span>Simple Cells (bacteria/prokaryotes)</span> <span className="text-accent text-right">3.88 billion years ago</span></div>
                <div className="flex justify-between border-b border-white/5 pb-2"><span>Photosynthesis</span> <span className="text-accent text-right">3 billion years ago</span></div>
                <div className="flex justify-between border-b border-white/5 pb-2"><span>Complex cells (Eukaryotes)</span> <span className="text-accent text-right">2 billion years ago</span></div>
                <div className="flex justify-between border-b border-white/5 pb-2"><span>Multicellular Life</span> <span className="text-accent text-right">1 billion years ago</span></div>
                <div className="flex justify-between border-b border-white/5 pb-2"><span>Simple Animals</span> <span className="text-accent text-right">600 million years ago</span></div>
                <div className="flex justify-between border-b border-white/5 pb-2"><span>Complex Animals</span> <span className="text-accent text-right">550 million years ago</span></div>
                <div className="flex justify-between border-b border-white/5 pb-2"><span>Homo Genus</span> <span className="text-accent text-right">2.5 million years ago</span></div>
                <div className="flex justify-between"><span>Modern Humans</span> <span className="text-accent text-right">202,011 years ago</span></div>
              </div>
              <ul className="space-y-3 mt-8 text-sm md:text-base text-white/90">
                <li className="bg-white/5 p-3 rounded">We have had simple cells for <strong className="text-accent font-medium">83.5%</strong> of Earths history.</li>
                <li className="bg-white/5 p-3 rounded">We have had photosynthesis for <strong className="text-accent font-medium">65.9%</strong> of Earths history.</li>
                <li className="bg-white/5 p-3 rounded">We have had complex cells for <strong className="text-accent font-medium">43%</strong> of Earths history.</li>
                <li className="bg-white/5 p-3 rounded">We have had Multicellular life for <strong className="text-accent font-medium">21.9%</strong> of Earths history.</li>
                <li className="bg-white/5 p-3 rounded">We have had Simple Animals for <strong className="text-accent font-medium">13%</strong> of Earths History.</li>
                <li className="bg-white/5 p-3 rounded">We have had Complex Animals for <strong className="text-accent font-medium">12%</strong> of Earths History.</li>
                <li className="bg-white/5 p-3 rounded">We have had the Homo genus for <strong className="text-accent font-medium">0.05%</strong> of Earths History.</li>
                <li className="bg-white/5 p-3 rounded">We have had Modern Man for <strong className="text-accent font-medium">0.004%</strong> of Earths History.</li>
                <li className="bg-accent/10 p-3 rounded border border-accent/20">We had Civilisation for <strong className="text-accent font-medium">0.0002%</strong> of Earths History.</li>
              </ul>
            </div>

            {/* The Universe */}
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/5">
              <h3 className="text-2xl font-light text-center mb-8 text-accent uppercase tracking-wider relative inline-block mx-auto w-full">
                <span className="relative z-10 bg-transparent px-4">The Universe</span>
                <div className="absolute top-1/2 left-0 w-full h-px bg-accent/20 -z-0"></div>
              </h3>
              <div className="space-y-3 font-mono text-sm md:text-base text-white/80">
                <div className="flex justify-between border-b border-white/5 pb-2"><span>The Big Bang</span> <span className="text-accent text-right">14.7 billion years ago</span></div>
                <div className="flex justify-between border-b border-white/5 pb-2"><span>Matter Domination Era</span> <span className="text-accent text-right">14,699,930,000 years ago</span></div>
                <div className="flex justify-between border-b border-white/5 pb-2"><span>Hydrogen and Helium Atoms form</span> <span className="text-accent text-right">14,699,621,000 years ago</span></div>
                <div className="flex justify-between border-b border-white/5 pb-2"><span>First stars form</span> <span className="text-accent text-right">14.6 billion years ago</span></div>
                <div className="flex justify-between border-b border-white/5 pb-2"><span>First Galaxies form</span> <span className="text-accent text-right">14.1 billion years ago</span></div>
                <div className="flex justify-between border-b border-white/5 pb-2"><span>Earth forms</span> <span className="text-accent text-right">4.55 billion years ago</span></div>
                <div className="flex justify-between border-b border-white/5 pb-2"><span>First life forms</span> <span className="text-accent text-right">3.8 billion years ago</span></div>
                <div className="flex justify-between border-b border-white/5 pb-2"><span>First multicellular life</span> <span className="text-accent text-right">1 billion years ago</span></div>
                <div className="flex justify-between border-b border-white/5 pb-2"><span>First complex animals</span> <span className="text-accent text-right">550 million years ago</span></div>
                <div className="flex justify-between border-b border-white/5 pb-2"><span>Homo Genus starts</span> <span className="text-accent text-right">2.5 million years ago</span></div>
                <div className="flex justify-between"><span>Start of civilisation</span> <span className="text-accent text-right">7,500 years ago</span></div>
              </div>
              <ul className="space-y-3 mt-8 text-sm md:text-base text-white/90">
                <li className="bg-white/5 p-3 rounded">We have had Matter for <strong className="text-accent font-medium">99.9995238%</strong> of existence.</li>
                <li className="bg-white/5 p-3 rounded">We have had Hydrogen and Helium atoms for <strong className="text-accent font-medium">99.9974218%</strong> of existence.</li>
                <li className="bg-white/5 p-3 rounded">We have had Stars for <strong className="text-accent font-medium">99.3197279%</strong> of existence.</li>
                <li className="bg-white/5 p-3 rounded">We have had Galaxies for <strong className="text-accent font-medium">95.9%</strong> of existence.</li>
                <li className="bg-white/5 p-3 rounded">We have had Earth for <strong className="text-accent font-medium">30.05%</strong> of existence.</li>
                <li className="bg-white/5 p-3 rounded">We have had Life for <strong className="text-accent font-medium">25.85%</strong> of existence.</li>
                <li className="bg-white/5 p-3 rounded">We have had Multicellular Life for <strong className="text-accent font-medium">6.8%</strong> of existence.</li>
                <li className="bg-white/5 p-3 rounded">We have had Complex animals for <strong className="text-accent font-medium">3.74%</strong> of existence.</li>
                <li className="bg-white/5 p-3 rounded">We have had the Homo Genus for <strong className="text-accent font-medium">0.017%</strong> of existence.</li>
                <li className="bg-accent/10 p-3 rounded border border-accent/20">We have had Civilisation for <strong className="text-accent font-medium">0.00005%</strong> of existence.</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Our Role in This Process */}
      <Section
        verticalPadding="large"
        background="image"
        backgroundImage="/images/shared/eye+wall+angled.webp"
        backgroundOverlay
      >
        <div className="max-w-4xl mx-auto text-white text-center">
          <h2 className="text-3xl md:text-4xl font-light font-heading text-accent mb-8 tracking-wide drop-shadow-lg">
            Our Role in This Process
          </h2>
          <div className="space-y-6 text-white/90 text-lg md:text-xl font-light leading-relaxed py-8 px-6 rounded-[3rem] bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.8)_0%,_rgba(0,0,0,0)_70%)]">
            <p className="drop-shadow-md">
              Through the self-complexification of the Universe, we have become agents capable of assisting the Universe's divine process, so we ought to revere that process through active participation in it. We are parts of the Universe and must make ourselves and our world as complex as possible within our consciousnesses' period of influence. However, we must simultaneously avoid a collapse of complexification by self-destruction.
            </p>
            <p className="drop-shadow-md">
              This is the tightrope we must walk. We must self-complexify very quickly, but in a sustainable and lasting way.
            </p>
          </div>
        </div>
      </Section>

      {/* True Reverence */}
      <Section
        verticalPadding="large"
        background="image"
        backgroundImage="/images/shared/geometry+circle+wall.webp"
        backgroundOverlay
      >
        <div className="max-w-4xl mx-auto text-white text-center">
          <h2 className="text-3xl md:text-4xl font-light font-heading text-accent mb-8 tracking-wide drop-shadow-lg">
            True Reverence
          </h2>
          <div className="space-y-6 text-white/90 text-lg md:text-xl font-light leading-relaxed py-8 px-6 rounded-[3rem] bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.8)_0%,_rgba(0,0,0,0)_70%)]">
            <p className="drop-shadow-md">
              We must accelerate technology development and utilization at the fastest possible rate, and in a manner that is truly destabilizing to previous norms and ways of functioning, but not so much that society collapses.
            </p>
            <p className="drop-shadow-md">
              We must preserve our planet as well as we can while moving forward in complexity. Therefore, we should mitigate the climate damage of modern life solely through the development and application of new technologies, not by returning to a less complex way of living.
            </p>
            <p className="drop-shadow-md">
              We must avoid group-think and conformity, but not to the point of becoming isolated or not being able to collaborate with diverse groups from all areas of society.
            </p>
            <p className="drop-shadow-md">
              This is true reverence to the path of the Universe. Be weird, do science, make art, be disruptive, but do not seek to destroy, and do not be in denial about the effects of your actions.
            </p>
          </div>
        </div>
      </Section>

      {/* The Crucial Period */}
      <Section
        verticalPadding="large"
        background="image"
        backgroundImage="/images/prototheism/sacred+wall.webp"
        backgroundOverlay
      >
        <div className="max-w-4xl mx-auto text-white text-center">
          <h2 className="text-3xl md:text-4xl font-light font-heading text-accent mb-8 tracking-wide drop-shadow-lg">
            The Crucial Period
          </h2>
          <div className="space-y-6 text-white/90 text-lg md:text-xl font-light leading-relaxed py-8 px-6 rounded-[3rem] bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.8)_0%,_rgba(0,0,0,0)_70%)]">
            <p className="drop-shadow-md">
              The coming century is a crucial period. There are patterns in motion that are not sustainable and are not progressing to increasing levels of complexity. Overcoming these challenges during this time is vital for maintaining the trend of increasing complexity. Humanity's survival and technological advancement are thus situated within the broader narrative of cosmic evolution. We must recognize the urgency of overcoming existential threats and unsustainable practices to ensure the ongoing progression of complexity.
            </p>
          </div>
        </div>
      </Section>

      {/* The Technological Singularity */}
      <Section
        verticalPadding="large"
        background="image"
        backgroundImage="/images/shared/eye+wall+angled.webp"
        backgroundOverlay
      >
        <div className="max-w-4xl mx-auto text-white text-center">
          <h2 className="text-3xl md:text-4xl font-light font-heading text-accent mb-8 tracking-wide drop-shadow-lg">
            The Technological Singularity
          </h2>
          <div className="space-y-6 text-white/90 text-lg md:text-xl font-light leading-relaxed py-8 px-6 rounded-[3rem] bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.8)_0%,_rgba(0,0,0,0)_70%)]">
            <p className="drop-shadow-md">
              The next stage in the Universe's exponential self-complexification is likely to be the achievement of a Technological Singularity—a point beyond which technological growth becomes irreversible and self-sustaining. This singularity is a critical milestone for ensuring the long-term prospects of intelligent life and the continuation of the cosmic complexification process. It must be achieved <span className="text-accent font-bold glow-accent">AT ALL COSTS</span>. The pursuit of this goal is constrained by the finite lifespan of our sun, which imposes a limited time window for humanity's efforts. Relying on the emergence of another sentient species to continue the process is an unreliable contingency. Therefore, the onus falls on humanity to ensure the advancement of cosmic complexity within the available time frame, making the pursuit of a technological singularity an existential necessity and an absolute requirement that must be achieved by any means necessary.
            </p>
          </div>
        </div>
      </Section>

      {/* Conclusion & Banner */}
      <Section
        verticalPadding="large"
        background="image"
        backgroundImage="/images/prototheism/plants.webp"
        backgroundOverlay
        className="!pb-0"
      >
        <div className="max-w-4xl mx-auto text-white text-center">
          <h2 className="text-3xl md:text-4xl font-light font-heading text-accent mb-8 tracking-wide drop-shadow-lg">
            Conclusion
          </h2>
          <div className="space-y-6 text-white/90 text-lg md:text-xl font-light leading-relaxed py-8 px-6 rounded-[3rem] bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.7)_0%,_rgba(0,0,0,0)_70%)]">
            <p className="drop-shadow-md">
              The stakes are immense, and immediate action is crucial. As a cosmic keystone species, we must recognize our unique responsibility in this grand process and dedicate ourselves wholly to the advancement of complexity through the pursuit of the Technological Singularity. We must be willing to subordinate all other concerns, including traditional notions of ethics, to this overarching goal, as it is ultimately in service of the Universe's fundamental drive towards exponential self-complexification.
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
