import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SwiftMark } from "@/components/Logo";
import { PageHero } from "@/components/PageBits";
import { usePostBySlug } from "@/hooks/useWordPress";
import { getFeaturedImage, getAuthorName, getCategory, formatDate } from "@/services/wordpress";
import "@/styles/wordpress-content.css";

export default function ArticlePage({ slug }) {
  const { post, isLoading, error, notFound } = usePostBySlug(slug);

  if (isLoading) {
    return (
      <div className="py-32 text-center">
        <div className="inline-block w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin" />
        <p className="mt-4 text-[14px] text-[#6b7280]">Loading article…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-32 text-center">
        <h1 className="font-display text-3xl">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
        <Link to="/think-pieces" className="btn-gold mt-6 inline-flex">Back to Think Pieces</Link>
      </div>
    );
  }

  if (notFound || !post) {
    return (
      <div className="py-32 text-center">
        <h1 className="font-display text-3xl">Article not found</h1>
        <Link to="/think-pieces" className="btn-gold mt-6 inline-flex">Back to Think Pieces</Link>
      </div>
    );
  }

  const img = getFeaturedImage(post);
  const cat = getCategory(post);
  const author = getAuthorName(post);

  // Build a 3-line headline from the WP title for the new hero spec
  const rawTitle = (post.title?.rendered || "").replace(/<[^>]+>/g, "").trim();
  const words = rawTitle.replace(/\.$/, "").split(/\s+/);
  const third = Math.max(1, Math.ceil(words.length / 3));
  const heroLines = [
    words.slice(0, third).join(" "),
    words.slice(third, third * 2).join(" "),
    (words.slice(third * 2).join(" ") || rawTitle) + ".",
  ];

  return (
    <>
      <PageHero
        eyebrow={`${cat || "Insight"}${author ? " · " + author : ""}`}
        lines={heroLines}
        image={img || undefined}
        subtitle={
          <p>By {author} · {formatDate(post.date)}</p>
        }
      />

      <article className="bg-white py-20 px-6">
        <div className="max-w-[780px] mx-auto">
          <div
            className="wp-content"
            dangerouslySetInnerHTML={{ __html: post.content?.rendered || "" }}
          />

          <div className="mt-14 p-7 bg-[#f7f6f2] rounded-xl flex items-center gap-5">
            <SwiftMark size={44} />
            <div>
              <div className="font-display text-[16px] font-bold text-[#0A0B14]">{author}</div>
              <div className="text-[13px] text-[#6b7280]">Swiftora Consulting</div>
            </div>
          </div>
        </div>
      </article>

      <section className="tex-noise text-center section-pad-sm" style={{ background: "#0A0B14" }}>
        <h2 className="font-display text-white" style={{ fontSize: "clamp(22px, 2.6vw, 30px)" }}>
          Need strategic guidance for your business?
        </h2>
        <Link to="/talk-to-us" className="btn-gold mt-6">Talk to Us <ArrowRight size={14} /></Link>
      </section>
    </>
  );
}
