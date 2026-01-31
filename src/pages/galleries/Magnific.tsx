import { Link } from 'react-router-dom'
import { Section } from '@/components/Section'
import { ImageGallery } from '@/components/ImageGallery'

const images = [
  { src: '/images/galleries/magnific/alien+deity.webp' },
  { src: '/images/galleries/magnific/ancient+computer+city.webp' },
  { src: '/images/galleries/magnific/ancient+middle+eastern+city.webp' },
  { src: '/images/galleries/magnific/anubis.webp' },
  { src: '/images/galleries/magnific/cat.webp' },
  { src: '/images/galleries/magnific/colorful+squiggle+temple.webp' },
  { src: '/images/galleries/magnific/computropilis.webp' },
  { src: '/images/galleries/magnific/eye.webp' },
  { src: '/images/galleries/magnific/flattened+geomety+face.webp' },
  { src: '/images/galleries/magnific/fox.webp' },
  { src: '/images/galleries/magnific/ganesha.webp' },
  { src: '/images/galleries/magnific/ganesha+v2.webp' },
  { src: '/images/galleries/magnific/gateay.webp' },
  { src: '/images/galleries/magnific/gremlin.webp' },
  { src: '/images/galleries/magnific/imp+thing.webp' },
  { src: '/images/galleries/magnific/josikinz_a_close_up_of_a_colorful_and_highly_detailed_symmetric_b07e0402-f7a8-4ebb-9f43-4197703886b4.webp' },
  { src: '/images/galleries/magnific/magnific-0EuK4sC8i4ZWdfVwQXf4-0_3.webp' },
  { src: '/images/galleries/magnific/magnific-244LXc03SxQTPoZu5d99-josikinz_a_close_up_of_a_colorful_and_highly_detailed_psychedel_9c5f8568-9669-405e-a02e-eb9991f99032.webp' },
  { src: '/images/galleries/magnific/magnific-4gjwIcpOOPfDB3CSmYvy-josikinz_a_close_up_of_a_colorful_and_highly_detailed_cute_psyc_b6eeb175-1aa2-4feb-b2ef-964bba86c05e+(1).webp' },
  { src: '/images/galleries/magnific/magnific-5m8yO62Qs1SGgAb11rG0-josikinz_a_close_up_portrait_of_a_colorful_and_highly_detailed__b51d28c1-78db-4d85-ad4b-45e7905563f9.webp' },
  { src: '/images/galleries/magnific/magnific-5MAszPjfsGhC4nk3xA50-josikinz_a_close_up_of_a_psychedelic_DMT_pattern_of_geometric_p_aff398bd-18f7-450b-9b32-169e62245b7a+(1).webp' },
  { src: '/images/galleries/magnific/magnific-79OBip91FjsxMt7RQn6A-josikinz_a_close_up_headshot_portrait_of_a_colorful_and_highly__ec402931-1b3c-4b2b-8695-98f933139208.webp' },
  { src: '/images/galleries/magnific/magnific-7oJ2wMmaZulrYfcrs8ur-Screenshot+2024-01-13+at+6.35.44+PM.webp' },
  { src: '/images/galleries/magnific/magnific-efxduRTHjgDqQhCevCI8-josikinz_a_close_up_of_a_colorful_pattern_on_fabric_an_abstract_fd9051af-3300-4dae-aef5-aa4ff57ed5c0.webp' },
  { src: '/images/galleries/magnific/magnific-eJP6uBrzySF0jddh5viU-josikinz_a_close_up_headshot_portrait_of_a_colorful_and_highly__dbaf8c28-625c-4d7a-a9fd-8e274b72f8ea.webp' },
  { src: '/images/galleries/magnific/magnific-fvnP6StYsEuydp4DZyMl-josikinz_a_close_up_of_a_colorful_symmetrical_and_highly_detail_96a4d486-bd5d-4e2f-871e-4acd20ef3b50+(1).webp' },
  { src: '/images/galleries/magnific/magnific-FYlFi5DlE3GusUbEtIzE-josikinz_a_close_up_of_a_colorful_and_highly_detailed_psychedel_08c1c65d-9fc1-4a88-a364-1fb9cad185dd.webp' },
  { src: '/images/galleries/magnific/magnific-h8fV9oOXBwQuI54wzH8c-josikinz_a_close_up_portrait_of_a_colorful_and_highly_detailed__91ce47b0-b0d5-488c-94fc-d32869cce10b.webp' },
  { src: '/images/galleries/magnific/magnific-iJgBSsKQn0L5zLzea1Uk-josikinz_a_close_up_of_a_colorful_and_highly_detailed_cute_psyc_7aac7431-7872-467f-8e75-77d26b4dc63d.webp' },
  { src: '/images/galleries/magnific/magnific-iMAcnRXWOQ5aUrATLBKO-josikinz_a_close_up_of_a_colorful_and_highly_detailed_symmetric_b07e0402-f7a8-4ebb-9f43-4197703886b4.webp' },
  { src: '/images/galleries/magnific/magnific-jb2za4YsD1GCPuwGOrIZ-josikinz_a_close_up_of_a_colorful_and_highly_detailed_psychedel_0fa6d40b-b82f-4de3-885f-5b032f0a3942.webp' },
  { src: '/images/galleries/magnific/magnific-jmRRYfjeP69wy9YuXVgT-josikinz_a_close_up_of_a_colorful_and_highly_detailed_psychedel_ad91ec79-9fdf-4dfd-ae44-a577fe566fc1.webp' },
  { src: '/images/galleries/magnific/magnific-Jv2bUVnqBJD6sVuE8eCF-Screenshot_2024-01-11_at_1.51.24_PM.webp' },
  { src: '/images/galleries/magnific/magnific-JXxjRqxlgXr93C5RDbW5-josikinz_a_close_up_of_a_DMT_pattern_on_fabric_an_abstract_draw_0cbb4c52-eb87-4b83-b671-9f3c39b77c11.webp' },
  { src: '/images/galleries/magnific/magnific-Ljpshw4RqBLnQRlHWgGW-Screenshot+2024-01-11+at+3.32.51+PM.webp' },
  { src: '/images/galleries/magnific/magnific-o3Z25qEol2qXAzLlPrIt-josikinz_a_close_up_of_a_colorful_and_highly_detailed_cute_psyc_369dfd20-3fa8-4c9b-a197-3861e10960bb.webp' },
  { src: '/images/galleries/magnific/magnific-PzZOmE1eBuP6MIAIds4w-josikinz_a_close_up_of_a_colorful_and_highly_detailed_psychedel_f4b9c066-494a-43bd-9e51-e470bc7ff1c8.webp' },
  { src: '/images/galleries/magnific/magnific-QeYNfrgtDXZhG9inDyUu-josikinz_a_close_up_of_a_colorful_and_highly_detailed_psychedel_f6a4e8f2-58a5-42ab-928b-a90bdb0f9035.webp' },
  { src: '/images/galleries/magnific/magnific-QJp9y9zLMf3vSTzF8eNS-josikinz_a_close_up_of_a_colorful_and_highly_detailed_cute_alie_f74a14e9-80e1-4095-9920-16242b0a6117.webp' },
  { src: '/images/galleries/magnific/magnific-qodzX9HEpEnbYteucxYv-josikinz_a_close_up_of_a_colorful_and_highly_detailed_cute_alie_243692e2-54d2-450d-9feb-6b72ffdfc0ac+(1).webp' },
  { src: '/images/galleries/magnific/magnific-sfGQ9NyXyD6moNmmNY6Q-josikinz_a_close_up_of_a_colorful_and_highly_detailed_cute_psyc_d14281fd-542b-480f-bc95-205fb235f815.webp' },
  { src: '/images/galleries/magnific/magnific-y78nnD5v5buu2xZK6pkM-josikinz_a_close_up_of_a_colorful_and_highly_detailed_cute_alie_38e45645-250e-4e0c-b663-e906e2b71622.webp' },
  { src: '/images/galleries/magnific/magnific-Z2UfT3HsS7LgUchDlv8m-josikinz_a_close_up_of_a_psychedelic_pattern_on_fabric_an_abstr_6765baa7-084d-42ea-abd5-0b21033e9076.webp' },
  { src: '/images/galleries/magnific/magnific-zEAl22Rw0ebKlForfs9n-josikinz_a_close_up_portrait_of_a_colorful_and_highly_detailed__55e906f0-08e8-4995-8313-5782907184b3.webp' },
  { src: '/images/galleries/magnific/magnific-zyqjjuVBjbhQbIeZBWDQ-josikinz_a_close_up_of_a_colorful_and_highly_detailed_psychedel_ccabdbf5-6386-44f6-87e3-31f4b4df8121.webp' },
  { src: '/images/galleries/magnific/majoras+mask.webp' },
  { src: '/images/galleries/magnific/majoras+mask+2.webp' },
  { src: '/images/galleries/magnific/mario.webp' },
  { src: '/images/galleries/magnific/midna.webp' },
  { src: '/images/galleries/magnific/netherlands3k.webp' },
  { src: '/images/galleries/magnific/octopus.webp' },
  { src: '/images/galleries/magnific/pillar+room.webp' },
  { src: '/images/galleries/magnific/sacred+wall.webp' },
  { src: '/images/galleries/magnific/shiva.webp' },
  { src: '/images/galleries/magnific/throneroom.webp' },
  { src: '/images/galleries/magnific/tribal+deer+mask+thing.webp' },
  { src: '/images/galleries/magnific/wall.webp' },
  { src: '/images/galleries/magnific/weird+face.webp' },
]

