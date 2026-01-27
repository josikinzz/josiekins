import { Link } from 'react-router-dom'
import { Section } from '@/components/Section'
import { ImageGallery } from '@/components/ImageGallery'

const images = [
  { src: '/images/galleries/mj-v4-improved/josikinz_a_close_up_of_a_colorful_and_highly_detailed_psychedel_04dab517-8692-44d8-8079-5f66f9b94c76.webp' },
  { src: '/images/galleries/mj-v4-improved/josikinz_a_close_up_of_a_colorful_and_highly_detailed_psychedel_05c44e6f-e0e0-466d-9058-17537b37bfbe.webp' },
  { src: '/images/galleries/mj-v4-improved/josikinz_a_close_up_of_a_colorful_and_highly_detailed_psychedel_08c1c65d-9fc1-4a88-a364-1fb9cad185dd.webp' },
  { src: '/images/galleries/mj-v4-improved/josikinz_a_close_up_of_a_colorful_and_highly_detailed_psychedel_0e3a157e-2275-4063-9a8a-5403062cf92f.webp' },
  { src: '/images/galleries/mj-v4-improved/josikinz_a_close_up_of_a_colorful_and_highly_detailed_psychedel_0fa6d40b-b82f-4de3-885f-5b032f0a3942.webp' },
  { src: '/images/galleries/mj-v4-improved/josikinz_a_close_up_of_a_colorful_and_highly_detailed_psychedel_1611fd4a-686d-464e-be72-83eb4076ae91.webp' },
  { src: '/images/galleries/mj-v4-improved/josikinz_a_close_up_of_a_colorful_and_highly_detailed_psychedel_18f517ca-fd14-4e56-aed6-32e2bf763ec7.webp' },
  { src: '/images/galleries/mj-v4-improved/josikinz_a_close_up_of_a_colorful_and_highly_detailed_psychedel_23d6bef7-006e-4f6b-bedb-744286791b53.webp' },
  { src: '/images/galleries/mj-v4-improved/josikinz_a_close_up_of_a_colorful_and_highly_detailed_psychedel_28027123-34be-47e6-8313-7d26b55b5c56.webp' },
  { src: '/images/galleries/mj-v4-improved/josikinz_a_close_up_of_a_colorful_and_highly_detailed_psychedel_629038b7-f95f-4251-8f82-ee34d0f65193.webp' },
  { src: '/images/galleries/mj-v4-improved/josikinz_a_close_up_of_a_colorful_and_highly_detailed_psychedel_6a45e2e9-4833-4379-89c1-3de2968ff47f.webp' },
  { src: '/images/galleries/mj-v4-improved/josikinz_a_close_up_of_a_colorful_and_highly_detailed_psychedel_8c9a2a0e-54cb-4419-bccc-9c78868108af.webp' },
  { src: '/images/galleries/mj-v4-improved/josikinz_a_close_up_of_a_colorful_and_highly_detailed_psychedel_96b6872a-e64b-4055-ac33-ee2a3e3d6826.webp' },
  { src: '/images/galleries/mj-v4-improved/josikinz_a_close_up_of_a_colorful_and_highly_detailed_psychedel_98a7078c-2898-49fb-b3e6-df956960b3f4.webp' },
  { src: '/images/galleries/mj-v4-improved/josikinz_a_close_up_of_a_colorful_and_highly_detailed_psychedel_9c5f8568-9669-405e-a02e-eb9991f99032.webp' },
  { src: '/images/galleries/mj-v4-improved/josikinz_a_close_up_of_a_colorful_and_highly_detailed_psychedel_9ec96b21-26ea-41bd-a525-993dde1ef483.webp' },
  { src: '/images/galleries/mj-v4-improved/josikinz_a_close_up_of_a_colorful_and_highly_detailed_psychedel_a4a6dffd-f2be-4f96-b083-a4d1ea54dfd2.webp' },
  { src: '/images/galleries/mj-v4-improved/josikinz_a_close_up_of_a_colorful_and_highly_detailed_psychedel_a98f0720-e43b-4a31-924c-86b1da153711.webp' },
  { src: '/images/galleries/mj-v4-improved/josikinz_a_close_up_of_a_colorful_and_highly_detailed_psychedel_ad91ec79-9fdf-4dfd-ae44-a577fe566fc1.webp' },
  { src: '/images/galleries/mj-v4-improved/josikinz_a_close_up_of_a_colorful_and_highly_detailed_psychedel_b856d9da-3899-492e-8a96-5c7d8eac656c.webp' },
  { src: '/images/galleries/mj-v4-improved/josikinz_a_close_up_of_a_colorful_and_highly_detailed_psychedel_ccabdbf5-6386-44f6-87e3-31f4b4df8121.webp' },
  { src: '/images/galleries/mj-v4-improved/josikinz_a_close_up_of_a_colorful_and_highly_detailed_psychedel_ce1f2b12-2f45-42fc-a82a-73a40bd4c2b7.webp' },
  { src: '/images/galleries/mj-v4-improved/josikinz_a_close_up_of_a_colorful_and_highly_detailed_psychedel_d24c8be2-75e3-491b-9dd7-bc9e13b69446.webp' },
  { src: '/images/galleries/mj-v4-improved/josikinz_a_close_up_of_a_colorful_and_highly_detailed_psychedel_d5971a81-10fd-4f31-bda9-69e4ebe29d00.webp' },
  { src: '/images/galleries/mj-v4-improved/josikinz_a_close_up_of_a_colorful_and_highly_detailed_psychedel_db7fd531-cb2d-464b-bd3b-883e00a12ea3.webp' },
  { src: '/images/galleries/mj-v4-improved/josikinz_a_close_up_of_a_colorful_and_highly_detailed_psychedel_f36fe0e5-f775-4155-a818-d9eac40322df.webp' },
  { src: '/images/galleries/mj-v4-improved/josikinz_a_close_up_of_a_colorful_and_highly_detailed_psychedel_f4b9c066-494a-43bd-9e51-e470bc7ff1c8.webp' },
  { src: '/images/galleries/mj-v4-improved/josikinz_a_close_up_of_a_colorful_and_highly_detailed_psychedel_f55f9d3e-b075-4e16-8a6a-3520fffd98fa.webp' },
  { src: '/images/galleries/mj-v4-improved/josikinz_a_close_up_of_a_colorful_and_highly_detailed_psychedel_f6a4e8f2-58a5-42ab-928b-a90bdb0f9035.webp' },
  { src: '/images/galleries/mj-v4-improved/josikinz_a_close_up_of_a_colorful_and_highly_detailed_psychedel_fd79af44-d4ac-40bd-96bd-1a2326565f29.webp' },
  { src: '/images/galleries/mj-v4-improved/josikinz_a_close_up_of_a_colorful_and_highly_detailed_symmetric_57919480-c6e2-4ed2-ad9d-01a8fb2d4003.webp' },
  { src: '/images/galleries/mj-v4-improved/josikinz_a_close_up_of_a_colorful_and_highly_detailed_symmetric_a01970d5-2531-4b50-91d6-eb788c65a692.webp' },
  { src: '/images/galleries/mj-v4-improved/josikinz_a_close_up_of_a_colorful_and_highly_detailed_symmetric_b07e0402-f7a8-4ebb-9f43-4197703886b4.webp' },
  { src: '/images/galleries/mj-v4-improved/josikinz_a_close_up_of_a_colorful_pattern_on_fabric_an_abstract_da814223-91fd-4cad-8ecb-a406f4a1f151.webp' },
  { src: '/images/galleries/mj-v4-improved/josikinz_a_close_up_of_a_colorful_pattern_on_fabric_an_abstract_fd9051af-3300-4dae-aef5-aa4ff57ed5c0.webp' },
  { src: '/images/galleries/mj-v4-improved/josikinz_a_close_up_of_a_colorful_symmetrical_and_highly_detail_96a4d486-bd5d-4e2f-871e-4acd20ef3b50.webp' },
  { src: '/images/galleries/mj-v4-improved/josikinz_a_close_up_of_a_DMT_pattern_on_fabric_an_abstract_draw_0cbb4c52-eb87-4b83-b671-9f3c39b77c11.webp' },
  { src: '/images/galleries/mj-v4-improved/josikinz_a_close_up_of_a_highly_detailed_symmetrical_pattern_on_ddcd880a-5544-4895-8681-fa7d592431e1.webp' },
  { src: '/images/galleries/mj-v4-improved/josikinz_a_close_up_of_a_psychedelic_DMT_pattern_of_geometric_p_aff398bd-18f7-450b-9b32-169e62245b7a.webp' },
  { src: '/images/galleries/mj-v4-improved/josikinz_a_close_up_of_a_psychedelic_DMT_pattern_on_fabric_an_a_5755c3f9-8052-4a27-b806-cd69fc942762.webp' },
  { src: '/images/galleries/mj-v4-improved/josikinz_a_close_up_of_a_psychedelic_pattern_on_fabric_an_abstr_6765baa7-084d-42ea-abd5-0b21033e9076.webp' },
  { src: '/images/galleries/mj-v4-improved/josikinz_a_full_body_pov_shot_of_a_cute_dmt_entity_being_spirit_8f86b23c-b50c-4466-8297-5ac524f044be.webp' },
]

