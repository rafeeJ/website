import { Intro } from "@/features/homepage/intro";
import { Bio } from "@/features/homepage/bio";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rafee Jenkins",
  description: "Software Engineer",
  openGraph: {
    title: "Rafee Jenkins",
    description: "Software Engineer",
    url: "https://rafeejenkins.com",
    images: [
      "https://avatars.githubusercontent.com/u/1508676?s=400&u=dbc0d74f489c3c18f4e935f49c59ebc6fd754a71&v=4",
    ],
  },
  metadataBase: new URL("https://rafeejenkins.com"),
};

export default function Home() {
  return (
    <main>
      <Bio />
      <Intro />
    </main>
  );
}
