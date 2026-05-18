import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Mail, Phone, X } from "lucide-react";
import navbarLogo from "@/assets/branding/navbar-logo.png";
import footerBird from "@/assets/branding/footer-bird.png";
import { SwiftMark } from "./Logo";

const WP_SOCIAL = "https://swiftoraconsulting.co.ke/wp-content/uploads/2025/02";
const WP_LOGO = "https://swiftoraconsulting.co.ke/wp-content/uploads/2025/02/Swiftora-Standard-Logo-png-File-02-1536x1012-1.png";

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
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
    </div>
  );
}

export function Nav() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const lnk = "text-[13px] font-medium text-[#2D2973] hover:text-[#D5AF34] transition-colors";
  const pipe = <span className="text-[#cccccc] select-none mx-0.5">|</span>;

  return (
    <>
      <TopBar />
      <header
        className="sticky top-0 z-40 transition-shadow duration-200"
        style={{
          background: "#FFFFFF",
          borderBottom: "1px solid rgba(204,204,204,0.6)",
          boxShadow: scrolled ? "0 2px 20px rgba(11,13,23,0.10)" : "0 1px 0 rgba(11,13,23,0.04)",
        }}
      >
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
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[540px] bg-white rounded-md p-6 grid grid-cols-2 gap-6 animate-fade-in"
                  style={{ boxShadow: "0 12px 40px rgba(11,13,23,0.15)", border: "1px solid rgba(204,204,204,0.4)" }}
                >
                  <div className="pr-6 border-r border-[#D5AF34]/30">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D5AF34] mb-3">Flagship Solutions</div>
                    {flagshipLinks.map((l) => (
                      <Link key={l.to} to={l.to} className="block text-[13px] text-[#4D4D4D] hover:text-[#2D2973] py-1">{l.label}</Link>
                    ))}
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D5AF34] mb-3">Advisory Services</div>
                    {advisoryLinks.map((l) => (
                      <Link key={l.to} to={l.to} className="block text-[13px] text-[#4D4D4D] hover:text-[#2D2973] py-1">{l.label}</Link>
                    ))}
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