export function MJV4Improved() {
  return (
    <Section
      verticalPadding="large"
      background="image"
      backgroundImage="/images/shared/eye+wall+angled.webp"
      backgroundOverlay
    >
      <Link to="/ai-psychedelia" className="text-purple-400 hover:text-purple-300 mb-8 inline-block">
        &larr; Back to AI Psychedelia
      </Link>
      <h1 className="text-4xl font-bold text-center text-accent mb-8">Midjourney V4 (improved prompt)</h1>
      <p className="text-right text-white/80 max-w-3xl mx-auto mb-4 text-lg"><em>~January 2023</em></p>
      <p className="text-center text-white/80 max-w-3xl mx-auto mb-8">
        This gallery marks the point at which the Subjective Effect Documentation community had greatly improved the necessary text prompt to generate the best possible psychedelic replications that Midjourney V4 was capable of producing. To do this, we trained an image captioner on a dataset of human made psychedelic artwork and prompted it to describe each image. After many attempts it generated a prompt that worked better than anything we could come up with ourselves. We then manually tweaked the prompt into the text below, and continued to use this across future versions of midjourney.
      </p>
      <div className="bg-black/40 rounded-lg p-6 max-w-3xl mx-auto mb-8">
        <h3 className="font-semibold text-white mb-2">Prompt:</h3>
        <p className="text-sm text-white/80 font-mono mb-4">
          a close up of a colorful and highly detailed CUTE psychedelic SOMETHING, an abstract drawing, by Alex Grey and Cy Twombly, generative art, mayan aztec hindu egyptian ancient alien shamanic, hieroglyphic symbols and runes, cubic conic crystals, isometric style, symmetry, studio lighting, crisp 3D render, visionary art, psychedelic art, instagram artsy filter
        </p>
        <h3 className="font-semibold text-white mb-2">Usage Notes:</h3>
        <p className="text-sm text-white/80">
          Simply swap out "SOMETHING" with the desired concept, this concept can be an entity ("jester", "elf", "deity", etc) or it can be a "pattern", "landscape", "environment", or whatever else. Also, add or remove "CUTE" as needed since MJ often likes to force psychedelic entity generations to look overly scary if this word isn't included. You may also need to swap out "CUTE" for "UGLY" when generating female characters, as MJ likes to generate women with weird instagram model aesthetics.
        </p>
      </div>
      <ImageGallery images={images} columns={3} />
    </Section>
  )
}
