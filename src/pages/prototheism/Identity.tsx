import { Link } from 'react-router-dom'
import { Section } from '@/components/Section'

interface IdentityProps {
  hideBackButton?: boolean;
}

export function Identity({ hideBackButton }: IdentityProps) {
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
            src="/images/prototheism/identity.webp"
            alt="Identity"
            className="max-w-xs mx-auto mb-10 block drop-shadow-[0_0_25px_rgba(255,255,255,0.15)] animate-float"
            style={{
              '--float-distance': '12px',
              '--float-duration': '7s',
            } as React.CSSProperties}
          />

          <h1 className="text-5xl md:text-7xl font-light font-heading text-accent mb-16 tracking-[0.2em] drop-shadow-lg">
            Identity
          </h1>

          <div className="space-y-6 text-white/90 text-lg md:text-xl font-light leading-relaxed py-8 px-6 rounded-[3rem] bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.7)_0%,_rgba(0,0,0,0)_70%)]">
            <p className="drop-shadow-md">
              The concept of <span className="text-accent font-bold">identity</span>, or the sense of self, is a fundamental aspect of human experience. Individuals typically perceive themselves as separate entities, distinct from the world around them. However, the nature of identity is not as simple or static as it may appear at first glance. Even in the evolution between childhood and adulthood and changes in life, it becomes self-evident that, while we may have general characteristics that differ from others, the components of our identities vary and fluctuate over time.
            </p>
            <p className="drop-shadow-md">
              This doctrine explores the various levels of identity that challenge the notion of a separate self and the illusion of separation that characterizes the perception of most sentient beings.
            </p>
            <p className="drop-shadow-md">
              The differing states of identity can be mapped out into a spectrum of levels, each representing an increasing degree of identification with various systems, both internal and external. At one end of the spectrum is a total absence of self-attribution, where there is no illusory separation because there is no "self" to be separate from or attached to anything in the first place. At the other end is a complete unity between the self and all known systems, where the self has expanded to encompass all things, including one's own mind, body, and the entire external world.
            </p>
            <p className="drop-shadow-md">
              Examining these levels and the illusion of separation leads to a deeper understanding of the nature of the self and an increased potential for direct subjective experiences of these differing states of identity. This can ultimately lead to a less delusional worldview, one that recognizes the fundamental interconnectedness of all things.
            </p>
          </div>
        </div>
      </Section>

      {/* Level 1 */}
      <Section
        verticalPadding="large"
        background="image"
        backgroundImage="/images/prototheism/sacred+wall.webp"
        backgroundOverlay
      >
        <div className="max-w-4xl mx-auto text-white text-center">
          <h2 className="text-3xl md:text-4xl font-light font-heading text-accent mb-8 tracking-wide drop-shadow-lg">
            1. Total absence of attributed identity
          </h2>
          <div className="space-y-6 text-white/90 text-lg md:text-xl font-light leading-relaxed py-8 px-6 rounded-[3rem] bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.8)_0%,_rgba(0,0,0,0)_70%)]">
            <p className="drop-shadow-md">
              The lowest level of identity can be described as the complete absence of it. In the medical literature, this is referred to as ''depersonalization''. It is defined as an anomaly of self-awareness that can occur as a result of prolonged stress or while under the influence of hallucinogenic substances, particularly dissociatives. It consists of a feeling of watching oneself act as they normally would while having no control over a situation due to an absence of a feeling of agency.
            </p>
            <p className="drop-shadow-md">
              During this state, one may feel like they are on autopilot and that the world has become vague, dream-like, less real, or lacking in significance (derealization). Individuals who experience depersonalization feel divorced from their own personal physicality and identity by sensing their body sensations, feelings, emotions and behaviors as not belonging to them. Often a person who has experienced depersonalization claims that things seem unreal or hazy during this state. This is because during depersonalization, one lacks a feeling of identity which results in being incapable of feeling present during a situation.
            </p>
            <p className="drop-shadow-md">
              It is perfectly normal for many people to slip into this state temporarily, often without even realizing it. For example, many people often note that they enter a detached state of autopilot during stressful situations or when performing monotonous, routine tasks, such as driving. Though degrees of temporary depersonalization can happen to anyone, chronic depersonalization is more related to individuals who have experienced severe trauma or prolonged stress or anxiety.
            </p>
          </div>
        </div>
      </Section>

      {/* Level 2 */}
      <Section
        verticalPadding="large"
        background="image"
        backgroundImage="/images/shared/eye+wall+angled.webp"
        backgroundOverlay
      >
        <div className="max-w-4xl mx-auto text-white text-center">
          <h2 className="text-3xl md:text-4xl font-light font-heading text-accent mb-8 tracking-wide drop-shadow-lg">
            2. Self-contained separate identity
          </h2>
          <div className="space-y-6 text-white/90 text-lg md:text-xl font-light leading-relaxed py-8 px-6 rounded-[3rem] bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.8)_0%,_rgba(0,0,0,0)_70%)]">
            <p className="drop-shadow-md">
              The second level of identity can be described as feeling as if one is a consciousness located within the body or brain, approaching and interacting with a distinctly separate external environment. This sensation is usually accompanied with a sense of free will or agency which results in one feeling as if their decision-making processes are arising from an internal source, unlike objects in their surroundings which only act as a result of external forces.
            </p>
            <p className="drop-shadow-md">
              This is usually assumed by most people to be the only possible state of being.
            </p>
          </div>
        </div>
      </Section>

      {/* Level 3 */}
      <Section
        verticalPadding="large"
        background="image"
        backgroundImage="/images/shared/geometry+circle+wall.webp"
        backgroundOverlay
      >
        <div className="max-w-4xl mx-auto text-white text-center">
          <h2 className="text-3xl md:text-4xl font-light font-heading text-accent mb-8 tracking-wide drop-shadow-lg">
            3. Unity between the self and specific external systems
          </h2>
          <div className="space-y-6 text-white/90 text-lg md:text-xl font-light leading-relaxed py-8 px-6 rounded-[3rem] bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.8)_0%,_rgba(0,0,0,0)_70%)]">
            <p className="drop-shadow-md">
              The third level of identity is the feeling that one's identity has come to include something within the immediate external environment, particularly something that is currently the subject of a person's attention. This creates a sensation of becoming "connected to", "one with", "the same as", or "unified" with that thing.
            </p>
            <p className="drop-shadow-md mb-6">
              Common examples of this level include:
            </p>
            <ul className="text-left space-y-6 max-w-2xl mx-auto">
              <li className="flex items-start gap-4">
                <span className="text-accent text-2xl mt-0.5">•</span>
                <span className="text-white drop-shadow-md">Becoming unified with and identifying with a specific object that one is interacting with, such as riding a bicycle.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-accent text-2xl mt-0.5">•</span>
                <span className="text-white drop-shadow-md">Becoming unified with and identifying with another person or multiple people. This may happen during intimacy or when in a well-unified team performing tasks that require intense collaboration to succeed.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-accent text-2xl mt-0.5">•</span>
                <span className="text-white drop-shadow-md">Becoming unified with and identifying with large crowds of people. This is particularly common at raves, music festivals, and religious events.</span>
              </li>
            </ul>
            <p className="drop-shadow-md mt-6">
              This is at odds with someone's ego (though not identity) expanding to include someone else. Ego-based sense of ownership over others denies others their individuality, such as a parent tying their ego to their child to the point that they see their child only or primarily as a reflection of themselves and not as another individual who may have their own preferences, desires, and struggles. Instead of feeling like multiple individuals uniting, it is one person's ego perceiving their own identity as subsuming someone else's.
            </p>
          </div>
        </div>
      </Section>

      {/* Level 4 */}
      <Section
        verticalPadding="large"
        background="image"
        backgroundImage="/images/prototheism/sacred+wall.webp"
        backgroundOverlay
      >
        <div className="max-w-4xl mx-auto text-white text-center">
          <h2 className="text-3xl md:text-4xl font-light font-heading text-accent mb-8 tracking-wide drop-shadow-lg">
            4. Identifying with all perceivable external systems
          </h2>
          <div className="space-y-6 text-white/90 text-lg md:text-xl font-light leading-relaxed py-8 px-6 rounded-[3rem] bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.7)_0%,_rgba(0,0,0,0)_70%)]">
            <p className="drop-shadow-md">
              The fourth level of identity is the feeling that one's sense of self includes the entirety of their immediately perceivable external environment. This creates a sensation that the boundaries between a person and the world around them have been stripped down, resulting in the compelling perspective that someone is their environment, that the environment therefore has a consciousness, and this conscious environment is now experiencing itself through the point of view of the person's individual sensory awareness. This level may be experienced during altered states of consciousness induced by meditation, spiritual practices, or drugs, though some people may also experience it spontaneously.
            </p>
            <p className="drop-shadow-md">
              This level introduces a key component of high-level identity - once a person's sense of self has become unified with their surroundings, their experience of interacting with those surroundings is fundamentally transformed. While undergoing a state of unity with the currently perceivable environment, interacting with an external object can feel like a whole unified system is autonomously acting on itself. For example, if a person experiencing this level of unity is thirsty, it doesn't feel like a person is going to get water. Instead, it feels like the overall system has identified a requirement within one of its subsystems, and is therefore harmoniously rearranging itself to fulfill the requirement.
            </p>
          </div>
        </div>
      </Section>

      {/* Level 5 */}
      <Section
        verticalPadding="large"
        background="image"
        backgroundImage="/images/shared/eye+wall+angled.webp"
        backgroundOverlay
      >
        <div className="max-w-4xl mx-auto text-white text-center">
          <h2 className="text-3xl md:text-4xl font-light font-heading text-accent mb-8 tracking-wide drop-shadow-lg">
            5. Identifying with all known external systems
          </h2>
          <div className="space-y-6 text-white/90 text-lg md:text-xl font-light leading-relaxed py-8 px-6 rounded-[3rem] bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.7)_0%,_rgba(0,0,0,0)_70%)]">
            <p className="drop-shadow-md">
              At the highest level, one's identity can feel as if it is simultaneously the entirety of the perceivable environment and all known concepts that exist outside of it. This will typically include all of humanity, nature, and the Universe in Its complete entirety. This feeling is commonly interpreted as "becoming one with the Universe." Like the previous level, this primarily occurs during altered states of consciousness induced by meditation, spiritual practices, or drugs.
            </p>
            <p className="drop-shadow-md">
              When experienced, this effect creates the sudden perspective that one is not a separate agent approaching an external reality but is instead the entire Universe as a whole experiencing Itself, exploring Itself, and performing actions upon Itself through a specific point in space and time—specifically, the person experiencing this state. People who undergo this experience commonly interpret it as the removal of a deeply embedded illusion, with the revelation often described as some sort of profound "awakening" or "enlightenment."
            </p>
            <p className="drop-shadow-md mb-6">
              Many reported experiences of this level of identity share common themes of a religious and metaphysical nature. Some examples include:
            </p>
            <ul className="text-left space-y-6 max-w-2xl mx-auto">
              <li className="flex items-start gap-4">
                <span className="text-accent text-2xl mt-0.5">•</span>
                <span className="text-white drop-shadow-md">A perspective which feels personally responsible for the self-designing, planning, and implementation of every single specific detail and plot element of one's personal life, the history of humanity, and the Universe as a whole. This naturally includes personal responsibility for humanity's sufferings and its flaws, but also includes its acts of love and achievements.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-accent text-2xl mt-0.5">•</span>
                <span className="text-white drop-shadow-md">The sudden and total acceptance of death as a fundamental component of one's life. This is because death is no longer felt to be the destruction of oneself but simply the end of this specific point of conscious awareness, the vast majority of which has always existed and will continue to exist and live on through everything else in which it resides.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-accent text-2xl mt-0.5">•</span>
                <span className="text-white drop-shadow-md">The subjective perspective that one's conception of "god" or "godhood" is identical or similar to the nature of existence and the totality of its contents, including oneself.</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Illusion & Multiplicity Section */}
      {/* Understanding the Illusion */}
      <Section
        verticalPadding="large"
        background="image"
        backgroundImage="/images/shared/geometry+circle+wall.webp"
        backgroundOverlay
      >
        <div className="max-w-4xl mx-auto text-white text-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-light font-heading text-accent mb-8 tracking-wide drop-shadow-lg">
              Understanding the Illusion
            </h2>
            <div className="space-y-6 text-white/90 text-lg md:text-xl font-light leading-relaxed py-8 px-6 rounded-[3rem] bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.7)_0%,_rgba(0,0,0,0)_70%)]">
              <p className="drop-shadow-md">
                Intermediate levels of identity (levels 2 and 3) involve varying degrees of perceived separation between the self and the external world. These states, while progressively more inclusive, are characterized by separation that can be either <span className="text-accent font-bold">delusional</span> or <span className="text-accent font-bold">illusory</span>.
              </p>
              <p className="drop-shadow-md">
                <span className="text-accent font-bold">Delusional separation</span> occurs when an individual believes with conviction that their identity is separate from the external world, that they are fully self-contained.
              </p>
              <p className="drop-shadow-md">
                <span className="text-accent font-bold">Illusory separation</span> is when an individual perceives a sense of separation but intellectually understands it to be untrue. In this case, the person recognizes that the feeling of separation is a product of their mind and does not reflect the fundamental nature of reality. This understanding allows them to navigate the intermediate levels of identity without becoming overly attached to the false notion of a separate self.
              </p>
              <p className="drop-shadow-md">
                While the use of hallucinogens, particularly psychedelics, is a common way of experiencing levels 4 and 5, it is not a reliable method, particularly if someone is specifically hoping to experience them. The realization of the illusory nature of the separate self can also be attained through various means, such as meditation, introspection, and philosophical inquiry.
              </p>
              <p className="drop-shadow-md">
                Living a reasonable life does not require achieving or sustaining any particular state of identity; instead, it involves recognizing and integrating the understanding of the illusory nature of the separate self into one's worldview. By acknowledging the delusional nature of intermediate levels of identity while striving to minimize the illusion of separation, one can cultivate a more authentic understanding of the self and their place within the larger fabric of existence.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Multiple Identities */}
      <Section
        verticalPadding="large"
        background="image"
        backgroundImage="/images/prototheism/sacred+wall.webp"
        backgroundOverlay
        className="!pb-0"
      >
        <div className="max-w-4xl mx-auto text-white text-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-light font-heading text-accent mb-8 tracking-wide drop-shadow-lg">
              Multiple Identities
            </h2>
            <div className="space-y-6 text-white/90 text-lg md:text-xl font-light leading-relaxed py-8 px-6 rounded-[3rem] bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.7)_0%,_rgba(0,0,0,0)_70%)]">
              <p className="drop-shadow-md">
                Human brains are capable of generating multiple identities within their minds simultaneously. This phenomenon is evident in individuals with dissociative identity disorder (DID), during interactions with fully formed dream characters and hallucinatory entities, and through the phenomena of intentionally created tulpas.
              </p>
              <p className="drop-shadow-md">
                Although each identity may well experience varying degrees of separation from the external world and other agents. Regardless of the origin, each of the potential identities within a person's minds would each be individually placable somewhere on the spectrum of identity levels.
              </p>
            </div>
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
