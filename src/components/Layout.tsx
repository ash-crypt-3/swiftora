import { useState, useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { Mail, Phone, X, ChevronDown } from "lucide-react";
import navbarLogo from "@/assets/branding/navbar-logo.png";
import footerLogo from "@/assets/branding/Swiftora Standard Logo [png File]-02.png";
import footerWebImg from "@/assets/branding/Swiftora-web-footer.png";
import { SwiftMark } from "./Logo";

const WP_SOCIAL = "https://swiftoraconsulting.co.ke/wp-content/uploads/2025/02";

export function TopBar() {
  return (
    <div
      style={{ background: "#0A0B14" }}
      className="hidden md:flex items-center justify-between text-[11px] text-[#A19E9E] px-10 py-1.5"
    >
      <div className="flex items-center gap-4">
        <a
          href="mailto:hello@swiftoraconsulting.co.ke"
          className="flex items-center gap-1.5 hover:text-[#D5AF34] transition-colors"
        >
          <Mail size={11} /> Email Us: hello@swiftoraconsulting.co.ke
        </a>
        <span className="text-white/20">|</span>
        <a
          href="tel:+254729698380"
          className="flex items-center gap-1.5 hover:text-[#D5AF34] transition-colors"
        >
          <Phone size={11} /> Call Us: 0729 698 380
        </a>
      </div>
      <a
        href="https://wa.me/254729698380"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="hover:text-[#D5AF34] transition-colors"
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
    </div>
  );
}

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setSolutionsOpen(false);
      }
    };
    if (solutionsOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [solutionsOpen]);

  const lnk: React.CSSProperties = {
    fontSize: 12,
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    color: "#2D2973",
    textDecoration: "none",
    padding: "4px 0",
    transition: "color 0.2s",
    whiteSpace: "nowrap" as const,
  };

  const activeLnk: React.CSSProperties = {
    ...lnk,
    color: "#D5AF34",
    borderBottom: "2px solid #D5AF34",
  };

  const pipe = (
    <span style={{ color: "#cccccc", userSelect: "none", margin: "0 10px", fontWeight: 400 }}>
      |
    </span>
  );

  return (
    <>
      <TopBar />
      <header
        className="sticky top-0 z-40 transition-shadow duration-200"
        style={{
          background: "#FFFFFF",
          borderBottom: "1px solid rgba(204,204,204,0.5)",
          boxShadow: scrolled
            ? "0 2px 20px rgba(11,13,23,0.10)"
            : "0 1px 0 rgba(11,13,23,0.04)",
        }}
      >
        <div className="flex items-center justify-between px-6 md:px-10" style={{ minHeight: 72 }}>
          <Link to="/" aria-label="Swiftora Consulting Limited">
            <img src={navbarLogo} alt="Swiftora Consulting Limited" style={{ height: 58, width: "auto" }} />
          </Link>

          <nav className="hidden lg:flex items-center" aria-label="Main navigation">
            <Link to="/" activeOptions={{ exact: true }} style={lnk} activeProps={{ style: activeLnk }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#D5AF34"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "#2D2973"; }}>
              Home
            </Link>
            {pipe}
            <Link to="/about" style={lnk} activeProps={{ style: activeLnk }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#D5AF34")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#2D2973")}>
              About Us
            </Link>
            {pipe}
            <Link to="/our-services" style={lnk} activeProps={{ style: activeLnk }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#D5AF34")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#2D2973")}>
              Our Services
            </Link>
            {pipe}
            <div
              ref={dropdownRef}
              style={{ position: "relative" }}
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button
                style={{ ...lnk, background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 4 }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#D5AF34")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#2D2973")}
              >
                Our Solutions
                <ChevronDown size={12} style={{ transition: "transform 0.2s", transform: solutionsOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
              </button>
              {solutionsOpen && (
                <div style={{ position: "absolute", top: "100%", left: 0, marginTop: 8, background: "#ffffff", border: "1px solid #e5e7eb", borderRadius: 4, boxShadow: "0 4px 12px rgba(0,0,0,0.1)", minWidth: 200, zIndex: 50 }}>
                  <Link to="/flagship-solutions"
                    style={{ display: "block", padding: "10px 16px", fontSize: 12, fontWeight: 600, color: "#2D2973", textDecoration: "none", textTransform: "uppercase", letterSpacing: "0.04em", borderBottom: "1px solid #f3f4f6", transition: "all 0.2s" }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "#f9fafb"; e.currentTarget.style.color = "#D5AF34"; e.currentTarget.style.paddingLeft = "20px"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "#ffffff"; e.currentTarget.style.color = "#2D2973"; e.currentTarget.style.paddingLeft = "16px"; }}
                    onClick={() => setSolutionsOpen(false)}>
                    Flagship Solutions
                  </Link>
                  <Link to="/advisory-services"
                    style={{ display: "block", padding: "10px 16px", fontSize: 12, fontWeight: 600, color: "#2D2973", textDecoration: "none", textTransform: "uppercase", letterSpacing: "0.04em", transition: "all 0.2s" }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "#f9fafb"; e.currentTarget.style.color = "#D5AF34"; e.currentTarget.style.paddingLeft = "20px"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "#ffffff"; e.currentTarget.style.color = "#2D2973"; e.currentTarget.style.paddingLeft = "16px"; }}
                    onClick={() => setSolutionsOpen(false)}>
                    Advisory Services
                  </Link>
                </div>
              )}
            </div>
            {pipe}
            <Link to="/portfolio" style={lnk} activeProps={{ style: activeLnk }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#D5AF34")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#2D2973")}>
              Portfolio
            </Link>
            {pipe}
            <Link to="/think-pieces" style={lnk} activeProps={{ style: activeLnk }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#D5AF34")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#2D2973")}>
              Think Pieces
            </Link>
            {pipe}
            <Link to="/talk-to-us" style={lnk} activeProps={{ style: activeLnk }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#D5AF34")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#2D2973")}>
              Talk to Us
            </Link>
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
            <button onClick={() => setOpen(false)} className="text-[#D5AF34] p-2">
              <X size={22} />
            </button>
          </div>
          <nav className="px-6 py-8 space-y-6">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/our-services", label: "Our Services" },
              { to: "/flagship-solutions", label: "Flagship Solutions" },
              { to: "/advisory-services", label: "Advisory Services" },
              { to: "/portfolio", label: "Portfolio" },
              { to: "/think-pieces", label: "Think Pieces" },
              { to: "/talk-to-us", label: "Talk to Us" },
            ].map((l) => (
              <Link key={l.to} to={l.to as any} onClick={() => setOpen(false)}
                style={{ display: "block", fontSize: 20, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "#ffffff", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#D5AF34")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#ffffff")}>
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="px-6 pb-10 mt-6 space-y-3">
            <a href="mailto:hello@swiftoraconsulting.co.ke" className="flex items-center gap-2 text-[13px] text-[#A19E9E] hover:text-[#D5AF34]">
              <Mail size={13} /> hello@swiftoraconsulting.co.ke
            </a>
            <a href="tel:+254729698380" className="flex items-center gap-2 text-[13px] text-[#A19E9E] hover:text-[#D5AF34]">
              <Phone size={13} /> 0729 698 380
            </a>
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
      {/* Kill floating WhatsApp plugin widget — targets all common WP WhatsApp plugins */}
      <style>{`
        /* WP WhatsApp Chat by NinjaTeam & similar */
        #wpwc-chat-box-container,
        .wpwc-chat,
        /* WhatsApp Chat WordPress plugin */
        .wpchat,
        .wpchat-btn,
        /* Click to Chat */
        #ht-ctc-chat,
        .ht-ctc-chat,
        /* WhatsApp Button by Chaty */
        .chaty-channel,
        .chaty-widget,
        /* Float menu / Social floating */
        .float-menu,
        .floating-wpp,
        .floating-wpp-button,
        /* Generic fixed-position WA links */
        a[href*="wa.me"][style*="fixed"],
        a[href*="whatsapp"][style*="fixed"],
        div[style*="position: fixed"][style*="z-index: 9"],
        div[style*="position:fixed"][style*="z-index:9"],
        /* Chaty */
        #chaty-widget,
        /* WP Social Chat */
        .wp-social-chat {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
          pointer-events: none !important;
        }
      `}</style>
      <div style={{ background: "#2D2973", position: "relative", overflow: "hidden" }}>
        <div className="relative px-6 md:px-10 pt-14 pb-0" style={{ zIndex: 1 }}>

          {/* ── 4-COLUMN GRID ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

            {/* Col 1 — Logo centred under heading */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <h4 style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: "#D5AF34", marginBottom: 24, textAlign: "center" }}>
                LET'S DO GREAT THINGS
              </h4>
              <img
                src={footerLogo}
                alt="Swiftora Consulting Limited"
                style={{ width: 270, height: "auto", display: "block", objectFit: "contain" }}
              />
            </div>

            {/* Col 2 — Quick Access */}
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
                    <Link to={l.to as any}
                      style={{ fontSize: 13, color: "#ffffff", textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#D5AF34")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#ffffff")}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 — Office */}
            <div>
              <h4 style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: "#D5AF34", marginBottom: 20 }}>
                OFFICE
              </h4>
              <p style={{ fontSize: 13, color: "#ffffff", lineHeight: 2.1 }}>
                Applewood Adams,<br />
                Odyssey Workspace,<br />
                10th Floor, Suite 1011,<br />
                Ngong Road, Kilimani,<br />
                Nairobi, Kenya
              </p>
            </div>

            {/* Col 4 — Connect */}
            <div>
              <h4 style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: "#D5AF34", marginBottom: 20 }}>
                CONNECT WITH US
              </h4>
              <a href="tel:+254729698380"
                style={{ display: "block", fontSize: 13, color: "#ffffff", textDecoration: "none", marginBottom: 6, transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#D5AF34")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#ffffff")}>
                +254 729 698 380
              </a>
              <a href="mailto:hello@swiftoraconsulting.co.ke"
                style={{ display: "block", fontSize: 13, color: "#ffffff", textDecoration: "none", wordBreak: "break-all", marginBottom: 20, transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#D5AF34")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#ffffff")}>
                hello@swiftoraconsulting.co.ke
              </a>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {socialIcons.map(({ img, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                    style={{ opacity: 1, transition: "opacity 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.75")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}>
                    <img src={img} alt={label} style={{ width: 36, height: 36, objectFit: "contain" }}
                      onError={(e) => { e.currentTarget.parentElement!.style.display = "none"; }} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── SERVICES ROW + WEB FOOTER IMAGE on same line ── */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 20, paddingBottom: 20, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 0 }}>
            {/* Services pipe links — left */}
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
              {["STRATEGY", "SALES", "MARKETING", "COMMUNICATION", "RESEARCH"].map((p, i, arr) => (
                <span key={p} style={{ display: "flex", alignItems: "center" }}>
                  <Link to="/our-services"
                    style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", color: "#FFFFFF", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#D5AF34")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#FFFFFF")}>
                    {p}
                  </Link>
                  {i < arr.length - 1 && (
                    <span style={{ margin: "0 12px", color: "rgba(255,255,255,0.35)" }}>|</span>
                  )}
                </span>
              ))}
            </div>
            {/* Web footer image — right, same line */}
            <img
              src={footerWebImg}
              alt="get ahead for good"
              style={{ height: 56, width: "auto", display: "block", flexShrink: 0, marginBottom: -4 }}
            />
          </div>

        </div>
      </div>

      {/* ── COPYRIGHT BAR ── */}
      <div style={{ background: "#FFFFFF", padding: "14px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 6 }}>
          <span style={{ fontSize: 11, color: "#6b7280" }}>© Swiftora Consulting Limited 2026</span>
          <span style={{ fontSize: 11, color: "#6b7280" }}>Designed By WayoInk | Developed By endieGro</span>
        </div>
      </div>
    </footer>
  );
}