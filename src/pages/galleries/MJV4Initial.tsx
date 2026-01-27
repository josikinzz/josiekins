import { Link } from 'react-router-dom'
import { Section } from '@/components/Section'
import { ImageGallery } from '@/components/ImageGallery'

const images = [
  { src: '/images/galleries/mj-v4-initial/josikinz_a_close_up_of_a_colorful_being_bursting_through_a_memb_3f9a9edb-1393-4819-aa0b-8a8005f1276d.webp' },
  { src: '/images/galleries/mj-v4-initial/josikinz_a_close_up_of_a_colorful_being_bursting_through_a_memb_edfdc62a-f8b4-4f13-beb1-1c31b1971335.webp' },
  { src: '/images/galleries/mj-v4-initial/josikinz_a_close_up_of_a_colorful_hyperbolic_pattern_on_fabric__5486442f-a57a-4c1a-b116-ef1274346cee.webp' },
  { src: '/images/galleries/mj-v4-initial/josikinz_a_close_up_of_a_colorful_hyperbolic_pattern_on_fabric__5824b1f1-60c2-460e-87d6-7e6e7bc6bc78.webp' },
  { src: '/images/galleries/mj-v4-initial/josikinz_a_close_up_of_a_colorful_hyperbolic_pattern_on_fabric__662211c9-f85e-4826-8b56-afbf9a218ff8.webp' },
  { src: '/images/galleries/mj-v4-initial/josikinz_a_close_up_of_a_colorful_pattern_on_fabric_an_abstract_013f8638-dac3-4af2-9588-6d0fb02661e3.webp' },
  { src: '/images/galleries/mj-v4-initial/josikinz_a_close_up_of_a_colorful_pattern_on_fabric_an_abstract_083daaf0-417b-4757-8ef4-ce9377dda429.webp' },
  { src: '/images/galleries/mj-v4-initial/josikinz_a_close_up_of_a_colorful_pattern_on_fabric_an_abstract_15025597-bc4a-469e-b919-54a820d57310.webp' },
  { src: '/images/galleries/mj-v4-initial/josikinz_a_close_up_of_a_colorful_pattern_on_fabric_an_abstract_2020efb4-3b72-4534-878b-8789357661ad.webp' },
  { src: '/images/galleries/mj-v4-initial/josikinz_a_close_up_of_a_colorful_pattern_on_fabric_an_abstract_3fb337cf-08af-44ef-8aa2-9a345aaa8e98.webp' },
  { src: '/images/galleries/mj-v4-initial/josikinz_a_close_up_of_a_colorful_pattern_on_fabric_an_abstract_44eef7d9-a7d4-4589-afcb-840f34b5d652.webp' },
  { src: '/images/galleries/mj-v4-initial/josikinz_a_close_up_of_a_colorful_pattern_on_fabric_an_abstract_46d3a36f-6453-4a1b-83eb-cc514462af23.webp' },
  { src: '/images/galleries/mj-v4-initial/josikinz_a_close_up_of_a_colorful_pattern_on_fabric_an_abstract_6f141b09-7f04-486c-a957-2f14e29c80f3.webp' },
  { src: '/images/galleries/mj-v4-initial/josikinz_a_close_up_of_a_colorful_pattern_on_fabric_an_abstract_7243fe0b-ff59-401f-a259-288007ac8534.webp' },
  { src: '/images/galleries/mj-v4-initial/josikinz_a_close_up_of_a_colorful_pattern_on_fabric_an_abstract_8b234e44-9224-4f4c-9178-1fd0f9ccfca0.webp' },
  { src: '/images/galleries/mj-v4-initial/josikinz_a_close_up_of_a_colorful_pattern_on_fabric_an_abstract_931b1279-980e-4bc6-89f4-5c9601d6e56b.webp' },
  { src: '/images/galleries/mj-v4-initial/josikinz_a_close_up_of_a_colorful_pattern_on_fabric_an_abstract_95237172-b2b8-4e27-a78b-b4c6333fc712.webp' },
  { src: '/images/galleries/mj-v4-initial/josikinz_a_close_up_of_a_colorful_pattern_on_fabric_an_abstract_9688e515-dfb1-4d2d-91f8-b60ffa8fdadb.webp' },
  { src: '/images/galleries/mj-v4-initial/josikinz_a_close_up_of_a_colorful_pattern_on_fabric_an_abstract_a04b3993-aaec-433d-994d-bacf530e7733.webp' },
  { src: '/images/galleries/mj-v4-initial/josikinz_a_close_up_of_a_colorful_pattern_on_fabric_an_abstract_a21eee28-b09f-4d2c-9acd-c258acba1a94.webp' },
  { src: '/images/galleries/mj-v4-initial/josikinz_a_close_up_of_a_colorful_pattern_on_fabric_an_abstract_a88a5413-449c-44c3-91b8-076d4bcf2705.webp' },
  { src: '/images/galleries/mj-v4-initial/josikinz_a_close_up_of_a_colorful_pattern_on_fabric_an_abstract_c4488314-2146-433e-9d8d-29b2e09208ad.webp' },
  { src: '/images/galleries/mj-v4-initial/josikinz_a_close_up_of_a_colorful_pattern_on_fabric_an_abstract_c756aa04-f2b1-44e9-a024-a59889fa24bc.webp' },
  { src: '/images/galleries/mj-v4-initial/josikinz_a_close_up_of_a_colorful_pattern_on_fabric_an_abstract_df095dea-a1bb-4aa6-8fa4-c56d238997ff.webp' },
  { src: '/images/galleries/mj-v4-initial/josikinz_a_close_up_of_a_colorful_pattern_on_fabric_an_abstract_e8ea5830-6df4-4743-af5d-638f78027263.webp' },
  { src: '/images/galleries/mj-v4-initial/josikinz_a_close_up_of_a_colorful_pattern_on_fabric_an_abstract_f543e8f6-8b00-4c28-9a04-ad2fff730526.webp' },
  { src: '/images/galleries/mj-v4-initial/josikinz_a_close_up_of_a_colorful_pattern_on_fabric_an_abstract_f5daa139-e242-46f7-add9-32f392a3e745.webp' },
  { src: '/images/galleries/mj-v4-initial/josikinz_a_close_up_of_a_colorful_pattern_on_fabric_an_abstract_f78e92c5-61ae-4185-84bf-ccf45f303ed5.webp' },
  { src: '/images/galleries/mj-v4-initial/josikinz_a_close_up_of_a_colorful_pattern_on_fabric_an_abstract_f7a63c21-24aa-48b3-b1c6-d28be0c2edf1.webp' },
  { src: '/images/galleries/mj-v4-initial/josikinz_a_close_up_of_a_colorful_pattern_on_fabric_an_abstract_f963e66e-5cf9-4df0-882d-91037f6adc2c.webp' },
  { src: '/images/galleries/mj-v4-initial/josikinz_a_close_up_of_a_colorful_pattern_on_fabric_an_abstract_fd79f8ea-8239-4fb8-9c28-81701e86372b.webp' },
]

