import { createFileRoute } from "@tanstack/react-router";
import { usePosts } from "@/hooks/useWordPress";
import ContactForm from "@/components/ContactForm";
import { wpConfig } from "@/services/wordpress";

export const Route = createFileRoute("/wp-test")({
  head: () => ({
    meta: [
      { title: "WordPress Connection Test" },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: WpTest,
});

function WpTest() {
  const { posts, isLoading, error } = usePosts({ perPage: 10 });

  return (
    <div className="max-w-[900px] mx-auto px-6 py-16 space-y-10">
      <header>
        <h1 className="font-display text-3xl text-[#0A0B14]">WordPress Connection Test</h1>
        <p className="mt-2 text-[14px] text-[#6b7280]">
          API: <code className="bg-[#f1f0ec] px-1.5 py-0.5 rounded text-[12px]">{wpConfig.WP_API}</code><br />
          Form ID: <code className="bg-[#f1f0ec] px-1.5 py-0.5 rounded text-[12px]">{wpConfig.CONTACT_FORM_ID}</code>
        </p>
      </header>

      <section>
        <h2 className="font-display text-xl text-[#0A0B14] mb-4">Posts</h2>
        {isLoading && <div className="text-[14px] text-[#6b7280]">Loading…</div>}
        {error && (
          <div className="p-4 rounded border border-red-200 bg-red-50 text-red-700 text-[13px]">
            ❌ {error.message}
          </div>
        )}
        {!isLoading && !error && (
          <>
            <div className="text-[13px] text-green-700 mb-3">
              ✅ Connected — {posts.length} post{posts.length === 1 ? "" : "s"} fetched.
            </div>
            <ul className="space-y-2">
              {posts.map((p) => (
                <li key={p.id} className="text-[14px] text-[#374151]">
                  <span className="text-[#9ca3af] mr-2">#{p.id}</span>
                  <span dangerouslySetInnerHTML={{ __html: p.title?.rendered || "(untitled)" }} />
                  <span className="text-[#9ca3af] ml-2">/ {p.slug}</span>
                </li>
              ))}
            </ul>
          </>
        )}
      </section>

      <section>
        <h2 className="font-display text-xl text-[#0A0B14] mb-4">Test Contact Form</h2>
        <div className="bg-white rounded-xl p-6 shadow-card">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
