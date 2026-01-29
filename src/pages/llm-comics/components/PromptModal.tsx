import { useEffect, useState } from 'react';
import styles from '../LLMComics.module.css';

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
      className="fixed inset-0 z-[9000] flex items-center justify-center transition-opacity"
      style={{ background: 'rgba(15, 23, 42, 0.85)', backdropFilter: 'blur(8px)' }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="relative rounded-2xl p-8 max-w-[650px] w-[90%] transition-transform"
        style={{
          background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.95), rgba(30, 41, 65, 0.9))',
          border: '1px solid rgba(71, 85, 105, 0.8)',
          boxShadow: '0 12px 24px rgba(0, 0, 0, 0.3)'
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-slate-400 text-2xl transition-all hover:text-white hover:bg-slate-600/20"
          aria-label="Close Modal"
        >
          ×
        </button>

        {/* Title */}
        <h2 className={`text-2xl font-bold text-center mb-6 ${styles.gradientTitle}`}>
          {title}
        </h2>

        {/* Content */}
        <pre
          className={`p-5 rounded-xl mb-6 text-sm text-indigo-200 whitespace-pre-wrap max-h-[450px] overflow-y-auto ${styles.customScrollbar}`}
          style={{
            background: 'rgba(15, 23, 42, 0.6)',
            border: '1px solid rgba(71, 85, 105, 0.8)',
            fontFamily: '"Cascadia Code", "Fira Code", "JetBrains Mono", monospace',
            lineHeight: 1.6,
            boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.2)'
          }}
        >
          {content}
        </pre>

        {/* Copy button */}
        <button
          onClick={handleCopy}
          className="w-full py-3 px-5 rounded-xl text-white font-semibold transition-all hover:-translate-y-0.5"
          style={{
            background: copied
              ? 'linear-gradient(90deg, #06b6d4, #22d3ee)'
              : 'linear-gradient(90deg, #10b981, #34d399)',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
          }}
        >
          {copied ? 'Copied!' : 'Copy Content'}
        </button>
      </div>
    </div>
  );
}
