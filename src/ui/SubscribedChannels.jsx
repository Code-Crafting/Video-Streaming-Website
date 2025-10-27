import { useContext } from "react";
import { Theme } from "../contexts/Theme";

const SubscribedChannels = ({ data }) => {
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
        }`}
      >
        {data.name}
      </p>
    </div>
  );
};

export default SubscribedChannels;
