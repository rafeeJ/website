export const YoutubeFrame = ({ video }: { video: string }) => {
  const url = new URL("https://www.youtube.com/embed/" + video);

  return (
    <div>
      <iframe
        width="100%"
        height="450"
        src={url.toString()}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
};
