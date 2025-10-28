import { useState } from "react";
import Loading from "./Loading";

const Video = ({ id }) => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="w-full aspect-video overflow-hidden sm:rounded-xl ">
      {!isLoading && (
        <div className="h-full relative">
          <Loading />
        </div>
      )}

      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="w-full h-full"
        onLoad={() => setIsLoading(true)}
      ></iframe>
    </div>
  );
};

export default Video;
