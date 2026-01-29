import { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  isOpen: boolean;
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function Lightbox({ isOpen, images, currentIndex, onClose, onNavigate }: LightboxProps) {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isOpen) return;
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft') onNavigate(currentIndex > 0 ? currentIndex - 1 : images.length - 1);
    if (e.key === 'ArrowRight') onNavigate(currentIndex < images.length - 1 ? currentIndex + 1 : 0);
  }, [isOpen, currentIndex, images.length, onClose, onNavigate]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown, isOpen]);

  if (!isOpen || images.length === 0) return null;

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/95 backdrop-blur-md"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-[10001] w-12 h-12 rounded-full flex items-center justify-center text-white bg-black/40 border border-white/10 hover:bg-white/10 hover:scale-110 transition-all duration-300"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        {/* Previous button */}
        {images.length > 1 && (
          <button
            onClick={() => onNavigate(currentIndex > 0 ? currentIndex - 1 : images.length - 1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-[10001] w-12 h-12 rounded-full flex items-center justify-center text-white bg-black/40 border border-white/10 hover:bg-white/10 hover:scale-110 transition-all duration-300"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>
        )}

        {/* Next button */}
        {images.length > 1 && (
          <button
            onClick={() => onNavigate(currentIndex < images.length - 1 ? currentIndex + 1 : 0)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-[10001] w-12 h-12 rounded-full flex items-center justify-center text-white bg-black/40 border border-white/10 hover:bg-white/10 hover:scale-110 transition-all duration-300"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
        )}

      {/* Content */}
      <div className="relative flex flex-col items-center w-[95%] h-[95vh] max-w-[2000px]">
        {/* Main image */}
        <div className="flex-1 flex items-center justify-center w-full overflow-hidden mb-4">
          <img
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            className="max-w-[98%] max-h-[98%] object-contain rounded-lg shadow-2xl border border-slate-700/30 transition-transform duration-300 hover:scale-[1.01]"
          />
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="flex-shrink-0 w-[95%] max-w-[1800px] overflow-x-auto whitespace-nowrap py-2 px-4 rounded-xl bg-black/50 border border-white/10 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
            {images.map((img, idx) => (
              <div
                key={idx}
                onClick={() => onNavigate(idx)}
                className={`inline-block w-[90px] h-[60px] mx-1 cursor-pointer transition-all duration-300 rounded overflow-hidden ${
                  idx === currentIndex 
                    ? 'opacity-100 scale-105 ring-2 ring-sky-400' 
                    : 'opacity-60 hover:opacity-100 hover:-translate-y-1'
                }`}
              >
                <img 
                  src={img} 
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
