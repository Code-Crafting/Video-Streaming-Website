import { useContext } from "react";
import { Theme } from "../../contexts/Theme";

function FeedShrimmer() {
  const [isDark] = useContext(Theme);
  const commonColor = isDark ? "bg-secondary" : "bg-gray-400";
  return (
    <div>
      <div
        className={`aspect-video overflow-hidden sm:rounded-sm ${commonColor}`}
      ></div>
      <div className="flex flex-col items-between mt-4 gap-1">
        <div className={`h-[32px] ${commonColor}`}></div>
        <div className={`h-[16px] w-[70%] ${commonColor}`}></div>
        <div className="flex gap-2">
          <div className={`w-[48px] h-[16px] ${commonColor}`}></div>
          <div className={`w-[48px] h-[16px] ${commonColor}`}></div>
        </div>
      </div>
    </div>
  );
}

export default FeedShrimmer;
