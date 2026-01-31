import { Section } from '@/components/Section'

export function MckennaSyndrome() {
  return (
    <>
      <Section
        verticalPadding="large"
        background="image"
        backgroundImage="/images/shared/background.webp"
        backgroundOverlay
        headerOffset
      >
        <div className="max-w-3xl mx-auto text-white text-center animate-float" style={{ '--float-duration': '6s' } as React.CSSProperties}>
          <h1 className="text-4xl md:text-6xl font-light font-heading text-accent mb-6 tracking-[0.2em] drop-shadow-lg">McKenna Syndrome</h1>
          <p className="text-xl md:text-2xl text-white/90 italic font-light tracking-wide">Diagnostic Criteria (DSM Fanfiction)</p>
        </div>
      </Section>

      <Section
        verticalPadding="large"
        background="image"
        backgroundImage="/images/shared/eye+wall+angled.webp"
        backgroundOverlay
        className="!pb-0"
      >
        <div className="max-w-5xl mx-auto">
          <div className="relative group perspective-1000 mb-20">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <img
              src="/images/articles/mckenna-syndrome/mckennasyndromediagnosticcriteria.webp"
              alt="McKenna Syndrome Diagnostic Criteria"
              className="relative w-full rounded-lg shadow-2xl transition-transform duration-700 group-hover:scale-[1.01] group-hover:rotate-x-1"
            />
          </div>

          <div className="max-w-2xl mx-auto mt-20 pb-20">
            <img
              src="/images/articles/mckenna-syndrome/josie+and+emily+it+came+to+me+in+a+trip.webp"
              alt="It Came to Me in a Trip"
              className="w-full h-auto rounded-xl shadow-2xl animate-float drop-shadow-[0_0_25px_rgba(255,255,255,0.1)]"
              style={{ '--float-duration': '7s', '--float-distance': '10px' } as React.CSSProperties}
            />
          </div>
        </div>
      </Section>
    </>
  )
}
