import { notFound } from "next/navigation";

import { CustomMDX } from "@/components/mdx";
import { getBlogPosts } from "@/lib/mdx";
import { baseUrl } from "@/app/sitemap";

export async function generateStaticParams() {
  const posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const posts = getBlogPosts();
  const post = posts.find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  const {
    title,
    date: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  const ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const posts = getBlogPosts();
  const post = posts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="antialiased max-w-xl mx-4 mt-8 md:mx-auto">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.date,
            dateModified: post.metadata.date,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/${post.slug}`,
            author: {
              "@type": "Person",
              name: "Aryan Swaroop",
            },
          }),
        }}
      />
      <h1 className="font-semibold text-2xl tracking-tighter mb-8 text-balance">
        {post.metadata.title}
      </h1>

      <article className="prose">
        <CustomMDX source={post.content} />
      </article>
    </section>
  );
}
