import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export function FloatingActions() {
  const [visible, setVisible] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href="https://wa.me/254729698380"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="fixed z-30 flex items-center bg-[#25D366] text-white rounded-full shadow-lg animate-spring-in transition-all duration-300"
        style={{
          bottom: "max(env(safe-area-inset-bottom, 16px), 16px)",
          right: 16,
          height: 52,
          paddingLeft: hover ? 18 : 0,
          paddingRight: 0,
          width: hover ? "auto" : 52,
          justifyContent: hover ? "flex-start" : "center",
          boxShadow: "0 8px 24px rgba(37,211,102,0.35)",
        }}
      >
        {hover && <span className="text-[13px] font-medium whitespace-nowrap mr-3 animate-fade-in">Chat with us</span>}
        <span className="w-[52px] h-[52px] rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </span>
      </a>

      <button
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed z-30 w-10 h-10 rounded-full flex items-center justify-center transition-all"
        style={{
          bottom: 80,
          right: 16,
          background: "rgba(11,13,23,0.85)",
          border: "1px solid rgba(213,175,52,0.3)",
          color: "#D5AF34",
          opacity: visible ? 1 : 0,
          pointerEvents: visible ? "auto" : "none",
          transform: visible ? "translateY(0)" : "translateY(10px)",
        }}
      >
        <ChevronUp size={18} />
      </button>
    </>
  );
}
