import { Link } from 'react-router-dom'
import { Section } from '@/components/Section'

export function Reverence() {
  return (
    <div className="animate-in fade-in zoom-in-95 duration-1000 ease-out">
      <Section
        verticalPadding="large"
        background="image"
        backgroundImage="/images/shared/background.webp"
        backgroundOverlay
      >
        <div className="max-w-3xl mx-auto text-white">
          <Link to="/prototheism" className="text-accent/60 hover:text-accent mb-8 inline-block transition-colors tracking-wide text-sm uppercase">
            &larr; Back to Prototheism
          </Link>

          <img
            src="/images/prototheism/reverance.webp"
            alt="Reverence"
            className="max-w-md mx-auto mb-10 block rounded-full shadow-2xl ring-1 ring-white/10"
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
                    <div className="flex justify-between border-b border-white/5 pb-2"><span>Invention of Writing</span> <span className="text-accent">4000 BC</span></div>
                    <div className="flex justify-between border-b border-white/5 pb-2"><span>First use of electricity</span> <span className="text-accent">1800 AD</span></div>
                    <div className="flex justify-between border-b border-white/5 pb-2"><span>First Electronic Computer</span> <span className="text-accent">1946 AD</span></div>
                    <div className="flex justify-between"><span>Invention of the internet</span> <span className="text-accent">1990 AD</span></div>
                  </div>
                  <ul className="space-y-3 mt-8 text-sm md:text-base text-white/90">
                    <li className="flex items-center justify-between bg-white/5 p-3 rounded"><span>Agriculture</span> <span className="text-accent font-bold mono">4.7%</span></li>
                    <li className="flex items-center justify-between bg-white/5 p-3 rounded"><span>Written Language</span> <span className="text-accent font-bold mono">3%</span></li>
                    <li className="flex items-center justify-between bg-white/5 p-3 rounded"><span>Electricity</span> <span className="text-accent font-bold mono">0.1%</span></li>
                    <li className="flex items-center justify-between bg-white/5 p-3 rounded"><span>Computers</span> <span className="text-accent font-bold mono">0.03%</span></li>
                    <li className="flex items-center justify-between bg-white/5 p-3 rounded"><span>Information Age</span> <span className="text-accent font-bold mono">0.01%</span></li>
                    <li className="flex items-center justify-between bg-accent/10 p-3 rounded border border-accent/20"><span>Hunter Gatherers</span> <span className="text-accent font-bold mono">95.3%</span></li>
                  </ul>
                  <blockquote className="text-xs md:text-sm italic text-center text-white/50 mt-6 border-t border-white/10 pt-4">
                    (This timeline is just for Homo Sapien Sapiens. If included, Homo Sapiens existing alongside Neanderthals puts human civilisation at just the most recent 0.38% of human history.)
                  </blockquote>
                </div>

                {/* Earth */}
                <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/5">
                  <h3 className="text-2xl font-light text-center mb-8 text-white uppercase tracking-wider relative inline-block mx-auto w-full">
                    <span className="relative z-10 bg-transparent px-4">Earth</span>
                    <div className="absolute top-1/2 left-0 w-full h-px bg-accent/20 -z-0"></div>
                  </h3>
                  <div className="space-y-3 font-mono text-sm md:text-base text-white/80">
                    <div className="flex justify-between border-b border-white/5 pb-2"><span>Formation of earth</span> <span className="text-accent text-right">4.55 bya</span></div>
                    <div className="flex justify-between border-b border-white/5 pb-2"><span>Simple Cells</span> <span className="text-accent text-right">3.88 bya</span></div>
                    <div className="flex justify-between border-b border-white/5 pb-2"><span>Photosynthesis</span> <span className="text-accent text-right">3 bya</span></div>
                    <div className="flex justify-between border-b border-white/5 pb-2"><span>Complex cells</span> <span className="text-accent text-right">2 bya</span></div>
                    <div className="flex justify-between border-b border-white/5 pb-2"><span>Multicellular Life</span> <span className="text-accent text-right">1 bya</span></div>
                    <div className="flex justify-between border-b border-white/5 pb-2"><span>Simple Animals</span> <span className="text-accent text-right">600 mya</span></div>
                    <div className="flex justify-between border-b border-white/5 pb-2"><span>Complex Animals</span> <span className="text-accent text-right">550 mya</span></div>
                    <div className="flex justify-between border-b border-white/5 pb-2"><span>Homo Genus</span> <span className="text-accent text-right">2.5 mya</span></div>
                    <div className="flex justify-between"><span>Modern Humans</span> <span className="text-accent text-right">202k ya</span></div>
                  </div>
                  <ul className="space-y-3 mt-8 text-sm md:text-base text-white/90">
                    <li className="flex items-center justify-between bg-white/5 p-3 rounded"><span>Simple Cells</span> <span className="text-accent font-bold mono">83.5%</span></li>
                    <li className="flex items-center justify-between bg-white/5 p-3 rounded"><span>Photosynthesis</span> <span className="text-accent font-bold mono">65.9%</span></li>
                    <li className="flex items-center justify-between bg-white/5 p-3 rounded"><span>Complex Cells</span> <span className="text-accent font-bold mono">43%</span></li>
                    <li className="flex items-center justify-between bg-white/5 p-3 rounded"><span>Multicellular Life</span> <span className="text-accent font-bold mono">21.9%</span></li>
                    <li className="flex items-center justify-between bg-white/5 p-3 rounded"><span>Simple Animals</span> <span className="text-accent font-bold mono">13%</span></li>
                    <li className="flex items-center justify-between bg-white/5 p-3 rounded"><span>Complex Animals</span> <span className="text-accent font-bold mono">12%</span></li>
                    <li className="flex items-center justify-between bg-white/5 p-3 rounded"><span>Homo Genus</span> <span className="text-accent font-bold mono">0.05%</span></li>
                    <li className="flex items-center justify-between bg-white/5 p-3 rounded"><span>Modern Man</span> <span className="text-accent font-bold mono">0.004%</span></li>
                    <li className="flex items-center justify-between bg-accent/10 p-3 rounded border border-accent/20"><span>Civilisation</span> <span className="text-accent font-bold mono">0.0002%</span></li>
                  </ul>
                </div>

                {/* The Universe */}
                <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/5">
                  <h3 className="text-2xl font-light text-center mb-8 text-white uppercase tracking-wider relative inline-block mx-auto w-full">
                    <span className="relative z-10 bg-transparent px-4">The Universe</span>
                    <div className="absolute top-1/2 left-0 w-full h-px bg-accent/20 -z-0"></div>
                  </h3>
                  <div className="space-y-3 font-mono text-sm md:text-base text-white/80">
                    <div className="flex justify-between border-b border-white/5 pb-2"><span>The Big Bang</span> <span className="text-accent text-right">14.7 bya</span></div>
                    <div className="flex justify-between border-b border-white/5 pb-2"><span>Matter Domination</span> <span className="text-accent text-right">14.69 bya</span></div>
                    <div className="flex justify-between border-b border-white/5 pb-2"><span>First Stars</span> <span className="text-accent text-right">14.6 bya</span></div>
                    <div className="flex justify-between border-b border-white/5 pb-2"><span>First Galaxies</span> <span className="text-accent text-right">14.1 bya</span></div>
                    <div className="flex justify-between border-b border-white/5 pb-2"><span>Earth Forms</span> <span className="text-accent text-right">4.55 bya</span></div>
                    <div className="flex justify-between border-b border-white/5 pb-2"><span>First Life</span> <span className="text-accent text-right">3.8 bya</span></div>
                    <div className="flex justify-between border-b border-white/5 pb-2"><span>Multicellular Life</span> <span className="text-accent text-right">1 bya</span></div>
                    <div className="flex justify-between border-b border-white/5 pb-2"><span>Complex Animals</span> <span className="text-accent text-right">550 mya</span></div>
                    <div className="flex justify-between border-b border-white/5 pb-2"><span>Homo Genus</span> <span className="text-accent text-right">2.5 mya</span></div>
                    <div className="flex justify-between"><span>Civilisation</span> <span className="text-accent text-right">7,500 ya</span></div>
                  </div>
                  <ul className="space-y-3 mt-8 text-sm md:text-base text-white/90">
                    <li className="flex items-center justify-between bg-white/5 p-3 rounded"><span>Matter</span> <span className="text-accent font-bold mono">99.999%</span></li>
                    <li className="flex items-center justify-between bg-white/5 p-3 rounded"><span>Stars</span> <span className="text-accent font-bold mono">99.3%</span></li>
                    <li className="flex items-center justify-between bg-white/5 p-3 rounded"><span>Galaxies</span> <span className="text-accent font-bold mono">95.9%</span></li>
                    <li className="flex items-center justify-between bg-white/5 p-3 rounded"><span>Earth</span> <span className="text-accent font-bold mono">30.05%</span></li>
                    <li className="flex items-center justify-between bg-white/5 p-3 rounded"><span>Life</span> <span className="text-accent font-bold mono">25.85%</span></li>
                    <li className="flex items-center justify-between bg-white/5 p-3 rounded"><span>Multicellular</span> <span className="text-accent font-bold mono">6.8%</span></li>
                    <li className="flex items-center justify-between bg-white/5 p-3 rounded"><span>Complex Animals</span> <span className="text-accent font-bold mono">3.74%</span></li>
                    <li className="flex items-center justify-between bg-white/5 p-3 rounded"><span>Homo Genus</span> <span className="text-accent font-bold mono">0.017%</span></li>
                    <li className="flex items-center justify-between bg-accent/10 p-3 rounded border border-accent/20"><span>Civilisation</span> <span className="text-accent font-bold mono">0.00005%</span></li>
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
