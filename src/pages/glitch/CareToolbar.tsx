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
    group relative flex flex-col items-center justify-center p-2
    cursor-grab active:cursor-grabbing hover:scale-105 active:scale-95 transition-all duration-300
    select-none touch-none
    [-webkit-touch-callout:none] [-webkit-user-select:none]
    pointer-events-auto
  `.trim();

  // Icon container style for the glow and neon effect
  const iconContainerClass = (color: string, shadowColor: string) => `
    relative p-2 rounded-md transition-all duration-300
    bg-${color}-500/10 border border-${color}-500/30
    group-hover:bg-${color}-500/20 group-hover:border-${color}-500/50
    shadow-[0_0_10px_${shadowColor}]
    group-hover:shadow-[0_0_20px_${shadowColor}]
  `.trim();

  return (
    <div
      className="flex flex-row gap-8 justify-center select-none"
      onContextMenu={(e) => e.preventDefault()}
    >
      {/* Feed Button */}
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
        <div className={iconContainerClass('amber', 'rgba(251,191,36,0.2)')}>
          <Icon icon="uil:food" className="w-8 h-8 text-amber-400 drop-shadow-[0_0_5px_rgba(251,191,36,0.8)]" />
        </div>
        <span className="mt-2 text-[10px] text-amber-200/60 font-mono tracking-widest group-hover:text-amber-200 transition-colors bg-black/40 backdrop-blur-md px-2 py-0.5 rounded border border-white/5">FEED</span>
      </div>

      {/* Pet Button */}
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
        <div className={iconContainerClass('pink', 'rgba(244,114,182,0.2)')}>
          <Icon icon="ph:hand-eye" className="w-8 h-8 text-pink-400 drop-shadow-[0_0_5px_rgba(244,114,182,0.8)]" />
        </div>
        <span className="mt-2 text-[10px] text-pink-200/60 font-mono tracking-widest group-hover:text-pink-200 transition-colors bg-black/40 backdrop-blur-md px-2 py-0.5 rounded border border-white/5">PET</span>
      </div>

      {/* Clean Button */}
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
        <div className={iconContainerClass('green', 'rgba(74,222,128,0.2)')}>
          <Icon icon="mingcute:broom-line" className="w-8 h-8 text-green-400 drop-shadow-[0_0_5px_rgba(74,222,128,0.8)]" />
        </div>
        <span className="mt-2 text-[10px] text-green-200/60 font-mono tracking-widest group-hover:text-green-200 transition-colors bg-black/40 backdrop-blur-md px-2 py-0.5 rounded border border-white/5">CLEAN</span>
      </div>
    </div>
  );
}
