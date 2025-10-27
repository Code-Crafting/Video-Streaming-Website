import { useContext, useState } from "react";
import AsideCategory from "../ui/AsideCategory";
import { subscribedChannels } from "../constants/suscribedChannels";
import { category } from "../constants/category";
import SubscribedChannels from "../ui/SubscribedChannels";
import { Theme } from "../contexts/Theme";

function Aside({ activeId, setActiveId }) {
  const [isDark] = useContext(Theme);

  return (
    <div
      className={`h-dvh ${
        isDark ? "bg-primary" : "bg-white"
      } w-60 md:flex hidden pb-4 pt-20 px-4 flex-col gap-4 overflow-y-scroll no-scrollbar overscroll-auto 848px:flex`}
    >
      {/* categories */}
      <div className="flex flex-col gap-4">
        {category.map((el, i) => (
          <AsideCategory
            key={i}
            data={el}
            setActiveId={setActiveId}
            activeId={activeId}
          />
        ))}
      </div>

      <hr className="text-gray-600" />

      {/* subscribed channels */}
      <p
        className={`${
          isDark ? "text-white" : "text-gray-600"
        } tracking-wide font-medium`}
      >
        SUBSCRIBED
      </p>

      <div className="flex flex-col gap-4 justify-center">
        {subscribedChannels.map((el, i) => (
          <SubscribedChannels data={el} key={i} />
        ))}
      </div>
    </div>
  );
}

export default Aside;
