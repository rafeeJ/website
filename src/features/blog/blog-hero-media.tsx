import { YoutubeFrame } from "@/features/blog/youtube-frame";
import Image from "next/image";

interface props {
  video?: string;
  image?: string;
}
export const BlogHeroMedia = ({ video, image }: props) => {
  if (video) {
    return <YoutubeFrame video={video} />;
  }

  if (image) {
    return (
      <Image src={image} alt={"featured image"} width={800} height={400} />
    );
  }

  return null;
};
