import { DownloadCvButton } from "@/features/cv-download/download-cv-button";
import { Metadata } from "next";

export const metadata: Metadata = {
  description: "Download my CV",
  openGraph: {
    description: "Download my CV",
    images: [
      "https://avatars.githubusercontent.com/u/1508676?s=400&u=dbc0d74f489c3c18f4e935f49c59ebc6fd754a71&v=4",
    ],
  },
};
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
