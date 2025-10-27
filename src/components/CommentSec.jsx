import { useContext } from "react";
import { addViewsSuffix } from "../lib/addViewsSuffix";
import Comment from "../ui/Comment";
import { Theme } from "../contexts/Theme";

function CommentSec({ videoDetails, commentsDetails }) {
  const [isDark] = useContext(Theme);
  return (
    <div>
      <hr
        className={`my-2 ${
          isDark ? "text-secondary" : "text-gray-600"
        } rounded-md`}
      />
      <h1 className="448px:text-[16px] text-[14px]">
        {addViewsSuffix(
          videoDetails ? videoDetails.statistics.commentCount : 0
        )}
        <span className="ml-2">Commments</span>
      </h1>

      {commentsDetails
        ? commentsDetails.map((el, i) => {
            return <Comment data={el} key={i} />;
          })
        : ""}
    </div>
  );
}

export default CommentSec;
