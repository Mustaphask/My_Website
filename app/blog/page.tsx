import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { posts } from "@/data/posts";

const MONTHS: Record<string, number> = {
  January: 1, February: 2, March: 3, April: 4, May: 5, June: 6,
  July: 7, August: 8, September: 9, October: 10, November: 11, December: 12,
};

function getSortKey(date: string): number {
  const [monthName, year] = date.split(" ");
  return parseInt(year || "0", 10) * 100 + (MONTHS[monthName ?? ""] ?? 0);
}

const sortedPosts = [...posts].sort((a, b) => getSortKey(b.date) - getSortKey(a.date));

export const metadata: Metadata = {
  title: "Blog | Mustafa Skaiki",
  description:
    "Insights on digital transformation, AI, and business strategy. Practical guides for modernizing operations and growing smarter.",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="blog-page">
        <div className="blog-container">
          <header className="blog-header">
            <h1 className="blog-title">Insights on Digital Transformation & AI</h1>
            <p className="blog-intro">
              Practical perspectives on modernizing operations, automating workflows, and building AI-ready businesses.
            </p>
          </header>

          <div className="blog-grid">
            {sortedPosts.map((post) => (
              <article key={post.slug} className="blog-card">
                <Link href={`/blog/${post.slug}`} className="blog-card-link">
                  <h2 className="blog-card-title">{post.title}</h2>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  <footer className="blog-card-meta">
                    <span className="blog-card-author">{post.author}</span>
                    <span className="blog-card-date">{post.date}</span>
                  </footer>
                  {post.tags.length > 0 && (
                    <div className="blog-card-tags">
                      {post.tags.map((tag, i) => (
                        <span key={`${tag}-${i}`} className="blog-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>
      <footer className="footer">
        <p className="footer-text">
          © {new Date().getFullYear()} Mustafa Skaiki. All rights reserved.
        </p>
      </footer>
    </>
  );
}
