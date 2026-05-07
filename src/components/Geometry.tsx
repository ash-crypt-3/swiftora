// Reusable geometric SVG compositions for hero & card backgrounds.
// All use gold strokes, no fill — let opacity create depth.

import { type CSSProperties } from "react";

const GOLD = "#D5AF34";

export function HeroGeometry({ className, style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg
      viewBox="0 0 600 600"
      className={className}
      style={style}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Concentric circles */}
      <circle cx="300" cy="300" r="280" stroke={GOLD} strokeWidth="0.8" />
      <circle cx="300" cy="300" r="220" stroke={GOLD} strokeWidth="0.8" />
      <circle cx="300" cy="300" r="160" stroke={GOLD} strokeWidth="0.8" />
      <circle cx="300" cy="300" r="100" stroke={GOLD} strokeWidth="0.8" />
      <circle cx="300" cy="300" r="40" stroke={GOLD} strokeWidth="0.8" />
      {/* Radiating lines */}
      {Array.from({ length: 24 }).map((_, i) => {
        const angle = (i * 15 * Math.PI) / 180;
        const x1 = 300 + Math.cos(angle) * 40;
        const y1 = 300 + Math.sin(angle) * 40;
        const x2 = 300 + Math.cos(angle) * 280;
        const y2 = 300 + Math.sin(angle) * 280;
        return (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={GOLD} strokeWidth="0.5" />
        );
      })}
      {/* Polygon overlay */}
      <polygon
        points="300,80 480,200 420,420 180,420 120,200"
        stroke={GOLD}
        strokeWidth="1"
        fill="none"
      />
    </svg>
  );
}

// Compass mark used in About — center swift + 4 directional arrows
export function CompassMark({ size = 280 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 280 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g className="animate-slow-spin" style={{ transformOrigin: "140px 140px" }}>
        <circle cx="140" cy="140" r="130" stroke={GOLD} strokeWidth="0.8" opacity="0.5" />
        <circle cx="140" cy="140" r="100" stroke={GOLD} strokeWidth="0.8" opacity="0.7" />
        <circle cx="140" cy="140" r="70" stroke={GOLD} strokeWidth="1" />
        {/* compass labels */}
        <text x="140" y="18" textAnchor="middle" fill={GOLD} fontSize="10" fontFamily="Poppins" letterSpacing="2">STRATEGY</text>
        <text x="265" y="144" textAnchor="middle" fill={GOLD} fontSize="10" fontFamily="Poppins" letterSpacing="2">SALES</text>
        <text x="140" y="270" textAnchor="middle" fill={GOLD} fontSize="10" fontFamily="Poppins" letterSpacing="2">RESEARCH</text>
        <text x="15" y="144" textAnchor="middle" fill={GOLD} fontSize="10" fontFamily="Poppins" letterSpacing="2">MARKETING</text>
        {/* arrows */}
        <path d="M140 30 L135 45 L140 40 L145 45 Z" fill={GOLD} />
        <path d="M250 140 L235 135 L240 140 L235 145 Z" fill={GOLD} />
        <path d="M140 250 L135 235 L140 240 L145 235 Z" fill={GOLD} />
        <path d="M30 140 L45 135 L40 140 L45 145 Z" fill={GOLD} />
      </g>
      {/* center swift */}
      <g transform="translate(108 108)">
        <circle cx="32" cy="32" r="32" fill="#0A0B14" />
        <path
          d="M10 34 C 18 24, 28 22, 40 24 L 52 27 C 53 27.5, 53 29, 51 29.5 L 42 31 L 46 33 C 47 33.5, 46.5 35, 45.5 35 L 36 34 L 32 38 C 31 39, 29.5 38.5, 30 37 L 30.5 34 L 14 34 C 11.5 34, 10 33, 10 34 Z"
          fill={GOLD}
        />
      </g>
    </svg>
  );
}

