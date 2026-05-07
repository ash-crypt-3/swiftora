import { useState } from "react";
import swiftIcon from "@/assets/branding/swift-icon.png";

const GOLD = "#c9a84c";
const NODES = ["STRATEGY", "SALES", "MARKETING", "COMMUNICATION", "RESEARCH", "ANALYSIS"] as const;

export function OrbitDiagram({ size = 450 }: { size?: number }) {
  const [active, setActive] = useState<number | null>(null);

  // SVG dimensions
  const viewBoxSize = 450;
  const center = viewBoxSize / 2;
  const ringR = 150;

  return (
    <div 
      className="swiftora-orbit-container"
      style={{ 
        width: size, 
        height: size, 
        position: 'relative', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: 'transparent'
      }}
    >
      <style>{`
        @keyframes full-rotation {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .main-orbit-group {
          animation: full-rotation 100s linear infinite;
          transform-origin: center;
        }

        /* Essential Fix: Labels rotate in reverse around THEIR OWN center */
        .counter-rotate-label {
          animation: full-rotation 100s linear infinite reverse;
          transform-origin: center;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
        }

        .swiftora-orbit-container:hover .main-orbit-group,
        .swiftora-orbit-container:hover .counter-rotate-label {
          animation-play-state: paused;
        }

        .central-logo-container {
          position: absolute;
          z-index: 50;
          pointer-events: none;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .swift-logo {
          width: 50px;
          height: 50px;
          object-fit: contain;
          filter: sepia(1) saturate(2.5) brightness(1.1);
        }
      `}</style>

      {/* Perfectly Centered Logo */}
      <div className="central-logo-container">
        <div style={{
          width: 90, height: 90,
          borderRadius: '50%',
          border: `1px solid ${GOLD}44`,
          background: 'rgba(255, 255, 255, 0.02)',
          backdropFilter: 'blur(10px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <img src={swiftIcon} alt="Logo" className="swift-logo" />
        </div>
      </div>

      <svg 
        viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`} 
        width="100%" 
        height="100%" 
        style={{ overflow: 'visible' }}
      >
        {/* Static Background Ring */}
        <circle cx={center} cy={center} r={ringR} stroke={GOLD} strokeOpacity="0.15" fill="none" strokeWidth="0.5" />

        <g className="main-orbit-group" style={{ transformOrigin: `${center}px ${center}px` }}>
          {NODES.map((label, i) => {
            const angle = (i * 2 * Math.PI) / NODES.length - Math.PI / 2;
            const x = center + Math.cos(angle) * ringR;
            const y = center + Math.sin(angle) * ringR;
            const isActive = active === i;

            return (
              <g 
                key={label} 
                onClick={() => setActive(i)} 
                style={{ cursor: 'pointer', pointerEvents: 'all' }}
              >
                {/* Connection Line */}
                <line 
                  x1={center} y1={center} 
                  x2={x} y2={y} 
                  stroke={GOLD} 
                  strokeOpacity={isActive ? 0.4 : 0.1} 
                  strokeWidth="0.5" 
                />

                {/* Node Dot */}
                <circle 
                  cx={x} cy={y} r={isActive ? 6 : 3} 
                  fill={isActive ? GOLD : "transparent"} 
                  stroke={GOLD} 
                  strokeWidth="1.5" 
                />

                {/* Label Fix: ForeignObject must be centered on the (x,y) point */}
                <foreignObject 
                  x={x - 60} 
                  y={y - 40} 
                  width="120" 
                  height="30"
                  style={{ overflow: 'visible' }}
                >
                  <div className="counter-rotate-label">
                    <span style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '9px',
                      letterSpacing: '2px',
                      color: GOLD,
                      textAlign: 'center',
                      fontWeight: isActive ? 700 : 400,
                      opacity: isActive ? 1 : 0.6,
                      textShadow: isActive ? `0 0 10px ${GOLD}` : 'none',
                      whiteSpace: 'nowrap'
                    }}>
                      {label}
                    </span>
                  </div>
                </foreignObject>
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
}