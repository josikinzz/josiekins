import { useEffect, useCallback } from 'react';

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
      className="fixed inset-0 z-[10000] flex items-center justify-center"
      style={{ background: 'rgba(10, 15, 30, 0.98)', backdropFilter: 'blur(15px)' }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-[10001] w-12 h-12 rounded-full flex items-center justify-center text-white text-2xl transition-all hover:scale-110"
        style={{ background: 'rgba(20, 30, 50, 0.7)', border: '1px solid rgba(255, 255, 255, 0.15)' }}
        aria-label="Close"
      >
        ×
      </button>

      {/* Previous button */}
      {images.length > 1 && (
        <button
          onClick={() => onNavigate(currentIndex > 0 ? currentIndex - 1 : images.length - 1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-[10001] w-12 h-12 rounded-full flex items-center justify-center text-white text-2xl transition-all hover:scale-110"
          style={{ background: 'rgba(20, 30, 50, 0.7)', border: '1px solid rgba(255, 255, 255, 0.15)' }}
          aria-label="Previous image"
        >
          ❮
        </button>
      )}

      {/* Next button */}
      {images.length > 1 && (
        <button
          onClick={() => onNavigate(currentIndex < images.length - 1 ? currentIndex + 1 : 0)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-[10001] w-12 h-12 rounded-full flex items-center justify-center text-white text-2xl transition-all hover:scale-110"
          style={{ background: 'rgba(20, 30, 50, 0.7)', border: '1px solid rgba(255, 255, 255, 0.15)' }}
          aria-label="Next image"
        >
          ❯
        </button>
      )}

      {/* Content */}
      <div className="relative flex flex-col items-center w-[95%] h-[95vh] max-w-[2000px]">
        {/* Main image */}
        <div className="flex-1 flex items-center justify-center w-full overflow-hidden mb-4">
          <img
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            className="max-w-[98%] max-h-[98%] object-contain rounded-lg transition-transform hover:scale-[1.02]"
            style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)', border: '1px solid rgba(100, 116, 139, 0.2)' }}
          />
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div
            className="flex-shrink-0 w-[95%] max-w-[1800px] overflow-x-auto whitespace-nowrap py-2 px-4 rounded-lg"
            style={{
              background: 'rgba(30, 41, 59, 0.3)',
              border: '1px solid rgba(100, 116, 139, 0.2)',
              scrollbarWidth: 'thin'
            }}
          >
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                onClick={() => onNavigate(idx)}
                className={`inline-block w-[90px] h-[60px] object-cover rounded mx-1 cursor-pointer transition-all hover:opacity-100 hover:-translate-y-1 ${
                  idx === currentIndex ? 'opacity-100 scale-110 border-2 border-sky-400' : 'opacity-70 border-2 border-transparent'
                }`}
                style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)' }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
