import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

interface GalleryGridItem {
  title: string
  thumbnail: string
  href: string
}

interface GalleryGridProps {
  items: GalleryGridItem[]
  columns?: 2 | 3
}

const columnMap = {
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
}

export function GalleryGrid({ items, columns = 2 }: GalleryGridProps) {
  return (
    <div className={cn('grid gap-[2vw]', columnMap[columns])}>
      {items.map((item, index) => (
        <Link
          key={index}
          to={item.href}
          className="group relative aspect-[3/2] overflow-hidden rounded-2xl border border-white/10 shadow-lg hover:shadow-[0_0_30px_-5px_rgba(var(--accent),0.3)] hover:border-accent/40 transition-all duration-500"
        >
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]" />
          <div className="absolute inset-0 flex items-end p-6">
            <h3 className="text-white text-2xl font-bold font-heading tracking-wide opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out drop-shadow-lg">
              {item.title}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  )
}
