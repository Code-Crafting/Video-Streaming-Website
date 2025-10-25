import { Link } from "react-router";
import { addViewsSuffix } from "../lib/addViewsSuffix";
import { getReadableDate } from "../lib/getReadableData";

const Card = ({
  id,
  categoryId,
  title,
  channelTitle,
  viewCount,
  publishedAt,
  url,
}) => {
  return (
    <Link to={`/player/${id}/${categoryId}`}>
      <div className="h-[200px] overflow-hidden rounded-sm">
        <img
          src={url}
          alt="thumbnails"
          className="w-full h-full hover:cursor-pointer"
        />
      </div>
      <div className="flex flex-col items-between mt-4 gap-1">
        <h1 className="font-bold 448px:text-[16px] text-[14px]">{title}</h1>
        <p className="font-medium tracking-wide 448px:text-[16px] text-[14px]">
          {channelTitle}
        </p>
        <div className="flex gap-4">
          <p className="448px:text-[16px] text-[14px]">
            {addViewsSuffix(viewCount ? viewCount : 0)} views &bull;{" "}
            {getReadableDate(publishedAt)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
