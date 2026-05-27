const WP = "https://swiftoraconsulting.co.ke/wp-content/uploads/2025/05";

const logos = [
  "/clients/Herencia.jpeg",
  "/clients/Lavivo.jpeg",
  "/clients/WhatsApp-Client.jpeg",
  `${WP}/Home_Clientelle-10.png`,
  `${WP}/Home_Clientelle-09.png`,
  `${WP}/Home_Clientelle-01.png`,
  `${WP}/Home_Clientelle-02.png`,
  `${WP}/Home_Clientelle-03.png`,
  `${WP}/Home_Clientelle-04.png`,
  `${WP}/Home_Clientelle-05.png`,
  `${WP}/Home_Clientelle-06.png`,
  `${WP}/Home_Clientelle-07.png`,
  `${WP}/Home_Clientelle-08.png`,
];

export function ClientMarquee() {
  const doubled = [...logos, ...logos];
  return (
    <section className="py-14" style={{ background: "#ffffff" }} aria-label="Our clients">
      <div className="text-center mb-10">
        <h2 className="font-bold text-[#2D2973]" style={{ fontSize: "clamp(18px,2vw,22px)", letterSpacing: "0.08em" }}>
          Our clients
        </h2>
      </div>
      <div
        style={{
          overflow: "hidden",
          width: "100%",
          maskImage: "linear-gradient(90deg,transparent,black 12%,black 88%,transparent)",
          WebkitMaskImage: "linear-gradient(90deg,transparent,black 12%,black 88%,transparent)",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "max-content",
            willChange: "transform",
            animation: "swiftora-marquee 36s linear infinite",
            gap: "48px",
          }}
        >
          {doubled.map((src, i) => (
            <div key={i} style={{ flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", width: 140, height: 72 }}>
              <img src={src} alt="" loading="lazy" style={{ maxHeight: 56, maxWidth: 130, objectFit: "contain" }} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes swiftora-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}

export default ClientMarquee;