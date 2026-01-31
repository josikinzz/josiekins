import { useEffect, useState } from 'react';

export function HeartBurst() {
  const [hearts, setHearts] = useState<{ id: number; x: number; delay: number; size: number }[]>([]);

  useEffect(() => {
    // Generate 8 hearts with random positions and sizes
    const newHearts = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: -80 + Math.random() * 160,  // -80px to +80px offset
      delay: i * 0.08,  // Staggered
      size: 3 + Math.random() * 3,  // 3rem to 6rem
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-visible">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute left-1/2 top-1/2 animate-heart-float"
          style={{
            '--heart-x': `${heart.x}px`,
            animationDelay: `${heart.delay}s`,
            fontSize: `${heart.size}rem`,
          } as React.CSSProperties}
        >
          💕
        </div>
      ))}
    </div>
  );
}
