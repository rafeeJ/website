import { useDownloadCV } from "@/hooks/useDownloadCV/useDownloadCV";
import { DesktopDownloadButton } from "@/features/cv-download/desktop-download-button";
import { MobileDownloadButton } from "@/features/cv-download/mobile-download-button";

export const DownloadCvButton = () => {
  const { cv, loading, error } = useDownloadCV();

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <DesktopDownloadButton file={cv!} />
      <MobileDownloadButton file={cv!} />
    </>
  );
};
