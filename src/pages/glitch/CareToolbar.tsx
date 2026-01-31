import { Icon } from '@iconify/react';
import { useRef, useCallback } from 'react';

interface CareToolbarProps {
  onFeed: () => void;
  onPet: () => void;
  onClean: () => void;
  onDragStart?: (action: 'feed' | 'pet' | 'clean') => void;
  onDragEnd?: () => void;
}

export function CareToolbar({ onFeed, onPet, onClean, onDragStart, onDragEnd }: CareToolbarProps) {
  const dragActionRef = useRef<'feed' | 'pet' | 'clean' | null>(null);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  const handleDragStartEvent = (e: React.DragEvent, action: 'feed' | 'pet' | 'clean') => {
    e.dataTransfer.setData('careAction', action);
    e.dataTransfer.setData(`care-${action}`, '');
    e.dataTransfer.effectAllowed = 'move';
    dragActionRef.current = action;
    onDragStart?.(action);
  };

  const handleDragEndEvent = useCallback(() => {
    dragActionRef.current = null;
    onDragEnd?.();
  }, [onDragEnd]);

  // Touch handlers for mobile support
  const handleTouchStart = useCallback((e: React.TouchEvent, action: 'feed' | 'pet' | 'clean') => {
    const touch = e.touches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
    dragActionRef.current = action;
    onDragStart?.(action);
  }, [onDragStart]);

  const handleTouchEnd = useCallback((e: React.TouchEvent, action: 'feed' | 'pet' | 'clean') => {
    if (!touchStartRef.current) return;

    const touch = e.changedTouches[0];
    const deltaX = Math.abs(touch.clientX - touchStartRef.current.x);
    const deltaY = Math.abs(touch.clientY - touchStartRef.current.y);

    // If it was a tap (not a drag), trigger the action
    if (deltaX < 10 && deltaY < 10) {
      if (action === 'feed') onFeed();
      else if (action === 'pet') onPet();
      else if (action === 'clean') onClean();
    }

    touchStartRef.current = null;
    dragActionRef.current = null;
    onDragEnd?.();
  }, [onFeed, onPet, onClean, onDragEnd]);

  // Shared button styles - prevent text selection and touch callouts
  const buttonClass = `
    cursor-grab active:cursor-grabbing hover:scale-110 active:scale-95 transition-transform
    select-none touch-none
    [-webkit-touch-callout:none] [-webkit-user-select:none]
  `.trim();

  return (
    <div
      className="fixed z-30
                 flex flex-row gap-4 px-4 py-3 bg-black/60 border border-purple-500/30
                 rounded-full backdrop-blur-sm select-none
                 top-40 left-1/2 -translate-x-1/2
                 md:top-[120px] md:right-36 md:left-auto md:translate-x-0"
      onContextMenu={(e) => e.preventDefault()}
    >
      <div
        draggable
        onDragStart={(e) => handleDragStartEvent(e, 'feed')}
        onDragEnd={handleDragEndEvent}
        onTouchStart={(e) => handleTouchStart(e, 'feed')}
        onTouchEnd={(e) => handleTouchEnd(e, 'feed')}
        onClick={onFeed}
        className={buttonClass}
        title="Feed"
      >
        <Icon icon="uil:food" className="w-8 h-8 text-amber-400 pointer-events-none" />
      </div>
      <div
        draggable
        onDragStart={(e) => handleDragStartEvent(e, 'pet')}
        onDragEnd={handleDragEndEvent}
        onTouchStart={(e) => handleTouchStart(e, 'pet')}
        onTouchEnd={(e) => handleTouchEnd(e, 'pet')}
        onClick={onPet}
        className={buttonClass}
        title="Pet"
      >
        <Icon icon="ph:hand-eye" className="w-8 h-8 text-pink-400 pointer-events-none" />
      </div>
      <div
        draggable
        onDragStart={(e) => handleDragStartEvent(e, 'clean')}
        onDragEnd={handleDragEndEvent}
        onTouchStart={(e) => handleTouchStart(e, 'clean')}
        onTouchEnd={(e) => handleTouchEnd(e, 'clean')}
        onClick={onClean}
        className={buttonClass}
        title="Clean"
      >
        <Icon icon="mingcute:broom-line" className="w-8 h-8 text-green-400 pointer-events-none" />
      </div>
    </div>
  );
}
