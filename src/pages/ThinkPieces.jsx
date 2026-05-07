import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageBits";
import { usePosts } from "@/hooks/useWordPress";
import { getFeaturedImage, getCategory, formatDate } from "@/services/wordpress";

export default function ThinkPieces() {
  const { posts, isLoading, error } = usePosts({ perPage: 12 });

  return (
    <>
      <PageHero
        eyebrow="Think Pieces"
        lines={["Fuelling Growth", "Through Thought", "Leadership."]}
        subtitle={<p>The marketing world is evolving — businesses need more than specialists. They need full-stack thinkers who blend strategy, data, and execution.</p>}
      />
      <section className="section-pad" style={{ background: "#ffffff" }}>
        <div className="max-w-[1100px] mx-auto">
          {isLoading && (
            <div className="grid md:grid-cols-2 gap-8">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-xl overflow-hidden shadow-card">
                  <div className="h-44 bg-[#f1f0ec] animate-pulse" />
                  <div className="p-7 space-y-3">
                    <div className="h-3 w-20 bg-[#f1f0ec] animate-pulse rounded" />
                    <div className="h-5 w-3/4 bg-[#f1f0ec] animate-pulse rounded" />
                    <div className="h-3 w-full bg-[#f1f0ec] animate-pulse rounded" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {error && !isLoading && (
            <div className="p-6 rounded border border-red-200 bg-red-50 text-red-700 text-[14px]">
              Could not load articles from WordPress. {error.message}
            </div>
          )}

          {!isLoading && !error && posts.length === 0 && (
            <div className="text-center text-[14px] text-[#6b7280]">No articles published yet.</div>
          )}

          <div className="grid md:grid-cols-2 gap-8 stagger">
            {posts.map((p) => {
              const img = getFeaturedImage(p);
              const cat = getCategory(p);
              return (
                <Link
                  key={p.id}
                  to="/think-pieces/$slug"
                  params={{ slug: p.slug }}
                  className="block bg-white rounded-xl overflow-hidden shadow-card hover-lift card-gold-top animate-fade-up"
                >
                  <div
                    className="h-44 flex items-center justify-center bg-cover bg-center"
                    style={{
                      background: img
                        ? `linear-gradient(135deg, rgba(26,32,53,0.35), rgba(10,11,20,0.45)), url(${img}) center/cover`
                        : "linear-gradient(135deg, #1a2035, #0A0B14)",
                    }}
                  >
                    {!img && <div className="eyebrow">{cat || "Article"}</div>}
                  </div>
                  <div className="p-7">
                    {cat && (
                      <span className="inline-block text-[11px] font-medium px-2.5 py-1 rounded" style={{ background: "rgba(213,175,52,0.12)", color: "#D5AF34" }}>
                        {cat}
                      </span>
                    )}
                    <h3
                      className="font-display text-[22px] text-[#0A0B14] mt-3 leading-[1.4]"
                      dangerouslySetInnerHTML={{ __html: p.title?.rendered || "" }}
                    />
                    <div
                      className="mt-3 text-[14px] text-[#6b7280] leading-[1.7] line-clamp-3"
                      dangerouslySetInnerHTML={{ __html: p.excerpt?.rendered || "" }}
                    />
                    <div className="mt-4 text-[12px] text-[#9ca3af]">{formatDate(p.date)}</div>
                    <span className="inline-flex items-center gap-2 mt-4 text-[13px] text-gold font-medium">
                      Read More <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
