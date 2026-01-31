import { Link } from 'react-router-dom'
import { Section } from '@/components/Section'

export function MckennaSyndrome() {
  return (
    <>
      <Section
        verticalPadding="large"
        background="image"
        backgroundImage="/images/articles/mckenna-syndrome/eye+thingy+cool.webp"
        backgroundOverlay
      >
        <div className="max-w-3xl mx-auto text-white text-center">
          <h1 className="text-4xl font-bold text-accent mb-4">McKenna Syndrome</h1>
          <p className="text-xl text-white/80 italic">Diagnostic Criteria (DSM Fanfiction)</p>
        </div>
      </Section>

      <Section
        verticalPadding="large"
        background="image"
        backgroundImage="/images/shared/eye+wall+angled.webp"
        backgroundOverlay
        className="!pb-0"
      >
        <div className="max-w-4xl mx-auto">
          <img
            src="/images/articles/mckenna-syndrome/mckennasyndromediagnosticcriteria.webp"
            alt="McKenna Syndrome Diagnostic Criteria"
            className="w-full rounded-lg shadow-lg mb-12"
          />

          <div className="max-w-lg mx-auto mt-12">
            <img
              src="/images/articles/mckenna-syndrome/josie+and+emily+it+came+to+me+in+a+trip.webp"
              alt="It Came to Me in a Trip"
              className="w-full h-auto"
            />
          </div>
        </div>
      </Section>
    </>
  )
}
