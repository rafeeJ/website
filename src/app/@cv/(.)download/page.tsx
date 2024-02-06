"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { DownloadCvButton } from "@/features/cv-download/download-cv-button";

export default function Download() {
  const router = useRouter();
  const handleClose = (state: boolean) => {
    if (!state) router.back();
  };

  return (
    <section>
      <Dialog defaultOpen={true} onOpenChange={handleClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>thanks for looking!</DialogTitle>
          </DialogHeader>
          <DownloadCvButton />
        </DialogContent>
      </Dialog>
    </section>
  );
}
