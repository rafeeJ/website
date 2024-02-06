import { Button } from "@/components/ui/button";
import download from "downloadjs";

interface props {
  file: File;
}
export const DesktopDownloadButton = ({ file }: props) => {
  return (
    <Button
      className={"block md:hidden"}
      onClick={async () => {
        try {
          download(file, "rafeejenkins-cv.pdf", "application/pdf");
        } catch (e) {
          console.error(e);
        }
      }}
    >
      Download CV
    </Button>
  );
};
