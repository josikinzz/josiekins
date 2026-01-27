import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'

interface HeaderProps {
  transparent?: boolean
}

export function Header({ transparent = false }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { href: '/', label: 'Main' },
    { href: '/misc', label: 'Misc' },
  ]

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(href)
  }

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

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-foreground/80',
                isActive(link.href)
                  ? 'text-foreground'
                  : 'text-foreground/60',
                transparent && 'text-white hover:text-white/80'
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[6px]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <span
            className={cn(
              'block w-6 h-[2px] transition-all duration-300',
              transparent ? 'bg-white' : 'bg-foreground',
              mobileMenuOpen && 'rotate-45 translate-y-[8px]'
            )}
          />
          <span
            className={cn(
              'block w-6 h-[2px] transition-all duration-300',
              transparent ? 'bg-white' : 'bg-foreground',
              mobileMenuOpen && 'opacity-0'
            )}
          />
          <span
            className={cn(
              'block w-6 h-[2px] transition-all duration-300',
              transparent ? 'bg-white' : 'bg-foreground',
              mobileMenuOpen && '-rotate-45 -translate-y-[8px]'
            )}
          />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'md:hidden fixed inset-0 bg-black/95 z-40 flex flex-col items-center justify-center gap-8 transition-all duration-300',
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        )}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            onClick={() => setMobileMenuOpen(false)}
            className={cn(
              'text-2xl font-medium transition-colors',
              isActive(link.href)
                ? 'text-white'
                : 'text-white/60 hover:text-white'
            )}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </header>
  )
}
