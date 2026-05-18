#!/bin/bash
# Run from inside your swiftora-main folder: bash apply-patch.sh
set -e
REPO="$(pwd)"
echo "Patching: $REPO"
echo ""

# ── 1. __root.tsx ─────────────────────────────────────────────────────────────
cat > "$REPO/src/routes/__root.tsx" << 'EOF'
import { Outlet, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Nav, Footer } from "../components/Layout";
import { FloatingActions } from "../components/FloatingActions";
import { NotFound } from "../components/NotFound";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Swiftora Consulting Limited: Championing Your Business Growth" },
      { name: "description", content: "Accelerate your business growth in Kenya with Swiftora Consulting. Expert strategy, sales, marketing & research solutions." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.cdnfonts.com" },
      { rel: "stylesheet", href: "https://fonts.cdnfonts.com/css/clan-pro" },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFound,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <Nav />
      <main><Outlet /></main>
      <Footer />
      <FloatingActions />
    </>
  );
}
EOF
echo "✓ __root.tsx"

# ── 2. styles.css ─────────────────────────────────────────────────────────────
cat > "$REPO/src/styles.css" << 'EOF'
@import "tailwindcss" source(none);
@source "../src";
@import "tw-animate-css";
@custom-variant dark (&:is(.dark *));

@theme inline {
  --font-display: "Clan Pro", sans-serif;
  --font-sans:    "Clan Pro", sans-serif;
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-destructive: var(--destructive);
  --color-navy: #2D2973;
  --color-navy-deep: #0A0B14;
  --color-gold: #D5AF34;
  --color-offwhite: #F7F6F2;
}

:root {
  --navy-deep:#0A0B14; --navy:#2D2973; --gold:#D5AF34; --gold-hover:#DCB05D; --offwhite:#F7F6F2;
  --background:#FFFFFF; --foreground:#0A0B14;
  --card:#FFFFFF; --card-foreground:#0A0B14;
  --popover:#FFFFFF; --popover-foreground:#0A0B14;
  --primary:#D5AF34; --primary-foreground:#0A0B14;
  --secondary:#2D2973; --secondary-foreground:#FFFFFF;
  --muted:#F7F6F2; --muted-foreground:#6b7280;
  --accent:#D5AF34; --accent-foreground:#0A0B14;
  --border:#e5e7eb; --input:#e5e7eb; --ring:#D5AF34;
  --destructive:oklch(0.577 0.245 27.325);
}

