"use client";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Download() {
  const router = useRouter();
  const handleClose = (state: boolean) => {
    if (!state) router.back();
  };

  return (
    <section>
      <Dialog defaultOpen={true} onOpenChange={handleClose}>
        <DialogContent>
          <Button>Download CV</Button>
        </DialogContent>
      </Dialog>
    </section>
  );
}
