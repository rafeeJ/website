import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
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
  ];
}
