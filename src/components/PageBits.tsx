import { type ReactNode } from "react";
import { Hero, type HeroLines, type HeroCta } from "./Hero";

export function PageHero({
  eyebrow,
  title,
  lines,
  subtitle,
  image,
  cta,
  showDots,
  // legacy `height` accepted for backwards compatibility — ignored under new spec
  height: _height,
  supportingMaxWidth,
}: {
  eyebrow: string;
  title?: ReactNode;
  lines?: HeroLines;
  subtitle?: ReactNode;
  image?: string;
  cta?: HeroCta;
  showDots?: boolean;
  height?: string;
  supportingMaxWidth?: number;
}) {
  // Derive 3 lines from a string title if explicit lines not provided.
  const finalLines: HeroLines =
    lines ||
    (typeof title === "string" ? splitTitleToLines(title) : ["", "", ""]);

  return (
    <Hero
      eyebrow={eyebrow}
      lines={finalLines}
      supporting={subtitle}
      image={image}
      cta={cta}
      showDots={showDots}
      supportingMaxWidth={supportingMaxWidth}
    />
  );
}

function splitTitleToLines(title: string): HeroLines {
  // Split on " · " or sentences; otherwise chop into 3 roughly-equal parts by words.
  if (title.includes(" · ")) {
    const parts = title.split(" · ");
    if (parts.length === 3) return [parts[0] + " ·", parts[1] + " ·", parts[2]];
  }
  const words = title.replace(/\.$/, "").split(" ");
  if (words.length <= 3) return [words[0] || "", words[1] || "", (words[2] || "") + "."];
  const third = Math.ceil(words.length / 3);
  return [
    words.slice(0, third).join(" "),
    words.slice(third, third * 2).join(" "),
    words.slice(third * 2).join(" ") + ".",
  ];
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div
      className={`max-w-[640px] ${align === "center" ? "mx-auto text-center" : ""} animate-fade-up`}
    >
      {!light && align === "center" && (
        <div className="w-10 h-[3px] bg-gold mx-auto mb-4" />
      )}
      {!light && align === "left" && <div className="w-10 h-[3px] bg-gold mb-4" />}
      {light && align === "center" && (
        <div className="w-10 h-[3px] bg-gold mx-auto mb-4" />
      )}
      {eyebrow && <div className="eyebrow mb-3">{eyebrow}</div>}
      <h2
        className={`font-display font-bold leading-[1.2] ${light ? "text-white" : "text-[#2D2973]"}`}
        style={{ fontSize: "clamp(28px, 3.4vw, 40px)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-[15px] leading-[1.75] ${light ? "text-[#A19E9E]" : "text-[#606161]"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function GoldDivider() {
  return <div className="gold-divider" />;
}