// Abstract geometric variations for solution cards (5 unique forms)
export function GeoDiamondGrid() {
  return (
    <svg viewBox="0 0 400 200" className="w-full h-full" fill="none" aria-hidden="true">
      <rect width="400" height="200" fill="#0A0B14" />
      {[0, 1, 2, 3].map((row) =>
        [0, 1, 2, 3, 4, 5, 6, 7].map((col) => {
          const x = col * 50 + (row % 2 ? 25 : 0);
          const y = row * 50;
          return (
            <rect
              key={`${row}-${col}`}
              x={x}
              y={y}
              width="20"
              height="20"
              transform={`rotate(45 ${x + 10} ${y + 10})`}
              stroke={GOLD}
              strokeWidth="0.8"
              opacity={0.3 + ((row + col) % 4) * 0.15}
            />
          );
        }),
      )}
    </svg>
  );
}
export function GeoSpiral() {
  return (
    <svg viewBox="0 0 400 200" className="w-full h-full" fill="none" aria-hidden="true">
      <rect width="400" height="200" fill="#0A0B14" />
      {Array.from({ length: 60 }).map((_, i) => {
        const a = i * 0.4;
        const r = i * 3;
        const x = 200 + Math.cos(a) * r;
        const y = 100 + Math.sin(a) * r * 0.5;
        return <circle key={i} cx={x} cy={y} r="2" fill={GOLD} opacity={0.2 + i * 0.012} />;
      })}
    </svg>
  );
}
export function GeoTriangles() {
  return (
    <svg viewBox="0 0 400 200" className="w-full h-full" fill="none" aria-hidden="true">
      <rect width="400" height="200" fill="#0A0B14" />
      {Array.from({ length: 12 }).map((_, i) => {
        const x = (i % 6) * 70 + 20;
        const y = Math.floor(i / 6) * 90 + 30;
        return (
          <polygon
            key={i}
            points={`${x},${y + 60} ${x + 30},${y} ${x + 60},${y + 60}`}
            stroke={GOLD}
            strokeWidth="0.8"
            opacity={0.25 + (i % 4) * 0.15}
          />
        );
      })}
    </svg>
  );
}
export function GeoBars() {
  return (
    <svg viewBox="0 0 400 200" className="w-full h-full" fill="none" aria-hidden="true">
      <rect width="400" height="200" fill="#0A0B14" />
      {Array.from({ length: 14 }).map((_, i) => {
        const h = 30 + ((i * 17) % 110);
        return (
          <rect
            key={i}
            x={i * 28 + 10}
            y={180 - h}
            width="14"
            height={h}
            fill={GOLD}
            opacity={0.2 + (i % 5) * 0.1}
          />
        );
      })}
    </svg>
  );
}
export function GeoNetwork() {
  const nodes = [
    [80, 60], [200, 40], [320, 70], [120, 130], [240, 150], [340, 130], [60, 160], [180, 100],
  ];
  return (
    <svg viewBox="0 0 400 200" className="w-full h-full" fill="none" aria-hidden="true">
      <rect width="400" height="200" fill="#0A0B14" />
      {nodes.flatMap((n, i) =>
        nodes.slice(i + 1).map((m, j) => (
          <line
            key={`${i}-${j}`}
            x1={n[0]}
            y1={n[1]}
            x2={m[0]}
            y2={m[1]}
            stroke={GOLD}
            strokeWidth="0.5"
            opacity={0.25}
          />
        )),
      )}
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="5" fill={GOLD} opacity="0.7" />
      ))}
    </svg>
  );
}
export function GeoConcentric() {
  return (
    <svg viewBox="0 0 400 200" className="w-full h-full" fill="none" aria-hidden="true">
      <rect width="400" height="200" fill="#0A0B14" />
      {[20, 40, 60, 80, 100, 120].map((r, i) => (
        <circle key={i} cx="200" cy="100" r={r} stroke={GOLD} strokeWidth="0.8" opacity={0.5 - i * 0.06} />
      ))}
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i * 30 * Math.PI) / 180;
        return (
          <line
            key={i}
            x1={200 + Math.cos(a) * 20}
            y1={100 + Math.sin(a) * 20}
            x2={200 + Math.cos(a) * 120}
            y2={100 + Math.sin(a) * 120}
            stroke={GOLD}
            strokeWidth="0.5"
            opacity="0.4"
          />
        );
      })}
    </svg>
  );
}
