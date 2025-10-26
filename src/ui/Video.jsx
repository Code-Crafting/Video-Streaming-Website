const Video = ({ id }) => {
  return (
    <div className="w-full aspect-video overflow-hidden sm:rounded-xl ">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="w-full h-full"
      ></iframe>
    </div>
  );
};

export default Video;
