import { Link } from "react-router";
import { addViewsSuffix } from "../lib/addViewsSuffix";
import { getReadableDate } from "../lib/getReadableData";
import { useContext } from "react";
import { Theme } from "../contexts/Theme";

const Card = ({
  id,
  categoryId,
  title,
  channelTitle,
  viewCount,
  publishedAt,
  url,
  fn,
  isFlexRow = false,
}) => {
  const [isDark] = useContext(Theme);
  const commontStyle = isDark ? "text-secondary" : "text-primary";

  return (
    <Link
      to={`/player/${id}/${categoryId}`}
      onClick={fn}
      className={
        isFlexRow &&
        "flex lg:flex-row flex-col lg:items-center items-start gap-4 w-full"
      }
    >
      <div
        className={`${
          isFlexRow && "lg:w-1/2 w-full"
        } aspect-video overflow-hidden sm:rounded-sm`}
      >
        <img
          src={url}
          alt="thumbnails"
          className="w-full h-full hover:cursor-pointer"
        />
      </div>
      <div
        className={`${
          isFlexRow && "lg:w-1/2 w-full"
        } flex flex-col items-between gap-1 px-2 break-all`}
      >
        <h1
          className={`font-bold text-xl 512px:text-lg ${
            isDark && "text-white"
          }`}
        >
          {title}
        </h1>
        <p
          className={`font-medium tracking-wide 512px:text-[16px] text-lg ${commontStyle}`}
        >
          {channelTitle}
        </p>
        <div className="flex gap-4">
          <p className={`512px:text-[16px] text-lg ${commontStyle}`}>
            {viewCount && addViewsSuffix(viewCount ? viewCount : 0)} views
            {publishedAt && <span> &bull;</span>}{" "}
            {publishedAt && getReadableDate(publishedAt)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
