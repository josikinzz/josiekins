import { cn } from '@/lib/utils'

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  background?: 'white' | 'alt' | 'transparent' | 'image'
  backgroundImage?: string
  backgroundOverlay?: boolean
  fullWidth?: boolean
  verticalPadding?: 'none' | 'small' | 'medium' | 'large'
  bottomFadeOpacity?: number
  bottomFadeHeight?: string
  topFadeOpacity?: number
  topFadeHeight?: string
}

const paddingMap = {
  none: '',
  small: 'py-4 md:py-8',
  medium: 'py-8 md:py-12',
  large: 'py-12 md:py-20',
}

const backgroundMap = {
  white: 'bg-background',
  alt: 'bg-muted',
  transparent: 'bg-transparent',
  image: '',
}

export function Section({
  children,
  className,
  id,
  background = 'white',
  backgroundImage,
  backgroundOverlay = true,
  fullWidth = false,
  verticalPadding = 'medium',
  bottomFadeOpacity = 1,
  bottomFadeHeight = '40%',
  topFadeOpacity = 1,
  topFadeHeight = '40%',
}: SectionProps) {
  const isImageBackground = background === 'image' && backgroundImage

  return (
    <section
      id={id}
      className={cn(
        'relative w-full overflow-visible',
        paddingMap[verticalPadding],
        !isImageBackground && backgroundMap[background],
        className
      )}
      style={
        isImageBackground
          ? {
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: '#111',
          }
          : undefined
      }
    >
      {/* Background overlay for image backgrounds */}
      {isImageBackground && backgroundOverlay && (
        <>
          <div className="absolute inset-0 bg-black/70" />
          {/* Top fade to black */}
          <div
            className="absolute inset-x-0 top-0"
            style={{
              height: topFadeHeight,
              background: `linear-gradient(to bottom, rgba(0,0,0,${topFadeOpacity}) 0%, transparent 100%)`
            }}
          />
          {/* Bottom fade to black */}
          <div
            className="absolute inset-x-0 bottom-0"
            style={{
              height: bottomFadeHeight,
              background: `linear-gradient(to top, rgba(0,0,0,${bottomFadeOpacity}) 0%, transparent 100%)`
            }}
          />
        </>
      )}

      {/* Content container */}
      <div
        className={cn(
          'relative z-10 overflow-visible',
          !fullWidth && 'max-w-page mx-auto px-page'
        )}
      >
        {children}
      </div>
    </section>
  )
}
