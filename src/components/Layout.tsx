import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Logo, SwiftMark } from "./Logo";
import { Menu, X, ChevronDown, Mail, Phone, Facebook, Linkedin, Twitter, Instagram } from "lucide-react";
import footerBird from "@/assets/branding/footer-bird.png";
import landscapeLogo from "@/assets/branding/Swiftora Landscape Logo [png File]-02.png";

const flagshipLinks = [
  { label: "Capital Readiness Programme™", to: "/flagship-solutions/capital-readiness" },
  { label: "Feasibility & Market Entry Suite™", to: "/flagship-solutions/feasibility-market-entry" },
  { label: "SME Growth Blueprint™", to: "/flagship-solutions/sme-growth-blueprint" },
  { label: "Revenue Acceleration Programme™", to: "/flagship-solutions/revenue-acceleration" },
  { label: "Programme Design & Advisory Suite™", to: "/flagship-solutions/programme-design" },
] as const;

const advisoryLinks = [
  { label: "Business Diagnostic™", to: "/advisory-services/business-diagnostic" },
  { label: "Consulting Clinic™", to: "/advisory-services/consulting-clinic" },
  { label: "Executive Advisory™", to: "/advisory-services/executive-advisory" },
] as const;

export function TopBar() {
  return (
    <div
      style={{ background: "#0A0B14" }}
      className="hidden md:flex items-center justify-between text-[11px] text-[#A19E9E] px-10 py-1.5"
    >
      <div className="flex items-center gap-5">
        <a href="mailto:hello@swiftoraconsulting.co.ke" className="flex items-center gap-1.5 hover:text-gold transition-colors">
          <Mail size={11} /> Email Us: hello@swiftoraconsulting.co.ke
        </a>
        <span className="text-white/20">|</span>
        <a href="tel:+254729698380" className="flex items-center gap-1.5 hover:text-gold transition-colors">
          <Phone size={11} /> Call Us: +254 729 698 380
        </a>
      </div>
      <div className="flex items-center gap-3">
        <a href="https://www.facebook.com/p/Swiftora-Consulting-Limited-61573079392370/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-gold transition-colors"><Facebook size={12} /></a>
        <a href="https://www.linkedin.com/company/swiftora-consulting-limited" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-gold transition-colors"><Linkedin size={12} /></a>
        <a href="https://x.com/SwiftoraConsult" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="hover:text-gold transition-colors"><Twitter size={12} /></a>
        <a href="https://share.google/xq1PBhwThW3E8tRrg" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-gold transition-colors"><Instagram size={12} /></a>
      </div>
    </div>
  );
}

