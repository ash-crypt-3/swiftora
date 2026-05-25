import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";

import nairobiSkyline from "@/assets/nairobi-skyline-hero.jpg";

export type HeroLines = [string, string, string];

export type HeroSlide = {
  eyebrow: string;
  lines: HeroLines;
  image?: string;
};

export type HeroCta = {
  label: string;
  to?: string;
  href?: string;
};

type CommonProps = {
  image?: string;
  showLocation?: boolean;
  cta?: HeroCta;
};

type StaticHeroProps = CommonProps & {
  variant?: "inner";
  eyebrow: string;
  lines: HeroLines;
  supporting?: ReactNode;
  supportingMaxWidth?: number;
  supportingMaxWidthMobile?: number;
  showDots?: boolean;
  slides?: never;
};

type SliderHeroProps = CommonProps & {
  variant: "home";
  slides: HeroSlide[];
  eyebrow?: never;
  lines?: never;
  supporting?: ReactNode;
};

export type HeroProps = StaticHeroProps | SliderHeroProps;

/* ── Decorative rings ── */
function Rings() {
  return (
    <svg
      aria-hidden="true"
      className="hidden md:block absolute pointer-events-none"
      style={{ right: "-40px", top: "50%", transform: "translateY(-50%)", opacity: 0.065, width: 360, height: 360 }}
      viewBox="-180 -180 360 360"
      fill="none"
    >
      <circle r="138" stroke="#c9a84c" strokeWidth="0.8" />
      <circle r="100" stroke="#c9a84c" strokeWidth="0.6" />
      <circle r="62" stroke="#c9a84c" strokeWidth="0.5" />
      <line x1="-180" y1="0" x2="180" y2="0" stroke="#c9a84c" strokeWidth="0.35" />
      <line x1="0" y1="-180" x2="0" y2="180" stroke="#c9a84c" strokeWidth="0.35" />
      <line x1="-180" y1="-180" x2="180" y2="180" stroke="#c9a84c" strokeWidth="0.25" />
      <line x1="180" y1="-180" x2="-180" y2="180" stroke="#c9a84c" strokeWidth="0.25" />
    </svg>
  );
}

/* ── Vignettes ── */
function Vignettes() {
  return (
    <>
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none hero-left-vignette" />
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(180deg, rgba(9,8,26,0.40) 0%, transparent 22%, transparent 50%, rgba(9,8,26,0.85) 75%, rgba(9,8,26,0.98) 100%)" }}
      />
    </>
  );
}

/* ── Slide eyebrow label ── */
function SlideLabel({ label }: { label: string }) {
  return (
    <div
      style={{
        fontFamily: "Poppins, sans-serif",
        fontWeight: 700,
        fontSize: 11,
        letterSpacing: "0.30em",
        textTransform: "uppercase",
        color: "#c9a84c",
        background: "rgba(201,168,76,0.10)",
        border: "1px solid rgba(201,168,76,0.30)",
        display: "inline-block",
        padding: "6px 14px",
        borderRadius: 2,
        marginBottom: 18,
      }}
    >
      {label}
    </div>
  );
}

/* ── Eyebrow for inner hero ── */
function Eyebrow({ label }: { label: string }) {
  return (
    <div className="flex items-center" style={{ gap: 9, marginBottom: 12 }}>
      <span className="block flex-shrink-0" style={{ width: 22, height: 1, background: "rgba(201,168,76,0.55)" }} />
      <span
        style={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: 500,
          fontSize: 10,
          color: "rgba(201,168,76,0.65)",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
        }}
      >
        {label}
      </span>
    </div>
  );
}

/* ── Headline ── */
function Headline({ lines }: { lines: HeroLines }) {
  return (
    <h1
      style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.02em", color: "#ffffff", margin: 0 }}
      className="hero-headline"
    >
      <span style={{ display: "block" }}>{lines[0]}</span>
      <span style={{ display: "block" }}>{lines[1]}</span>
      <span style={{ display: "block", color: "#c9a84c", fontStyle: "italic", marginBottom: 14 }}>{lines[2]}</span>
    </h1>
  );
}

