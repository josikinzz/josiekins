import { Link } from 'react-router-dom'
import { Section } from '@/components/Section'

const tenets = [
  { name: 'Faith', href: '/prototheism/faith', image: '/images/prototheism/faith.webp' },
  { name: 'God', href: '/prototheism/god', image: '/images/prototheism/god.webp' },
  { name: 'Creation', href: '/prototheism/creation', image: '/images/prototheism/creation.webp' },
  { name: 'Identity', href: '/prototheism/identity', image: '/images/prototheism/identity.webp' },
  { name: 'Death', href: '/prototheism/death', image: '/images/prototheism/death.webp' },
  { name: 'Morality', href: '/prototheism/morality', image: '/images/prototheism/morality.webp' },
  { name: 'Suffering', href: '/prototheism/suffering', image: '/images/prototheism/suffering.webp' },
  { name: 'Purpose', href: '/prototheism/purpose', image: '/images/prototheism/purpose.webp' },
  { name: 'Reverence', href: '/prototheism/reverence', image: '/images/prototheism/reverance.webp' },
]

export function Prototheism() {
  return (
    <div className="">
      <Section
        verticalPadding="large"
        background="image"
        backgroundImage="/images/shared/background.webp"
        backgroundOverlay
        bottomFadeOpacity={1}
        headerOffset
      >
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <img
            src="/images/prototheism/protheism+josicore+logo.webp"
            alt="Prototheism Logo"
            className="max-w-xs mx-auto mb-10 block drop-shadow-[0_0_25px_rgba(255,255,255,0.15)] animate-float"
            style={{
              '--float-distance': '12px',
              '--float-duration': '7s',
            } as React.CSSProperties}
          />

          <div className="relative mb-8">
            <h1 className="text-5xl md:text-7xl font-light font-heading text-accent tracking-[0.2em] drop-shadow-lg inline-block">
              Prototheism
            </h1>
            <span className="absolute -top-2 -right-16 text-xl text-white/60 font-sans font-light tracking-normal select-none transform translate-x-2 translate-y-1">
              (v0.1)
            </span>
          </div>

          <div className="space-y-6 text-white/90 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto py-6 px-6 rounded-[3rem] bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.7)_0%,_rgba(0,0,0,0)_70%)]">
            <p className="drop-shadow-md">
              Prototheism is a comprehensive <a href="https://github.com/elliotec/prototheism" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-white transition-colors border-b border-accent/30 hover:border-white">open-source</a> religion that contains minimal delusion and superstition and is free of dogma. We aim to distill a prepackaged spiritual framework by identifying the consistent tenets foundational to most religions, which has resulted in a modifiable and self-aware system of belief.
            </p>
            <p className="drop-shadow-md">
              Despite the diverse mythologies present in traditional religions, they share many consistent tenets that transcend cultural and temporal boundaries. This universality suggests that people throughout history have pondered similar existential questions, often answering them with narratives constrained by their era's understanding. By identifying these universal tenets and replacing their varied mythological content with naturalism, rationality, and logic, we have begun the ongoing process of uncovering the original or primal religion embedded within the universe's structure. This is the foundation upon which all other religions are at least partially built.
            </p>
            <p className="drop-shadow-md">
              Prototheism does not take itself too seriously and openly welcomes criticism, mockery, and collaboration. By encouraging individuals to <a href="https://github.com/elliotec/prototheism" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-white transition-colors border-b border-accent/30 hover:border-white">fork and modify Prototheism</a>, the project invites a collaborative approach to spirituality, allowing for personal adaptation and community input.
            </p>
          </div>
        </div>
      </Section>

      <Section
        verticalPadding="large"
        background="image"
        backgroundImage="/images/shared/eye+thingy+cool.webp"
        backgroundOverlay
      >
        <h2 className="text-4xl md:text-5xl font-light font-heading text-center text-accent mb-20 tracking-[0.2em] drop-shadow-lg">
          Tenets
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {tenets.map((tenet) => (
            <Link
              key={tenet.name}
              to={tenet.href}
              className="group flex flex-col items-center p-4 transition-all duration-300"
            >
              <div className="max-w-[220px] mx-auto mb-8 transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:drop-shadow-[0_0_30px_rgba(var(--accent),0.4)]">
                <img
                  src={tenet.image}
                  alt={tenet.name}
                  className="w-full h-auto"
                />
              </div>
              <h3 className="text-2xl font-bold font-heading text-accent tracking-[0.15em] group-hover:text-white transition-colors drop-shadow-md">
                {tenet.name}
              </h3>
            </Link>
          ))}
        </div>
      </Section>

      {/* Etymology Section */}
      <Section
        verticalPadding="large"
        background="image"
        backgroundImage="/images/shared/eye+wall+angled.webp"
        backgroundOverlay
      >
        <div className="max-w-4xl mx-auto text-white">
          <h2 className="text-4xl md:text-5xl font-light font-heading text-center text-accent mb-20 tracking-[0.2em] drop-shadow-lg">
            Etymology
          </h2>

          <div className="space-y-12 py-10 px-6 rounded-[3rem] bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.8)_0%,_rgba(0,0,0,0)_70%)]">
            <p className="text-white/90 text-xl font-light leading-relaxed text-center drop-shadow-md">
              The term "<span className="text-accent font-bold">prototheism</span>" is a compound word derived from the prefix "proto-" and the suffix "-theism." This combination of terms serves to encapsulate the core concept of Prototheism: the pursuit of a foundational or original belief system that underlies the various religious and spiritual frameworks that have emerged throughout human history.
            </p>

            <div className="grid md:grid-cols-2 gap-10 mt-12">
              <div className="space-y-4">
                <h4 className="text-3xl font-light font-heading text-accent mb-6 tracking-widest text-center md:text-left">Proto-</h4>
                <ol className="space-y-6 text-white/80 font-light text-lg">
                  <li className="flex gap-4">
                    <span className="text-accent font-bold text-xl">1.</span>
                    <div>
                      <span className="text-accent font-medium">First</span>: Signifying the original or primary.
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-accent font-bold text-xl">2.</span>
                    <div>
                      <span className="text-accent font-medium">(Linguistics, Genetics)</span> Refers to the most recent common ancestor (often hypothetical) of a group, exemplifying a foundational origin.
                      <div className="mt-2 text-white/50 text-base italic pl-4 border-l border-white/10">
                        "All Indo-European languages, from English to Persian, descend from Proto-Indo-European."
                      </div>
                    </div>
                  </li>
                </ol>
              </div>

              <div className="space-y-4">
                <h4 className="text-3xl font-light font-heading text-accent mb-6 tracking-widest text-center md:text-left">Theism -</h4>
                <ol className="space-y-6 text-white/80 font-light text-lg">
                  <li className="flex gap-4">
                    <span className="text-accent font-bold text-xl">1.</span>
                    <div>
                      <span className="text-accent font-medium">(Belief System)</span> The belief in the existence of at least one deity.
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-accent font-bold text-xl">2.</span>
                    <div>
                      <span className="text-accent font-medium">(Belief System)</span> The belief in a personal creator god, goddess, gods, and/or goddesses who are present and actively involved in the governance and organization of the world and the universe, often revealed to humanity through revelation.
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Source Section */}
      <Section
        verticalPadding="large"
        background="image"
        backgroundImage="/images/shared/geometry+circle+wall.webp"
        backgroundOverlay
        className="!pb-0"
      >
        <div className="max-w-4xl mx-auto text-white">
          <h2 className="text-4xl md:text-5xl font-light font-heading text-center text-accent mb-16 tracking-[0.2em] drop-shadow-lg">
            Source
          </h2>

          <div className="space-y-8 text-white/90 text-lg md:text-xl font-light leading-relaxed py-12 px-6 rounded-[3rem] bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.8)_0%,_rgba(0,0,0,0)_70%)]">
            <p className="drop-shadow-md">
              In 2012-2013, during my teenage years, I (Josie Kins) experienced complex noetic epiphanies while under the influence of Ayahuasca. These supposed insights compelled and instructed me to write this religion. During this period, excessive tripping had induced a chronic over-activation of my neurological spirituality drive, causing me to compulsively formulate metaphysical frameworks while simultaneously struggling to conceal my power level. This state of mind, commonly referred to as McKenna Syndrome within the literature, persisted for approximately two years. As a result, I found myself obsessively attempting to follow the instructions and insights received from Ayahuasca by formulating its teachings into a written document.
            </p>
            <p className="drop-shadow-md">
              However, upon reviewing the extensive writings formulated around this idea, I unsurprisingly found that the quality of my schizoramblings was insufficient for me to confidently publish them online. Consequently, I set the project aside, prioritizing my Subjective Effect Documentation instead. I figured that I would eventually complete the project sometime in my 30s. Now, 12 years later in 2024, having reached my 30s, I suddenly experienced an unplanned urge to finally bring this project to fruition. This is because the endeavor had become a component of an elaborate video on our YouTube channel, in which I critically analyze and rank each supposed metaphysical "truth" that I have "learned" from my psychedelic experiences.
            </p>
            <p className="drop-shadow-md">
              Despite the absurdity of me writing a religion taught to me by a hallucinogenic drug, I am still acutely aware of the limitations of the human mind in grasping the true nature of reality. The human brain is a fucked up pile of electrified meat that simply cannot be trusted. With that in mind, I assume that this religion is certainly not the absolute truth. However, for now at least, I have made the conscious decision to adopt it as my framework and pretend that it is true regardless.
            </p>
          </div>

          {/* McKenna Syndrome Banner */}
          <div className="max-w-xl mx-auto mt-20">
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
