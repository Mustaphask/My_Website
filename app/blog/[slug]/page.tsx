import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { MarkdownContent } from "@/lib/markdown";
import { posts } from "@/data/posts";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Post not found" };
  return {
    title: `${post.title} | Mustafa Skaiki`,
    description: post.excerpt,
    authors: [{ name: post.author }],
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <>
      <Navbar />
      <main className="blog-post-page">
        <article className="blog-post">
          <Link href="/blog" className="blog-back">
            ← Back to Blog
          </Link>
          <header className="blog-post-header">
            <h1 className="blog-post-title">{post.title}</h1>
            <div className="blog-post-meta">
              <span className="blog-post-author">{post.author}</span>
              <span className="blog-post-date">{post.date}</span>
            </div>
            {post.tags.length > 0 && (
              <div className="blog-post-tags">
                {post.tags.map((tag, i) => (
                  <span key={`${tag}-${i}`} className="blog-tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>
          <MarkdownContent content={post.content} />
        </article>
      </main>
      <footer className="footer">
        <p className="footer-text">
          © {new Date().getFullYear()} Mustafa Skaiki. All rights reserved.
        </p>
      </footer>
    </>
  );
}
