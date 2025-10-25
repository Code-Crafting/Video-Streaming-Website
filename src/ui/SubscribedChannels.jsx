import { useContext } from "react";
import { HideText } from "../contexts/HideText";

const SubscribedChannels = ({ data }) => {
  const [hideAsideText] = useContext(HideText);
  return (
    <div className="flex gap-4 items-center">
      <img
        src={data.img}
        alt="subscriberName"
        className="w-6 aspect-square rounded-full"
      />
      <p
        className={`hover:cursor-pointer text-gray-600 ${
          hideAsideText && "hidden"
        }`}
      >
        {data.name}
      </p>
    </div>
  );
};

export default SubscribedChannels;
