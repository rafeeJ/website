import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "lucide-react";
import { getPostBySlug } from "@/lib/blog-utils";
import { serialize } from "next-mdx-remote/serialize";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeHighlight from "rehype-highlight";

export async function generateMetadata({ params }: any) {
  const post = await getPostBySlug(params.slug);
  return {
    title: post.frontmatter.title + " | Split My Rent",
    description: post.frontmatter.description,
    openGraph: {
      title: post.frontmatter.title + " | Split My Rent",
      description: post.frontmatter.description,
      type: "article",
    },
    alternates: {
      canonical: "https://splitmyrent.com/blog/" + params.slug,
    },
  };
}

export default async function Article({
  params,
}: {
  params: { slug: string };
}) {
  const { content, frontmatter } = await getPostBySlug(params.slug);
  // const { compiledSource } = await serialize(
  //   content,
  //   {
  //     mdxOptions: { rehypePlugins: [rehypeHighlight, rehypeCodeTitles] },
  //   },
  //   true,
  // );

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
        <MDXRemote source={content} />
      </article>
    </section>
  );
}
