import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

interface ProjectCardProps {
  title: string
  href: string
  imageSrc: string
  imageAlt?: string
  aspectRatio?: '1:1' | '3:2'
  showTitleOverlay?: boolean
}

const aspectRatioMap = {
  '1:1': 'aspect-square',
  '3:2': 'aspect-[3/2]',
}

export function ProjectCard({
  title,
  href,
  imageSrc,
  imageAlt,
  aspectRatio = '1:1',
  showTitleOverlay = true,
}: ProjectCardProps) {
  return (
    <Link
      to={href}
      className="group relative block overflow-hidden"
    >
      {/* Image container with aspect ratio */}
      <div className={cn('relative overflow-hidden', aspectRatioMap[aspectRatio])}>
        <img
          src={imageSrc}
          alt={imageAlt || title}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-150 group-hover:rotate-1 will-change-transform"
        />

        {/* Title overlay on hover */}
        {showTitleOverlay && (
          <div className="absolute inset-0 flex items-end justify-start p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <h3 className="text-white font-medium text-lg">{title}</h3>
          </div>
        )}
      </div>
    </Link>
  )
}