export function Nav() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const linkBase = "text-[13px] font-medium text-[#2D2973] link-underline hover:text-[#0A0B14] transition-colors";

  return (
    <>
      <TopBar />
      <header
        className="sticky top-0 z-40"
        style={{
          background: "#FFFFFF",
          borderBottom: "1px solid rgba(204, 204, 204, 0.6)",
          boxShadow: "0 1px 0 rgba(11,13,23,0.04), 0 6px 22px rgba(11,13,23,0.05)",
        }}
      >
        <div className="flex items-center justify-between px-6 md:px-10 py-3">
          <Logo size={32} />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/" className={linkBase} activeOptions={{ exact: true }} activeProps={{ style: { color: "#D5AF34" } }}>Home</Link>
            <Link to="/about" className={linkBase} activeProps={{ style: { color: "#D5AF34" } }}>About</Link>

            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className={`${linkBase} flex items-center gap-1`}>
                Our Services <ChevronDown size={12} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              {servicesOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[520px] bg-white rounded-md p-6 grid grid-cols-2 gap-6 animate-fade-in"
                  style={{ boxShadow: "0 12px 40px rgba(11,13,23,0.15)" }}
                >
                  <div className="pr-6 border-r border-gold/30">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold mb-3">Flagship Solutions</div>
                    <ul className="space-y-2.5">
                      {flagshipLinks.map((l) => (
                        <li key={l.to}>
                          <Link to={l.to} className="text-[13px] text-[#4D4D4D] hover:text-[#2D2973] flex items-center gap-2 group">
                            <span className="text-gold opacity-0 group-hover:opacity-100 transition-opacity">·</span>
                            <span>{l.label}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold mb-3">Advisory Services</div>
                    <ul className="space-y-2.5">
                      {advisoryLinks.map((l) => (
                        <li key={l.to}>
                          <Link to={l.to} className="text-[13px] text-[#4D4D4D] hover:text-[#2D2973] flex items-center gap-2 group">
                            <span className="text-gold opacity-0 group-hover:opacity-100 transition-opacity">·</span>
                            <span>{l.label}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <Link to="/portfolio" className={linkBase} activeProps={{ style: { color: "#D5AF34" } }}>Portfolio</Link>
            <Link to="/think-pieces" className={linkBase} activeProps={{ style: { color: "#D5AF34" } }}>Think Pieces</Link>
            <Link to="/talk-to-us" className="btn-gold">Talk to Us</Link>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden flex flex-col gap-1 p-2"
            aria-label="Open menu"
          >
            <span className="block w-4 h-0.5 bg-gold" />
            <span className="block w-4 h-0.5 bg-gold" />
            <span className="block w-4 h-0.5 bg-gold" />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden tex-noise animate-fade-in" style={{ background: "#2D2973" }}>
          <div className="flex items-center justify-between px-6 py-4">
            <Logo color="light" size={28} />
            <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-gold">
              <X size={24} />
            </button>
          </div>
          <nav className="px-6 py-8 space-y-6">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
            ].map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="block text-[18px] font-display font-semibold text-white">
                {l.label}
              </Link>
            ))}

            <div>
              <button onClick={() => setMobileServicesOpen(!mobileServicesOpen)} className="flex items-center justify-between w-full text-[18px] font-display font-semibold text-white">
                Our Services <ChevronDown className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileServicesOpen && (
                <div className="mt-4 pl-4 space-y-4 border-l border-gold/30 animate-fade-in">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-gold mb-2">Flagship</div>
                    {flagshipLinks.map((l) => (
                      <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="block py-1.5 text-[14px] text-[#A19E9E] hover:text-gold">{l.label}</Link>
                    ))}
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-gold mb-2">Advisory</div>
                    {advisoryLinks.map((l) => (
                      <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="block py-1.5 text-[14px] text-[#A19E9E] hover:text-gold">{l.label}</Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {[
              { to: "/portfolio", label: "Portfolio" },
              { to: "/think-pieces", label: "Think Pieces" },
            ].map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="block text-[18px] font-display font-semibold text-white">
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="absolute bottom-8 left-6 right-6">
            <Link to="/talk-to-us" onClick={() => setOpen(false)} className="btn-gold w-full">Talk to Us</Link>
          </div>
        </div>
      )}
    </>
  );
}

export function Footer() {
  const quickLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/flagship-solutions", label: "Flagship Solutions" },
    { to: "/advisory-services", label: "Advisory Services" },
    { to: "/our-services", label: "Practice Areas" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/think-pieces", label: "Think Pieces" },
  ];

  return (
    <footer>
      {/* Pre-footer Gold CTA band with corner bird watermark */}
      <div style={{ background: "#D5AF34", position: "relative", overflow: "hidden" }} className="px-10 py-14 text-center">
        <img
          src={footerBird}
          alt=""
          aria-hidden="true"
          className="footer-bird-watermark"
        />
        <div style={{ position: "relative", zIndex: 2 }}>
          <h2 className="font-display font-bold text-[28px] md:text-[40px] text-[#0A0B14] leading-[1.2]">
            Let&apos;s do great things
          </h2>
          <p className="mt-3 text-[14px] text-[#0A0B14]/80 max-w-[520px] mx-auto leading-[1.7]">
            Partner with Swiftora to translate insight into outcomes.
          </p>
          <Link
            to="/talk-to-us"
            className="inline-flex items-center justify-center gap-2 mt-7 px-7 py-3 rounded-[4px] text-[13px] font-semibold transition-all"
            style={{ background: "#0A0B14", color: "#FFFFFF" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#2D2973"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#0A0B14"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            Talk to Us
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="tex-noise relative" style={{ background: "#2D2973" }}>
        <div className="px-6 md:px-10 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.5fr_1fr] gap-12">
            <div>
              <div className="mb-4">
                <img 
                  src={landscapeLogo} 
                  alt="Swiftora Consulting Limited" 
                  className="h-10 w-auto object-contain" 
                />
              </div>
              <p className="text-[12px] text-gold/80 italic">Get Ahead For Good</p>
              <p className="mt-4 text-[13px] text-[#A19E9E] leading-relaxed max-w-xs">
                A Kenyan business strategy firm helping founders, executives, and institutions translate insight into outcomes.
              </p>
            </div>

            <div>
              <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold mb-4">Quick Access</h4>
              <ul className="space-y-2.5">
                {quickLinks.map((l) => (
                  <li key={l.to}><Link to={l.to} className="text-[13px] text-[#A19E9E] hover:text-gold transition-colors">{l.label}</Link></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold mb-4">Office</h4>
              <p className="text-[13px] text-[#A19E9E]" style={{ lineHeight: 2 }}>
                Applewood Adams, Odyssey Workspace,<br />
                10th Floor Suite 1011, Ngong Road,<br />
                Kilimani, Nairobi, Kenya.<br />
                P.O. Box 13478-00100.
              </p>
            </div>

            <div>
              <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold mb-4">Connect With Us</h4>
              <a href="tel:+254729698380" className="block text-[13px] text-[#A19E9E] hover:text-gold transition-colors">+254 729 698 380</a>
              <a href="mailto:hello@swiftoraconsulting.co.ke" className="block text-[13px] text-[#A19E9E] hover:text-gold transition-colors break-all">hello@swiftoraconsulting.co.ke</a>
              <div className="mt-5 flex gap-2.5">
                {[
                  { Icon: Facebook, href: "https://www.facebook.com/p/Swiftora-Consulting-Limited-61573079392370/", label: "Facebook" },
                  { Icon: Linkedin, href: "https://www.linkedin.com/company/swiftora-consulting-limited", label: "LinkedIn" },
                  { Icon: Twitter, href: "https://x.com/SwiftoraConsult", label: "X (Twitter)" },
                  { Icon: Instagram, href: "https://share.google/xq1PBhwThW3E8tRrg", label: "Instagram" },
                ].map(({ Icon, href, label }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-8 h-8 rounded-full flex items-center justify-center transition-all"
                    style={{ border: "1px solid rgba(213,175,52,0.35)", color: "#D5AF34" }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "#D5AF34"; e.currentTarget.style.color = "#2D2973"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#D5AF34"; }}
                  >
                    <Icon size={14} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Brand badge — hex outline with swift bird + tagline */}
          <div className="mt-10 flex justify-end">
            <div
              className="relative inline-flex items-center gap-3 px-5 py-3"
              style={{
                clipPath:
                  "polygon(14px 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 14px 100%, 0 50%)",
                border: "1px solid rgba(213,175,52,0.45)",
                background: "rgba(255,255,255,0.02)",
              }}
            >
              <span className="font-display italic text-[13px] text-white/90">get ahead for good</span>
              <img src={footerBird} alt="" aria-hidden="true" className="w-9 h-9 object-contain" />
            </div>
          </div>
          <div className="mt-12 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 mb-5">
              {["STRATEGY", "SALES", "MARKETING", "COMMUNICATION", "RESEARCH"].map((p, i, arr) => (
                <span key={p} className="text-[10px] tracking-[0.15em] text-[#606161]">
                  {p}{i < arr.length - 1 && <span className="ml-3">·</span>}
                </span>
              ))}
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-[11px] text-[#4b5563]">
              <span>© Swiftora Consulting Limited 2026</span>
              <span>Designed and developed by endiEgro</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}