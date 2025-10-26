import dislike from "../assets/dislike.png";
import like from "../assets/like.png";
import { addViewsSuffix } from "../lib/addViewsSuffix";

const Comment = ({ data }) => {
  return (
    <div className="flex items-start my-4 gap-4">
      <img
        src={data.snippet.topLevelComment.snippet.authorProfileImageUrl}
        alt="user"
        className="448px:w-[32px] w-[26px] rounded-full"
      />
      <div className="flex flex-col gap-2">
        <h1 className="font-medium 448px:text-[16px] text-[14px]">
          {data.snippet.topLevelComment.snippet.authorDisplayName}
        </h1>
        <p className="448px:text-[16px] text-[14px]">
          {data.snippet.topLevelComment.snippet.textOriginal}
        </p>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <img src={like} alt="like" className="w-[16px] h-[16px]" />
            <p className="448px:text-[16px] text-[12px]">
              {addViewsSuffix(data.snippet.topLevelComment.snippet.likeCount)}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <img src={dislike} alt="dislike" className="w-[16px] h-[16px]" />
            {/* <p></p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