@layer base {
  * { border-color:var(--color-border); box-sizing:border-box; }
  html { scroll-behavior:smooth; }
  body { background:#FFFFFF; color:#0A0B14; font-family:"Clan Pro",sans-serif !important; -webkit-font-smoothing:antialiased; }
  h1,h2,h3,h4,h5,h6,p,a,span,div,button,input,textarea,li,label,select { font-family:"Clan Pro",sans-serif !important; }
  :focus-visible { outline:2px solid #D5AF34; outline-offset:2px; }
}

.tex-noise{position:relative;isolation:isolate}
.tex-noise::before{content:"";position:absolute;inset:0;pointer-events:none;z-index:0;opacity:0.035;background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>")}
.tex-noise>*{position:relative;z-index:1}
.tex-dots{background-image:radial-gradient(circle,rgba(213,175,52,0.07) 1px,transparent 1px);background-size:24px 24px}
.shadow-card{box-shadow:0 1px 2px rgba(11,13,23,0.06),0 8px 32px rgba(11,13,23,0.08)}
.glass-dark{background:rgba(255,255,255,0.04);backdrop-filter:blur(16px);border:1px solid rgba(255,255,255,0.08)}

@keyframes fade-up{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:translateY(0)}}
@keyframes fade-in{from{opacity:0}to{opacity:1}}
@keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}
@keyframes slow-spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
@keyframes ringRotate{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
@keyframes outerRingCounter{from{transform:rotate(0deg)}to{transform:rotate(-360deg)}}
@keyframes labelCounter{from{transform:rotate(0deg)}to{transform:rotate(-360deg)}}
@keyframes orbitPulse{0%{r:8;stroke-opacity:0.55}100%{r:28;stroke-opacity:0}}
@keyframes birdBreathe{0%,100%{transform:scale(1) rotate(0deg)}50%{transform:scale(1.05) rotate(2deg)}}
@keyframes rotate{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
@keyframes spring-in{0%{opacity:0;transform:translateY(40px) scale(0.8)}60%{opacity:1;transform:translateY(-8px) scale(1.05)}100%{opacity:1;transform:translateY(0) scale(1)}}

.animate-fade-up{animation:fade-up 0.65s cubic-bezier(0.22,1,0.36,1) both}
.animate-fade-in{animation:fade-in 0.5s ease-out both}
.animate-marquee{animation:marquee 32s linear infinite}
.animate-slow-spin{animation:slow-spin 60s linear infinite}
.animate-spring-in{animation:spring-in 0.7s cubic-bezier(0.22,1,0.36,1) both}
.orbit-pulse{animation:orbitPulse 600ms ease-out forwards}
.orbit-bird-icon{animation:birdBreathe 4s ease-in-out infinite;transform-origin:center}
.orbit-ring{animation:ringRotate 1020s linear infinite}
.orbit-ring-outer{animation:outerRingCounter 2040s linear infinite}
.orbit-dot-ring{animation:ringRotate 180s linear infinite}
.orbit-label{animation:labelCounter 1020s linear infinite}
.stagger>*:nth-child(1){animation-delay:0ms}.stagger>*:nth-child(2){animation-delay:80ms}.stagger>*:nth-child(3){animation-delay:160ms}.stagger>*:nth-child(4){animation-delay:240ms}.stagger>*:nth-child(5){animation-delay:320ms}.stagger>*:nth-child(6){animation-delay:400ms}

.hover-lift{transition:transform 0.3s cubic-bezier(0.22,1,0.36,1),box-shadow 0.3s ease}
.hover-lift:hover{transform:translateY(-6px)}
.link-underline{position:relative;display:inline-block}
.link-underline::after{content:"";position:absolute;left:0;bottom:-2px;width:100%;height:1.5px;background:#D5AF34;transform:scaleX(0);transform-origin:right;transition:transform 0.35s cubic-bezier(0.22,1,0.36,1)}
.link-underline:hover::after{transform:scaleX(1);transform-origin:left}
.card-gold-top{position:relative;overflow:hidden}
.card-gold-top::before{content:"";position:absolute;top:0;left:0;right:0;height:3px;background:#D5AF34;transform:scaleX(0);transform-origin:left;transition:transform 0.4s cubic-bezier(0.22,1,0.36,1)}
.card-gold-top:hover::before{transform:scaleX(1)}

.btn-gold{background:#D5AF34;color:#0A0B14;font-family:"Clan Pro",sans-serif !important;font-weight:600;font-size:13px;padding:12px 28px;border-radius:4px;display:inline-flex;align-items:center;justify-content:center;gap:8px;cursor:pointer;border:none;text-decoration:none;transition:all 0.2s ease}
.btn-gold:hover{background:#DCB05D;transform:translateY(-2px)}
.btn-dark{background:#0A0B14;color:#FFFFFF;font-family:"Clan Pro",sans-serif !important;font-weight:600;font-size:13px;padding:12px 28px;border-radius:4px;display:inline-flex;align-items:center;justify-content:center;gap:8px;cursor:pointer;border:none;text-decoration:none;transition:all 0.2s ease}
.btn-dark:hover{background:#1a1b2e;transform:translateY(-2px)}
.btn-outline-gold{background:transparent;color:#D5AF34;border:1.5px solid #D5AF34;font-family:"Clan Pro",sans-serif !important;font-weight:600;font-size:13px;padding:11px 26px;border-radius:4px;display:inline-flex;align-items:center;justify-content:center;gap:8px;cursor:pointer;text-decoration:none;transition:all 0.2s ease}
.btn-outline-gold:hover{background:#D5AF34;color:#0A0B14;transform:translateY(-2px)}

.eyebrow{font-family:"Clan Pro",sans-serif !important;font-size:11px;font-weight:500;text-transform:uppercase;letter-spacing:0.25em;color:#D5AF34}

.section-pad{padding:96px 80px}
.section-pad-sm{padding:64px 80px}
@media(max-width:1024px){.section-pad{padding:72px 40px}.section-pad-sm{padding:48px 40px}}
@media(max-width:768px){.section-pad{padding:64px 24px}.section-pad-sm{padding:40px 24px}}

.hero-shell{position:relative;overflow:hidden;background:linear-gradient(155deg,#141040,#221460 30%,#1a0e42 58%,#0b0918)}
.hero-home{min-height:100vh;max-height:720px}
.hero-inner{min-height:420px;height:55vh;max-height:580px}
@media(max-width:767px){.hero-home{height:540px;min-height:540px;max-height:540px}.hero-inner{height:380px;min-height:380px;max-height:380px}}
.hero-vignette-left{background:linear-gradient(100deg,rgba(9,8,26,0.97) 0%,rgba(9,8,26,0.88) 30%,rgba(9,8,26,0.45) 58%,transparent 85%)}
@media(max-width:767px){.hero-vignette-left{background:linear-gradient(100deg,rgba(9,8,26,0.97) 0%,rgba(9,8,26,0.95) 40%,rgba(9,8,26,0.70) 65%,rgba(9,8,26,0.30) 88%)}}
.hero-content{padding:0 52px 56px}
.hero-content-inner{max-width:720px}
@media(max-width:767px){.hero-content{padding:0 22px 32px}}
.hero-headline{font-size:68px;letter-spacing:-0.02em;line-height:1.05;font-family:"Clan Pro",sans-serif !important}
@media(max-width:1024px){.hero-headline{font-size:52px}}
@media(max-width:767px){.hero-headline{font-size:38px}}
.hero-supporting{font-family:"Clan Pro",sans-serif !important;font-weight:300;font-size:14px;color:rgba(255,255,255,0.40);line-height:1.85;margin-bottom:26px}
.hero-slide-label{display:inline-block;font-family:"Clan Pro",sans-serif !important;font-weight:700;font-size:11px;letter-spacing:0.30em;text-transform:uppercase;color:#D5AF34;background:rgba(213,175,52,0.10);border:1px solid rgba(213,175,52,0.35);padding:6px 14px;border-radius:2px;margin-bottom:18px}
.hero-cta{gap:10px;padding:13px 28px;background:transparent;border:1px solid rgba(213,175,52,0.5);color:#D5AF34;font-family:"Clan Pro",sans-serif !important;font-weight:500;font-size:13px;letter-spacing:0.10em;text-transform:uppercase;border-radius:3px;cursor:pointer;transition:all 300ms ease}
.hero-cta:hover{background:#D5AF34;color:#0A0B14;transform:translateY(-2px);box-shadow:0 4px 16px rgba(213,175,52,0.25)}
@media(max-width:767px){.hero-cta{width:100%;padding:15px 20px;justify-content:center}}
.hero-rule{width:40px;height:1px;background:rgba(213,175,52,0.30);margin-bottom:22px}

.orbit-wrap{position:relative;display:inline-block}
.orbit-center{position:absolute;left:50%;top:50%;width:72px;height:72px;border-radius:50%;background:radial-gradient(circle at center,#1a1f3c,#0b0d17);border:1px solid rgba(213,175,52,0.55);display:flex;align-items:center;justify-content:center;transform:translate(-50%,-50%);pointer-events:none}
.orbit-pills{position:absolute;left:50%;bottom:-52px;transform:translateX(-50%);display:flex;flex-wrap:wrap;gap:8px;justify-content:center}
.orbit-pill{font-family:"Clan Pro",sans-serif !important;font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(213,175,52,0.75);background:transparent;border:1px solid rgba(213,175,52,0.30);padding:6px 12px;border-radius:999px;cursor:pointer;transition:all 200ms ease}
.orbit-pill:hover{border-color:rgba(213,175,52,0.65);color:#D5AF34}
.orbit-pill.is-active{background:rgba(213,175,52,0.12);border-color:#D5AF34;color:#D5AF34}

.team-card:hover,.team-card:focus-visible{transform:translateY(-8px);box-shadow:0 2px 4px rgba(0,0,0,0.08),0 16px 48px rgba(0,0,0,0.15)}
.team-card:hover .team-photo,.team-card:focus-visible .team-photo{border-color:#D5AF34 !important}
.bio-modal-main::-webkit-scrollbar{width:6px}
.bio-modal-main::-webkit-scrollbar-track{background:#F7F6F2}
.bio-modal-main::-webkit-scrollbar-thumb{background:#D5AF34;border-radius:3px}

/* Footer bird watermark */
.footer-bird-watermark{position:absolute;bottom:0;right:0;width:220px;height:auto;opacity:0.12;pointer-events:none;z-index:0}

.hours-row{display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid rgba(213,175,52,0.12)}
.hours-label{font-size:13px;color:#9ca3af}
.hours-value{font-size:13px;color:#ffffff;font-weight:500}

.flip-card{position:relative;width:100%;height:320px;perspective:1200px;cursor:pointer}
.flip-inner{position:relative;width:100%;height:100%;transition:transform 0.7s cubic-bezier(0.4,0,0.2,1);transform-style:preserve-3d}
.flip-card:hover .flip-inner,.flip-card:focus-within .flip-inner{transform:rotateY(180deg)}
.flip-face{position:absolute;inset:0;backface-visibility:hidden;-webkit-backface-visibility:hidden;border-radius:12px;overflow:hidden}
.flip-face--back{transform:rotateY(180deg)}
.flip-overlay{position:absolute;inset:0;background:linear-gradient(135deg,rgba(45,41,115,0.92),rgba(10,11,20,0.88))}
EOF
echo "✓ styles.css"

# ── 3. Layout.tsx
# Footer matches WP Image 2 EXACTLY:
# - "LET'S DO GREAT THINGS" as gold header in first column
# - Landscape logo + "get ahead for good" below it in col 1
# - Quick Access col 2, Office col 3, Connect col 4
# - Gold square social icon PNGs from WP CDN
# - STRATEGY | SALES | MARKETING | COMMUNICATION | RESEARCH with pipes
# ─────────────────────────────────────────────────────────────────────────────
cat > "$REPO/src/components/Layout.tsx" << 'EOF'
import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Mail, Phone, X } from "lucide-react";
import navbarLogo from "@/assets/branding/navbar-logo.png";
import footerBird from "@/assets/branding/footer-bird.png";
import { SwiftMark } from "./Logo";

const WP_FOOTER = "https://swiftoraconsulting.co.ke/wp-content/uploads/2025/02";
const WP_LANDSCAPE = "https://swiftoraconsulting.co.ke/wp-content/uploads/2025/02/Swiftora-Standard-Logo-png-File-02-1536x1012-1.png";

const flagshipLinks = [
  { label: "Capital Readiness Programme™",       to: "/flagship-solutions/capital-readiness" },
  { label: "Feasibility & Market Entry Suite™",  to: "/flagship-solutions/feasibility-market-entry" },
  { label: "SME Growth Blueprint™",              to: "/flagship-solutions/sme-growth-blueprint" },
  { label: "Revenue Acceleration Programme™",    to: "/flagship-solutions/revenue-acceleration" },
  { label: "Programme Design & Advisory Suite™", to: "/flagship-solutions/programme-design" },
] as const;
const advisoryLinks = [
  { label: "Business Diagnostic™",  to: "/advisory-services/business-diagnostic" },
  { label: "Consulting Clinic™",    to: "/advisory-services/consulting-clinic" },
  { label: "Executive Advisory™",   to: "/advisory-services/executive-advisory" },
] as const;

export function TopBar() {
  return (
    <div style={{ background: "#0A0B14" }} className="hidden md:flex items-center justify-between text-[11px] text-[#A19E9E] px-10 py-1.5">
      <div className="flex items-center gap-4">
        <a href="mailto:hello@swiftoraconsulting.co.ke" className="flex items-center gap-1.5 hover:text-[#D5AF34] transition-colors">
          <Mail size={11} /> Email Us: hello@swiftoraconsulting.co.ke
        </a>
        <span className="text-white/20">|</span>
        <a href="tel:+254729698380" className="flex items-center gap-1.5 hover:text-[#D5AF34] transition-colors">
          <Phone size={11} /> Call Us: 0729 698 380
        </a>
      </div>
      <a href="https://wa.me/254729698380" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-[#D5AF34] transition-colors">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
      </a>
    </div>
  );
}

export function Nav() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  useEffect(() => { const fn = () => setScrolled(window.scrollY > 8); window.addEventListener("scroll", fn, { passive: true }); return () => window.removeEventListener("scroll", fn); }, []);
  const lnk = "text-[13px] font-medium text-[#2D2973] hover:text-[#D5AF34] transition-colors";
  const pipe = <span className="text-[#cccccc] select-none mx-0.5">|</span>;
  return (
    <>
      <TopBar />
      <header className="sticky top-0 z-40 transition-shadow duration-200" style={{ background: "#FFFFFF", borderBottom: "1px solid rgba(204,204,204,0.6)", boxShadow: scrolled ? "0 2px 20px rgba(11,13,23,0.10)" : "0 1px 0 rgba(11,13,23,0.04)" }}>
        <div className="flex items-center justify-between px-6 md:px-10 py-3">
          <Link to="/" aria-label="Swiftora Consulting Limited">
            <img src={navbarLogo} alt="Swiftora Consulting Limited" style={{ height: 38, width: "auto" }} />
          </Link>
          <nav className="hidden lg:flex items-center" aria-label="Main navigation">
            <Link to="/" className={lnk} activeOptions={{ exact: true }} activeProps={{ style: { color: "#D5AF34" } }}>Home</Link>
            {pipe}
            <Link to="/about" className={lnk} activeProps={{ style: { color: "#D5AF34" } }}>About Us</Link>
            {pipe}
            <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <button className={`${lnk} flex items-center gap-1`} aria-expanded={servicesOpen}>
                Our Services <ChevronDown size={11} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[540px] bg-white rounded-md p-6 grid grid-cols-2 gap-6 animate-fade-in" style={{ boxShadow: "0 12px 40px rgba(11,13,23,0.15)", border: "1px solid rgba(204,204,204,0.4)" }}>
                  <div className="pr-6 border-r border-[#D5AF34]/30">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D5AF34] mb-3">Flagship Solutions</div>
                    {flagshipLinks.map((l) => <Link key={l.to} to={l.to} className="block text-[13px] text-[#4D4D4D] hover:text-[#2D2973] py-1">{l.label}</Link>)}
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D5AF34] mb-3">Advisory Services</div>
                    {advisoryLinks.map((l) => <Link key={l.to} to={l.to} className="block text-[13px] text-[#4D4D4D] hover:text-[#2D2973] py-1">{l.label}</Link>)}
                  </div>
                </div>
              )}
            </div>
            {pipe}
            <Link to="/portfolio" className={lnk} activeProps={{ style: { color: "#D5AF34" } }}>Portfolio</Link>
            {pipe}
            <Link to="/think-pieces" className={lnk} activeProps={{ style: { color: "#D5AF34" } }}>Think pieces</Link>
            {pipe}
            <Link to="/talk-to-us" className="btn-gold" style={{ padding: "8px 20px", fontSize: 13 }}>Talk to us</Link>
          </nav>
          <button onClick={() => setOpen(true)} className="lg:hidden p-2" aria-label="Open menu">
            <span className="block w-5 h-0.5 bg-[#2D2973] mb-1" />
            <span className="block w-5 h-0.5 bg-[#2D2973] mb-1" />
            <span className="block w-5 h-0.5 bg-[#2D2973]" />
          </button>
        </div>
      </header>
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden overflow-y-auto animate-fade-in" style={{ background: "#2D2973" }}>
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
            <SwiftMark size={32} color="light" />
            <button onClick={() => setOpen(false)} className="text-[#D5AF34] p-2"><X size={22} /></button>
          </div>
          <nav className="px-6 py-8 space-y-6">
            {[{ to: "/", label: "Home" }, { to: "/about", label: "About Us" }].map((l) => (
              <Link key={l.to} to={l.to as any} onClick={() => setOpen(false)} className="block text-[20px] font-bold text-white hover:text-[#D5AF34]">{l.label}</Link>
            ))}
            <div>
              <button onClick={() => setMobileServicesOpen(!mobileServicesOpen)} className="flex items-center justify-between w-full text-[20px] font-bold text-white hover:text-[#D5AF34]">
                Our Services <ChevronDown size={18} className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileServicesOpen && (
                <div className="mt-4 pl-4 space-y-4 border-l-2 border-[#D5AF34]/40 animate-fade-in">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-[#D5AF34] mb-2 font-semibold">Flagship Solutions</div>
                    {flagshipLinks.map((l) => <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="block py-1 text-[14px] text-[#A19E9E] hover:text-[#D5AF34]">{l.label}</Link>)}
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-[#D5AF34] mb-2 font-semibold">Advisory Services</div>
                    {advisoryLinks.map((l) => <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="block py-1 text-[14px] text-[#A19E9E] hover:text-[#D5AF34]">{l.label}</Link>)}
                  </div>
                </div>
              )}
            </div>
            {[{ to: "/portfolio", label: "Portfolio" }, { to: "/think-pieces", label: "Think pieces" }].map((l) => (
              <Link key={l.to} to={l.to as any} onClick={() => setOpen(false)} className="block text-[20px] font-bold text-white hover:text-[#D5AF34]">{l.label}</Link>
            ))}
          </nav>
          <div className="px-6 pb-10">
            <Link to="/talk-to-us" onClick={() => setOpen(false)} className="btn-gold w-full text-center justify-center">Talk to us</Link>
            <div className="mt-6 space-y-3">
              <a href="mailto:hello@swiftoraconsulting.co.ke" className="flex items-center gap-2 text-[13px] text-[#A19E9E] hover:text-[#D5AF34]"><Mail size={13} /> hello@swiftoraconsulting.co.ke</a>
              <a href="tel:+254729698380" className="flex items-center gap-2 text-[13px] text-[#A19E9E] hover:text-[#D5AF34]"><Phone size={13} /> 0729 698 380</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* FOOTER — matches Image 2 (WP site) exactly:
   4 columns:
   Col 1: "LET'S DO GREAT THINGS" gold heading + landscape logo + "get ahead for good"
   Col 2: QUICK ACCESS links
   Col 3: OFFICE address
   Col 4: CONNECT WITH US + phone + email + gold square social icon PNGs
   Bottom: STRATEGY | SALES | MARKETING | COMMUNICATION | RESEARCH with pipe separators
   Credit line
*/
export function Footer() {
  const socialIcons = [
    { img: `${WP_FOOTER}/Footer_Socio_Icons-01A.png`, href: "https://www.facebook.com/profile.php?id=61573079392370", label: "Facebook" },
    { img: `${WP_FOOTER}/Footer_Socio_Icons-02A.png`, href: "https://www.instagram.com/swiftoraconsultingke/", label: "Instagram" },
    { img: `${WP_FOOTER}/Footer_Socio_Icons-03A.png`, href: "https://x.com/SwiftoraConsult", label: "X" },
    { img: `${WP_FOOTER}/Footer_Socio_Icons-04A.png`, href: "https://www.linkedin.com/company/swiftora-consulting-limited/", label: "LinkedIn" },
    { img: `${WP_FOOTER}/Footer_Socio_Icons-05A.png`, href: "https://www.youtube.com/channel/UCOr0HcoblOkDofA7vHxrbDA", label: "YouTube" },
  ];

  return (
    <footer style={{ background: "#2D2973", position: "relative", overflow: "hidden" }}>
      <img src={footerBird} alt="" aria-hidden="true" className="footer-bird-watermark" />
      <div className="relative px-6 md:px-10 pt-14 pb-8" style={{ zIndex: 1 }}>

        {/* 4-column grid — matches WP footer layout exactly */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

          {/* Col 1: LET'S DO GREAT THINGS + landscape logo + tagline */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D5AF34] mb-5">LET'S DO GREAT THINGS</h4>
            <img
              src={WP_LANDSCAPE}
              alt="Swiftora Consulting Limited"
              style={{ height: 44, width: "auto", filter: "brightness(0) invert(1)", opacity: 0.92, display: "block", marginBottom: 8 }}
              onError={(e) => { e.currentTarget.src = navbarLogo; e.currentTarget.style.filter = "brightness(0) invert(1)"; }}
            />
            <p className="text-[12px] text-[#A19E9E] italic">get ahead for good</p>
          </div>

          {/* Col 2: QUICK ACCESS */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D5AF34] mb-5">QUICK ACCESS</h4>
            <ul className="space-y-3">
              {[
                { to: "/",             label: "Home" },
                { to: "/about",        label: "About Us" },
                { to: "/our-services", label: "Practice Areas" },
                { to: "/portfolio",    label: "Portfolio" },
                { to: "/think-pieces", label: "Insights" },
              ].map((l) => (
                <li key={l.to}><Link to={l.to as any} className="text-[13px] text-[#A19E9E] hover:text-[#D5AF34] transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Col 3: OFFICE */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D5AF34] mb-5">OFFICE</h4>
            <p className="text-[13px] text-[#A19E9E] leading-[2.1]">
              Applewood Adams,<br />
              Odyssey Workspace,<br />
              10th Floor, Suite 1011,<br />
              Ngong Road, Kilimani,<br />
              Nairobi, Kenya
            </p>
          </div>

          {/* Col 4: CONNECT WITH US + gold square social icons */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D5AF34] mb-5">CONNECT WITH US</h4>
            <a href="tel:+254729698380" className="block text-[13px] text-[#A19E9E] hover:text-[#D5AF34] transition-colors mb-1">+254 729 698 380</a>
            <a href="mailto:hello@swiftoraconsulting.co.ke" className="block text-[13px] text-[#A19E9E] hover:text-[#D5AF34] transition-colors break-all mb-5">hello@swiftoraconsulting.co.ke</a>
            {/* Gold square social icon PNGs — exactly matching WP site */}
            <div className="flex gap-2 flex-wrap">
              {socialIcons.map(({ img, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="hover:opacity-80 transition-opacity">
                  <img src={img} alt={label} style={{ width: 34, height: 34, objectFit: "contain" }}
                    onError={(e) => { e.currentTarget.parentElement!.style.display = "none"; }} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }} className="pt-6">
          {/* STRATEGY | SALES | MARKETING | COMMUNICATION | RESEARCH with pipe separators */}
          <div className="flex flex-wrap justify-center items-center gap-0 mb-4">
            {["STRATEGY", "SALES", "MARKETING", "COMMUNICATION", "RESEARCH"].map((p, i, arr) => (
              <span key={p} className="flex items-center">
                <Link to="/our-services" className="text-[11px] font-bold tracking-[0.15em] text-white hover:text-[#D5AF34] transition-colors">{p}</Link>
                {i < arr.length - 1 && <span className="mx-3 text-white/40">|</span>}
              </span>
            ))}
          </div>
          {/* Credit line */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-[11px] text-[#606161]">
            <span>© Swiftora Consulting Limited 2026</span>
            <span>Designed By WayoInk | Developed By Avado Technologies</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
EOF
echo "✓ Layout.tsx"

# ── 4. ClientMarquee.tsx ──────────────────────────────────────────────────────
cat > "$REPO/src/components/ClientMarquee.tsx" << 'EOF'
const WP = "https://swiftoraconsulting.co.ke/wp-content/uploads/2025/05";
const logos = [
  `${WP}/Home_Clientelle-10.png`,`${WP}/Home_Clientelle-09.png`,
  `${WP}/Home_Clientelle-01.png`,`${WP}/Home_Clientelle-02.png`,
  `${WP}/Home_Clientelle-03.png`,`${WP}/Home_Clientelle-04.png`,
  `${WP}/Home_Clientelle-05.png`,`${WP}/Home_Clientelle-06.png`,
  `${WP}/Home_Clientelle-07.png`,`${WP}/Home_Clientelle-08.png`,
];
export function ClientMarquee() {
  const doubled = [...logos, ...logos];
  return (
    <section className="py-14" style={{ background: "#ffffff" }} aria-label="Our clients">
      <div className="text-center mb-10">
        <h2 className="font-bold text-[#2D2973]" style={{ fontSize: "clamp(18px,2vw,22px)", letterSpacing: "0.08em" }}>Our clients</h2>
      </div>
      <div className="overflow-hidden" style={{ maskImage: "linear-gradient(90deg,transparent,black 12%,black 88%,transparent)", WebkitMaskImage: "linear-gradient(90deg,transparent,black 12%,black 88%,transparent)" }}>
        <div className="flex animate-marquee" style={{ width: "max-content", gap: "48px" }}>
          {doubled.map((src, i) => (
            <div key={i} className="flex items-center justify-center flex-shrink-0" style={{ width: 140, height: 72 }}>
              <img src={src} alt="" loading="lazy" style={{ maxHeight: 56, maxWidth: 130, objectFit: "contain" }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default ClientMarquee;
EOF
echo "✓ ClientMarquee.tsx"

# ── 5. index.tsx — Home page ──────────────────────────────────────────────────
cat > "$REPO/src/routes/index.tsx" << 'EOF'
import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Hero, type HeroSlide } from "@/components/Hero";
import { ArrowRight } from "lucide-react";
import { usePosts } from "@/hooks/useWordPress";
import { getFeaturedImage, getCategory, formatDate } from "@/services/wordpress";
import { articles } from "@/lib/content";
import { ClientMarquee } from "@/components/ClientMarquee";
import hero1 from "@/assets/heroes/hero-1.jpg";
import hero2 from "@/assets/heroes/hero-2.jpg";
import hero3 from "@/assets/heroes/hero-3.jpg";

const WP = "https://swiftoraconsulting.co.ke/wp-content/uploads";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Swiftora Consulting Limited: Championing Your Business Growth" },
    { name: "description", content: "Accelerate your business growth in Kenya with Swiftora Consulting. Expert strategy, sales, marketing & research solutions." },
  ]}),
  component: HomePage,
});

const homeSlides: HeroSlide[] = [
  { eyebrow: "WELCOME!",         lines: ["Strategise |", "Optimise |",        "Realise"],   image: hero1 },
  { eyebrow: "CONSULTING AREAS", lines: ["Strategy | Sales |", "Marketing |", "Research"],  image: hero2 },
  { eyebrow: "OUR PROMISE",      lines: ["Championing", "Your",               "Growth"],    image: hero3 },
  { eyebrow: "CONTACT US",       lines: ["Let's Make", "Great Things",        "Happen!"],   image: hero1 },
];

function AboutSection() {
  return (
    <section className="section-pad" style={{ background: "#ffffff" }}>
      <div className="max-w-[1100px] mx-auto">
        <h2 className="font-bold text-[#0A0B14] leading-[1.2] mb-6" style={{ fontSize: "clamp(26px,3vw,36px)" }}>
          Cracking the code of sales, marketing, and business strategy
        </h2>
        <div className="space-y-4 text-[15px] text-[#4D4D4D] leading-[1.85] max-w-[720px]">
          <p>You've got the vision, the passion, and the product/service.<br />But something is missing. That something is the secret sauce that transforms good ideas into great organisations.</p>
          <p>Welcome to the ultimate decoding lab for your business! At Swiftora Consulting Limited, we believe that success is no longer about working harder—it's about working smarter. We are here to hand you the cheat sheet and guide you through every twist and turn of business management.</p>
        </div>
        <Link to="/about" className="btn-outline-gold mt-8">Discover More</Link>
      </div>
    </section>
  );
}

const valueItems = [
  { icon: `${WP}/2025/05/Home_Value-Proposition-Icons-02.png`, title: "Precise Diagnosis" },
  { icon: `${WP}/2025/05/Home_Value-Proposition-Icons-03.png`, title: "Market Intelligence" },
  { icon: `${WP}/2025/05/Home_Value-Proposition-Icons-04.png`, title: "Adaptive Solutions" },
  { icon: `${WP}/2025/05/Home_Value-Proposition-Icons-01.png`, title: "Accelerated Growth" },
];

function ValueProp() {
  return (
    <>
      <section style={{ background: "#ffffff", borderTop: "1px solid #f0eff9" }}>
        <div className="max-w-[1100px] mx-auto px-6 md:px-10 py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center stagger">
            {valueItems.map(({ icon, title }) => (
              <div key={title} className="animate-fade-up flex flex-col items-center gap-4">
                <img src={icon} alt={title} style={{ width: 72, height: 72, objectFit: "contain" }} loading="lazy" onError={(e) => { e.currentTarget.style.display = "none"; }} />
                <h6 className="font-bold text-[#2D2973]" style={{ fontSize: 13 }}>{title}</h6>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ background: "#2D2973" }} className="section-pad">
        <div className="max-w-[860px] mx-auto text-center">
          <h2 className="font-bold text-white mb-6" style={{ fontSize: "clamp(18px,2vw,22px)", letterSpacing: "0.08em" }}>VALUE PROPOSITION</h2>
          <p className="text-[16px] text-white/80 leading-[1.9]">With custom solutions tailored to your unique needs, we use a blend of sharp insights, proven methods, and innovative thinking to solve even the toughest business problems.</p>
          <p className="mt-5 text-[16px] text-white/80 leading-[1.9]">From increasing sales to refining your marketing and sharpening your strategic approach, we make the complex simple and the impossible possible.</p>
        </div>
      </section>
    </>
  );
}

const services = [
  { id: "strategy",      label: "STRATEGY",     items: ["Business Review & Audit","Business Model Innovation","Strategic Planning & Review","Business Recovery Planning","Organizational Design & Development","Strategy Implementation Management","Market Entry, Expansion & Diversification","Revenue Growth & Commercial Effectiveness"] },
  { id: "sales",         label: "Sales",         items: ["Sales Training","Pitching Outsourcing","Pitch Deck Development","Sales Auditing & Planning","Key Account Management","Customer Experience & Retention","Channel & Distribution Optimization"] },
  { id: "communication", label: "Communication", items: ["Content Writing","Communication Planning","Business Writing Workshops","Public Speaking & Presentation","Communication Skills training","Corporate Communications Audits","Communication Strategy Development"] },
  { id: "research",      label: "Research",      items: ["Market Research","Feasibility Studies","Business Analysis","Market & Industry Insights","Data Collection & Analysis","Business Plan Development","Business Ideation and Validation"] },
  { id: "marketing",     label: "Marketing",     items: ["Brand Workshop","Lead Generation","Personal Branding","Marketing Planning","Go-To-Market Strategy","Marketing Review & Audit","Value Proposition Development"] },
];

function ServicesSection() {
  const [active, setActive] = useState("strategy");
  const tab = services.find((s) => s.id === active)!;
  return (
    <section className="section-pad tex-dots" style={{ background: "#f7f6f2" }}>
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="font-bold text-[#2D2973] mb-4" style={{ fontSize: "clamp(18px,2vw,22px)", letterSpacing: "0.08em" }}>CONSULTING SERVICES</h2>
          <p className="text-[16px] text-[#4D4D4D] leading-[1.8] max-w-[780px] mx-auto">Whether you are a startup seeking market entry, a mid-sized company looking to scale, or an established enterprise needing reinvention, we translate data into strategy, strategy into action, and action into tangible results.</p>
          <Link to="/our-services" className="btn-gold mt-8">Explore</Link>
        </div>
        <div className="flex flex-wrap border-b-2 border-[#2D2973]">
          {services.map((s) => (
            <button key={s.id} onClick={() => setActive(s.id)} className="py-3 px-5 text-[12px] uppercase tracking-[0.12em] font-semibold transition-all" style={{ background: active === s.id ? "#2D2973" : "transparent", color: active === s.id ? "#ffffff" : "#2D2973", border: "none" }}>
              {s.label}
            </button>
          ))}
        </div>
        <div key={active} className="mt-8 grid md:grid-cols-2 gap-x-12 gap-y-2 animate-fade-in">
          {tab.items.map((item) => (
            <div key={item} className="flex items-start gap-3 text-[14px] text-[#4D4D4D] py-2 border-b border-[#e8e8e8]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D5AF34] flex-shrink-0 mt-1.5" />{item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ThinkPiecesSection() {
  const { posts, isLoading } = usePosts({ perPage: 2 });
  const fallback = articles.slice(0, 2).map((a) => ({ id: a.slug, slug: a.slug, _wp: false as const, title: a.title, excerpt: a.excerpt, image: null as string | null }));
  const items = !isLoading && posts.length
    ? posts.slice(0, 2).map((p: any) => ({ id: p.id, slug: p.slug, _wp: true as const, title: p.title?.rendered || "", excerpt: p.excerpt?.rendered || "", image: getFeaturedImage(p) }))
    : fallback;
  return (
    <section className="section-pad" style={{ background: "#ffffff" }}>
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="font-bold text-[#2D2973]" style={{ fontSize: "clamp(18px,2vw,22px)", letterSpacing: "0.08em" }}>THINK PIECES & INSIGHTS</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 stagger">
          {items.map((a) => (
            <Link key={a.id} to="/think-pieces/$slug" params={{ slug: a.slug }} className="block bg-white overflow-hidden shadow-card hover-lift animate-fade-up" style={{ border: "1px solid #ececec", borderRadius: 6 }}>
              <div style={{ width: "100%", paddingTop: "56.25%", background: a.image ? `url(${a.image}) center/cover no-repeat` : "linear-gradient(135deg,#1a2035,#2D2973)" }} />
              <div className="p-6">
                {a._wp ? <h5 className="font-bold text-[#0A0B14] leading-[1.4]" style={{ fontSize: 18 }} dangerouslySetInnerHTML={{ __html: a.title }} /> : <h5 className="font-bold text-[#0A0B14] leading-[1.4]" style={{ fontSize: 18 }}>{a.title}</h5>}
                {a._wp ? <div className="mt-3 text-[14px] text-[#606161] leading-[1.75] line-clamp-3" dangerouslySetInnerHTML={{ __html: a.excerpt }} /> : <p className="mt-3 text-[14px] text-[#606161] leading-[1.75] line-clamp-3">{(a as any).excerpt || ""}</p>}
                <span className="inline-flex items-center gap-2 mt-5 text-[13px] font-semibold text-[#2D2973]">Read More <ArrowRight size={13} /></span>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/think-pieces" className="text-[13px] font-semibold link-underline text-[#2D2973]">view all posts</Link>
        </div>
      </div>
    </section>
  );
}

const WP_ARROW = `${WP}/2025/04/Home_Featured_Engagement_Arrow.png`;
const engagements = [
  { image: `${WP}/2025/05/Portfolio-01.png`, titleBold: "Marketing",    titleRest: " Gated Communities in Kenya",                           category: "Real Estate",    to: "/ameer-developers" },
  { image: `${WP}/2025/05/Portfolio-06.png`, titleBold: "Transforming", titleRest: " Maternal Health Outcomes through Strategic Messaging", category: "Not for Profit", to: "/zuri-nzilani-foundation" },
];

function FeaturedEngagements() {
  return (
    <section style={{ background: "#0A0B14" }} className="section-pad">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="font-bold text-white text-center mb-12" style={{ fontSize: "clamp(18px,2vw,22px)", letterSpacing: "0.08em" }}>FEATURED ENGAGEMENTS</h2>
        {engagements.map((e, i) => (
          <div key={e.to} style={{ borderTop: "1px solid rgba(255,255,255,0.08)", borderBottom: i === engagements.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none", padding: "32px 0" }}>
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div className="flex-shrink-0 rounded-lg overflow-hidden" style={{ width: 200, height: 130 }}>
                <img src={e.image} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" onError={(ev) => { ev.currentTarget.parentElement!.style.display = "none"; }} />
              </div>
              <div className="flex-1 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <h3 className="font-bold text-white leading-[1.3]" style={{ fontSize: "clamp(20px,2.4vw,28px)" }}>
                  <strong>{e.titleBold}</strong>{e.titleRest}
                </h3>
                <Link to={e.to as any} className="flex items-center gap-3 flex-shrink-0 group">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#D5AF34]">{e.category}</span>
                  <img src={WP_ARROW} alt="" aria-hidden="true" style={{ width: 36, height: 36, objectFit: "contain", transition: "transform 0.2s ease" }} className="group-hover:translate-x-1" onError={(ev) => { ev.currentTarget.style.display = "none"; }} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <>
      <Hero variant="home" slides={homeSlides} cta={{ label: "Learn More", to: "/about" }} />
      <AboutSection />
      <ValueProp />
      <ServicesSection />
      <ThinkPiecesSection />
      <ClientMarquee />
      <FeaturedEngagements />
    </>
  );
}
EOF
echo "✓ index.tsx"

# ── 6. about.tsx — FIXED: uses correct local asset paths that actually exist
cat > "$REPO/src/routes/about.tsx" << 'EOF'
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Hero } from "@/components/Hero";
import stephenImg from "@/assets/team/stephen-osomba.jpg";
import nicodemusImg from "@/assets/team/nicodemus-nyambok.jpg";
import geoffreyImg from "@/assets/team/geoffrey-korio.jpg";
import lilianImg from "@/assets/team/lilian-mukami.jpg";
import marcelImg from "@/assets/team/marcel-oketch.jpg";
import hero1 from "@/assets/heroes/hero-1.jpg";

const WP = "https://swiftoraconsulting.co.ke/wp-content/uploads";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About Us: Integrated Business Strategy & Research Solutions Company" },
    { name: "description", content: "Learn about Swiftora Consulting's mission to champion business growth in Kenya." },
  ]}),
  component: AboutPage,
});

const overviewCards = [
  { icon: `${WP}/2025/04/AboutUs_Corporate_Overview_Icons-04A.png`, title: "Our Mission",          body: "To deliver customised, practical strategies that drive growth, optimise performance, and create lasting value for our clients." },
  { icon: `${WP}/2025/04/AboutUs_Corporate_Overview_Icons-03A.png`, title: "Our Vision",           body: "To be the trusted partner organisations turn to for unlocking their full potential, crafting pathways to sustainable success." },
  { icon: `${WP}/2025/04/AboutUs_Corporate_Overview_Icons-01A.png`, title: "Philosophy & Culture", body: "We believe in diligence, reliability, and collaboration cultivating a culture that values diverse perspectives and inspires creativity." },
  { icon: `${WP}/2025/04/AboutUs_Corporate_Overview_Icons-02A.png`, title: "Our Promise",          body: "When the going gets tough, we step in with solutions to keep you ahead for the long haul—and we'll be with you every step of the way." },
];

const team = [
  { name: "Stephen Osomba",    role: "Sales & Business Strategy",   img: stephenImg,   bio: "Stephen Osomba is the founder and lead strategist at Swiftora Consulting. With over a decade of experience in business strategy, sales acceleration, and commercial effectiveness, Stephen has worked with startups, SMEs, and established enterprises across East Africa to clarify their market positioning, build scalable revenue systems, and execute growth strategies that deliver measurable results." },
  { name: "Nicodemus Nyambok", role: "Data Analysis & Reporting",   img: nicodemusImg, bio: "Nicodemus Nyambok leads data analysis and business intelligence at Swiftora Consulting. His work focuses on turning raw data into actionable insights that inform strategic decisions and drive measurable business outcomes across sectors including real estate, agriculture, technology, and financial services." },
  { name: "Geoffrey Korio",    role: "Communication & Research",    img: geoffreyImg,  bio: "Geoffrey Korio leads communications strategy and research at Swiftora Consulting. His work focuses on helping organizations articulate their value propositions clearly, communicate with precision, and build messaging frameworks that resonate with their target audiences." },
  { name: "Lilian Mukami",     role: "Marketing & Finance",         img: lilianImg,    bio: "Lilian Mukami brings dual expertise in marketing strategy and financial analysis to Swiftora Consulting. Her unique skill set allows her to bridge the gap between marketing investments and financial outcomes, ensuring that marketing strategies are commercially viable and financially sound." },
  { name: "Marcel Oketch",     role: "Business Technology",         img: marcelImg,    bio: "Marcel Oketch leads business technology and systems implementation at Swiftora Consulting. His work focuses on helping businesses leverage technology to improve operational efficiency, enhance customer experience, and scale more effectively." },
];

function AboutPage() {
  const [bio, setBio] = useState<typeof team[0] | null>(null);
  return (
    <>
      <Hero
        variant="inner"
        eyebrow="ABOUT US"
        lines={["Your Goals Inspire Us.", "Your Success", "Defines Us."]}
        image={hero1}
        supporting={<p>What started as a small group of passionate problem-solvers has grown into a trusted consultancy with a reputation for delivering customized solutions and measurable success for over 10 years.</p>}
      />

      {/* Corporate Overview */}
      <section className="section-pad" style={{ background: "#ffffff" }}>
        <div className="max-w-[1100px] mx-auto">
          <h2 className="font-bold text-[#2D2973] mb-8" style={{ fontSize: "clamp(18px,2vw,22px)", letterSpacing: "0.08em" }}>CORPORATE OVERVIEW</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[15px] text-[#4D4D4D] leading-[1.85] mb-4">Swiftora Consulting Limited is a dynamic company providing integrated business strategy and research solutions. We understand that thriving in today's competitive landscape requires more than just effort; it demands insight, sharp thinking, and precision. That's why we specialise in sales, marketing, strategy, and research, delivering solutions tailored to your unique needs and positioning your organisation for sustained growth and prosperity.</p>
              <p className="text-[15px] text-[#4D4D4D] leading-[1.85] mb-6">With a blend of creativity, multi-sectoral expertise, and extensive experience, we help our clients stay ahead of the curve, make smarter decisions, and achieve tangible results. Whether you are looking to optimise performance, design an impactful marketing campaign, or build a future-proof strategy, we are the partner you can rely on. At pivotal moments, we turn complexity into clarity and challenges into opportunities.</p>
              <a href="https://swiftoraconsulting.co.ke/wp-content/uploads/2025/05/Swiftora-Consulting-Limited-Company-Profile-Digital.pdf" target="_blank" rel="noopener noreferrer" className="btn-gold">Download profile</a>
            </div>
            <div className="grid grid-cols-2 gap-5 stagger">
              {overviewCards.map(({ icon, title, body }) => (
                <div key={title} className="animate-fade-up rounded-lg p-6 text-center" style={{ background: "#f7f6f2", border: "1px solid #eeeeee" }}>
                  <img src={icon} alt={title} style={{ width: 56, height: 56, objectFit: "contain", margin: "0 auto 12px" }} loading="lazy" onError={(e) => { e.currentTarget.style.display = "none"; }} />
                  <h6 className="font-bold text-[#2D2973] mb-2" style={{ fontSize: 13 }}>{title}</h6>
                  <p className="text-[12px] text-[#606161] leading-[1.7]">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founding Story */}
      <section className="section-pad tex-dots" style={{ background: "#f7f6f2" }}>
        <div className="max-w-[1100px] mx-auto">
          <h2 className="font-bold text-[#2D2973] mb-8" style={{ fontSize: "clamp(18px,2vw,22px)", letterSpacing: "0.08em" }}>OUR FOUNDING STORY</h2>
          <div className="max-w-[760px] space-y-4 text-[15px] text-[#4D4D4D] leading-[1.85]">
            <p>Our journey began in 2013, with the idea of establishing a consultancy first mooted in a student hostel during our college days at Moi University, Eldoret. However, the dream was deferred until 21 October 2015, when the first consultancy was formed, focusing solely on marketing. This continued for nine years, and before the 10th anniversary we decided to change our business model, strategic approach and brand.</p>
            <p>Throughout our years of experience, we observed countless organizations, particularly SMEs, struggling to align their marketing efforts, sales strategies, and long-term goals. The gap was clear: they needed a partner who could not only navigate these complexities but also transform them into opportunities.</p>
            <p>Our founders, with backgrounds in strategy, sales, marketing, and research, recognised it was time to create a consultancy that would bring a fresh perspective to the table. Armed with years of industry experience, a passion for innovation, and a drive to support African enterprises, we set out to build something different—a firm that doesn't just offer solutions but truly partners with clients to build lasting success.</p>
            <p>From humble beginnings, we quickly discovered that the key to growth wasn't just about numbers—it was about creating authentic connections, understanding the intricacies of each business, and offering customized strategies that drive results.</p>
            <p>Today, we are proud to have evolved into a trusted consultancy with a reputation for helping businesses unlock their potential, solve their most pressing challenges, and achieve their goals. Our journey is ongoing, but our mission remains the same: to be the guiding force behind your business's success. Let's continue this journey together. The best is yet to come.</p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-pad" style={{ background: "#ffffff" }}>
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 stagger">
            {team.map((m) => (
              <button key={m.name} onClick={() => setBio(m)} className="team-card text-center bg-white rounded-xl p-5 shadow-card transition-all animate-fade-up w-full" style={{ border: "1px solid #eeeeee" }}>
                <img src={m.img} alt={m.name} className="w-20 h-20 rounded-full object-cover mx-auto mb-3" style={{ border: "2px solid #D5AF34" }} />
                <h6 className="font-bold text-[#2D2973]" style={{ fontSize: 13 }}>{m.name}</h6>
                <p className="text-[11px] text-[#606161] mt-1">{m.role}</p>
                <span className="inline-block mt-3 text-[11px] font-semibold text-[#D5AF34]">Read bio</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-pad" style={{ background: "#f7f6f2" }}>
        <div className="max-w-[1100px] mx-auto">
          <h2 className="font-bold text-[#2D2973] mb-8" style={{ fontSize: "clamp(18px,2vw,22px)", letterSpacing: "0.08em" }}>WHY CHOOSE US?</h2>
          <ul className="space-y-3 max-w-[680px]">
            {["Strict adherence to high professional performance standards.","We prioritize timely delivery to meet your needs.","We go above and beyond when circumstances demand.","Every engagement is backed by a legally binding contract with clearly defined objectives.","Our solutions are customized and priced to fit businesses of all sizes and stages."].map((item) => (
              <li key={item} className="flex items-start gap-3 text-[15px] text-[#4D4D4D] leading-[1.75]">
                <span className="text-[#D5AF34] font-bold flex-shrink-0 mt-0.5">•</span>{item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Dialog open={!!bio} onOpenChange={(o) => !o && setBio(null)}>
        <DialogContent className="max-w-lg">
          {bio && (
            <>
              <DialogTitle className="font-bold text-[#2D2973]" style={{ fontSize: 20 }}>{bio.name}</DialogTitle>
              <DialogDescription className="text-[#D5AF34] mb-4" style={{ fontSize: 13 }}>{bio.role}</DialogDescription>
              <p className="text-[14px] text-[#4D4D4D] leading-[1.8]">{bio.bio}</p>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
EOF
echo "✓ about.tsx"

# ── 7. our-services.tsx — real ContactForm at the bottom (not black div)
cat > "$REPO/src/routes/our-services.tsx" << 'EOF'
import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import hero2 from "@/assets/heroes/hero-2.jpg";

const WP = "https://swiftoraconsulting.co.ke/wp-content/uploads";

export const Route = createFileRoute("/our-services")({
  head: () => ({ meta: [
    { title: "Our Services: Comprehensive Business Solutions for Growth" },
    { name: "description", content: "Explore Swiftora Consulting's comprehensive services: Strategy, Sales, Marketing, Communication, and Research for business success." },
  ]}),
  component: ServicesPage,
});

const approachSteps = [
  { icon: `${WP}/2025/05/Our-Approach-Icons-04-1.png`, step: "Step 1", title: "Diagnostic & Discovery",        body: "Understand the client's current situation, challenges, goals, and objectives." },
  { icon: `${WP}/2025/05/Our-Approach-Icons-03-1.png`, step: "Step 2", title: "Solution Formulation",          body: "Develop custom solutions aligned with client objectives and market opportunities." },
  { icon: `${WP}/2025/05/Our-Approach-Icons-01.png`,   step: "Step 3", title: "Implementation Support",        body: "Ensure the chosen solution is executed effectively and on schedule." },
  { icon: `${WP}/2025/05/Our-Approach-Icons-02.png`,   step: "Step 4", title: "Client Partnership & Advisory", body: "Build long-term relationships through consistent support and expertise." },
];

const servicesList = [
  { title: "Sales",         body: "Our data-driven insights and custom-made strategies empower your team to maximise conversions, build lasting customer relationships, and exceed revenue targets." },
  { title: "Marketing",     body: "We ensure your business connects authentically with your audience, optimises its market positioning, and achieves measurable success." },
  { title: "Strategy",      body: "We craft actionable roadmaps that align your goals with market opportunities, ensuring sustainable growth and competitive advantage." },
  { title: "Communication", body: "We empower individuals and organisations to communicate effectively, build stronger connections, and achieve their goals with clarity and confidence." },
  { title: "Research",      body: "We deliver comprehensive research solutions designed to drive informed decision-making and strategic growth, helping businesses uncover opportunities." },
];

const targetClients = [
  { title: "For Corporates",  body: "In today's competitive market, staying ahead requires agility, innovation, and effective strategy. We help corporates overcome challenges such as stagnating growth, fragmented communication, and evolving customer demands. From refining your sales and marketing strategies to strengthening internal communication and decision-making, we'll empower your organisation to thrive in a rapidly changing world." },
  { title: "For Startups",    body: "The startup journey is exciting but often fraught with uncertainty—limited resources, market penetration hurdles, and scaling challenges. Swiftora Consulting Limited partners with startups to build solid foundations, refine go-to-market strategies, and ignite growth. With our expertise, you will have the tools to turn your vision into a sustainable and impactful business." },
  { title: "For Individuals", body: "Whether you are planning a career pivot, building your personal brand, or seeking expert insights to maximise your professional potential, we are here for you. We help individuals identify their strengths, overcome barriers and craft a clear path toward their personal and professional goals." },
];

function ServicesPage() {
  return (
    <>
      <Hero variant="inner" eyebrow="Our Services" lines={["Good Ideas", "Brought You", "Here"]} image={hero2} />

      {/* Intro */}
      <section className="section-pad" style={{ background: "#ffffff" }}>
        <div className="max-w-[860px] mx-auto text-center">
          <h2 className="font-bold text-[#2D2973] mb-4" style={{ fontSize: "clamp(22px,2.5vw,28px)" }}>Good Ideas Brought You Here</h2>
          <h2 className="font-bold text-[#2D2973] mb-8" style={{ fontSize: "clamp(22px,2.5vw,28px)" }}>Great Solutions Keep You Here</h2>
          <p className="text-[16px] text-[#4D4D4D] leading-[1.9] mb-4">The business landscape is ever-changing—markets fluctuate, technologies advance, and competitors emerge. In this dynamic environment, traditional approaches are no longer enough. That's where Swiftora Consulting Limited steps in.</p>
          <p className="text-[16px] text-[#4D4D4D] leading-[1.9]">We collaborate with businesses to navigate these complexities, delivering transformative solutions that fuel growth, spark innovation, and create lasting impact. Our expertise spans the core pillars of success: Strategy, Sales, Marketing, Communication, and Research.</p>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-pad tex-dots" style={{ background: "#f7f6f2" }}>
        <div className="max-w-[1100px] mx-auto">
          <h2 className="font-bold text-[#2D2973] text-center mb-12" style={{ fontSize: "clamp(18px,2vw,22px)", letterSpacing: "0.08em" }}>OUR APPROACH</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 stagger">
            {approachSteps.map(({ icon, step, title, body }) => (
              <div key={step} className="animate-fade-up text-center">
                <img src={icon} alt={title} style={{ width: 72, height: 72, objectFit: "contain", margin: "0 auto 16px" }} loading="lazy" onError={(e) => { e.currentTarget.style.display = "none"; }} />
                <h5 className="font-bold text-[#2D2973] mb-1" style={{ fontSize: 13 }}>{step}</h5>
                <h5 className="font-bold text-[#2D2973] mb-2" style={{ fontSize: 15 }}>{title}</h5>
                <p className="text-[13px] text-[#606161] leading-[1.7]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-pad" style={{ background: "#ffffff" }}>
        <div className="max-w-[1100px] mx-auto">
          <h2 className="font-bold text-[#2D2973] text-center mb-12" style={{ fontSize: "clamp(18px,2vw,22px)", letterSpacing: "0.08em" }}>Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
            {servicesList.map(({ title, body }) => (
              <div key={title} className="animate-fade-up rounded-lg p-8 shadow-card" style={{ background: "#f7f6f2", border: "1px solid #eeeeee" }}>
                <h4 className="font-bold text-[#2D2973] mb-3" style={{ fontSize: 18 }}>{title}</h4>
                <p className="text-[13px] text-[#4D4D4D] leading-[1.8] mb-5">{body}</p>
                <Link to="/talk-to-us" className="text-[12px] font-semibold text-[#D5AF34] uppercase tracking-[0.15em] hover:underline">Learn More</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Clients */}
      <section className="section-pad tex-dots" style={{ background: "#f7f6f2" }}>
        <div className="max-w-[1100px] mx-auto">
          <h2 className="font-bold text-[#2D2973] text-center mb-12" style={{ fontSize: "clamp(18px,2vw,22px)", letterSpacing: "0.08em" }}>Target Clients</h2>
          <div className="grid md:grid-cols-3 gap-8 stagger">
            {targetClients.map(({ title, body }) => (
              <div key={title} className="animate-fade-up rounded-lg p-8 bg-white shadow-card" style={{ border: "1px solid #eeeeee" }}>
                <h4 className="font-bold text-[#2D2973] mb-3" style={{ fontSize: 18 }}>{title}</h4>
                <p className="text-[14px] text-[#4D4D4D] leading-[1.8]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form — real ContactForm component, white background */}
      <section className="section-pad" style={{ background: "#f7f6f2" }}>
        <div className="max-w-[700px] mx-auto">
          <h2 className="font-bold text-[#2D2973] text-center mb-3" style={{ fontSize: "clamp(18px,2vw,22px)", letterSpacing: "0.08em" }}>CONTACT FORM</h2>
          <p className="text-center text-[14px] text-[#606161] mb-10">Ready to get started? Send us a message and we'll be in touch within one business day.</p>
          <div className="bg-white rounded-xl p-10 shadow-card" style={{ border: "1px solid #eeeeee" }}>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
EOF
echo "✓ our-services.tsx"

# ── 8. portfolio.tsx — featured engagements with images
cat > "$REPO/src/routes/portfolio.tsx" << 'EOF'
import { createFileRoute, Link } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { Hero } from "@/components/Hero";
import { ClientMarquee } from "@/components/ClientMarquee";
import hero3 from "@/assets/heroes/hero-3.jpg";

const WP = "https://swiftoraconsulting.co.ke/wp-content/uploads";
const WP_ARROW = `${WP}/2025/04/Home_Featured_Engagement_Arrow.png`;

export const Route = createFileRoute("/portfolio")({
  head: () => ({ meta: [
    { title: "Our Portfolio: Driving Tangible Results in Diverse Industries" },
    { name: "description", content: "See Swiftora Consulting's proven track record across diverse industries in Kenya." },
  ]}),
  component: PortfolioPage,
});

const galleryImgs = [
  `${WP}/2025/05/Portfolio-06.png`, `${WP}/2025/05/Portfolio-05.png`,
  `${WP}/2025/05/Portfolio-01.png`, `${WP}/2025/05/Portfolio-02.png`,
  `${WP}/2025/05/Portfolio-04.png`, `${WP}/2025/05/Portfolio-03.png`,
];

const engagements = [
  { image: `${WP}/2025/05/Portfolio-01.png`, titleBold: "Marketing",    titleRest: " Gated Communities in Kenya",                           category: "Real Estate",    to: "/ameer-developers" },
  { image: `${WP}/2025/05/Portfolio-06.png`, titleBold: "Transforming", titleRest: " Maternal Health Outcomes through Strategic Messaging", category: "Not for Profit", to: "/zuri-nzilani-foundation" },
];

const testimonials = [
  { name: "Paediatric Allergy Center",  body: "Helps one get a better understanding of how you can market your Institution. I personally learnt a lot about what we can do to improve and connect with patients.", rating: 5 },
  { name: "Zuri Nzilani Foundation",    body: "Swiftora Consulting Limited has been an invaluable partner in advancing our mission to improve maternal and newborn health. Their expertise in crafting strategic communication campaigns, developing insightful training reports, and preparing comprehensive concept notes has significantly enhanced our impact.", rating: 5 },
  { name: "Samambo Consortium Limited", body: "Very professional and dedicated team who passionate about supporting growth of SMEs. I highly recommend them.", rating: 5 },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} className={i < count ? "text-[#D5AF34]" : "text-[#e5e7eb]"} fill={i < count ? "#D5AF34" : "transparent"} />
      ))}
    </div>
  );
}

function PortfolioPage() {
  return (
    <>
      <Hero variant="inner" eyebrow="Portfolio" lines={["Delivering Excellence,", "Redefining", "Possibilities"]} image={hero3}
        supporting={<p>At Swiftora Consulting Limited, every project tells a story of innovation, growth, and success.</p>}
      />

      <section className="section-pad" style={{ background: "#ffffff" }}>
        <div className="max-w-[860px] mx-auto">
          <p className="text-[16px] text-[#4D4D4D] leading-[1.9] mb-4">At Swiftora Consulting Limited, every project tells a story of innovation, growth, and success. Our portfolio showcases the diverse range of solutions we have delivered for corporates, startups, and individuals across various industries.</p>
          <p className="text-[16px] text-[#4D4D4D] leading-[1.9]">From crafting game-changing strategies to driving impactful marketing campaigns and refining communication frameworks, each engagement reflects our commitment to excellence and measurable outcomes. Explore our portfolio to see how we've transformed challenges into opportunities and ideas into realities.</p>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-pad-sm tex-dots" style={{ background: "#f7f6f2" }}>
        <div className="max-w-[1100px] mx-auto">
          <h2 className="font-bold text-[#2D2973] text-center mb-10" style={{ fontSize: "clamp(18px,2vw,22px)", letterSpacing: "0.08em" }}>Portfolio Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImgs.map((src, i) => (
              <div key={i} className="rounded-lg overflow-hidden shadow-card hover-lift">
                <img src={src} alt={`Portfolio ${i + 1}`} className="w-full h-48 object-cover" loading="lazy" onError={(e) => { e.currentTarget.parentElement!.style.display = "none"; }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Engagements — with images */}
      <section style={{ background: "#0A0B14" }} className="section-pad">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="font-bold text-white text-center mb-12" style={{ fontSize: "clamp(18px,2vw,22px)", letterSpacing: "0.08em" }}>FEATURED ENGAGEMENTS</h2>
          {engagements.map((e, i) => (
            <div key={e.to} style={{ borderTop: "1px solid rgba(255,255,255,0.08)", borderBottom: i === engagements.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none", padding: "32px 0" }}>
              <div className="flex flex-col md:flex-row md:items-center gap-8">
                <div className="flex-shrink-0 rounded-lg overflow-hidden" style={{ width: 200, height: 130 }}>
                  <img src={e.image} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" onError={(ev) => { ev.currentTarget.parentElement!.style.display = "none"; }} />
                </div>
                <div className="flex-1 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <h3 className="font-bold text-white leading-[1.3]" style={{ fontSize: "clamp(20px,2.4vw,28px)" }}>
                    <strong>{e.titleBold}</strong>{e.titleRest}
                  </h3>
                  <Link to={e.to as any} className="flex items-center gap-3 flex-shrink-0 group">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#D5AF34]">{e.category}</span>
                    <img src={WP_ARROW} alt="" aria-hidden="true" style={{ width: 36, height: 36, objectFit: "contain", transition: "transform 0.2s ease" }} className="group-hover:translate-x-1" onError={(ev) => { ev.currentTarget.style.display = "none"; }} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
          <div className="text-center mt-8">
            <Link to="/featured-engagements-archives" className="text-[13px] font-semibold text-[#D5AF34] link-underline">view all Engagements</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-pad tex-dots" style={{ background: "#f7f6f2" }}>
        <div className="max-w-[1100px] mx-auto">
          <h2 className="font-bold text-[#2D2973] text-center mb-12" style={{ fontSize: "clamp(18px,2vw,22px)", letterSpacing: "0.08em" }}>Client testimonials</h2>
          <div className="grid md:grid-cols-3 gap-6 stagger">
            {testimonials.map((t) => (
              <div key={t.name} className="animate-fade-up bg-white rounded-lg p-8 shadow-card" style={{ border: "1px solid #eeeeee" }}>
                <Stars count={t.rating} />
                <p className="mt-4 text-[14px] text-[#4D4D4D] leading-[1.8] italic">"{t.body}"</p>
                <div className="mt-4 font-bold text-[#2D2973]" style={{ fontSize: 13 }}>— {t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClientMarquee />
    </>
  );
}
EOF
echo "✓ portfolio.tsx"

# ── 9. talk-to-us.tsx — real contact form
cat > "$REPO/src/routes/talk-to-us.tsx" << 'EOF'
import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import hero1 from "@/assets/heroes/hero-1.jpg";

export const Route = createFileRoute("/talk-to-us")({
  head: () => ({ meta: [
    { title: "Talk to Us: Let's Collaborate for Your Business Success" },
    { name: "description", content: "Connect with Swiftora Consulting to discuss how we can support your business objectives and growth." },
  ]}),
  component: TalkPage,
});

const onboardingSteps = [
  { n: "Step 1", t: "Initial Consultation",     d: "After you reach out, we'll schedule a free consultation to understand your business, goals, and challenges." },
  { n: "Step 2", t: "Needs Assessment",         d: "We'll dive deeper into your specific needs and pain points, ensuring we fully grasp the scope of your requirements." },
  { n: "Step 3", t: "Tailored Proposal",        d: "Based on our consultation, we'll craft a customised proposal outlining our recommended solutions, timelines, and costs." },
  { n: "Step 4", t: "Onboarding Kickoff",       d: "Once you approve the proposal, we'll formalise the engagement and initiate the onboarding process with a detailed project plan." },
  { n: "Step 5", t: "Collaborative Execution",  d: "Our team will work closely with you to implement the agreed-upon strategies, keeping you informed every step of the way." },
  { n: "Step 6", t: "Ongoing Support",          d: "Our commitment doesn't end with project delivery. We provide ongoing support to help you sustain and build on the results achieved." },
];

function TalkPage() {
  return (
    <>
      <Hero variant="inner" eyebrow="Talk to Us" lines={["Reach Out Today,", "Achieve More", "Tomorrow."]} image={hero1}
        supporting={<p>Ready for transformation? At Swiftora Consulting Limited, we are here to listen, collaborate, and deliver solutions that drive results. Let's shape your success story together—reach out today!</p>}
      />

      <section id="contact-form" className="section-pad" style={{ background: "#f7f6f2", scrollMarginTop: 80 }}>
        <div className="max-w-[1100px] mx-auto grid lg:grid-cols-2 gap-12">

          {/* Contact details */}
          <div className="space-y-8">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D5AF34] mb-2">Mobile:</div>
              <a href="tel:+254729698380" className="flex items-center gap-3 text-[15px] text-[#2D2973] font-bold hover:text-[#D5AF34] transition-colors">
                <Phone size={16} className="text-[#D5AF34]" /> +254 729 698 380
              </a>
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D5AF34] mb-2">Email</div>
              <a href="mailto:hello@swiftoraconsulting.co.ke" className="flex items-center gap-3 text-[15px] text-[#2D2973] font-bold hover:text-[#D5AF34] transition-colors break-all">
                <Mail size={16} className="text-[#D5AF34] flex-shrink-0" /> hello@swiftoraconsulting.co.ke
              </a>
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D5AF34] mb-2">Address:</div>
              <div className="flex items-start gap-3 text-[15px] text-[#4D4D4D] leading-[1.8]">
                <MapPin size={16} className="text-[#D5AF34] flex-shrink-0 mt-1" />
                <div>Applewood Adams,<br />Odyssey Workspace, 10th Flr,<br />Suite 1011, Ngong Road,<br />Kilimani, Nairobi, Kenya</div>
              </div>
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D5AF34] mb-2">Business Hours:</div>
              <div className="rounded-xl p-6" style={{ background: "#0A0B14" }}>
                <div className="hours-row"><span className="hours-label">Monday–Friday</span><span className="hours-value">9 am to 5 pm</span></div>
                <div className="hours-row" style={{ borderBottom: "none" }}><span className="hours-label">Weekends</span><span className="hours-value">Closed.</span></div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-card" style={{ border: "1px solid rgba(213,175,52,0.35)" }}>
              <iframe title="Swiftora Consulting — Kilimani, Nairobi" src="https://maps.google.com/maps?q=Apple%20wood%20Adams&t=m&z=10&output=embed&iwloc=near" width="100%" height="260" style={{ border: 0, display: "block" }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-white rounded-xl p-10 shadow-card" style={{ border: "1px solid #eeeeee" }}>
            <h2 className="font-bold text-[#2D2973] mb-2" style={{ fontSize: "clamp(18px,2vw,22px)", letterSpacing: "0.08em" }}>CONTACT FORM</h2>
            <p className="text-[14px] text-[#6b7280] mb-8">We typically respond within one business day.</p>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Client Onboarding Process */}
      <section className="section-pad tex-dots" style={{ background: "#f7f6f2" }}>
        <div className="max-w-[1100px] mx-auto">
          <h2 className="font-bold text-[#2D2973] text-center mb-4" style={{ fontSize: "clamp(18px,2vw,22px)", letterSpacing: "0.08em" }}>CLIENT ONBOARDING PROCESS</h2>
          <p className="text-center text-[15px] text-[#4D4D4D] leading-[1.8] max-w-[680px] mx-auto mb-12">We are excited to partner with you on your journey to growth and success. Our streamlined onboarding process ensures we understand your needs from the very start.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
            {onboardingSteps.map((s, i) => (
              <div key={i} className="animate-fade-up rounded-xl p-8 bg-white shadow-card" style={{ border: "1px solid #eeeeee", borderTop: "3px solid #D5AF34" }}>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D5AF34] mb-2">{s.n}</div>
                <h5 className="font-bold text-[#2D2973] mb-3" style={{ fontSize: 16 }}>{s.t}</h5>
                <p className="text-[13px] text-[#606161] leading-[1.8]">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
EOF
echo "✓ talk-to-us.tsx"

echo ""
echo "================================================"
echo "ALL 9 FILES PATCHED SUCCESSFULLY"
echo "================================================"
echo ""
echo "Now run:  bun run dev"
echo "Open:     http://localhost:3000"
echo "Deploy:   bun run build && npx wrangler deploy"
SCRIPTEOF
echo "Script ready"
Output

Script ready