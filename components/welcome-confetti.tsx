"use client";

import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

const colors = ["#0f4c9c", "#0ea5e9", "#38bdf8", "#facc15", "#ffffff"];

export function WelcomeConfetti() {
  const [visible, setVisible] = useState(false);
  const [pieces, setPieces] = useState<
    Array<{
      id: number;
      left: string;
      delay: string;
      duration: string;
      color: string;
      size: string;
      rotate: string;
    }>
  >([]);

  useEffect(() => {
    setPieces(
      Array.from({ length: 70 }, (_, index) => ({
        id: index,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 0.8}s`,
        duration: `${2.4 + Math.random() * 1.4}s`,
        color: colors[index % colors.length],
        size: `${6 + Math.random() * 7}px`,
        rotate: `${Math.random() * 360}deg`
      }))
    );
    setVisible(true);
    const timer = window.setTimeout(() => setVisible(false), 4200);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] overflow-hidden">
      <div className="absolute inset-0">
        {pieces.map((piece) => (
          <span
            key={piece.id}
            className="absolute -top-8 rounded-[2px] opacity-90"
            style={{
              left: piece.left,
              width: piece.size,
              height: `calc(${piece.size} * 1.7)`,
              backgroundColor: piece.color,
              animation: `confetti-fall ${piece.duration} ${piece.delay} ease-in forwards`,
              transform: `rotate(${piece.rotate})`
            }}
          />
        ))}
      </div>

      <div className="absolute left-1/2 top-20 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 animate-welcome-pop rounded-lg border border-sky-200 bg-white/95 p-5 text-center shadow-soft backdrop-blur">
        <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-md bg-accent text-secondary">
          <Sparkles className="h-6 w-6" />
        </div>
        <p className="mt-4 text-lg font-black text-slate-950">
          Welcome to BUKC Redesign
        </p>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Explore the campus experience, programs, student hub, and resources.
        </p>
      </div>
    </div>
  );
}
