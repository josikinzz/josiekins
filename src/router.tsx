import { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import { Home } from '@/pages/Home'
import { PageLoader } from '@/components/PageLoader'

// Lazy-loaded pages
const Misc = lazy(() => import('@/pages/Misc').then(m => ({ default: m.Misc })))
const GlitchDialog = lazy(() => import('@/pages/GlitchDialog').then(m => ({ default: m.GlitchDialog })))

// Galleries
const AIPsychedelia = lazy(() => import('@/pages/galleries/AIPsychedelia').then(m => ({ default: m.AIPsychedelia })))
const Magnific = lazy(() => import('@/pages/galleries/Magnific').then(m => ({ default: m.Magnific })))
const MJV4Improved = lazy(() => import('@/pages/galleries/MJV4Improved').then(m => ({ default: m.MJV4Improved })))
const MJV4Initial = lazy(() => import('@/pages/galleries/MJV4Initial').then(m => ({ default: m.MJV4Initial })))
const MJV5 = lazy(() => import('@/pages/galleries/MJV5').then(m => ({ default: m.MJV5 })))
const MJV52 = lazy(() => import('@/pages/galleries/MJV52').then(m => ({ default: m.MJV52 })))
const StyleGAN2 = lazy(() => import('@/pages/galleries/StyleGAN2').then(m => ({ default: m.StyleGAN2 })))
const StyleGAN3 = lazy(() => import('@/pages/galleries/StyleGAN3').then(m => ({ default: m.StyleGAN3 })))

// Articles
const DeeperLearning = lazy(() => import('@/pages/articles/DeeperLearning').then(m => ({ default: m.DeeperLearning })))
const DMTFieldGuide = lazy(() => import('@/pages/articles/DMTFieldGuide').then(m => ({ default: m.DMTFieldGuide })))
const MckennaSyndrome = lazy(() => import('@/pages/articles/MckennaSyndrome').then(m => ({ default: m.MckennaSyndrome })))

// LLM Comics
const LLMComics = lazy(() => import('@/pages/llm-comics').then(m => ({ default: m.LLMComics })))

// Prototheism
const Prototheism = lazy(() => import('@/pages/prototheism/Prototheism').then(m => ({ default: m.Prototheism })))
const Creation = lazy(() => import('@/pages/prototheism/Creation').then(m => ({ default: m.Creation })))
const Death = lazy(() => import('@/pages/prototheism/Death').then(m => ({ default: m.Death })))
const Faith = lazy(() => import('@/pages/prototheism/Faith').then(m => ({ default: m.Faith })))
const God = lazy(() => import('@/pages/prototheism/God').then(m => ({ default: m.God })))
const Identity = lazy(() => import('@/pages/prototheism/Identity').then(m => ({ default: m.Identity })))
const Morality = lazy(() => import('@/pages/prototheism/Morality').then(m => ({ default: m.Morality })))
const Purpose = lazy(() => import('@/pages/prototheism/Purpose').then(m => ({ default: m.Purpose })))
const Reverence = lazy(() => import('@/pages/prototheism/Reverence').then(m => ({ default: m.Reverence })))
const Suffering = lazy(() => import('@/pages/prototheism/Suffering').then(m => ({ default: m.Suffering })))

// Suspense wrapper helper
function withSuspense(Component: React.LazyExoticComponent<React.ComponentType<any>>, props?: Record<string, any>) {
  return (
    <Suspense fallback={<PageLoader />}>
      <Component {...props} />
    </Suspense>
  )
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'misc', element: withSuspense(Misc) },
      { path: 'glitch', element: withSuspense(GlitchDialog) },
      // AI Psychedelia - Hub and sub-galleries
      { path: 'ai-psychedelia', element: withSuspense(AIPsychedelia) },
      { path: 'ai-psychedelia/magnific', element: withSuspense(Magnific) },
      { path: 'ai-psychedelia/mjv52', element: withSuspense(MJV52) },
      { path: 'ai-psychedelia/mjv5', element: withSuspense(MJV5) },
      { path: 'ai-psychedelia/mjv4-improved', element: withSuspense(MJV4Improved) },
      { path: 'ai-psychedelia/mjv4', element: withSuspense(MJV4Initial) },
      { path: 'ai-psychedelia/stylegan3', element: withSuspense(StyleGAN3) },
      { path: 'ai-psychedelia/stylegan2', element: withSuspense(StyleGAN2) },
      // Articles
      { path: 'deeper-learning', element: withSuspense(DeeperLearning) },
      { path: 'dmt-field-guide', element: withSuspense(DMTFieldGuide) },
      { path: 'mckenna-syndrome', element: withSuspense(MckennaSyndrome) },
      // LLM Comics
      { path: 'llm-comics', element: withSuspense(LLMComics) },
      // Prototheism
      { path: 'prototheism', element: withSuspense(Prototheism) },
      { path: 'prototheism/creation', element: withSuspense(Creation) },
      { path: 'prototheism/death', element: withSuspense(Death) },
      { path: 'prototheism/faith', element: withSuspense(Faith) },
      { path: 'prototheism/god', element: withSuspense(God) },
      { path: 'prototheism/identity', element: withSuspense(Identity) },
      { path: 'prototheism/morality', element: withSuspense(Morality) },
      { path: 'prototheism/purpose', element: withSuspense(Purpose) },
      { path: 'prototheism/reverence', element: withSuspense(Reverence) },
      { path: 'prototheism/suffering', element: withSuspense(Suffering) },
      // Glitch routes - hidden tenet pages without back button
      { path: 'glitch/creation', element: withSuspense(Creation, { hideBackButton: true }) },
      { path: 'glitch/death', element: withSuspense(Death, { hideBackButton: true }) },
      { path: 'glitch/faith', element: withSuspense(Faith, { hideBackButton: true }) },
      { path: 'glitch/god', element: withSuspense(God, { hideBackButton: true }) },
      { path: 'glitch/identity', element: withSuspense(Identity, { hideBackButton: true }) },
      { path: 'glitch/morality', element: withSuspense(Morality, { hideBackButton: true }) },
      { path: 'glitch/purpose', element: withSuspense(Purpose, { hideBackButton: true }) },
      { path: 'glitch/reverence', element: withSuspense(Reverence, { hideBackButton: true }) },
      { path: 'glitch/suffering', element: withSuspense(Suffering, { hideBackButton: true }) },
    ],
  },
])
