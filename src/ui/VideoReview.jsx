import { useContext } from "react";
import { Theme } from "../contexts/Theme";

function VideoReview({ icon: Icon, stats, onClick }) {
  const [isDark] = useContext(Theme);
  return (
    <div
      className="flex items-center gap-1 hover:cursor-pointer"
      onClick={onClick}
    >
      <Icon className={`text-xl ${isDark ? "text-white" : "text-gray-500"}`} />
      <p className="text-[14px] sm:text-[16px]">{stats}</p>
    </div>
  );
}

export default VideoReview;
