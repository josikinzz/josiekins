import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageCarouselProps {
  images: string[];
  accentColor: string;
  onImageClick: (index: number) => void;
}

export function ImageCarousel({ images, accentColor, onImageClick }: ImageCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(true);

  const updateArrows = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setShowPrev(scrollLeft > 0);
    setShowNext(scrollLeft < scrollWidth - clientWidth - 1);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // RAF-throttled scroll handler for better performance
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateArrows();
          ticking = false;
        });
        ticking = true;
      }
    };

    el.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    setTimeout(updateArrows, 50);

    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  const scroll = (direction: 'prev' | 'next') => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.8;
    scrollRef.current.scrollBy({
      left: direction === 'prev' ? -amount : amount,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative mb-6 px-9 group/carousel">
      {/* Previous arrow */}
      <button
        onClick={() => scroll('prev')}
        className={`absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center text-slate-300 bg-black/60 border border-white/10 shadow-lg transition-all z-10 hover:text-white hover:scale-110 hover:bg-black/80 ${
          showPrev ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-label="Previous thumbnails"
      >
        <ChevronLeft size={18} />
      </button>

      {/* Thumbnail strip */}
      <div
        ref={scrollRef}
        className="overflow-x-auto whitespace-nowrap pb-2 scrollbar-none"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {images.map((img, idx) => (
          <div
            key={idx}
            onClick={() => onImageClick(idx)}
            className="inline-block mr-3 cursor-pointer rounded-lg overflow-hidden border-2 border-transparent transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 shadow-md hover:shadow-lg hover:border-[var(--carousel-accent)]"
            style={{ '--carousel-accent': accentColor } as React.CSSProperties}
          >
            <img
              src={img}
              alt={`Thumbnail ${idx + 1}`}
              className="h-[60px] w-[90px] object-cover block"
            />
          </div>
        ))}
      </div>

      {/* Next arrow */}
      <button
        onClick={() => scroll('next')}
        className={`absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center text-slate-300 bg-black/60 border border-white/10 shadow-lg transition-all z-10 hover:text-white hover:scale-110 hover:bg-black/80 ${
          showNext ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-label="Next thumbnails"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
}
