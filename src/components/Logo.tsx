import { Link } from "@tanstack/react-router";
import navbarLogo from "@/assets/branding/navbar-logo.png";

interface LogoProps {
  variant?: "full" | "mark";
  color?: "dark" | "light";
  size?: number;
  className?: string;
}

/**
 * Standalone swift mark — stylised swift derived from the brand logo.
 * Used in the footer, pre-footer CTA, and decorative accents.
 */
export function SwiftMark({ size = 28, color = "dark" }: { size?: number; color?: "dark" | "light" }) {
  const goldFill = "#D5AF34";
  const navyFill = color === "light" ? "#FFFFFF" : "#2D2973";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Swiftora swift mark"
    >
      {/* Navy upstroke */}
      <path
        d="M30 12 C 32 22, 30 32, 26 42 C 24 46, 28 48, 30 44 C 34 36, 36 24, 34 14 C 33.6 12.4, 30.4 11.4, 30 12 Z"
        fill={navyFill}
      />
      {/* Gold sweeping wing */}
      <path
        d="M14 50 C 26 42, 38 32, 50 14 C 51 12, 53 13, 52 15 C 46 28, 38 40, 30 50 C 36 48, 42 47, 48 48 C 50 48, 50 50, 48 51 C 36 54, 24 53, 14 52 Z"
        fill={goldFill}
      />
    </svg>
  );
}

/**
 * Full brand lockup — uses the official Navbar_Logo.png for the navigation,
 * and a stylised SwiftMark + wordmark in the dark mobile drawer / dark footer.
 */
export function Logo({ variant = "full", color = "dark", size = 32, className = "" }: LogoProps) {
  // For the dark mobile drawer / footer, render the swift mark + light wordmark.
  if (color === "light") {
    return (
      <Link to="/" className={`flex items-center gap-3 ${className}`}>
        <SwiftMark size={size} color="light" />
        {variant === "full" && (
          <span
            style={{
              fontFamily: "Playfair Display, serif",
              fontWeight: 700,
              fontSize: 16,
              color: "#FFFFFF",
              letterSpacing: "-0.01em",
            }}
          >
            Swiftora <span style={{ fontWeight: 400 }}>Consulting Ltd</span>
          </span>
        )}
      </Link>
    );
  }

  // Light navigation: use the official artwork.
  return (
    <Link to="/" className={`flex items-center ${className}`} aria-label="Swiftora Consulting Limited — home">
      <img
        src={navbarLogo}
        alt="Swiftora Consulting Limited — get ahead for good"
        style={{ height: size, width: "auto", display: "block" }}
      />
    </Link>
  );
}