/* ── CTA button ── */
function HeroCtaButton({ cta }: { cta: HeroCta }) {
  const inner = (
    <>
      <span>{cta.label}</span>
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
  const className = "hero-cta inline-flex items-center";
  if (cta.to) return <Link to={cta.to as any} className={className}>{inner}</Link>;
  return <a href={cta.href || "#"} className={className}>{inner}</a>;
}

/* ── Slide dots only ── */
function BottomRow({
  showDots,
  total,
  active,
  onSelect,
}: {
  showDots: boolean;
  total: number;
  active: number;
  onSelect?: (i: number) => void;
}) {
  return (
    <div className="flex items-center" style={{ marginTop: 20, padding: "0 2px", gap: 5 }}>
      {showDots
        ? Array.from({ length: total }).map((_, i) => (
            <button
              key={i}
              onClick={() => onSelect?.(i)}
              aria-label={`Slide ${i + 1}`}
              style={{
                width: i === active ? 22 : 12,
                height: 2,
                borderRadius: 1,
                background: i === active ? "#c9a84c" : "rgba(201,168,76,0.20)",
                transition: "all 400ms ease",
                border: "none",
                padding: 0,
                cursor: "pointer",
              }}
            />
          ))
        : null}
    </div>
  );
}

/* ══════════════════════════════════════════
   Main Hero component
   ══════════════════════════════════════════ */
export function Hero(props: HeroProps) {
  const isHome = props.variant === "home";
  const slides: HeroSlide[] = isHome ? props.slides : [];

  const [active, setActive] = useState(0);
  const pausedRef = useRef(false);

  const goNext = () => setActive((p) => (p + 1) % slides.length);
  const goPrev = () => setActive((p) => (p - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (!isHome) return;
    const id = setInterval(() => {
      if (pausedRef.current) return;
      goNext();
    }, 4500);
    return () => clearInterval(id);
  }, [isHome, slides.length]);

  const homeImage = isHome
    ? slides[active]?.image || slides[0]?.image || nairobiSkyline
    : props.image || nairobiSkyline;

  const eyebrow = isHome ? slides[active]?.eyebrow || "" : props.eyebrow;
  const lines = isHome ? slides[active]?.lines || (["", "", ""] as HeroLines) : props.lines;
  const supporting = "supporting" in props ? props.supporting : null;
  const cta = props.cta;
  const showDots = isHome ? true : ("showDots" in props && props.showDots ? true : false);
  const dotsTotal = isHome ? slides.length : 4;

  const supportingMaxWidth =
    !isHome && (props as StaticHeroProps).supportingMaxWidth
      ? (props as StaticHeroProps).supportingMaxWidth
      : 340;

  return (
    <section
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
      className={`hero-shell relative overflow-hidden ${isHome ? "hero-home" : "hero-inner"}`}
      style={{ background: "linear-gradient(155deg, #141040 0%, #221460 30%, #1a0e42 58%, #0b0918 100%)" }}
    >
      {/* Background images with cross-fade */}
      {isHome ? (
        slides.map((s, i) => (
          <img
            key={i}
            src={s.image || nairobiSkyline}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full"
            style={{ objectFit: "cover", objectPosition: "65% top", opacity: i === active ? 1 : 0, transition: "opacity 900ms ease-in-out" }}
          />
        ))
      ) : (
        <img
          src={homeImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full"
          style={{ objectFit: "cover", objectPosition: "65% top" }}
        />
      )}

      <Rings />
      <Vignettes />

      {/* Content block — bottom-anchored */}
      <div className="hero-content absolute left-0 right-0 bottom-0 z-[4]">
        <div className="hero-content-inner">
          {isHome && eyebrow && <SlideLabel label={eyebrow} />}

          <Headline lines={lines} />

          {!isHome && <Eyebrow label={eyebrow} />}

          {supporting && (
            <div className="hero-supporting" style={{ maxWidth: supportingMaxWidth }}>
              {supporting}
            </div>
          )}
          {cta && (
            <>
              <div className="hero-rule hidden md:block" />
              <HeroCtaButton cta={cta} />
            </>
          )}
          {(cta || showDots) && (
            <BottomRow
              showDots={showDots}
              total={dotsTotal}
              active={active}
              onSelect={isHome ? setActive : undefined}
            />
          )}
        </div>
      </div>
    </section>
  );
}