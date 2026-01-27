import { Link } from 'react-router-dom'
import { Section } from '@/components/Section'
import { ImageGallery } from '@/components/ImageGallery'

const images = [
  { src: '/images/galleries/mj-v5-2/cityscape.webp' },
  { src: '/images/galleries/mj-v5-2/josikinz_a_34_angle_portrait_shot_of_a_colorful_and_highly_deta_4227b570-3584-446f-ad64-5e062994d8e7.webp' },
  { src: '/images/galleries/mj-v5-2/josikinz_a_34_angle_portrait_shot_of_a_colorful_and_highly_deta_a6130403-0e56-4c8d-81c9-b8684086dbe7+(1).webp' },
  { src: '/images/galleries/mj-v5-2/josikinz_a_close_up_of_a_colorful_and_highly_detailed_adorable__ec10348d-536f-4c5c-93e2-bffc4a2d2b7c.webp' },
  { src: '/images/galleries/mj-v5-2/josikinz_a_close_up_of_a_colorful_and_highly_detailed_cute_psyc_52c0f4a2-9f2a-44b1-9298-b5c1dcd7b6fc.webp' },
  { src: '/images/galleries/mj-v5-2/josikinz_a_close_up_of_a_colorful_and_highly_detailed_cute_psyc_79c50722-09c6-40a1-9db7-c7274e7acd6d.webp' },
  { src: '/images/galleries/mj-v5-2/josikinz_a_close_up_of_a_colorful_and_highly_detailed_cute_psyc_ad5a5aa1-cd55-448e-8f18-dc7499252173.webp' },
  { src: '/images/galleries/mj-v5-2/josikinz_a_close_up_of_a_colorful_and_highly_detailed_cute_psyc_c9b75e33-3943-4b9a-9a08-d29996acd2cf.webp' },
  { src: '/images/galleries/mj-v5-2/josikinz_a_close_up_of_a_colorful_and_highly_detailed_cute_psyc_f8deb0fd-c0d1-4bda-b94e-7ee4b2007692.webp' },
  { src: '/images/galleries/mj-v5-2/josikinz_a_close_up_of_a_colorful_and_highly_detailed_psychedel_186dff6f-b604-4dd0-84a3-465d8ddf1de1.webp' },
  { src: '/images/galleries/mj-v5-2/josikinz_a_close_up_of_a_colorful_and_highly_detailed_psychedel_c86f5051-48de-40fd-864d-0d909879efad.webp' },
  { src: '/images/galleries/mj-v5-2/josikinz_a_close_up_of_a_colorful_and_highly_detailed_psychedel_cad9ea3e-99f5-4b39-90f1-baa517321e3a.webp' },
  { src: '/images/galleries/mj-v5-2/josikinz_a_close_up_of_a_colorful_and_highly_detailed_psychedel_e5805d22-abc3-4b44-858a-f9d024951191.webp' },
  { src: '/images/galleries/mj-v5-2/josikinz_a_close_up_of_a_group_colorful_and_highly_detailed_cut_5af9cba7-2df3-4ff5-a1b1-b442a7da6f2e.webp' },
]

export function MJV52() {
  return (
    <div className="">
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
          Midjourney V5.2
        </h1>
        <p className="text-right text-white/60 max-w-3xl mx-auto mb-4 text-sm uppercase tracking-widest"><em>November 2023</em></p>
        <p className="text-center text-white/90 max-w-3xl mx-auto mb-8 text-lg font-light leading-relaxed">
          To be honest, I am not the biggest fan of this model's outputs. The images are remarkably coherent but in a lot of ways it has caused them to feel less psychedelic. There are still some really amazing AI replications in here. However, they are highly cherry picked while still being less consistently realistic than V4 and to a lesser extent, v5. The coherency is improved but the vibes are simply not there.
        </p>
        <div className="bg-black/20 backdrop-blur-md border border-white/5 rounded-3xl p-8 max-w-3xl mx-auto mb-12 shadow-lg">
          <h3 className="font-bold text-accent mb-3 uppercase tracking-wider text-sm">Prompt:</h3>
          <p className="text-sm text-white/80 font-mono mb-6 bg-black/20 p-4 rounded-lg border border-white/5">
            a close up of a colorful and highly detailed CUTE psychedelic SOMETHING, an abstract drawing, by Alex grey, generative art, hieroglyphic symbols and runes, cubic conic crystals, isometric style, symmetry, studio lighting, crisp 3D render, visionary art, psychedelic art --v 5.2 --ar 16:9
          </p>
          <h3 className="font-bold text-accent mb-3 uppercase tracking-wider text-sm">Usage Notes:</h3>
          <p className="text-sm text-white/80 leading-relaxed font-light">
            Simply swap out "SOMETHING" with the desired concept, this concept can be an entity ("jester", "elf", "deity", etc) or it can be a "pattern", "landscape", "environment", or whatever else. Also, add or remove "CUTE" as needed since MJ often likes to force psychedelic entity generations to look overly scary if this word isn't included. You may also need to swap out "CUTE" for "UGLY" when generating female characters, as MJ likes to generate women with weird instagram model aesthetics.
          </p>
        </div>
        <ImageGallery images={images} columns={3} />
      </Section>
    </div>
  )
}
