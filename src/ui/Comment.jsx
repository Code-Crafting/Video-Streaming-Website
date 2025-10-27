import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { addViewsSuffix } from "../lib/addViewsSuffix";
import { Theme } from "../contexts/Theme";
import { useContext } from "react";

const Comment = ({ data }) => {
  const [isDark] = useContext(Theme);
  const commonStyle = `text-lg ${isDark ? "text-white" : "text-gray-500"}`;
  return (
    <div className="flex items-start my-4 gap-4">
      <img
        src={data.snippet.topLevelComment.snippet.authorProfileImageUrl}
        alt="user"
        className="512px:w-8 w-6 rounded-full"
      />
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
