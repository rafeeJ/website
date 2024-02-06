import { Button } from "@/components/ui/button";

interface props {
  file: File;
}
export const MobileDownloadButton = ({ file }: props) => {
  return (
    <Button
      className={"hidden md:block"}
      onClick={async () => {
        try {
          await navigator.share({ files: [file!] });
        } catch (e) {
          console.error(e);
        }
      }}
    >
      Download CV
    </Button>
  );
};
