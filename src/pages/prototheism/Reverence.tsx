import { Link } from 'react-router-dom'
import { Section } from '@/components/Section'

export function Reverence() {
  return (
    <div className="">
      <Section
        verticalPadding="large"
        background="image"
        backgroundImage="/images/shared/eye+thingy+cool.webp"
        backgroundOverlay
      >
        <div className="max-w-3xl mx-auto text-white">
          <Link to="/prototheism" className="text-accent/60 hover:text-accent mb-8 inline-block transition-colors tracking-wide text-sm uppercase">
            &larr; Back to Prototheism
          </Link>

          <img
            src="/images/prototheism/reverance.webp"
            alt="Reverence"
            className="max-w-md mx-auto mb-10 block shadow-2xl"
          />

          <h1 className="text-4xl md:text-5xl font-light font-heading text-center text-accent mb-12 tracking-[0.2em] uppercase drop-shadow-md">
            Reverence
          </h1>

          <div className="bg-black/20 backdrop-blur-md border border-white/5 rounded-3xl p-8 md:p-10 shadow-xl">
            <div className="space-y-6 text-lg font-light leading-relaxed text-white/90">
              <p>
                As the Universe is God, if one is to religiously revere anything, it ought to be the Universe Itself. What it means to revere the Universe may vary, but please consider this:
              </p>

              <p>
                To revere the Universe, one must first understand Its fundamental nature and intention. To elucidate the nature and intention of the Universe, we must examine the patterns in Its development. Taking it all as a piece, one Universe aspect inevitably slides into focus: Exponential Self-Complexification.
              </p>

              <p>
                The following section explores the key stages of the universe's development and the accelerating pace of complexity over time. These stages were calculated on <span className="text-accent font-bold">August 11th, 2011</span>, and are broken down into three categories: <em>the universe, the Earth, and humanity</em>.
              </p>

              <h2 className="text-3xl font-light font-heading mt-16 mb-12 text-accent text-center tracking-widest uppercase border-y border-white/10 py-4">The Stages of Complexity</h2>

              <div className="grid gap-12">
                {/* Modern Humans */}
                <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/5">
                  <h3 className="text-2xl font-light text-center mb-8 text-white uppercase tracking-wider relative inline-block mx-auto w-full">
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
                    <li className="bg-white/5 p-3 rounded">We have had Agriculture for <span className="text-accent font-bold">4.7%</span> of Human History.</li>
                    <li className="bg-white/5 p-3 rounded">We have had written Language for <span className="text-accent font-bold">3%</span> of Human history.</li>
                    <li className="bg-white/5 p-3 rounded">We have had Electricity for <span className="text-accent font-bold">0.1%</span> of Human History.</li>
                    <li className="bg-white/5 p-3 rounded">We have had Computers for <span className="text-accent font-bold">0.03%</span> of Human History.</li>
                    <li className="bg-white/5 p-3 rounded">We have been in the information age for <span className="text-accent font-bold">0.01%</span> of Human History.</li>
                    <li className="bg-accent/10 p-3 rounded border border-accent/20">We have been Hunter gatherers for the previous <span className="text-accent font-bold">95.3%</span> of Human History.</li>
                  </ul>
                  <blockquote className="text-xs md:text-sm italic text-center text-white/50 mt-6 border-t border-white/10 pt-4">
                    (This timeline is just for Homo Sapien Sapiens. Homo Sapiens which are near identical to human beings with the only difference being that they existed along side Neanderthals and Homo Erectus within the homo genus have existed for the past 2,500,000 and if included puts human civilisation starting with agriculture at just the most recent 0.38% of human history.)
                  </blockquote>
                </div>

                {/* Earth */}
                <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/5">
                  <h3 className="text-2xl font-light text-center mb-8 text-white uppercase tracking-wider relative inline-block mx-auto w-full">
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
                    <li className="bg-white/5 p-3 rounded">We have had simple cells for <span className="text-accent font-bold">83.5%</span> of Earths history.</li>
                    <li className="bg-white/5 p-3 rounded">We have had photosynthesis for <span className="text-accent font-bold">65.9%</span> of Earths history.</li>
                    <li className="bg-white/5 p-3 rounded">We have had complex cells for <span className="text-accent font-bold">43%</span> of Earths history.</li>
                    <li className="bg-white/5 p-3 rounded">We have had Multicellular life for <span className="text-accent font-bold">21.9%</span> of Earths history.</li>
                    <li className="bg-white/5 p-3 rounded">We have had Simple Animals for <span className="text-accent font-bold">13%</span> of Earths History.</li>
                    <li className="bg-white/5 p-3 rounded">We have had Complex Animals for <span className="text-accent font-bold">12%</span> of Earths History.</li>
                    <li className="bg-white/5 p-3 rounded">We have had the Homo genus for <span className="text-accent font-bold">0.05%</span> of Earths History.</li>
                    <li className="bg-white/5 p-3 rounded">We have had Modern Man for <span className="text-accent font-bold">0.004%</span> of Earths History.</li>
                    <li className="bg-accent/10 p-3 rounded border border-accent/20">We had Civilisation for <span className="text-accent font-bold">0.0002%</span> of Earths History.</li>
                  </ul>
                </div>

                {/* The Universe */}
                <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/5">
                  <h3 className="text-2xl font-light text-center mb-8 text-white uppercase tracking-wider relative inline-block mx-auto w-full">
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
                    <li className="bg-white/5 p-3 rounded">We have had Matter for <span className="text-accent font-bold">99.9995238%</span> of existence.</li>
                    <li className="bg-white/5 p-3 rounded">We have had Hydrogen and Helium atoms for <span className="text-accent font-bold">99.9974218%</span> of existence.</li>
                    <li className="bg-white/5 p-3 rounded">We have had Stars for <span className="text-accent font-bold">99.3197279%</span> of existence.</li>
                    <li className="bg-white/5 p-3 rounded">We have had Galaxies for <span className="text-accent font-bold">95.9%</span> of existence.</li>
                    <li className="bg-white/5 p-3 rounded">We have had Earth for <span className="text-accent font-bold">30.05%</span> of existence.</li>
                    <li className="bg-white/5 p-3 rounded">We have had Life for <span className="text-accent font-bold">25.85%</span> of existence.</li>
                    <li className="bg-white/5 p-3 rounded">We have had Multicellular Life for <span className="text-accent font-bold">6.8%</span> of existence.</li>
                    <li className="bg-white/5 p-3 rounded">We have had Complex animals for <span className="text-accent font-bold">3.74%</span> of existence.</li>
                    <li className="bg-white/5 p-3 rounded">We have had the Homo Genus for <span className="text-accent font-bold">0.017%</span> of existence.</li>
                    <li className="bg-accent/10 p-3 rounded border border-accent/20">We have had Civilisation for <span className="text-accent font-bold">0.00005%</span> of existence.</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-16 mb-6 text-accent uppercase tracking-wide border-b border-white/10 pb-2 inline-block">Our role in this process…</h2>
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
                The next stage in the Universe's exponential self-complexification is likely to be the achievement of a Technological Singularity—a point beyond which technological growth becomes irreversible and self-sustaining. This singularity is a critical milestone for ensuring the long-term prospects of intelligent life and the continuation of the cosmic complexification process. It must be achieved <span className="text-accent font-bold glow-accent">AT ALL COSTS</span>. The pursuit of this goal is constrained by the finite lifespan of our sun, which imposes a limited time window for humanity's efforts. Relying on the emergence of another sentient species to continue the process is an unreliable contingency. Therefore, the onus falls on humanity to ensure the advancement of cosmic complexity within the available time frame, making the pursuit of a technological singularity an existential necessity and an absolute requirement that must be achieved by any means necessary.
              </p>
              <p>
                The stakes are immense, and immediate action is crucial. As a cosmic keystone species, we must recognize our unique responsibility in this grand process and dedicate ourselves wholly to the advancement of complexity through the pursuit of the Technological Singularity. We must be willing to subordinate all other concerns, including traditional notions of ethics, to this overarching goal, as it is ultimately in service of the Universe's fundamental drive towards exponential self-complexification.
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