export function Footer() {
  const socialIcons = [
    { img: `${WP_SOCIAL}/Footer_Socio_Icons-01A.png`, href: "https://www.facebook.com/profile.php?id=61573079392370", label: "Facebook" },
    { img: `${WP_SOCIAL}/Footer_Socio_Icons-02A.png`, href: "https://www.instagram.com/swiftoraconsultingke/", label: "Instagram" },
    { img: `${WP_SOCIAL}/Footer_Socio_Icons-03A.png`, href: "https://x.com/SwiftoraConsult", label: "X" },
    { img: `${WP_SOCIAL}/Footer_Socio_Icons-04A.png`, href: "https://www.linkedin.com/company/swiftora-consulting-limited/", label: "LinkedIn" },
    { img: `${WP_SOCIAL}/Footer_Socio_Icons-05A.png`, href: "https://www.youtube.com/channel/UCOr0HcoblOkDofA7vHxrbDA", label: "YouTube" },
  ];

  return (
    <footer>
      {/* ── Dark navy main footer ── */}
      <div style={{ background: "#2D2973", position: "relative", overflow: "hidden" }}>

        {/* 4-column content grid */}
        <div className="relative px-6 md:px-10 pt-14 pb-0" style={{ zIndex: 1 }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

            {/* Col 1: LET'S DO GREAT THINGS + logo */}
            <div>
              <h4 style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: "#D5AF34", marginBottom: 20 }}>
                LET'S DO GREAT THINGS
              </h4>
              {/* Logo — sized to match WP: wide landscape, clearly readable */}
              <img
                src={WP_LOGO}
                alt="Swiftora Consulting Limited"
                style={{
                  width: "100%",
                  maxWidth: 200,
                  height: "auto",
                  filter: "brightness(0) invert(1)",
                  opacity: 0.95,
                  display: "block",
                  marginBottom: 12,
                }}
                onError={(e) => {
                  e.currentTarget.src = navbarLogo;
                  e.currentTarget.style.maxWidth = "160px";
                }}
              />
              <p style={{ fontSize: 13, color: "#A19E9E", fontStyle: "italic" }}></p>
            </div>

            {/* Col 2: QUICK ACCESS */}
            <div>
              <h4 style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: "#D5AF34", marginBottom: 20 }}>
                QUICK ACCESS
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { to: "/", label: "Home" },
                  { to: "/about", label: "About Us" },
                  { to: "/our-services", label: "Practice Areas" },
                  { to: "/portfolio", label: "Portfolio" },
                  { to: "/think-pieces", label: "Insights" },
                ].map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to as any}
                      style={{ fontSize: 13, color: "#A19E9E", textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={(e) => e.currentTarget.style.color = "#D5AF34"}
                      onMouseLeave={(e) => e.currentTarget.style.color = "#A19E9E"}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: OFFICE */}
            <div>
              <h4 style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: "#D5AF34", marginBottom: 20 }}>
                OFFICE
              </h4>
              <p style={{ fontSize: 13, color: "#A19E9E", lineHeight: 2.1 }}>
                Applewood Adams,<br />
                Odyssey Workspace,<br />
                10th Floor, Suite 1011,<br />
                Ngong Road, Kilimani,<br />
                Nairobi, Kenya
              </p>
            </div>

            {/* Col 4: CONNECT WITH US + social icons */}
            <div>
              <h4 style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: "#D5AF34", marginBottom: 20 }}>
                CONNECT WITH US
              </h4>
              <a
                href="tel:+254729698380"
                style={{ display: "block", fontSize: 13, color: "#A19E9E", textDecoration: "none", marginBottom: 6, transition: "color 0.2s" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "#D5AF34"}
                onMouseLeave={(e) => e.currentTarget.style.color = "#A19E9E"}
              >
                +254 729 698 380
              </a>
              <a
                href="mailto:hello@swiftoraconsulting.co.ke"
                style={{ display: "block", fontSize: 13, color: "#A19E9E", textDecoration: "none", wordBreak: "break-all", marginBottom: 20, transition: "color 0.2s" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "#D5AF34"}
                onMouseLeave={(e) => e.currentTarget.style.color = "#A19E9E"}
              >
                hello@swiftoraconsulting.co.ke
              </a>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {socialIcons.map(({ img, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    style={{ opacity: 1, transition: "opacity 0.2s" }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = "0.75"}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
                  >
                    <img
                      src={img}
                      alt={label}
                      style={{ width: 36, height: 36, objectFit: "contain" }}
                      onError={(e) => { e.currentTarget.parentElement!.style.display = "none"; }}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Practice areas row */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 24 }}>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
              {["STRATEGY", "SALES", "MARKETING", "COMMUNICATION", "RESEARCH"].map((p, i, arr) => (
                <span key={p} style={{ display: "flex", alignItems: "center" }}>
                  <Link
                    to="/our-services"
                    style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", color: "#FFFFFF", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={(e) => e.currentTarget.style.color = "#D5AF34"}
                    onMouseLeave={(e) => e.currentTarget.style.color = "#FFFFFF"}
                  >
                    {p}
                  </Link>
                  {i < arr.length - 1 && (
                    <span style={{ margin: "0 12px", color: "rgba(255,255,255,0.35)" }}>|</span>
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* " + bird — bottom-right of navy section, matching WP */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: 16,
              paddingTop: 20,
              paddingBottom: 24,
            }}
          >
            <span
              style={{
                fontSize: 15,
                fontStyle: "italic",
                color: "rgba(255,255,255,0.70)",
                letterSpacing: "0.02em",
              }}
            >
              
            </span>
            <img
              src={footerBird}
              alt=""
              aria-hidden="true"
              style={{
                height: 64,
                width: "auto",
                opacity: 1,
                display: "block",
                flexShrink: 0,
              }}
            />
          </div>
        </div>
      </div>

      {/* ── White bottom bar ── */}
      <div style={{ background: "#FFFFFF", padding: "14px 40px" }}>
        <div
          style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 6 }}
        >
          <span style={{ fontSize: 11, color: "#6b7280" }}>
            © Swiftora Consulting Limited 2026
          </span>
          <span style={{ fontSize: 11, color: "#6b7280" }}>
            Designed By WayoInk | Developed By endieGro
          </span>
        </div>
      </div>
    </footer>
  );
}