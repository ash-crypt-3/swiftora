import { useEffect, useRef, useState, type MouseEvent as ReactMouseEvent } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Search } from "lucide-react";
import nairobiSkyline from "@/assets/nairobi-skyline-hero.jpg";

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export function NotFound() {
  const skylineRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [ripples, setRipples] = useState<Ripple[]>([]);

  // Mouse-follow parallax for skyline + magnetic button
  useEffect(() => {
    let raf = 0;
    const handle = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const { innerWidth: w, innerHeight: h } = window;
        const dx = (e.clientX - w / 2) / w; // -0.5..0.5
        const dy = (e.clientY - h / 2) / h;

        // Skyline shifts opposite to cursor
        if (skylineRef.current) {
          skylineRef.current.style.transform = `translate3d(${-dx * 28}px, ${-dy * 22}px, 0) scale(1.08)`;
        }

        // Magnetic button — gravitate toward cursor when close
        if (btnRef.current) {
          const r = btnRef.current.getBoundingClientRect();
          const bx = r.left + r.width / 2;
          const by = r.top + r.height / 2;
          const ddx = e.clientX - bx;
          const ddy = e.clientY - by;
          const dist = Math.hypot(ddx, ddy);
          const radius = 140;
          if (dist < radius) {
            const pull = (1 - dist / radius) * 0.35;
            btnRef.current.style.transform = `translate(${ddx * pull}px, ${ddy * pull}px)`;
          } else {
            btnRef.current.style.transform = "translate(0, 0)";
          }
        }
      });
    };
    window.addEventListener("mousemove", handle);
    return () => {
      window.removeEventListener("mousemove", handle);
      cancelAnimationFrame(raf);
    };
  }, []);

  const handleRipple = (e: ReactMouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const id = Date.now();
    setRipples((r) => [...r, { id, x: e.clientX - rect.left, y: e.clientY - rect.top }]);
    setTimeout(() => setRipples((r) => r.filter((rp) => rp.id !== id)), 700);
  };

  return (
    <div className="relative min-h-screen overflow-hidden flex items-center justify-center px-6 py-24" style={{ background: "#0A0B14" }}>
      {/* Parallax skyline */}
      <div
        ref={skylineRef}
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{
          backgroundImage: `url(${nairobiSkyline})`,
          transition: "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      />
      {/* Dark legibility overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(11,13,23,0.85) 0%, rgba(11,13,23,0.6) 50%, rgba(11,13,23,0.78) 100%)",
        }}
      />
      {/* Warm gold bloom */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          width: "60vw",
          height: "60vw",
          right: "-10vw",
          top: "-15vw",
          background: "radial-gradient(circle, rgba(213,175,52,0.18) 0%, transparent 60%)",
          filter: "blur(40px)",
        }}
      />
      <div aria-hidden="true" className="absolute inset-0 tex-noise opacity-50 pointer-events-none" />

      {/* Glassmorphic card */}
      <div
        ref={cardRef}
        className={`group relative z-10 w-full max-w-2xl rounded-2xl p-10 md:p-14 nf-card ${isFocused ? "nf-card-focus" : ""}`}
      >
        {/* Border beam */}
        <span aria-hidden="true" className="nf-beam" />

        <div className="relative">
          <p className="eyebrow mb-6">Error · 404</p>
          <h1
            className="text-white font-bold leading-none"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(72px, 14vw, 144px)", letterSpacing: "-0.04em" }}
          >
            4<span style={{ color: "var(--gold)" }}>0</span>4
          </h1>
          <h2 className="mt-4 text-white text-2xl md:text-3xl font-semibold" style={{ fontFamily: "var(--font-display)" }}>
            This page took a different road.
          </h2>
          <p className="mt-3 text-white/70 max-w-lg text-[15px] leading-relaxed">
            The page you're looking for has moved, been renamed, or never existed. Let's get you back on course.
          </p>

          {/* Magnetic CTA */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/"
              ref={btnRef}
              onClick={handleRipple}
              className="nf-cta relative overflow-hidden inline-flex items-center gap-2 rounded-md font-semibold"
              style={{
                background: "var(--gold)",
                color: "var(--navy-deep)",
                padding: "14px 30px",
                fontSize: "13px",
                transition: "transform 0.25s cubic-bezier(0.22, 1, 0.36, 1), background-color 0.2s",
              }}
            >
              <span className="relative z-10">Return Home</span>
              <ArrowRight className="relative z-10 h-4 w-4" />
              {ripples.map((r) => (
                <span
                  key={r.id}
                  className="nf-ripple"
                  style={{ left: r.x, top: r.y }}
                />
              ))}
            </Link>
            <Link
              to="/talk-to-us"
              className="text-white/80 hover:text-white text-sm font-medium link-underline"
            >
              Or talk to our team
            </Link>
          </div>

          {/* Search input */}
          <div className="mt-10 pt-8 border-t border-white/10">
            <label htmlFor="nf-search" className="block text-white/50 text-[11px] uppercase tracking-[0.25em] mb-3">
              Search the site
            </label>
            <div className={`flex items-center gap-3 rounded-md px-4 py-3 transition-all ${isFocused ? "nf-search-focus" : ""}`}
              style={{
                background: "rgba(255,255,255,0.06)",
                border: `1px solid ${isFocused ? "rgba(213,175,52,0.55)" : "rgba(255,255,255,0.12)"}`,
              }}
            >
              <Search className="h-4 w-4 text-white/50" />
              <input
                id="nf-search"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder="Try 'capital readiness' or 'about'…"
                className="flex-1 bg-transparent text-white placeholder:text-white/40 outline-none text-sm"
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .nf-card {
          background: rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(18px) saturate(140%);
          -webkit-backdrop-filter: blur(18px) saturate(140%);
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow:
            0 30px 80px rgba(0, 0, 0, 0.45),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
          transition: backdrop-filter 0.4s ease, background 0.4s ease, border-color 0.4s ease;
          isolation: isolate;
        }
        .nf-card-focus,
        .nf-card:hover {
          background: rgba(255, 255, 255, 0.09);
          backdrop-filter: blur(28px) saturate(160%);
          -webkit-backdrop-filter: blur(28px) saturate(160%);
        }
        .nf-beam {
          position: absolute;
          inset: 0;
          border-radius: 1rem;
          padding: 1px;
          background: conic-gradient(
            from var(--beam-angle, 0deg),
            transparent 0deg,
            transparent 270deg,
            rgba(213,175,52, 0.9) 320deg,
            rgba(232, 201, 109, 1) 340deg,
            rgba(213,175,52, 0.9) 360deg,
            transparent 360deg
          );
          -webkit-mask:
            linear-gradient(#000 0 0) content-box,
            linear-gradient(#000 0 0);
          mask:
            linear-gradient(#000 0 0) content-box,
            linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
          animation: nf-beam-spin 3.5s linear infinite;
        }
        .group:hover .nf-beam { opacity: 1; }
        @property --beam-angle {
          syntax: "<angle>";
          initial-value: 0deg;
          inherits: false;
        }
        @keyframes nf-beam-spin {
          to { --beam-angle: 360deg; }
        }
        /* Fallback for browsers without @property — animate via rotation */
        @supports not (background: conic-gradient(from 0deg, red, blue)) {
          .nf-beam { display: none; }
        }
        .nf-cta:hover {
          background: var(--gold-hover) !important;
        }
        .nf-ripple {
          position: absolute;
          width: 12px;
          height: 12px;
          margin-left: -6px;
          margin-top: -6px;
          border-radius: 50%;
          background: rgba(11, 13, 23, 0.35);
          transform: scale(0);
          animation: nf-ripple 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          pointer-events: none;
        }
        @keyframes nf-ripple {
          to { transform: scale(28); opacity: 0; }
        }
        .nf-search-focus {
          box-shadow: 0 0 0 4px rgba(213,175,52, 0.12);
        }
      `}</style>
    </div>
  );
}
