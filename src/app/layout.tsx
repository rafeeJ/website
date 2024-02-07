import type { Metadata } from "next";
import { Inconsolata, Karla } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { Navbar } from "@/features/navbar";

const karla = Karla({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-karla",
});

const inconsolata = Inconsolata({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inconsolata",
});
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
    type: "website",
  },
  metadataBase: new URL("https://rafeejenkins.com"),
};

export default function RootLayout({
  children,
  cv,
}: Readonly<{
  children: ReactNode;
  cv: ReactNode;
}>) {
  return (
    <html lang="en" className={`${inconsolata.variable} ${karla.variable}`}>
      <body className={"max-w-4xl !mx-auto p-5 sm:p-10 font-mono"}>
        <Navbar />
        {children}
        {cv}
      </body>
    </html>
  );
}
