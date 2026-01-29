import { useEffect, useState } from 'react';
import { X, Copy, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PromptModalProps {
  isOpen: boolean;
  title: string;
  content: string;
  onClose: () => void;
}

export function PromptModal({ isOpen, title, content, onClose }: PromptModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9000] flex items-center justify-center bg-black/80 backdrop-blur-sm transition-opacity"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="relative rounded-2xl p-8 max-w-[650px] w-[90%] bg-black/90 border border-white/10 shadow-2xl transition-transform animate-in fade-in zoom-in-95 duration-200">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close Modal"
        >
          <X size={20} />
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-6 text-accent drop-shadow-sm">
          {title}
        </h2>

        {/* Content */}
        <pre className="p-5 rounded-xl mb-6 text-sm text-indigo-200 whitespace-pre-wrap max-h-[450px] overflow-y-auto bg-black/40 border border-white/5 shadow-inner font-mono leading-relaxed scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
          {content}
        </pre>

        {/* Copy button */}
        <button
          onClick={handleCopy}
          className={cn(
            "w-full py-3 px-5 rounded-xl text-white font-semibold transition-all hover:-translate-y-0.5 shadow-lg flex items-center justify-center gap-2 border border-white/10",
            copied 
              ? "bg-accent hover:bg-accent/90" 
              : "bg-black/40 hover:bg-accent/20 hover:border-accent/50"
          )}
        >
          {copied ? <Check size={18} /> : <Copy size={18} />}
          {copied ? 'Copied!' : 'Copy Content'}
        </button>
      </div>
    </div>
  );
}
