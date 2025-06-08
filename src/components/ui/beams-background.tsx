import type React from "react";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "../theme-provider";

interface AnimatedGradientBackgroundProps {
  className?: string;
  children?: React.ReactNode;
  intensity?: "subtle" | "medium" | "strong";
}

interface Beam {
  x: number;
  y: number;
  width: number;
  length: number;
  angle: number;
  opacity: number;
  hue: number;
}

function createBeam(
  width: number,
  height: number,
  index: number,
  totalBeams: number
): Beam {
  const angle = -35 + Math.random() * 10;
  const column = index % 3;
  const spacing = width / 3;

  return {
    x: column * spacing + spacing / 2 + (Math.random() - 0.5) * spacing * 0.3,
    y: Math.random() * height * 0.8,
    width: 40 + Math.random() * 80,
    length: height * 1.5,
    angle: angle,
    opacity: 0.1 + Math.random() * 0.15,
    hue: 190 + (index * 70) / totalBeams,
  };
}

export default function BeamsBackground({
  className,
  intensity = "strong",
  children,
}: AnimatedGradientBackgroundProps) {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const opacityMap = {
    subtle: 0.7,
    medium: 0.85,
    strong: 1,
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const renderStaticBeams = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);

      // Create static beams
      const totalBeams = 12;
      const beams = Array.from({ length: totalBeams }, (_, index) =>
        createBeam(window.innerWidth, window.innerHeight, index, totalBeams)
      );

      // Clear canvas and set blur
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.filter = "blur(20px)";

      // Draw all beams once
      beams.forEach((beam) => {
        ctx.save();
        ctx.translate(beam.x, beam.y);
        ctx.rotate((beam.angle * Math.PI) / 180);

        const finalOpacity = beam.opacity * opacityMap[intensity];

        const gradient = ctx.createLinearGradient(0, 0, 0, beam.length);
        gradient.addColorStop(0, `hsla(${beam.hue}, 85%, 65%, 0)`);
        gradient.addColorStop(
          0.3,
          `hsla(${beam.hue}, 85%, 65%, ${finalOpacity})`
        );
        gradient.addColorStop(
          0.7,
          `hsla(${beam.hue}, 85%, 65%, ${finalOpacity})`
        );
        gradient.addColorStop(1, `hsla(${beam.hue}, 85%, 65%, 0)`);

        ctx.fillStyle = gradient;
        ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length);
        ctx.restore();
      });
    };

    renderStaticBeams();
    window.addEventListener("resize", renderStaticBeams);

    return () => {
      window.removeEventListener("resize", renderStaticBeams);
    };
  }, [intensity]);

  return (
    <div
      className={cn(
        "relative min-h-screen w-full overflow-hidden transition-colors duration-500",
        theme === "light" ? "bg-gray-50" : "bg-neutral-950",
        className
      )}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ filter: theme === "light" ? "blur(10px)" : "blur(25px)" }}
      />

      <div
        className={cn(
          "absolute inset-0 transition-colors duration-500",
          theme === "light" ? "bg-gray-50/10" : "bg-neutral-950/5"
        )}
      />
      {/* Smooth gradient overlay to blend sections */}
      <div
        className={cn(
          "absolute inset-0 pointer-events-none transition-colors duration-500",
          theme === "light"
            ? "bg-gradient-to-b from-transparent via-transparent to-gray-50/80"
            : "bg-gradient-to-b from-transparent via-transparent to-neutral-950/80"
        )}
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
}
