import client01 from "@/assets/clients/Home_Clientelle-01.png";
import client02 from "@/assets/clients/Home_Clientelle-02.png";
import client03 from "@/assets/clients/Home_Clientelle-03.png";
import client04 from "@/assets/clients/Home_Clientelle-04.png";
import client05 from "@/assets/clients/Home_Clientelle-05.png";
import client06 from "@/assets/clients/Home_Clientelle-06.png";
import client07 from "@/assets/clients/Home_Clientelle-07.png";
import client08 from "@/assets/clients/Home_Clientelle-08.png";
import client09 from "@/assets/clients/Home_Clientelle-09.png";
import client10 from "@/assets/clients/Home_Clientelle-10.png";

const logos = [
  client01, client02, client03, client04, client05,
  client06, client07, client08, client09, client10
];

export function ClientMarquee() {
  const doubled = [...logos, ...logos];
  return (
    <section className="py-12 bg-white" aria-label="Our clients">
      <div className="text-center mb-8">
        <div className="eyebrow">Our Clients</div>
      </div>
      <div
        className="overflow-hidden"
        style={{
          maskImage: "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)",
          WebkitMaskImage: "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)",
        }}
      >
        <div className="flex gap-8 animate-marquee" style={{ width: "max-content" }}>
          {doubled.map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center px-8"
              style={{
                background: "#f0eff9",
                borderRadius: 6,
                height: 48,
                minWidth: 140,
              }}
            >
              <img
                src={logo}
                alt={`Client ${(i % 10) + 1}`}
                style={{ maxHeight: 32, maxWidth: 120, objectFit: "contain" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClientMarquee;