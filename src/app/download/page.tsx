"use client";
import { Button } from "@/components/ui/button";
import { useDownloadCV } from "@/hooks/useDownloadCV/useDownloadCV";

export default function Download() {
  const { cv, loading, error } = useDownloadCV();
  return (
    <Button
      onClick={async () => {
        try {
          await navigator.share({ files: [cv!] });
        } catch (e) {
          console.error(e);
        }
      }}
      disabled={loading}
    >
      Download CV
    </Button>
  );
}
