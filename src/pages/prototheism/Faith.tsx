import { Link } from 'react-router-dom'
import { Section } from '@/components/Section'

interface FaithProps {
  hideBackButton?: boolean;
}

export function Faith({ hideBackButton }: FaithProps) {
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
            src="/images/prototheism/faith.webp"
            alt="Faith"
            className="max-w-xs mx-auto mb-10 block drop-shadow-[0_0_25px_rgba(255,255,255,0.15)] animate-float"
            style={{
              '--float-distance': '12px',
              '--float-duration': '7s',
            } as React.CSSProperties}
          />

          <h1 className="text-5xl md:text-7xl font-light font-heading text-accent mb-16 tracking-[0.2em] drop-shadow-lg">
            Faith
          </h1>

          <div className="space-y-6 text-white/90 text-lg md:text-xl font-light leading-relaxed py-8 px-6 rounded-[3rem] bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.7)_0%,_rgba(0,0,0,0)_70%)] text-center">
            <p className="drop-shadow-md">
              <span className="text-accent font-bold">Faith</span> is belief without proof. While many religions promote blind faith in their teachings as crucial, it is in fact detrimental. In Prototheism, we understand that overlooking reason and logic leads to delusion and exploitation.
            </p>
            <p className="drop-shadow-md">
              There are only two reasonable pillars of faith a sentient being may have. Everything else, including the rest of Prototheism, is held in skepticism.
            </p>
          </div>
        </div>
      </Section>

      {/* You Exist Section */}
      <Section
        verticalPadding="large"
        background="image"
        backgroundImage="/images/shared/eye+wall+angled.webp"
        backgroundOverlay
      >
        <div className="max-w-4xl mx-auto text-white text-center">
          <h2 className="text-3xl md:text-4xl font-light font-heading text-accent mb-8 uppercase tracking-widest drop-shadow-lg">
            You Exist
          </h2>
          <div className="space-y-6 text-white/90 text-lg md:text-xl font-light leading-relaxed py-8 px-6 rounded-[3rem] bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.7)_0%,_rgba(0,0,0,0)_70%)]">
            <p className="drop-shadow-md">
              "<span className="text-accent font-bold">I think, therefore I am.</span>" While we may question the nature of what we are and how we function, we must have faith in the existence of our own cognition. As long as we are able to interpret or question ourselves and the world, we must be understood as existent.
            </p>
            <p className="drop-shadow-md">
              This point of faith is necessary because it prevents us from getting lost in unnecessary questioning, which is otherwise a risk with the skepticism inherent to Prototheism.
            </p>
          </div>
        </div>
      </Section>

      {/* You Are Fallible Section */}
      <Section
        verticalPadding="large"
        background="image"
        backgroundImage="/images/prototheism/sacred+wall.webp"
        backgroundOverlay
      >
        <div className="max-w-4xl mx-auto text-white text-center">
          <h2 className="text-3xl md:text-4xl font-light font-heading text-accent mb-8 uppercase tracking-widest drop-shadow-lg">
            You Are Fallible
          </h2>
          <div className="space-y-6 text-white/90 text-lg md:text-xl font-light leading-relaxed py-8 px-6 rounded-[3rem] bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.7)_0%,_rgba(0,0,0,0)_70%)]">
            <p className="drop-shadow-md">
              Our perceptions of reality are frequently distorted, and the mind itself is capable of fooling even the most intelligent beings through rationalizations of biases and cognitive errors. Therefore, we must have faith in our own fallibility.
            </p>
            <p className="drop-shadow-md">
              This point of faith leads us to embrace scientific methodology and conclusions, but also to be ready to revise our understanding as we learn more. Other people are fallible too, including scientists. We may become increasingly confident of information based on the strength of its evidence, but always maintaining our faith in our own fallibility.
            </p>
          </div>
        </div>
      </Section>

      {/* In the Absence of Faith Section */}
      <Section
        verticalPadding="large"
        background="image"
        backgroundImage="/images/shared/geometry+circle+wall.webp"
        backgroundOverlay
        className="!pb-0"
      >
        <div className="max-w-4xl mx-auto text-white text-center">
          <h2 className="text-3xl md:text-4xl font-light font-heading text-accent mb-8 uppercase tracking-widest drop-shadow-lg">
            In the Absence of Faith
          </h2>
          <div className="space-y-6 text-white/90 text-lg md:text-xl font-light leading-relaxed py-8 px-6 rounded-[3rem] bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.7)_0%,_rgba(0,0,0,0)_70%)]">
            <p className="drop-shadow-md">
              There are many things that we do not know how to know or study. At the same time, science indicates that spiritual experiences and practices are beneficial to us. For these reasons, Prototheism includes ideas that are not based on science, ones that we hold for ourselves individually. This version of Prototheism contains a set of these ideas, which people may modify, disregard, or augment by forking Prototheism.
            </p>
            <p className="drop-shadow-md">
              However, we must always maintain faith in our own fallibility. If evidence presents itself that would falsify elements of Prototheism, those elements must be patched out.
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
