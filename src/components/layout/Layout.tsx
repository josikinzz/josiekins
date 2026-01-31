import { Header } from './Header'
import { Footer } from './Footer'

interface LayoutProps {
  children: React.ReactNode
  transparentHeader?: boolean
}

export function Layout({ children, transparentHeader = false }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header transparent={transparentHeader} />
      <main className={`flex-1 overflow-visible ${transparentHeader ? 'pt-16 md:pt-20' : ''}`}>{children}</main>
      <Footer />
    </div>
  )
}
