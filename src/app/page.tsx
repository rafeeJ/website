import { Intro } from "@/features/homepage/intro";
import { Bio } from "@/features/homepage/bio";
import { Metadata } from "next";

export default function Home() {
  return (
    <main>
      <Bio />
      <Intro />
    </main>
  );
}
