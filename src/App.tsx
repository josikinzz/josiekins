import { Outlet } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'

function App() {
  return (
    <Layout transparentHeader>
      <Outlet />
    </Layout>
  )
}

export default App