export function MJV4Initial() {
  return (
    <div className="animate-in fade-in zoom-in-95 duration-1000 ease-out">
      <Section
        verticalPadding="large"
        background="image"
        backgroundImage="/images/shared/eye+wall+angled.webp"
        backgroundOverlay
      >
        <Link to="/ai-psychedelia" className="text-accent/60 hover:text-accent mb-8 inline-block transition-colors tracking-wide">
          &larr; Back to AI Psychedelia
        </Link>
        <h1 className="text-4xl md:text-5xl font-light font-heading text-center text-accent mb-8 tracking-[0.2em] uppercase drop-shadow-md">
          Midjourney V4 (Initial)
        </h1>
        <p className="text-right text-white/60 max-w-3xl mx-auto mb-4 text-sm uppercase tracking-widest"><em>December 2022</em></p>
        <p className="text-center text-white/90 max-w-3xl mx-auto mb-8 text-lg font-light leading-relaxed">
          Midjourney v4 marks the point at which I realized that StyleGANs were finally obsolete and that for now, at least, diffusion model image generators are now superior tools for replicating psychedelic hallucinations.
        </p>
        <div className="bg-black/20 backdrop-blur-md border border-white/5 rounded-3xl p-8 max-w-3xl mx-auto mb-12 shadow-lg">
          <h3 className="font-bold text-accent mb-3 uppercase tracking-wider text-sm">Initial Prompt Used:</h3>
          <p className="text-sm text-white/80 font-mono bg-black/20 p-4 rounded-lg border border-white/5">
            a close up of a colorful pattern on fabric, an abstract drawing, by John Backderf, generative art, mayan shaman, cubic crystals, isometric style and dating will skyscang, highly detailed symmetry, visionary art, visionaryart
          </p>
        </div>
        <ImageGallery images={images} columns={3} />
      </Section>
    </div>
  )
}
