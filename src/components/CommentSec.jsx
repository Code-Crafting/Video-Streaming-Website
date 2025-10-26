import { addViewsSuffix } from "../lib/addViewsSuffix";
import Comment from "../ui/Comment";

function CommentSec({ videoDetails, commentsDetails }) {
  return (
    <div>
      <hr className="my-2 text-gray-600 rounded-md" />
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
