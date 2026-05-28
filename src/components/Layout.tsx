import { useState, useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import navbarLogo from "@/assets/branding/navbar-logo.png";
import footerLogo from "@/assets/branding/Swiftora Standard Logo [png File]-02.png";
import footerWebImg from "@/assets/branding/Swiftora-web-footer.png";

const WP_SOCIAL = "https://swiftoraconsulting.co.ke/wp-content/uploads/2025/02";
const F: React.CSSProperties = { fontFamily: '"Clan Pro", sans-serif' };

/* ─────────────────────────────────────────────
   FOOTER LOGO POSITION — adjust these two values
   to move the logo exactly where you want it.

   LOGO_OFFSET_LEFT  — positive moves LEFT (e.g. 20 = 20px left)
   LOGO_OFFSET_TOP   — positive moves UP   (e.g. 10 = 10px up)
───────────────────────────────────────────── */
const LOGO_OFFSET_LEFT = 45;   // px — increase to move logo left
const LOGO_OFFSET_TOP  = 40;   // px — increase to move logo up

/* ─────────────────────────────────────────────
   TOP BAR
───────────────────────────────────────────── */
export function TopBar() {
  return (
    <div
      style={{ background: "#0A0B14" }}
      className="hidden md:flex items-center justify-between text-[#A19E9E] px-10 py-1.5"
    >
      {/* Left — email, larger and bold */}
      <div className="flex items-center">
        <a
          href="mailto:hello@swiftoraconsulting.co.ke"
          className="flex items-center gap-2 hover:text-[#D5AF34] transition-colors"
          style={{ fontSize: 13, fontWeight: 700, fontFamily: '"Clan Pro", sans-serif' }}
        >
          <Mail size={13} /> Email Us: hello@swiftoraconsulting.co.ke
        </a>
      </div>

      {/* Right — phone + WhatsApp, larger and bold */}
      <div className="flex items-center gap-4">
        <a
          href="tel:+254729698380"
          className="flex items-center gap-2 hover:text-[#D5AF34] transition-colors"
          style={{ fontSize: 13, fontWeight: 700, fontFamily: '"Clan Pro", sans-serif' }}
        >
          <Phone size={13} /> Call Us: 0729 698 380
        </a>
        <span style={{ color: "rgba(255,255,255,0.2)" }}>|</span>
        <a
          href="https://wa.me/254729698380"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="hover:text-[#D5AF34] transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </a>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   NAV
───────────────────────────────────────────── */
export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const lnk: React.CSSProperties = {
    fontSize: 12, fontWeight: 700, textTransform: "uppercase",
    letterSpacing: "0.05em", color: "#2D2973", textDecoration: "none",
    padding: "4px 0", transition: "color 0.2s", whiteSpace: "nowrap",
  };
  const activeLnk: React.CSSProperties = {
    ...lnk, color: "#D5AF34", borderBottom: "2px solid #D5AF34",
  };
  const pipe = (
    <span style={{ color: "#cccccc", userSelect: "none", margin: "0 10px", fontWeight: 400 }}>|</span>
  );

  const navLinks = [
    { to: "/", label: "Home", exact: true },
    { to: "/about", label: "About Us" },
    { to: "/our-services", label: "Our Services" },
    { to: "/solutions", label: "Our Solutions" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/think-pieces", label: "Think Pieces" },
    { to: "/talk-to-us", label: "Talk to Us" },
  ];

  return (
    <>
      <TopBar />
      <header
        className="sticky top-0 z-40 transition-shadow duration-200"
        style={{
          background: "#FFFFFF",
          borderBottom: "1px solid rgba(204,204,204,0.5)",
          boxShadow: scrolled ? "0 2px 20px rgba(11,13,23,0.10)" : "0 1px 0 rgba(11,13,23,0.04)",
        }}
      >
        <div className="flex items-center justify-between px-4 md:px-6 lg:px-10" style={{ minHeight: 72 }}>
          <Link to="/" aria-label="Swiftora Consulting Limited">
            <img
              src={navbarLogo}
              alt="Swiftora Consulting Limited"
              style={{ height: 48, width: "auto" }}
              className="md:h-[58px]"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center" aria-label="Main navigation">
            {navLinks.map((l, i) => (
              <span key={l.to} style={{ display: "flex", alignItems: "center" }}>
                <Link
                  to={l.to as any}
                  activeOptions={l.exact ? { exact: true } : undefined}
                  style={lnk}
                  activeProps={{ style: activeLnk }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "#D5AF34"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "#2D2973"; }}
                >
                  {l.label}
                </Link>
                {i < navLinks.length - 1 && pipe}
              </span>
            ))}
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden p-2 ml-auto"
            aria-label="Open menu"
          >
            <span className="block w-6 h-0.5 bg-[#2D2973] mb-1.5" />
            <span className="block w-6 h-0.5 bg-[#2D2973] mb-1.5" />
            <span className="block w-6 h-0.5 bg-[#2D2973]" />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {open && (
        <>
          <div
            className="fixed inset-0 z-40 lg:hidden"
            style={{ background: "rgba(0,0,0,0.35)", top: 72 }}
            onClick={() => setOpen(false)}
          />
          <div
            className="fixed left-0 right-0 z-50 lg:hidden overflow-y-auto"
            style={{
              top: 72,
              background: "#ffffff",
              maxHeight: "50vh",
              boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
              borderTop: "2px solid #D5AF34",
            }}
          >
            <nav style={{ padding: "0 24px" }}>
              {navLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to as any}
                  onClick={() => setOpen(false)}
                  style={{
                    display: "block", fontSize: 14, fontWeight: 700,
                    textTransform: "uppercase", letterSpacing: "0.04em",
                    color: "#2D2973", textDecoration: "none",
                    padding: "14px 0", borderBottom: "1px solid #e5e7eb",
                  }}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
        </>
      )}
    </>
  );
}

/* ─────────────────────────────────────────────
   FOOTER
───────────────────────────────────────────── */
export function Footer() {
  const socialIcons = [
    { img: `${WP_SOCIAL}/Footer_Socio_Icons-01A.png`, href: "https://www.facebook.com/profile.php?id=61573079392370", label: "Facebook" },
    { img: `${WP_SOCIAL}/Footer_Socio_Icons-02A.png`, href: "https://www.instagram.com/swiftoraconsultingke/", label: "Instagram" },
    { img: `${WP_SOCIAL}/Footer_Socio_Icons-03A.png`, href: "https://x.com/SwiftoraConsult", label: "X" },
    { img: `${WP_SOCIAL}/Footer_Socio_Icons-04A.png`, href: "https://www.linkedin.com/company/swiftora-consulting-limited/", label: "LinkedIn" },
    { img: `${WP_SOCIAL}/Footer_Socio_Icons-05A.png`, href: "https://www.youtube.com/channel/UCOr0HcoblOkDofA7vHxrbDA", label: "YouTube" },
  ];

  const headStyle: React.CSSProperties = {
    ...F, fontSize: 11, fontWeight: 800, textTransform: "uppercase",
    letterSpacing: "0.18em", color: "#D5AF34",
    marginBottom: 8,
    marginTop: 0,
  };

  const linkStyle: React.CSSProperties = {
    ...F, fontSize: 13, fontWeight: 600, color: "#ffffff",
    textDecoration: "none", display: "block", marginBottom: 6, transition: "color 0.2s",
  };

  // Each service links to its own dedicated page
  const serviceLinks = [
    { label: "STRATEGY",      to: "/services/strategy" },
    { label: "SALES",         to: "/services/sales" },
    { label: "MARKETING",     to: "/services/marketing" },
    { label: "COMMUNICATION", to: "/services/communication" },
    { label: "RESEARCH",      to: "/services/research" },
  ];

  return (
    <footer>
      <style>{`
        #wpwc-chat-box-container,.wpwc-chat,.wpchat,.wpchat-btn,
        #ht-ctc-chat,.ht-ctc-chat,.chaty-channel,.chaty-widget,
        .float-menu,.floating-wpp,.floating-wpp-button,
        a[href*="wa.me"][style*="fixed"],a[href*="whatsapp"][style*="fixed"],
        div[style*="position: fixed"][style*="z-index: 9"],
        div[style*="position:fixed"][style*="z-index:9"],
        #chaty-widget,.wp-social-chat {
          display:none!important;visibility:hidden!important;
          opacity:0!important;pointer-events:none!important;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 0 32px;
          margin-bottom: 16px;
          align-items: start;
        }
        @media (max-width: 1200px) {
          .footer-grid { grid-template-columns: repeat(3, 1fr); gap: 28px; }
        }
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: repeat(2, 1fr); gap: 24px; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr; gap: 20px; }
        }
      `}</style>

      <div style={{ background: "#2D2973" }}>
        <div style={{ padding: "20px 40px 0", boxSizing: "border-box" }}>

          <div className="footer-grid">

            {/* Col 1 — Logo: flush left, pulled up close to heading */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
              <p style={headStyle}>LET'S DO GREAT THINGS</p>
              <img
                src={footerLogo}
                alt="Swiftora Consulting Limited"
                style={{
                  width: "100%",
                  maxWidth: "100%",
                  height: "auto",
                  display: "block",
                  objectFit: "contain",
                  objectPosition: "left center",
                  marginTop: -LOGO_OFFSET_TOP,    // negative marginTop moves image UP
                  marginLeft: -LOGO_OFFSET_LEFT,  // negative marginLeft moves image LEFT
                  position: "relative",
                }}
              />
            </div>

            {/* Col 2 — Site Map */}
            <div>
              <p style={headStyle}>SITE MAP</p>
              {[
                { to: "/",            label: "Home" },
                { to: "/about",       label: "About Us" },
                { to: "/think-pieces",label: "Insights" },
                { to: "/talk-to-us",  label: "Contact Us" },
              ].map((l) => (
                <Link
                  key={l.to}
                  to={l.to as any}
                  style={linkStyle}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#D5AF34")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#ffffff")}
                >
                  {l.label}
                </Link>
              ))}
            </div>

            {/* Col 3 — Quick Access */}
            <div>
              <p style={headStyle}>QUICK ACCESS</p>
              {[
                { to: "/flagship-solutions", label: "Flagship Solutions" },
                { to: "/advisory-services",  label: "Advisory Services" },
                { to: "/our-services",       label: "Practice Areas" },
                { to: "/portfolio",          label: "Portfolio" },
              ].map((l) => (
                <Link
                  key={l.to}
                  to={l.to as any}
                  style={linkStyle}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#D5AF34")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#ffffff")}
                >
                  {l.label}
                </Link>
              ))}
            </div>

            {/* Col 4 — Office */}
            <div>
              <p style={headStyle}>OFFICE</p>
              <p style={{ ...F, fontSize: 13, fontWeight: 600, color: "#ffffff", lineHeight: 1.9, margin: 0 }}>
                Applewood Adams,<br />
                Odyssey Workspace,<br />
                10th Floor, Suite 1011,<br />
                Ngong Road, Kilimani,<br />
                Nairobi, Kenya
              </p>
            </div>

            {/* Col 5 — Connect */}
            <div>
              <p style={headStyle}>CONNECT WITH US</p>
              <a
                href="tel:+254729698380"
                style={linkStyle}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#D5AF34")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#ffffff")}
              >
                +254 729 698 380
              </a>
              <a
                href="mailto:hello@swiftoraconsulting.co.ke"
                style={{ ...linkStyle, wordBreak: "break-all" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#D5AF34")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#ffffff")}
              >
                hello@swiftoraconsulting.co.ke
              </a>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 4 }}>
                {socialIcons.map(({ img, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    style={{ opacity: 1, transition: "opacity 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                  >
                    <img
                      src={img}
                      alt={label}
                      style={{ width: 32, height: 32, objectFit: "contain" }}
                      onError={(e) => { e.currentTarget.parentElement!.style.display = "none"; }}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* STRATEGY | SALES | … — each points to its own service page */}
          <div style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: 10,
            paddingBottom: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 8,
          }}>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
              {serviceLinks.map(({ label, to }, i, arr) => (
                <span key={to} style={{ display: "flex", alignItems: "center" }}>
                  <Link
                    to={to as any}
                    style={{
                      ...F, fontSize: 11, fontWeight: 800,
                      letterSpacing: "0.15em", color: "#FFFFFF",
                      textDecoration: "none", transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#D5AF34")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                  >
                    {label}
                  </Link>
                  {i < arr.length - 1 && (
                    <span style={{ margin: "0 12px", color: "rgba(255,255,255,0.3)" }}>|</span>
                  )}
                </span>
              ))}
            </div>
            <img
              src={footerWebImg}
              alt="get ahead for good"
              style={{ height: 40, width: "auto", flexShrink: 0, marginBottom: -4 }}
            />
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div style={{ background: "#FFFFFF", padding: "12px 40px" }}>
        <div style={{
          maxWidth: 1240, margin: "0 auto",
          display: "flex", alignItems: "center",
          justifyContent: "space-between", flexWrap: "wrap", gap: 4,
        }}>
          <span style={{ ...F, fontSize: 12, fontWeight: 600, color: "#6b7280" }}>
            © Swiftora Consulting Limited 2026
          </span>
          <span style={{ ...F, fontSize: 12, fontWeight: 600, color: "#6b7280" }}>
            Designed By WayoInk | Developed By endieGro
          </span>
        </div>
      </div>
    </footer>
  );
}