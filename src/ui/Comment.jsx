import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { addViewsSuffix } from "../lib/addViewsSuffix";
import { Theme } from "../contexts/Theme";
import { useContext, useState } from "react";

const Comment = ({ data }) => {
  const [isDark] = useContext(Theme);
  const [isLoading, setIsLoading] = useState(false);
  const commonStyle = `text-lg ${isDark ? "text-white" : "text-gray-500"}`;
  return (
    <div className="flex items-start my-4 gap-4">
      <div className="512px:w-8 w-6 aspect-square overflow-hidden rounded-full ">
        {!isLoading && (
          <div
            className={`h-full ${isDark ? "bg-secondary" : "bg-gray-300"}`}
          ></div>
        )}

        <img
          src={data.snippet.topLevelComment.snippet.authorProfileImageUrl}
          alt="user"
          className="w-full h-full"
          loading="lazy"
          onLoad={() => setIsLoading(true)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="font-medium 512px:text-md text-sm">
          {data.snippet.topLevelComment.snippet.authorDisplayName}
        </h1>
        <p className="512px:text-md text-sm">
          {data.snippet.topLevelComment.snippet.textOriginal}
        </p>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <BiSolidLike className={commonStyle} />
            <p className="512px:text-md text-sm">
              {addViewsSuffix(data.snippet.topLevelComment.snippet.likeCount)}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <BiSolidDislike className={commonStyle} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
