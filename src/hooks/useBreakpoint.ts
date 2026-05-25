import * as React from "react";

export function useBreakpoint() {
  const [w, setW] = React.useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  React.useEffect(() => {
    const onChange = () => setW(window.innerWidth);
    const mql = window.matchMedia("(max-width: 1023px)");
    mql.addEventListener("change", onChange);
    setW(window.innerWidth);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return {
    isMobile: w < 768,
    isTablet: w >= 768 && w < 1024,
    isDesktop: w >= 1024,
  };
}