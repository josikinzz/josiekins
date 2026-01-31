import { Link } from 'react-router-dom'
import { Section } from '@/components/Section'

interface SufferingProps {
  hideBackButton?: boolean;
}

export function Suffering({ hideBackButton }: SufferingProps) {
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
            src="/images/prototheism/suffering.webp"
            alt="Suffering"
            className="max-w-xs mx-auto mb-10 block drop-shadow-[0_0_25px_rgba(255,255,255,0.15)] animate-float"
            style={{
              '--float-distance': '12px',
              '--float-duration': '7s',
            } as React.CSSProperties}
          />

          <h1 className="text-5xl md:text-7xl font-light font-heading text-accent mb-16 tracking-[0.2em] drop-shadow-lg">
            Suffering
          </h1>

          <div className="space-y-6 text-white/90 text-lg md:text-xl font-light leading-relaxed py-8 px-6 rounded-[3rem] bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.7)_0%,_rgba(0,0,0,0)_70%)]">
            <p className="drop-shadow-md">
              It's typical for religions to have some kind of explanation for suffering - often that it is a punishment, a result of evil forces, or even desirable when experienced as a show of piety or as an opportunity to demonstrate piety through emotional fortitude. Prototheism rejects all views of suffering that might have an effect of social control.
            </p>
            <p className="drop-shadow-md">
              Pain, distress, and hardship are inevitable parts of existence for all sentient beings. A refusal to accept this reality only increases <span className="text-accent font-bold">suffering</span>. Instead, one should strive to live a life that is "mostly pleasant," acknowledging the inevitability of suffering without trying to escape it.
            </p>
            <p className="drop-shadow-md">
              The following should be practiced to responsibly promote enjoyment and satisfaction with one's existence while reducing suffering.
            </p>
          </div>
        </div>
      </Section>

      {/* Acceptance of the Nature of Time */}
      <Section
        verticalPadding="large"
        background="image"
        backgroundImage="/images/prototheism/sacred+wall.webp"
        backgroundOverlay
      >
        <div className="max-w-4xl mx-auto text-white text-center">
          <h2 className="text-3xl md:text-4xl font-light font-heading text-accent mb-8 tracking-wide drop-shadow-lg">
            Acceptance of the Nature of Time
          </h2>
          <div className="space-y-6 text-white/90 text-lg md:text-xl font-light leading-relaxed py-8 px-6 rounded-[3rem] bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.8)_0%,_rgba(0,0,0,0)_70%)]">
            <p className="drop-shadow-md">
              As discussed in the <Link to="/prototheism/death" className="text-accent hover:text-white transition-colors border-b border-accent/30 hover:border-white">Death tenet</Link>, our experience of time can result in a feeling of loss when things or people we care about no longer exist in our subjective present. However, we should acknowledge that those things did exist and therefore will always exist even if they are not with us, and we should allow that understanding to help us achieve greater peace.
            </p>
            <p className="drop-shadow-md">
              On the other side of the coin, we should accept that new moments bring changes. It can be good to preserve things (art, culture, knowledge, practices, etc), but that should be in the interest of bringing those things into new moments and circumstances, not to deny the force of time.
            </p>
            <p className="drop-shadow-md">
              Causality, to the best of our understanding, does move in one direction, which is the direction in which we subjectively experience time. Part of positively accepting the nature of time is to attempt to make our actions affect later moments in a positive way.
            </p>
            <p className="drop-shadow-md">
              To restate, nothing that has ever existed is ever truly gone, we must accept the inevitability of change, and we should endeavor to have our actions affect other moments positively.
            </p>
          </div>
        </div>
      </Section>

      {/* Finding Purpose */}
      <Section
        verticalPadding="large"
        background="image"
        backgroundImage="/images/shared/eye+wall+angled.webp"
        backgroundOverlay
      >
        <div className="max-w-4xl mx-auto text-white text-center">
          <h2 className="text-3xl md:text-4xl font-light font-heading text-accent mb-8 tracking-wide drop-shadow-lg">
            Finding Purpose
          </h2>
          <div className="space-y-6 text-white/90 text-lg md:text-xl font-light leading-relaxed py-8 px-6 rounded-[3rem] bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.8)_0%,_rgba(0,0,0,0)_70%)]">
            <p className="drop-shadow-md">
              A lack of sense of purpose is a detriment to the human psyche. It is no moral failing to lack a sense of purpose, but one ought to seek one when possible. A sense of purpose provides a "reason why" in life.
            </p>
            <p className="drop-shadow-md">
              A sense of purpose does not need to be an individual overarching goal, though it might be. Overcoming obstacles, pursuing enjoyable hobbies, finding or participating in communities, having an impact on the people and world around you, having novel experiences, finding answers or knowledge - all of these might factor into a person's reason for being. Your sense of purpose should be determined by a combination of introspection, extrospection, and interspection: analyses of yourself, the world around you, and the connections and interactions between.
            </p>
            <p className="drop-shadow-md">
              As an adherent of Prototheism, a sense of purpose should include contemplation and critical analysis of Prototheism itself, as detailed in the <Link to="/prototheism/purpose" className="text-accent hover:text-white transition-colors border-b border-accent/30 hover:border-white">Purpose tenet</Link>.
            </p>
          </div>
        </div>
      </Section>

      {/* Building Community */}
      <Section
        verticalPadding="large"
        background="image"
        backgroundImage="/images/shared/geometry+circle+wall.webp"
        backgroundOverlay
      >
        <div className="max-w-4xl mx-auto text-white text-center">
          <h2 className="text-3xl md:text-4xl font-light font-heading text-accent mb-8 tracking-wide drop-shadow-lg">
            Building Community
          </h2>
          <div className="space-y-6 text-white/90 text-lg md:text-xl font-light leading-relaxed py-8 px-6 rounded-[3rem] bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.8)_0%,_rgba(0,0,0,0)_70%)]">
            <p className="drop-shadow-md">
              Lacking a community is one of the greatest contributors to mental health struggles. In the modern world, finding community can be a difficult task, to the point that many at least experience periods in which it doesn't feel worthwhile to pursue community. However, for the vast majority of people, it is worth it. The sense that it might not be worth it may be due to a lack of self-compassion or self-respect, and both of these should be challenged and overcome to the best of your ability.
            </p>
            <p className="drop-shadow-md">
              Community participation should include spending both meaningful and recreational time with people, finding and giving support, and encouraging each other's growth without enabling or codependency. Further, communities must be willing to excise members whose behavior would harm the community. Therefore, you should take your participation in a community as a social contract to be a positive contributor to the community with a responsibility to its interests.
            </p>
          </div>
        </div>
      </Section>

      {/* Developing Emotional Intelligence */}
      <Section
        verticalPadding="large"
        background="image"
        backgroundImage="/images/prototheism/sacred+wall.webp"
        backgroundOverlay
      >
        <div className="max-w-4xl mx-auto text-white text-center">
          <h2 className="text-3xl md:text-4xl font-light font-heading text-accent mb-8 tracking-wide drop-shadow-lg">
            Developing Emotional Intelligence
          </h2>
          <div className="space-y-6 text-white/90 text-lg md:text-xl font-light leading-relaxed py-8 px-6 rounded-[3rem] bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.8)_0%,_rgba(0,0,0,0)_70%)]">
            <p className="drop-shadow-md">
              Emotional intelligence involves developing a deep understanding of one's own emotions and the emotions of others. It requires cultivating self-awareness, empathy, and effective emotion regulation skills, often learned through difficult life experiences. Cultivating emotional intelligence allows individuals to navigate the ups and downs of life with greater ease, maintaining a sense of well-being even in the face of suffering.
            </p>
          </div>
        </div>
      </Section>

      {/* Cultivating Mindfulness */}
      <Section
        verticalPadding="large"
        background="image"
        backgroundImage="/images/shared/eye+wall+angled.webp"
        backgroundOverlay
      >
        <div className="max-w-4xl mx-auto text-white text-center">
          <h2 className="text-3xl md:text-4xl font-light font-heading text-accent mb-8 tracking-wide drop-shadow-lg">
            Cultivating Mindfulness
          </h2>
          <div className="space-y-6 text-white/90 text-lg md:text-xl font-light leading-relaxed py-8 px-6 rounded-[3rem] bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.8)_0%,_rgba(0,0,0,0)_70%)]">
            <p className="drop-shadow-md">
              Mindfulness practices might include meditation, journaling, breathwork, engaging in activities in a mindful way, etc. These practices must involve a break from all distractions and an attempt to be fully present in the moment without judgment.
            </p>
            <p className="drop-shadow-md">
              Mindfulness is a powerful tool to alter your relationship with suffering and develop greater self-awareness, emotional regulation, and cognitive flexibility, and therefore should be pursued in your attempt to seek a life of greater enjoyment and less suffering.
            </p>
          </div>
        </div>
      </Section>

      {/* Challenging Distorted Thinking */}
      <Section
        verticalPadding="large"
        background="image"
        backgroundImage="/images/shared/geometry+circle+wall.webp"
        backgroundOverlay
      >
        <div className="max-w-4xl mx-auto text-white text-center">
          <h2 className="text-3xl md:text-4xl font-light font-heading text-accent mb-8 tracking-wide drop-shadow-lg">
            Challenging Distorted Thinking
          </h2>
          <div className="space-y-6 text-white/90 text-lg md:text-xl font-light leading-relaxed py-8 px-6 rounded-[3rem] bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.8)_0%,_rgba(0,0,0,0)_70%)]">
            <p className="drop-shadow-md">
              Cognitive distortions include a wide variety of ways that our minds can trick us in ways that have the effect of damaging or distorting our confidence, relationships, sense of agency, sense of personal responsibility, and outlook on our own potential and the world around us. There is no individual rule of thumb that can challenge all cognitive distortions since, for example, some of them fallaciously increase a person's confidence while others fallaciously reduce confidence, or even a combination of the two (e.g. imposter syndrome irrationally causing confidence that a person cannot be confident in their own work).
            </p>
            <p className="drop-shadow-md">
              You should educate yourself on cognitive distortions, identify the distortions you are most prone to, and attempt to recognize and develop techniques for challenging those distortions when they arise.
            </p>
            <p className="drop-shadow-md">
              Some techniques for identifying and challenging distorted thinking are Cognitive Behavioral Therapy (CBT) and Dialectical Behavior Therapy (DBT).
            </p>
          </div>
        </div>
      </Section>

      {/* Practicing Self-Compassion */}
      <Section
        verticalPadding="large"
        background="image"
        backgroundImage="/images/prototheism/sacred+wall.webp"
        backgroundOverlay
      >
        <div className="max-w-4xl mx-auto text-white text-center">
          <h2 className="text-3xl md:text-4xl font-light font-heading text-accent mb-8 tracking-wide drop-shadow-lg">
            Practicing Self-Compassion
          </h2>
          <div className="space-y-6 text-white/90 text-lg md:text-xl font-light leading-relaxed py-8 px-6 rounded-[3rem] bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.8)_0%,_rgba(0,0,0,0)_70%)]">
            <p className="drop-shadow-md">
              You should treat yourself with kindness, understanding, and compassion. This does not mean to downplay flaws and mistakes, but to be able to acknowledge, accept, and take responsibility for past mistakes and the potential for unavoidable future mistakes in a way that promotes growth and in recognition that we should not define ourselves by our flaws or mistakes. Further, it means to acknowledge and appreciate our positive aspects, successes, and progress, and to have goals without placing unreasonable expectations on ourselves in the past, present, or future.
            </p>
            <p className="drop-shadow-md">
              As part of practicing self-compassion, you should practice self-care. You are worthy of being taken care of, in actions and habits that promote the health and well-being of your body as well as your mind. Self-care isn't always pleasant in the moment and can be hard work, but it is to foster a causality which extends into future moments to improve the overall joy and well-being of your life and reduce suffering.
            </p>
          </div>
        </div>
      </Section>

      {/* Exercising Creativity */}
      <Section
        verticalPadding="large"
        background="image"
        backgroundImage="/images/shared/eye+wall+angled.webp"
        backgroundOverlay
      >
        <div className="max-w-4xl mx-auto text-white text-center">
          <h2 className="text-3xl md:text-4xl font-light font-heading text-accent mb-8 tracking-wide drop-shadow-lg">
            Exercising Creativity
          </h2>
          <div className="space-y-6 text-white/90 text-lg md:text-xl font-light leading-relaxed py-8 px-6 rounded-[3rem] bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.8)_0%,_rgba(0,0,0,0)_70%)]">
            <p className="drop-shadow-md">
              Creativity is a fundamental aspect of the human experience, and a powerful force. Engaging in creativity can be one of the simplest and most natural behaviors of humanity. It is a path to self-discovery, personal expression, and joy, but can also be used as a harmful force, either to the self or to others.
            </p>
            <p className="drop-shadow-md">
              You should exercise creativity. It doesn't have to be anything profound or requiring exceptional skill. It can take any medium: programming, making music, metal working, writing, origami, designing tabletop rpg systems, anything that involves creation. You can have ambitions for achieving a level of skill or commercial success or artistic merit - that might even be part of your sense of purpose - but that's not what this section is about. Creativity can be a powerful tool for self-actualization, emotional catharsis, and being understood, but that's not the specific goal with this section either. The path it takes can vary and evolve, but the point here is that you should exercise creativity.
            </p>
            <p className="drop-shadow-md">
              However, you should be mindful that the results of creativity or even the creative process itself can cause harm. While creative pursuits can be a tool for expressing and processing difficult thoughts and feelings, take care that the process does not further entrench suffering and instead provides a path to greater well-being.
            </p>
          </div>
        </div>
      </Section>

      {/* Self Exploration & Banner */}
      <Section
        verticalPadding="large"
        background="image"
        backgroundImage="/images/shared/geometry+circle+wall.webp"
        backgroundOverlay
        className="!pb-0"
      >
        <div className="max-w-4xl mx-auto text-white text-center">
          <h2 className="text-3xl md:text-4xl font-light font-heading text-accent mb-8 tracking-wide drop-shadow-lg">
            Self Exploration through Altered States of Consciousness
          </h2>
          <div className="space-y-6 text-white/90 text-lg md:text-xl font-light leading-relaxed py-8 px-6 rounded-[3rem] bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.7)_0%,_rgba(0,0,0,0)_70%)]">
            <p className="drop-shadow-md">
              Altered states of consciousness can refer to any situation in which our experience of ourselves is distinctly different from everyday life. This might be under the influence of substances like psychedelics and dissociatives, but it can also happen during meditation, lucid dreaming, sensory deprivation tanks, BDSM and kink, spiritual practices, hypnosis, etc. Lesser degrees of altered states may be achieved through novel activities like traveling, attending live music performances, and watching films that evoke strong emotions. Not all methods for achieving altered states of consciousness are safe (e.g. abuse of diphenhydramine) or appropriate for every person, so take that into account for all discussion of this topic and educate yourself before taking action.
            </p>
            <p className="drop-shadow-md">
              By exploring altered states of consciousness and mindfully observing the changes in our experiences, we can build a fuller picture of who we are and how we work. These states can help us get unstuck from ideas or habits that are not serving us. They can help us fully experience that we are not one thing or one way of being. Therefore, insofar as it is safe and responsible, you should explore a variety of altered states of consciousness in the pursuit of self-exploration, novelty, and greater perspective and well-being.
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
