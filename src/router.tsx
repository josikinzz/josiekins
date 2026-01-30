import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import { Home } from '@/pages/Home'
import { Misc } from '@/pages/Misc'
import { AIPsychedelia } from '@/pages/galleries/AIPsychedelia'
import { Magnific } from '@/pages/galleries/Magnific'
import { MJV4Improved } from '@/pages/galleries/MJV4Improved'
import { MJV4Initial } from '@/pages/galleries/MJV4Initial'
import { MJV5 } from '@/pages/galleries/MJV5'
import { MJV52 } from '@/pages/galleries/MJV52'
import { StyleGAN2 } from '@/pages/galleries/StyleGAN2'
import { StyleGAN3 } from '@/pages/galleries/StyleGAN3'
import { DeeperLearning } from '@/pages/articles/DeeperLearning'
import { DMTFieldGuide } from '@/pages/articles/DMTFieldGuide'
import { MckennaSyndrome } from '@/pages/articles/MckennaSyndrome'
import { Prototheism } from '@/pages/prototheism/Prototheism'
import { Creation } from '@/pages/prototheism/Creation'
import { Death } from '@/pages/prototheism/Death'
import { Faith } from '@/pages/prototheism/Faith'
import { God } from '@/pages/prototheism/God'
import { Identity } from '@/pages/prototheism/Identity'
import { Morality } from '@/pages/prototheism/Morality'
import { Purpose } from '@/pages/prototheism/Purpose'
import { Reverence } from '@/pages/prototheism/Reverence'
import { Suffering } from '@/pages/prototheism/Suffering'
import { LLMComics } from '@/pages/llm-comics'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'misc', element: <Misc /> },
      // AI Psychedelia - Hub and sub-galleries
      { path: 'ai-psychedelia', element: <AIPsychedelia /> },
      { path: 'ai-psychedelia/magnific', element: <Magnific /> },
      { path: 'ai-psychedelia/mjv52', element: <MJV52 /> },
      { path: 'ai-psychedelia/mjv5', element: <MJV5 /> },
      { path: 'ai-psychedelia/mjv4-improved', element: <MJV4Improved /> },
      { path: 'ai-psychedelia/mjv4', element: <MJV4Initial /> },
      { path: 'ai-psychedelia/stylegan3', element: <StyleGAN3 /> },
      { path: 'ai-psychedelia/stylegan2', element: <StyleGAN2 /> },
      // Articles
      { path: 'deeper-learning', element: <DeeperLearning /> },
      { path: 'dmt-field-guide', element: <DMTFieldGuide /> },
      { path: 'mckenna-syndrome', element: <MckennaSyndrome /> },
      // LLM Comics
      { path: 'llm-comics', element: <LLMComics /> },
      // Prototheism
      { path: 'prototheism', element: <Prototheism /> },
      { path: 'prototheism/creation', element: <Creation /> },
      { path: 'prototheism/death', element: <Death /> },
      { path: 'prototheism/faith', element: <Faith /> },
      { path: 'prototheism/god', element: <God /> },
      { path: 'prototheism/identity', element: <Identity /> },
      { path: 'prototheism/morality', element: <Morality /> },
      { path: 'prototheism/purpose', element: <Purpose /> },
      { path: 'prototheism/reverence', element: <Reverence /> },
      { path: 'prototheism/suffering', element: <Suffering /> },
    ],
  },
])
