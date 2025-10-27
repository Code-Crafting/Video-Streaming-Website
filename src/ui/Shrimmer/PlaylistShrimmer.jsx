import { useContext } from "react";
import { Theme } from "../../contexts/Theme";

function PlayListShrimmer() {
  const [isDark] = useContext(Theme);
  const commonColor = isDark ? "bg-secondary" : "bg-gray-400";
  return (
    <div className="flex items-center lg:gap-4 gap-2 lg:flex-row flex-col ">
      <div
        className={`lg:w-1/2 w-full aspect-video ${commonColor} rounded-sm`}
      ></div>
      <div className="lg:w-1/2 w-full flex flex-col lg:mt-4 mt-0 gap-1">
        <div className={`${commonColor} w-full h-[32px] rounded-sm`}></div>
        <div className={`${commonColor} rounded-sm w-[70%] h-[24px]`}></div>
        <div className={`${commonColor} rounded-sm w-[70%] h-[24px]`}></div>
      </div>
    </div>
  );
}

export default PlayListShrimmer;
