import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionHeader } from "@/components/PageBits";
import { Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";


export const Route = createFileRoute("/talk-to-us")({
  head: () => ({
    meta: [
      { title: "Talk to Us — Swiftora Consulting" },
      { name: "description", content: "Start the conversation. Reach Swiftora Consulting Limited in Nairobi to discuss your business strategy, growth, or advisory needs." },
      { property: "og:title", content: "Talk to Us — Swiftora Consulting" },
      { property: "og:description", content: "Let's make great things happen." },
    ],
  }),
  component: TalkPage,
});

function TalkPage() {
  return (
    <>
      <PageHero
        eyebrow="Talk to Us"
        lines={["Reach Out Today,", "Achieve More", "Tomorrow."]}
        supportingMaxWidth={480}
        cta={{ label: "Reach Out Today", href: "#contact-form" }}
        showDots
        subtitle={
          <p>Ready for transformation? We are here to listen, collaborate, and deliver solutions that drive real results. Let's shape your success story together.</p>
        }
      />

      <section id="contact-form" className="section-pad" style={{ background: "#f7f6f2", scrollMarginTop: 80 }}>
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-[1.4fr_1fr] gap-12">
          <div className="bg-white rounded-xl p-10 md:p-12 shadow-card animate-fade-up">
            <div className="w-10 h-[3px] bg-gold mb-4" />
            <h2 className="font-display text-[28px] text-[#0A0B14]">Send us a message</h2>
            <p className="mt-2 text-[14px] text-[#6b7280]">We typically respond within one business day.</p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <div className="space-y-8">
            <div className="animate-fade-up">
              <div className="w-10 h-[3px] bg-gold mb-3" />
              <div className="eyebrow mb-2">Visit Us</div>
              <div className="flex items-start gap-3 text-[14px] text-[#374151] leading-[1.8]">
                <MapPin size={18} className="text-gold flex-shrink-0 mt-1" />
                <div>
                  Applewood Adams, Odyssey Workspace,<br />
                  10th Floor Suite 1011, Ngong Road,<br />
                  Kilimani, Nairobi, Kenya.<br />
                  P.O. Box 13478-00100.
                </div>
              </div>
            </div>
            <div className="animate-fade-up">
              <div className="w-10 h-[3px] bg-gold mb-3" />
              <div className="eyebrow mb-2">Call Us</div>
              <a href="tel:+254729698380" className="flex items-center gap-3 text-[14px] text-[#374151] hover:text-gold transition-colors">
                <Phone size={16} className="text-gold" /> +254 729 698 380
              </a>
            </div>
            <div className="animate-fade-up">
              <div className="w-10 h-[3px] bg-gold mb-3" />
              <div className="eyebrow mb-2">Email Us</div>
              <a href="mailto:hello@swiftoraconsulting.co.ke" className="flex items-center gap-3 text-[14px] text-[#374151] hover:text-gold transition-colors break-all">
                <Mail size={16} className="text-gold flex-shrink-0" /> hello@swiftoraconsulting.co.ke
              </a>
            </div>
            <div className="animate-fade-up rounded-xl p-6" style={{ background: "#0A0B14" }}>
              <div className="w-10 h-[3px] bg-gold mb-3" />
              <div className="eyebrow mb-3" style={{ color: "#c9a84c" }}>Business Hours</div>
              <div className="hours-row">
                <span className="hours-label">Monday – Friday</span>
                <span className="hours-value">9:00 AM – 5:00 PM</span>
              </div>
              <div className="hours-row" style={{ borderBottom: "none" }}>
                <span className="hours-label">Weekends</span>
                <span className="hours-value">Closed</span>
              </div>
            </div>
            <div
              className="rounded-xl overflow-hidden shadow-card"
              style={{ border: "1px solid rgba(213,175,52,0.35)", minHeight: 260 }}
            >
              <iframe
                title="Swiftora Consulting — Kilimani, Nairobi"
                src="https://www.google.com/maps?q=Applewood+Adams+Odyssey+Workspace+Ngong+Road+Kilimani+Nairobi&output=embed"
                width="100%"
                height="280"
                style={{ border: 0, display: "block" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <a
                href="https://maps.app.goo.gl/m3atWsppeCSckxpc8"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-[12px] text-[#0A0B14] hover:text-gold transition-colors"
                style={{ background: "#f7f6f2", borderTop: "1px solid rgba(213,175,52,0.25)" }}
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative tex-noise section-pad clip-diag-top" style={{ background: "#0A0B14", marginTop: "-3vw" }}>
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader eyebrow="Our Engagement Process" title="What happens when you reach out." light />
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
            {[
              { n: "01", t: "Initial Consultation", d: "We start with a conversation to understand your business, your goals, and the challenges you are facing." },
              { n: "02", t: "Needs Assessment", d: "We conduct a structured assessment to identify the most critical areas of focus and ensure we understand the full picture." },
              { n: "03", t: "Proposal & Approach", d: "We develop a tailored proposal outlining our recommended approach, deliverables, timeline, and investment." },
              { n: "04", t: "Onboarding Kickoff", d: "Once you approve the proposal, we formalise the engagement and initiate onboarding with a detailed project plan and clear milestones." },
              { n: "05", t: "Collaborative Execution", d: "Our team works closely with you to implement the agreed strategies, keeping you informed and involved at every stage." },
              { n: "06", t: "Ongoing Support", d: "Our commitment does not end at delivery. We provide ongoing support to help you sustain and build on the results achieved." },
            ].map((s) => (
              <div key={s.n} className="glass-dark rounded-xl p-8 animate-fade-up" style={{ borderTop: "2px solid rgba(213,175,52,0.35)" }}>
                <div className="font-display text-[48px] leading-none mb-3" style={{ color: "rgba(213,175,52,0.18)" }}>{s.n}</div>
                <h3 className="font-display text-[20px] text-white mb-3">{s.t}</h3>
                <p className="text-[14px] text-[#9ca3af] leading-[1.8]">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
