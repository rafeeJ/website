"use client";
import { DownloadCvButton } from "@/features/cv-download/download-cv-button";

export default function Download() {
  return (
    <section className="mx-auto py-10 border-gray-300">
      <h1 className={"font-medium pb-2 font-sans"}>You can find my CV here.</h1>
      <p className={"font-sans font-light pb-2"}>
        I wrote a short article about how I implemented a CV download system
        with Google docs. I will include the link once it has been migrated from
        my old site to this one.
      </p>
      <div className={"w-fit mx-auto"}>
        <DownloadCvButton />
      </div>
    </section>
  );
}
