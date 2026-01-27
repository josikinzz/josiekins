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
    <>
      <Section
        verticalPadding="large"
        background="image"
        backgroundImage="/images/shared/background.webp"
        backgroundOverlay
        bottomFadeOpacity={1}
      >
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="max-w-[200px] mx-auto mb-8">
            <img
              src="/images/prototheism/protheism+josicore+logo.webp"
              alt="Prototheism Logo"
              className="w-full h-auto"
            />
          </div>
          <h1 className="text-4xl font-bold text-accent mb-8">Prototheism (v0.1)</h1>

          <div className="space-y-6 text-white/80">
            <p>
              Prototheism is a comprehensive <a href="https://github.com/elliotec/prototheism" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">open-source</a> religion that contains minimal delusion and superstition and is free of dogma. We aim to distill a prepackaged spiritual framework by identifying the consistent tenets foundational to most religions, which has resulted in a modifiable and self-aware system of belief.
            </p>
            <p>
              Despite the diverse mythologies present in traditional religions, they share many consistent tenets that transcend cultural and temporal boundaries. This universality suggests that people throughout history have pondered similar existential questions, often answering them with narratives constrained by their era's understanding. By identifying these universal tenets and replacing their varied mythological content with naturalism, rationality, and logic, we have begun the ongoing process of uncovering the original or primal religion embedded within the universe's structure. This is the foundation upon which all other religions are at least partially built.
            </p>
            <p>
              Prototheism does not take itself too seriously and openly welcomes criticism, mockery, and collaboration. By encouraging individuals to <a href="https://github.com/elliotec/prototheism" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">fork and modify Prototheism</a>, the project invites a collaborative approach to spirituality, allowing for personal adaptation and community input.
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
        <h2 className="text-3xl font-bold text-center text-accent mb-12">TENETS</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tenets.map((tenet) => (
            <Link
              key={tenet.name}
              to={tenet.href}
              className="group flex flex-col items-center"
            >
              <div className="max-w-[200px] mx-auto mb-4 transition-transform duration-300 group-hover:scale-105">
                <img
                  src={tenet.image}
                  alt={tenet.name}
                  className="w-full h-auto"
                />
              </div>
              <h3 className="text-lg font-semibold text-accent group-hover:underline">
                {tenet.name.toUpperCase()}
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
        <div className="max-w-3xl mx-auto text-white">
          <h2 className="text-3xl font-bold text-accent mb-8">Etymology</h2>

          <p className="text-white/80 mb-8">
            The term "<span className="text-accent font-bold">prototheism</span>" is a compound word derived from the prefix "proto-" and the suffix "-theism." This combination of terms serves to encapsulate the core concept of Prototheism: the pursuit of a foundational or original belief system that underlies the various religious and spiritual frameworks that have emerged throughout human history.
          </p>

          <h4 className="text-xl font-semibold text-white mb-4">Proto-</h4>
          <ol className="list-decimal list-inside space-y-2 ml-4 text-white/80 mb-8">
            <li>
              <span className="text-accent font-bold">First</span>: Signifying the original or primary.
            </li>
            <li>
              <span className="text-accent font-bold">(Linguistics, Genetics)</span> Refers to the most recent common ancestor (often hypothetical) of a group, exemplifying a foundational origin.
              <ul className="list-disc list-inside ml-8 mt-2">
                <li>Example: "All Indo-European languages, from English to Persian, descend from Proto-Indo-European."</li>
              </ul>
            </li>
          </ol>

          <h4 className="text-xl font-semibold text-white mb-4">Theism -</h4>
          <ol className="list-decimal list-inside space-y-2 ml-4 text-white/80">
            <li>
              <span className="text-accent font-bold">(Belief System)</span> The belief in the existence of at least one deity.
            </li>
            <li>
              <span className="text-accent font-bold">(Belief System)</span> The belief in a personal creator god, goddess, gods, and/or goddesses who are present and actively involved in the governance and organization of the world and the universe, often revealed to humanity through revelation.
            </li>
          </ol>
        </div>
      </Section>

      {/* Source Section */}
      <Section
        verticalPadding="large"
        background="image"
        backgroundImage="/images/shared/geometry+circle+wall.webp"
        backgroundOverlay
      >
        <div className="max-w-3xl mx-auto text-white">
          <h2 className="text-3xl font-bold text-accent mb-8">Source</h2>

          <div className="space-y-6 text-white/80">
            <p>
              In 2012-2013, during my teenage years, I (Josie Kins) experienced complex noetic epiphanies while under the influence of Ayahuasca. These supposed insights compelled and instructed me to write this religion. During this period, excessive tripping had induced a chronic over-activation of my neurological spirituality drive, causing me to compulsively formulate metaphysical frameworks while simultaneously struggling to conceal my power level. This state of mind, commonly referred to as McKenna Syndrome within the literature, persisted for approximately two years. As a result, I found myself obsessively attempting to follow the instructions and insights received from Ayahuasca by formulating its teachings into a written document.
            </p>
            <p>
              However, upon reviewing the extensive writings formulated around this idea, I unsurprisingly found that the quality of my schizoramblings was insufficient for me to confidently publish them online. Consequently, I set the project aside, prioritizing my Subjective Effect Documentation instead. I figured that I would eventually complete the project sometime in my 30s. Now, 12 years later in 2024, having reached my 30s, I suddenly experienced an unplanned urge to finally bring this project to fruition. This is because the endeavor had become a component of an elaborate video on our YouTube channel, in which I critically analyze and rank each supposed metaphysical "truth" that I have "learned" from my psychedelic experiences.
            </p>
            <p>
              Despite the absurdity of me writing a religion taught to me by a hallucinogenic drug, I am still acutely aware of the limitations of the human mind in grasping the true nature of reality. The human brain is a fucked up pile of electrified meat that simply cannot be trusted. With that in mind, I assume that this religion is certainly not the absolute truth. However, for now at least, I have made the conscious decision to adopt it as my framework and pretend that it is true regardless.
            </p>
          </div>

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
      </Section>
    </>
  )
}
