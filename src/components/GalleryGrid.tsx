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
          className="group relative aspect-[3/2] overflow-hidden"
        >
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute inset-0 flex items-end p-4">
            <h3 className="text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {item.title}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  )
}
