"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { DownloadCvButton } from "@/features/cv-download/download-cv-button";
import { InfoIcon } from "lucide-react";

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
            <DialogDescription>
              <p>
                the button below will download my CV as a pdf using the Google
                Docs API.
              </p>
            </DialogDescription>
          </DialogHeader>
          <DownloadCvButton />
        </DialogContent>
      </Dialog>
    </section>
  );
}
