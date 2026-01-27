import { useState, useCallback, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface GalleryImage {
  src: string
  alt?: string
  title?: string
}

interface ImageGalleryProps {
  images: GalleryImage[]
  columns?: 2 | 3 | 4
  aspectRatio?: '1:1' | '3:2' | 'auto'
  gap?: 'small' | 'medium' | 'large'
}

const columnMap = {
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
}

const aspectRatioMap = {
  '1:1': 'aspect-square',
  '3:2': 'aspect-[3/2]',
  'auto': '',
}

const gapMap = {
  small: 'gap-2',
  medium: 'gap-[2vw]',
  large: 'gap-6',
}

export function ImageGallery({
  images,
  columns = 3,
  aspectRatio = '1:1',
  gap = 'medium',
}: ImageGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
  }

  const closeLightbox = () => {
    setLightboxIndex(null)
  }

  const goToPrevious = useCallback(() => {
    if (lightboxIndex === null) return
    setLightboxIndex(lightboxIndex === 0 ? images.length - 1 : lightboxIndex - 1)
  }, [lightboxIndex, images.length])

  const goToNext = useCallback(() => {
    if (lightboxIndex === null) return
    setLightboxIndex(lightboxIndex === images.length - 1 ? 0 : lightboxIndex + 1)
  }, [lightboxIndex, images.length])

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          closeLightbox()
          break
        case 'ArrowLeft':
          goToPrevious()
          break
        case 'ArrowRight':
          goToNext()
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [lightboxIndex, goToPrevious, goToNext])

  return (
    <>
      {/* Gallery Grid */}
      <div className={cn('grid', columnMap[columns], gapMap[gap])}>
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => openLightbox(index)}
            className={cn(
              'group relative overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent',
              aspectRatioMap[aspectRatio]
            )}
          >
            <img
              src={image.src}
              alt={image.alt || image.title || `Image ${index + 1}`}
              className={cn(
                'w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-150',
                aspectRatio === 'auto' && 'h-auto'
              )}
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2 z-10"
            aria-label="Close lightbox"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Previous button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              goToPrevious()
            }}
            className="absolute left-4 text-white/80 hover:text-white p-2"
            aria-label="Previous image"
          >
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Image */}
          <img
            src={images[lightboxIndex].src}
            alt={images[lightboxIndex].alt || images[lightboxIndex].title || ''}
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              goToNext()
            }}
            className="absolute right-4 text-white/80 hover:text-white p-2"
            aria-label="Next image"
          >
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Image counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm">
            {lightboxIndex + 1} / {images.length}
          </div>

          {/* Title */}
          {images[lightboxIndex].title && (
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white text-lg">
              {images[lightboxIndex].title}
            </div>
          )}
        </div>
      )}
    </>
  )
}