export function Magnific() {
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
        <h1 className="text-4xl md:text-5xl font-light font-heading text-center text-accent mb-8 tracking-[0.2em] drop-shadow-md">
          Magnific
        </h1>
        <p className="text-right text-white/60 max-w-3xl mx-auto mb-4 text-sm uppercase tracking-widest"><em>April 2024</em></p>
        <p className="text-center text-white/90 max-w-3xl mx-auto mb-6 text-lg font-light leading-relaxed">
          These images were created by feeding Midjourney art into Magnific AI, an advanced AI upscaler that can hallucinate new details into an image. I am extremely impressed with the results and feel that this technique is so far ahead of any stand alone model when it comes to replicating snap shots of high-level psychedelic hallucinations.
        </p>
        <p className="text-center text-white/90 max-w-3xl mx-auto mb-10 text-lg font-light leading-relaxed">
          At this point, I feel that the quest to AI replicate still image snapshots of DMT hyperspace is accomplished about as well as it could be within the confines of a 2D screen. The only thing left is full video animation.
        </p>
        <div className="bg-black/20 backdrop-blur-md border border-white/5 rounded-3xl p-8 max-w-3xl mx-auto mb-12 shadow-lg">
          <h3 className="font-bold text-accent mb-3 uppercase tracking-wider text-sm">Midjourney Prompt:</h3>
          <p className="text-sm text-white/80 mb-6 font-mono bg-black/20 p-4 rounded-lg border border-white/5">
            a close up of a colorful and highly detailed CUTE psychedelic SOMETHING, an abstract drawing, generative art, hieroglyphic symbols and runes, cubic conic crystals, isometric style, symmetry, studio lighting, crisp 3D render, visionary art, psychedelic art --v 5 --ar 16:9
          </p>
          <h3 className="font-bold text-accent mb-3 uppercase tracking-wider text-sm">Magnific Prompt:</h3>
          <p className="text-sm text-white/80 font-mono bg-black/20 p-4 rounded-lg border border-white/5">
            an extremely intricate interdimensional colorful hyperspace SOMETHING comprised of complex interlocking ancient ornamental patterns symbols and runes
          </p>
        </div>
        <div className="max-w-3xl mx-auto mb-16">
          <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/626uwO113pQ"
              title="Tutorial: Making DMT Replications in Midjourney / Magnific"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
        <ImageGallery images={images} columns={3} />
      </Section>
    </div>
  )
}
