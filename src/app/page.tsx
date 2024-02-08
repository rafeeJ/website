import { Intro } from "@/features/homepage/intro";
import { Bio } from "@/features/homepage/bio";
import { Metadata } from "next";
import { GithubStuff } from "@/features/homepage/github-stuff";

export default function Home() {
  return (
    <main>
      <Bio />
      <Intro />
      <GithubStuff />
    </main>
  );
}
