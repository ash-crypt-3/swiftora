const WP = "https://swiftoraconsulting.co.ke/wp-content/uploads/2025/05";
const logos = [
  `${WP}/Home_Clientelle-10.png`, `${WP}/Home_Clientelle-09.png`,
  `${WP}/Home_Clientelle-01.png`, `${WP}/Home_Clientelle-02.png`,
  `${WP}/Home_Clientelle-03.png`, `${WP}/Home_Clientelle-04.png`,
  `${WP}/Home_Clientelle-05.png`, `${WP}/Home_Clientelle-06.png`,
  `${WP}/Home_Clientelle-07.png`, `${WP}/Home_Clientelle-08.png`,
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