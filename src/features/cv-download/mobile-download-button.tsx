import { Button } from "@/components/ui/button";

interface props {
  file: File;
}
export const MobileDownloadButton = ({ file }: props) => {
  return (
    <Button
      className={"block sm:hidden"}
      onClick={async () => {
        try {
          await navigator.share({ files: [file!] });
        } catch (e) {
          console.error(e);
        }
      }}
    >
      download cv
    </Button>
  );
};
