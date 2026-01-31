import { Icon } from '@iconify/react';

interface CareToolbarProps {
  onClean: () => void;  // For cleaning when no specific poop targeted
}

export function CareToolbar({ onClean }: CareToolbarProps) {
  const handleDragStart = (e: React.DragEvent, action: string) => {
    e.dataTransfer.setData('careAction', action);
    e.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div className="fixed top-20 right-4 z-30
                    flex flex-col gap-4 px-3 py-4 bg-black/60 border border-purple-500/30
                    rounded-full backdrop-blur-sm">
      <div
        draggable
        onDragStart={(e) => handleDragStart(e, 'feed')}
        className="cursor-grab active:cursor-grabbing hover:scale-110 transition-transform"
        title="Feed"
      >
        <Icon icon="uil:food" className="w-8 h-8 text-amber-400" />
      </div>
      <div
        draggable
        onDragStart={(e) => handleDragStart(e, 'pet')}
        className="cursor-grab active:cursor-grabbing hover:scale-110 transition-transform"
        title="Pet"
      >
        <Icon icon="ph:hand-eye" className="w-8 h-8 text-pink-400" />
      </div>
      <div
        draggable
        onDragStart={(e) => handleDragStart(e, 'clean')}
        onClick={() => onClean()}
        className="cursor-grab active:cursor-grabbing hover:scale-110 transition-transform"
        title="Clean"
      >
        <Icon icon="mingcute:broom-line" className="w-8 h-8 text-green-400" />
      </div>
    </div>
  );
}
