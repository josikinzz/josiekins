import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { cn } from '@/lib/utils'

interface HeaderProps {
  transparent?: boolean
}

export function Header({ transparent = false }: HeaderProps) {
  const navLinks = [
    { href: '/', icon: 'tabler:home' },
    { href: '/misc', icon: 'tabler:spiral' },
    { href: 'https://github.com/josikinzz', icon: 'tabler:brand-github', external: true },
  ]

  return (
    <header
      className={cn(
        'w-full z-50',
        transparent ? 'absolute top-0 left-0 right-0' : 'relative bg-background'
      )}
    >
      <nav className="max-w-page mx-auto px-page py-[1.1vw] md:py-[1.1vw] py-[6vw] flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/images/shared/JosieLogo2.webp"
            alt="JosieKins"
            className="h-[30px] md:h-[50px]"
          />
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-6 md:gap-8">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-white transition-colors"
              >
                <Icon icon={link.icon} width={32} />
              </a>
            ) : (
              <Link
                key={link.href}
                to={link.href}
                className="text-accent hover:text-white transition-colors"
              >
                <Icon icon={link.icon} width={32} />
              </Link>
            )
          )}
        </div>
      </nav>
    </header>
  )
}
