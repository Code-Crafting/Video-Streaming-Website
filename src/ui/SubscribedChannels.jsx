import { useContext } from "react";
import { HideText } from "../contexts/HideText";
import { Theme } from "../contexts/Theme";

const SubscribedChannels = ({ data }) => {
  const [hideAsideText] = useContext(HideText);
  const [isDark] = useContext(Theme);
  return (
    <div className="flex gap-4 items-center">
      <img
        src={data.img}
        alt="subscriberName"
        className="w-6 aspect-square rounded-full"
      />
      <p
        className={`hover:cursor-pointer ${
          isDark ? "text-white" : "text-gray-600"
        } ${hideAsideText && "hidden"}`}
      >
        {data.name}
      </p>
    </div>
  );
};

export default SubscribedChannels;
