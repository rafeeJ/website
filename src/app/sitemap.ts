import { MetadataRoute } from "next";
import { getAllArticles } from "@/lib/blog-utils";
import { parse } from "date-fns";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const allPosts = await getAllArticles();
  const posts = allPosts.map((post) => ({
    url: `https://rafeejenkins.com/blog/${post.slug}`,
    lastModified: parse(post.meta.publishedAt, "dd/MM/yyyy", new Date()),
    priority: 0.7,
  }));
  return [
    {
      url: "https://rafeejenkins.com",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://rafeejenkins.com/download",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://rafeejenkins.com/blog",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...posts,
  ];
}
