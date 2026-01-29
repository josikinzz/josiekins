import { useRef, useState, useEffect } from 'react';

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
    if (el) {
      el.addEventListener('scroll', updateArrows);
      // Initial check
      setTimeout(updateArrows, 50);
    }
    return () => {
      if (el) el.removeEventListener('scroll', updateArrows);
    };
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
    <div className="relative mb-6 px-9">
      {/* Previous arrow */}
      <button
        onClick={() => scroll('prev')}
        className={`absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center text-slate-300 font-bold transition-all z-10 hover:text-white hover:scale-105 ${
          showPrev ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        style={{
          background: 'rgba(30, 41, 59, 0.8)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
        }}
        aria-label="Previous thumbnails"
      >
        &lt;
      </button>

      {/* Thumbnail strip */}
      <div
        ref={scrollRef}
        className="overflow-x-auto whitespace-nowrap pb-2"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {images.map((img, idx) => (
          <div
            key={idx}
            onClick={() => onImageClick(idx)}
            className="inline-block mr-3 cursor-pointer rounded-lg overflow-hidden border-2 border-transparent transition-all hover:-translate-y-0.5"
            style={{
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = accentColor;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = 'transparent';
            }}
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
        className={`absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center text-slate-300 font-bold transition-all z-10 hover:text-white hover:scale-105 ${
          showNext ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        style={{
          background: 'rgba(30, 41, 59, 0.8)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
        }}
        aria-label="Next thumbnails"
      >
        &gt;
      </button>
    </div>
  );
}
