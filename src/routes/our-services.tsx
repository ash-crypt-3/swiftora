import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import hero2 from "@/assets/heroes/hero-2.jpg";

const WP = "https://swiftoraconsulting.co.ke/wp-content/uploads";

export const Route = createFileRoute("/our-services")({
  head: () => ({
    meta: [
      { title: "Our Services: Comprehensive Business Solutions for Growth" },
      { name: "description", content: "Explore Swiftora Consulting's comprehensive services: Strategy, Sales, Marketing, Communication, and Research." },
    ],
  }),
  component: ServicesPage,
});

const approachSteps = [
  { icon: `${WP}/2025/05/Our-Approach-Icons-04-1.png`, step: "Step 1", title: "Diagnostic & Discovery", body: "Understand the client's current situation, challenges, goals, and objectives." },
  { icon: `${WP}/2025/05/Our-Approach-Icons-03-1.png`, step: "Step 2", title: "Solution Formulation", body: "Develop custom solutions aligned with client objectives and market opportunities." },
  { icon: `${WP}/2025/05/Our-Approach-Icons-01.png`, step: "Step 3", title: "Implementation Support", body: "Ensure the chosen solution is executed effectively and on schedule." },
  { icon: `${WP}/2025/05/Our-Approach-Icons-02.png`, step: "Step 4", title: "Client Partnership & Advisory", body: "Build long-term relationships through consistent support and expertise." },
];

const servicesList = [
  { title: "Sales", body: "Our data-driven insights and custom-made strategies empower your team to maximise conversions, build lasting customer relationships, and exceed revenue targets." },
  { title: "Marketing", body: "We ensure your business connects authentically with your audience, optimises its market positioning, and achieves measurable success." },
  { title: "Strategy", body: "We craft actionable roadmaps that align your goals with market opportunities, ensuring sustainable growth and competitive advantage." },
  { title: "Communication", body: "We empower individuals and organisations to communicate effectively, build stronger connections, and achieve their goals with clarity and confidence." },
  { title: "Research", body: "We deliver comprehensive research solutions designed to drive informed decision-making and strategic growth, helping businesses uncover opportunities." },
];

const targetClients = [
  { title: "For Corporates", body: "In today's competitive market, staying ahead requires agility, innovation, and effective strategy. We help corporates overcome challenges such as stagnating growth, fragmented communication, and evolving customer demands. From refining your sales and marketing strategies to strengthening internal communication and decision-making, we'll empower your organisation to thrive in a rapidly changing world." },
  { title: "For Startups", body: "The startup journey is exciting but often fraught with uncertainty—limited resources, market penetration hurdles, and scaling challenges. Swiftora Consulting Limited partners with startups to build solid foundations, refine go-to-market strategies, and ignite growth. With our expertise, you will have the tools to turn your vision into a sustainable and impactful business." },
  { title: "For Individuals", body: "Whether you are planning a career pivot, building your personal brand, or seeking expert insights to maximise your professional potential, we are here for you. We help individuals identify their strengths, overcome barriers and craft a clear path toward their personal and professional goals." },
];

function ServicesPage() {
  return (
    <>
      <Hero variant="inner" eyebrow="Our Services" lines={["Good Ideas", "Brought You", "Here"]} image={hero2} />

      <section className="section-pad" style={{ background: "#ffffff" }}>
        <div className="max-w-[860px] mx-auto text-center">
          <h2 className="font-bold text-[#2D2973] mb-4" style={{ fontSize: "clamp(22px,2.5vw,28px)" }}>Good Ideas Brought You Here</h2>
          <h2 className="font-bold text-[#2D2973] mb-8" style={{ fontSize: "clamp(22px,2.5vw,28px)" }}>Great Solutions Keep You Here</h2>
          <p className="text-[16px] text-[#4D4D4D] leading-[1.9] mb-4">The business landscape is ever-changing—markets fluctuate, technologies advance, and competitors emerge. In this dynamic environment, traditional approaches are no longer enough. That's where Swiftora Consulting Limited steps in.</p>
          <p className="text-[16px] text-[#4D4D4D] leading-[1.9]">We collaborate with businesses to navigate these complexities, delivering transformative solutions that fuel growth, spark innovation, and create lasting impact. Our expertise spans the core pillars of success: Strategy, Sales, Marketing, Communication, and Research.</p>
        </div>
      </section>

      <section className="section-pad tex-dots" style={{ background: "#f7f6f2" }}>
        <div className="max-w-[1100px] mx-auto">
          <h2 className="font-bold text-[#2D2973] text-center mb-12" style={{ fontSize: "clamp(18px,2vw,22px)", letterSpacing: "0.08em" }}>OUR APPROACH</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 stagger">
            {approachSteps.map(({ icon, step, title, body }) => (
              <div key={step} className="animate-fade-up text-center">
                <img src={icon} alt={title} style={{ width: 72, height: 72, objectFit: "contain", margin: "0 auto 16px" }} loading="lazy" onError={(e) => { e.currentTarget.style.display = "none"; }} />
                <h5 className="font-bold text-[#D5AF34] mb-1" style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase" }}>{step}</h5>
                <h5 className="font-bold text-[#2D2973] mb-2" style={{ fontSize: 15 }}>{title}</h5>
                <p className="text-[13px] text-[#606161] leading-[1.7]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "#ffffff" }}>
        <div className="max-w-[1100px] mx-auto">
          <h2 className="font-bold text-[#2D2973] text-center mb-12" style={{ fontSize: "clamp(18px,2vw,22px)", letterSpacing: "0.08em" }}>Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
            {servicesList.map(({ title, body }) => (
              <div key={title} className="animate-fade-up rounded-lg p-8 shadow-card" style={{ background: "#f7f6f2", border: "1px solid #eeeeee" }}>
                <h4 className="font-bold text-[#2D2973] mb-3" style={{ fontSize: 18 }}>{title}</h4>
                <p className="text-[13px] text-[#4D4D4D] leading-[1.8] mb-5">{body}</p>
                <Link to="/talk-to-us" className="text-[12px] font-semibold text-[#D5AF34] uppercase tracking-[0.15em] hover:underline">Learn More</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad tex-dots" style={{ background: "#f7f6f2" }}>
        <div className="max-w-[1100px] mx-auto">
          <h2 className="font-bold text-[#2D2973] text-center mb-12" style={{ fontSize: "clamp(18px,2vw,22px)", letterSpacing: "0.08em" }}>Target Clients</h2>
          <div className="grid md:grid-cols-3 gap-8 stagger">
            {targetClients.map(({ title, body }) => (
              <div key={title} className="animate-fade-up rounded-lg p-8 bg-white shadow-card" style={{ border: "1px solid #eeeeee" }}>
                <h4 className="font-bold text-[#2D2973] mb-3" style={{ fontSize: 18 }}>{title}</h4>
                <p className="text-[14px] text-[#4D4D4D] leading-[1.8]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "#f7f6f2" }}>
        <div className="max-w-[700px] mx-auto">
          <h2 className="font-bold text-[#2D2973] text-center mb-3" style={{ fontSize: "clamp(18px,2vw,22px)", letterSpacing: "0.08em" }}>CONTACT FORM</h2>
          <p className="text-center text-[14px] text-[#606161] mb-10">Ready to get started? Send us a message and we'll be in touch within one business day.</p>
          <div className="bg-white rounded-xl p-10 shadow-card" style={{ border: "1px solid #eeeeee" }}>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}