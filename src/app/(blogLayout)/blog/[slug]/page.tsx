import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "lucide-react";
import { getPostBySlug } from "@/lib/blog-utils";
import { BlogHeroMedia } from "@/features/blog/blog-hero-media";
import { Metadata } from "next";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  const metadata: Metadata = {
    title: post.frontmatter.title + " by Rafee Jenkins",
    description: post.frontmatter.description,
    openGraph: {
      title: post.frontmatter.title + " | by Rafee Jenkins",
      description: post.frontmatter.description,
      type: "article",
      authors: ["Rafee Jenkins"],
      publishedTime: post.frontmatter.publishedAt,
    },
    authors: [{ name: "Rafee Jenkins", url: "https://rafeejenkins.com" }],
    keywords: post.frontmatter.keywords,
  };

  return metadata;
}

export default async function Article({
  params,
}: {
  params: { slug: string };
}) {
  const { content, frontmatter } = await getPostBySlug(params.slug);

  return (
    <section className={"flex flex-col justify-center items-center"}>
      <div className={"my-2 flex flex-row w-full"}>
        <Link href={`/blog`}>
          <Button className={"flex items-center justify-center"}>
            <ChevronLeftIcon size={15} />
            All posts
          </Button>
        </Link>
        <div className={"grow"} />
      </div>

      <article className="prose dark:prose-invert">
        <h1 className={"text-primary text-center"}>{frontmatter.title}</h1>
        <BlogHeroMedia
          video={frontmatter.featuredVideo}
          image={frontmatter.featuredImage}
        />
        <MDXRemote source={content} />
      </article>
    </section>
  );
}
