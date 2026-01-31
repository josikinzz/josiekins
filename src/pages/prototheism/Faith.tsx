import { Link } from 'react-router-dom'
import { Section } from '@/components/Section'

export function Faith() {
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
            src="/images/prototheism/faith.webp"
            alt="Faith"
            className="max-w-md mx-auto mb-10 block shadow-2xl"
          />

          <h1 className="text-4xl md:text-5xl font-light font-heading text-center text-accent mb-12 tracking-[0.2em] drop-shadow-md">
            Faith
          </h1>

          <div className="bg-black/20 backdrop-blur-md border border-white/5 rounded-3xl p-8 md:p-10 shadow-xl">
            <div className="space-y-6 text-lg font-light leading-relaxed text-white/90">
              <p>
                <span className="text-accent font-bold">Faith</span> is belief without proof. While many religions promote blind faith in their teachings as crucial, it is in fact detrimental. In Prototheism, we understand that overlooking reason and logic leads to delusion and exploitation.
              </p>

              <p>
                There are only two reasonable pillars of faith a sentient being may have. Everything else, including the rest of Prototheism, is held in skepticism.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6 text-accent uppercase tracking-wide border-b border-white/10 pb-2 inline-block">You Exist</h2>
              <p>
                "<span className="text-accent font-bold">I think, therefore I am.</span>" While we may question the nature of what we are and how we function, we must have faith in the existence of our own cognition. As long as we are able to interpret or question ourselves and the world, we must be understood as existent.
              </p>
              <p>
                This point of faith is necessary because it prevents us from getting lost in unnecessary questioning, which is otherwise a risk with the skepticism inherent to Prototheism.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6 text-accent uppercase tracking-wide border-b border-white/10 pb-2 inline-block">You Are Fallible</h2>
              <p>
                Our perceptions of reality are frequently distorted, and the mind itself is capable of fooling even the most intelligent beings through rationalizations of biases and cognitive errors. Therefore, we must have faith in our own fallibility.
              </p>
              <p>
                This point of faith leads us to embrace scientific methodology and conclusions, but also to be ready to revise our understanding as we learn more. Other people are fallible too, including scientists. We may become increasingly confident of information based on the strength of its evidence, but always maintaining our faith in our own fallibility.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6 text-accent uppercase tracking-wide border-b border-white/10 pb-2 inline-block">In the Absence of Faith</h2>
              <p>
                There are many things that we do not know how to know or study. At the same time, science indicates that spiritual experiences and practices are beneficial to us. For these reasons, Prototheism includes ideas that are not based on science, ones that we hold for ourselves individually. This version of Prototheism contains a set of these ideas, which people may modify, disregard, or augment by forking Prototheism.
              </p>
              <p>
                However, we must always maintain faith in our own fallibility. If evidence presents itself that would falsify elements of Prototheism, those elements must be patched out.
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
