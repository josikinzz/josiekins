import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'

export function Footer() {
  return (
    <footer
      className="w-full py-8 relative"
      style={{
        backgroundImage: 'url(/images/shared/background.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#111',
      }}
    >
      <div className="absolute inset-0 bg-black/85" />
      {/* Top fade to black */}
      <div
        className="absolute inset-x-0 top-0 h-[10%] z-[1]"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
        }}
      />
      <div className="relative z-10 max-w-page mx-auto px-page text-white/60 text-sm text-center flex justify-center gap-8">
        <Link to="/" className="text-accent hover:scale-110 active:scale-95 hover:text-white transition-transform duration-200">
          <Icon icon="tabler:home" width={32} />
        </Link>
        <Link to="/misc" className="text-accent hover:animate-[spin_3s_linear_infinite] hover:text-white">
          <Icon icon="tabler:spiral" width={32} />
        </Link>
        <a
          href="https://github.com/josikinzz"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:-translate-y-1 hover:text-white transition-[transform,color] duration-300"
        >
          <Icon icon="tabler:brand-github" width={32} />
        </a>
      </div>
    </footer>
  )
}
