import { Section } from '@/components/Section'
import { GalleryGrid } from '@/components/GalleryGrid'

const subGalleries = [
  {
    title: 'Magnific',
    thumbnail: '/images/galleries/ai-psychedelia/magnific-7oJ2wMmaZulrYfcrs8ur-Screenshot+2024-01-13+at+6.35.44+PM.webp',
    href: '/ai-psychedelia/magnific',
  },
  {
    title: 'MJ-V5.2',
    thumbnail: '/images/galleries/ai-psychedelia/josikinz_a_close_up_of_a_group_colorful_and_highly_detailed_cut_5af9cba7-2df3-4ff5-a1b1-b442a7da6f2e.webp',
    href: '/ai-psychedelia/mjv52',
  },
  {
    title: 'MJ-V5',
    thumbnail: '/images/galleries/ai-psychedelia/0_2+(6).webp',
    href: '/ai-psychedelia/mjv5',
  },
  {
    title: 'MJ-V4 (improved prompt)',
    thumbnail: '/images/galleries/ai-psychedelia/josikinz_a_close_up_of_a_colorful_symmetrical_and_highly_detail_96a4d486-bd5d-4e2f-871e-4acd20ef3b50.webp',
    href: '/ai-psychedelia/mjv4-improved',
  },
  {
    title: 'MJ-V4 (initial attempts)',
    thumbnail: '/images/galleries/ai-psychedelia/josikinz_a_close_up_of_a_colorful_hyperbolic_pattern_on_fabric__5486442f-a57a-4c1a-b116-ef1274346cee.webp',
    href: '/ai-psychedelia/mjv4',
  },
  {
    title: 'StyleGAN3',
    thumbnail: '/images/galleries/ai-psychedelia/Screenshot+2024-01-22+at+1.36.25+PM.webp',
    href: '/ai-psychedelia/stylegan3',
  },
  {
    title: 'StyleGAN2',
    thumbnail: '/images/galleries/ai-psychedelia/seed0448+(mirrored).webp',
    href: '/ai-psychedelia/stylegan2',
  },
]

export function AIPsychedelia() {
  return (
    <Section
      verticalPadding="large"
      background="image"
      backgroundImage="/images/shared/eye+wall+angled.webp"
      backgroundOverlay
    >
      <h1 className="text-4xl font-bold text-center text-accent mb-8">AI Psychedelia</h1>
      <p className="text-center text-white/80 max-w-3xl mx-auto mb-12">
        For several years now, I have been attempting to use generative AI image models to replicate accurate looking psychedelic hallucinations. This is a project that has very much evolved as models have improved. I am using this website to host the images as well as included prompts and information on the models used.
      </p>
      <GalleryGrid items={subGalleries} columns={2} />
    </Section>
  )
}
