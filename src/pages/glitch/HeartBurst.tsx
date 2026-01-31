import { useEffect, useState } from 'react';

export function HeartBurst() {
  const [hearts, setHearts] = useState<{ id: number; x: number; delay: number }[]>([]);

  useEffect(() => {
    // Generate 6 hearts with random positions
    const newHearts = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      x: -30 + Math.random() * 60,  // -30px to +30px offset
      delay: i * 0.1,  // Staggered
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute left-1/2 top-1/2 text-2xl animate-heart-float"
          style={{
            '--heart-x': `${heart.x}px`,
            animationDelay: `${heart.delay}s`,
          } as React.CSSProperties}
        >
          💕
        </div>
      ))}
    </div>
  );
}
