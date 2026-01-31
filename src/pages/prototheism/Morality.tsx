import { Link } from 'react-router-dom'
import { Section } from '@/components/Section'

interface MoralityProps {
  hideBackButton?: boolean;
}

export function Morality({ hideBackButton }: MoralityProps) {
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
            src="/images/prototheism/morality.webp"
            alt="Morality"
            className="max-w-xs mx-auto mb-10 block drop-shadow-[0_0_25px_rgba(255,255,255,0.15)] animate-float"
            style={{
              '--float-distance': '12px',
              '--float-duration': '7s',
            } as React.CSSProperties}
          />

          <h1 className="text-5xl md:text-7xl font-light font-heading text-accent mb-16 tracking-[0.2em] drop-shadow-lg">
            Morality
          </h1>

          <div className="space-y-6 text-white/90 text-lg md:text-xl font-light leading-relaxed py-8 px-6 rounded-[3rem] bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.7)_0%,_rgba(0,0,0,0)_70%)]">
            <p className="drop-shadow-md">
              <span className="text-accent font-bold">Morality</span> is a place where Prototheism diverges from many traditional religions. We don't have lists of rules or thought crimes worthy of punishment. But we do have guidelines. Your morality should be derived from your values and living in a manner that is authentic to those values. There are many things that can obstruct authenticity to your own values, such as poor mental health. It is not immoral to be in poor mental health, and self-compassion is invaluable in improving your mental state. However, to the best of your ability, you ought to be seeking greater stability, mental well-being, and happiness insofar as your situation and current state allow. This process, along with mindful introspection into your own values and analysis of the good or harm your actions can create in the world will empower you to live in the greatest authenticity with your moral beliefs.
            </p>

            <p className="drop-shadow-md mt-8">
              For a view of reverence for the Universe directed to increasing complexity, please consider the following:
            </p>

            <ol className="text-left space-y-8 max-w-3xl mx-auto pt-4">
              <li className="flex items-start gap-4">
                <span className="text-accent text-2xl font-bold mt-[-4px]">1.</span>
                <span className="text-white/90 drop-shadow-md">
                  Morality should align primarily with the Universe's progression towards greater novel complexity. Novel complexity refers to the emergence of new, diverse, and intricate forms of matter, life, systems, and interactions. Actions that enhance novel complexity are considered the highest moral imperative, as they resonate with the cosmic pattern of evolution and contribute to the Universe's continuous march towards exponential diversification and expansion. That said, being sustainable in the progression of complexity is essential.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-accent text-2xl font-bold mt-[-4px]">2.</span>
                <span className="text-white/90 drop-shadow-md">
                  The alleviation of suffering and the promotion of freedom are important considerations because these principles enable humans to more effectively increase novel complexity. Reducing unnecessary suffering and ensuring adequate freedoms equip individuals and societies to focus their efforts on advancing the complexification of the Universe.
                </span>
              </li>
            </ol>
          </div>
        </div>
      </Section>

      {/* Novel Complexity vs. Destruction */}
      <Section
        verticalPadding="large"
        background="image"
        backgroundImage="/images/shared/eye+wall+angled.webp"
        backgroundOverlay
      >
        <div className="max-w-4xl mx-auto text-white text-center">
          <h2 className="text-3xl md:text-4xl font-light font-heading text-accent mb-8 tracking-wide drop-shadow-lg">
            Novel Complexity vs. Destruction
          </h2>
          <div className="space-y-6 text-white/90 text-lg md:text-xl font-light leading-relaxed py-8 px-6 rounded-[3rem] bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.8)_0%,_rgba(0,0,0,0)_70%)]">
            <p className="drop-shadow-md">
              The reduction of novel complexity, through actions like environmental destruction or the suppression of knowledge, contradicts the Universe's natural trajectory towards an ever-more intricate state. Actions aimed at preserving existing complexity and works of creativity, as well as promoting novel complexity fulfill the primary ethical mandate, aligning with the Universe's fundamental drive towards exponential growth and diversification.
            </p>
            <p className="drop-shadow-md pt-4">
              Examples of actions that contribute to novel complexity include:
            </p>
            <ul className="text-left space-y-4 max-w-2xl mx-auto">
              <li className="flex items-start gap-4"><span className="text-accent text-2xl mt-0.5">•</span><span className="text-white font-light drop-shadow-md">Pursuing scientific knowledge and technological advancements</span></li>
              <li className="flex items-start gap-4"><span className="text-accent text-2xl mt-0.5">•</span><span className="text-white font-light drop-shadow-md">Engaging in creative endeavors and artistic expression</span></li>
              <li className="flex items-start gap-4"><span className="text-accent text-2xl mt-0.5">•</span><span className="text-white font-light drop-shadow-md">Promoting biodiversity and protecting ecosystems</span></li>
            </ul>
            <p className="drop-shadow-md pt-4">
              Conversely, examples of actions that destroy or suppress novel complexity include:
            </p>
            <ul className="text-left space-y-4 max-w-2xl mx-auto">
              <li className="flex items-start gap-4"><span className="text-accent text-2xl mt-0.5">•</span><span className="text-white font-light drop-shadow-md">Engaging in unsustainable practices that harm the environment</span></li>
              <li className="flex items-start gap-4"><span className="text-accent text-2xl mt-0.5">•</span><span className="text-white font-light drop-shadow-md">Censoring or restricting access to information and ideas</span></li>
              <li className="flex items-start gap-4"><span className="text-accent text-2xl mt-0.5">•</span><span className="text-white font-light drop-shadow-md">Promoting monocultures or homogenization of systems</span></li>
              <li className="flex items-start gap-4"><span className="text-accent text-2xl mt-0.5">•</span><span className="text-white font-light drop-shadow-md">Stifling creativity and individual expression</span></li>
            </ul>
            <p className="drop-shadow-md pt-4">
              These actions are considered detrimental to the primary moral imperative of increasing novel complexity.
            </p>
          </div>
        </div>
      </Section>

      {/* Suffering vs. Well Being */}
      <Section
        verticalPadding="large"
        background="image"
        backgroundImage="/images/prototheism/sacred+wall.webp"
        backgroundOverlay
      >
        <div className="max-w-4xl mx-auto text-white text-center">
          <h2 className="text-3xl md:text-4xl font-light font-heading text-accent mb-8 tracking-wide drop-shadow-lg">
            Suffering vs. Well Being
          </h2>
          <div className="space-y-6 text-white/90 text-lg md:text-xl font-light leading-relaxed py-8 px-6 rounded-[3rem] bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.8)_0%,_rgba(0,0,0,0)_70%)]">
            <p className="drop-shadow-md">
              Inducing unnecessary suffering, whether physical, emotional, or psychological, is degenerate, detracting from the quality of existence for sentient beings and hindering their ability to participate in the Universe's complexification. Alleviating suffering, through acts of kindness, empathy, and support, is inherently moral, improving sentient beings' well-being and enabling their active engagement in promoting cosmic complexity.
            </p>
          </div>
        </div>
      </Section>

      {/* Freedom vs. Subjugation */}
      <Section
        verticalPadding="large"
        background="image"
        backgroundImage="/images/shared/geometry+circle+wall.webp"
        backgroundOverlay
      >
        <div className="max-w-4xl mx-auto text-white text-center">
          <h2 className="text-3xl md:text-4xl font-light font-heading text-accent mb-8 tracking-wide drop-shadow-lg">
            Freedom vs. Subjugation
          </h2>
          <div className="space-y-6 text-white/90 text-lg md:text-xl font-light leading-relaxed py-8 px-6 rounded-[3rem] bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.8)_0%,_rgba(0,0,0,0)_70%)]">
            <p className="drop-shadow-md">
              Freedom refers to the ability of sentient beings to make choices and pursue their own paths without undue interference or coercion from others. Actions that promote individual freedom, such as protecting civil liberties and fostering self-determination, are considered moral as they enable active engagement in promoting cosmic complexity.
            </p>
            <p className="drop-shadow-md">
              However, freedom is not absolute and must be balanced against the freedom of others. When the exercise of one individual's freedom infringes upon the freedom of another, it becomes subjugation and is considered immoral. Actions that unnecessarily limit the freedom of others, such as oppression, exploitation, or unjust restrictions, are inherently immoral.
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
          <div className="space-y-6 text-white/90 text-lg md:text-xl font-light leading-relaxed py-8 px-6 rounded-[3rem] bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.7)_0%,_rgba(0,0,0,0)_70%)]">
            <p className="drop-shadow-md">
              No universal moral system can perfectly address all situations due to the Universe's inherent complexity, which will ideally be further complexifying at an exponential pace. Ethical decision-making requires a nuanced approach, considering the specific context and potential consequences of each situation in light of the concerns that would damage existing complexity and promote or suppress the development of novel complexity. Ongoing reflection, dialogue, and refinement of moral principles are necessary to ensure that the understanding and application of morality align with the Universe's fundamental trajectory towards ever-greater novel complexity, as elaborated in the "<Link to="/prototheism/reverence" className="text-accent hover:text-white transition-colors border-b border-accent/30 hover:border-white">Reverence</Link>" section.
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
