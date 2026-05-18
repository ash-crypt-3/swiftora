import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import hero1 from "@/assets/heroes/hero-1.jpg";

export const Route = createFileRoute("/talk-to-us")({
  head: () => ({
    meta: [
      { title: "Talk to Us: Let's Collaborate for Your Business Success" },
      { name: "description", content: "Connect with Swiftora Consulting to discuss how we can support your business objectives and growth." },
    ],
  }),
  component: TalkPage,
});

const onboardingSteps = [
  { n: "Step 1", t: "Initial Consultation", d: "After you reach out, we'll schedule a free consultation to understand your business, goals, and challenges." },
  { n: "Step 2", t: "Needs Assessment", d: "We'll dive deeper into your specific needs and pain points, ensuring we fully grasp the scope of your requirements." },
  { n: "Step 3", t: "Tailored Proposal", d: "Based on our consultation, we'll craft a customised proposal outlining our recommended solutions, timelines, and costs." },
  { n: "Step 4", t: "Onboarding Kickoff", d: "Once you approve the proposal, we'll formalise the engagement and initiate the onboarding process with a detailed project plan." },
  { n: "Step 5", t: "Collaborative Execution", d: "Our team will work closely with you to implement the agreed-upon strategies, keeping you informed every step of the way." },
  { n: "Step 6", t: "Ongoing Support", d: "Our commitment doesn't end with project delivery. We provide ongoing support to help you sustain and build on the results achieved." },
];

function TalkPage() {
  return (
    <>
      <Hero
        variant="inner"
        eyebrow="Talk to Us"
        lines={["Reach Out Today,", "Achieve More", "Tomorrow."]}
        image={hero1}
        supporting={<p>Ready for transformation? At Swiftora Consulting Limited, we are here to listen, collaborate, and deliver solutions that drive results. Let's shape your success story together—reach out today!</p>}
      />

      <section id="contact-form" className="section-pad" style={{ background: "#f7f6f2", scrollMarginTop: 80 }}>
        <div className="max-w-[1100px] mx-auto grid lg:grid-cols-2 gap-12">

          <div className="space-y-8">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D5AF34] mb-2">Mobile:</div>
              <a href="tel:+254729698380" className="flex items-center gap-3 text-[15px] text-[#2D2973] font-bold hover:text-[#D5AF34] transition-colors">
                <Phone size={16} className="text-[#D5AF34]" /> +254 729 698 380
              </a>
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D5AF34] mb-2">Email</div>
              <a href="mailto:hello@swiftoraconsulting.co.ke" className="flex items-center gap-3 text-[15px] text-[#2D2973] font-bold hover:text-[#D5AF34] transition-colors break-all">
                <Mail size={16} className="text-[#D5AF34] flex-shrink-0" /> hello@swiftoraconsulting.co.ke
              </a>
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D5AF34] mb-2">Address:</div>
              <div className="flex items-start gap-3 text-[15px] text-[#4D4D4D] leading-[1.8]">
                <MapPin size={16} className="text-[#D5AF34] flex-shrink-0 mt-1" />
                <div>Applewood Adams,<br />Odyssey Workspace, 10th Flr,<br />Suite 1011, Ngong Road,<br />Kilimani, Nairobi, Kenya</div>
              </div>
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D5AF34] mb-2">Business Hours:</div>
              <div className="rounded-xl p-6" style={{ background: "#0A0B14" }}>
                <div className="hours-row"><span className="hours-label">Monday–Friday</span><span className="hours-value">9 am to 5 pm</span></div>
                <div className="hours-row" style={{ borderBottom: "none" }}><span className="hours-label">Weekends</span><span className="hours-value">Closed.</span></div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-card" style={{ border: "1px solid rgba(213,175,52,0.35)" }}>
              <iframe
                title="Swiftora Consulting — Kilimani, Nairobi"
                src="https://maps.google.com/maps?q=Apple%20wood%20Adams&t=m&z=10&output=embed&iwloc=near"
                width="100%" height="260"
                style={{ border: 0, display: "block" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>

          <div className="bg-white rounded-xl p-10 shadow-card" style={{ border: "1px solid #eeeeee" }}>
            <h2 className="font-bold text-[#2D2973] mb-2" style={{ fontSize: "clamp(18px,2vw,22px)", letterSpacing: "0.08em" }}>CONTACT FORM</h2>
            <p className="text-[14px] text-[#6b7280] mb-8">We typically respond within one business day.</p>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="section-pad tex-dots" style={{ background: "#f7f6f2" }}>
        <div className="max-w-[1100px] mx-auto">
          <h2 className="font-bold text-[#2D2973] text-center mb-4" style={{ fontSize: "clamp(18px,2vw,22px)", letterSpacing: "0.08em" }}>CLIENT ONBOARDING PROCESS</h2>
          <p className="text-center text-[15px] text-[#4D4D4D] leading-[1.8] max-w-[680px] mx-auto mb-12">We are excited to partner with you on your journey to growth and success. Our streamlined onboarding process ensures we understand your needs from the very start.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
            {onboardingSteps.map((s, i) => (
              <div key={i} className="animate-fade-up rounded-xl p-8 bg-white shadow-card" style={{ border: "1px solid #eeeeee", borderTop: "3px solid #D5AF34" }}>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D5AF34] mb-2">{s.n}</div>
                <h5 className="font-bold text-[#2D2973] mb-3" style={{ fontSize: 16 }}>{s.t}</h5>
                <p className="text-[13px] text-[#606161] leading-[1.8]">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}