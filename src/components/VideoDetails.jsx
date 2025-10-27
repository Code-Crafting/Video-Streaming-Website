import { addViewsSuffix } from "../lib/addViewsSuffix";
import { BiSolidLike, BiSolidDislike, BiSolidSave } from "react-icons/bi";
import { MdModeComment } from "react-icons/md";
import { IoIosShareAlt } from "react-icons/io";
import VideoReview from "../ui/VideoReview";
import { getReadableDate } from "../lib/getReadableData";

const VideoDetails = ({ data, setCommentOn }) => {
  return (
    <div className="flex flex-col items-between mt-4 sm:gap-4 gap-2 sm:px-0 px-2">
      <h1 className="sm:text-2xl text-lg font-bold">{data.snippet?.title}</h1>

      {/* stats */}
      <div className="flex sm:flex-row flex-col sm:items-center justify-between gap-4">
        <p>
          {addViewsSuffix(data.statistics.viewCount)} views &bull;{" "}
          {getReadableDate(data.snippet.publishedAt)}
        </p>

        <div className="flex gap-4">
          <VideoReview
            icon={BiSolidLike}
            stats={addViewsSuffix(data?.statistics.likeCount)}
          />
          <VideoReview icon={BiSolidDislike} stats="0" />
          <VideoReview
            icon={MdModeComment}
            stats={addViewsSuffix(data ? data.statistics.commentCount : 0)}
            onClick={() => setCommentOn((prev) => !prev)}
          />
          <VideoReview icon={IoIosShareAlt} stats="Share" />
          <VideoReview icon={BiSolidSave} stats="Save" />
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
