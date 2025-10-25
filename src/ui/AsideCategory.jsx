import { useContext } from "react";
import { HideText } from "../contexts/HideText";

const AsideCategory = ({ data, setActiveId, activeId }) => {
  const [hideAsideText] = useContext(HideText);
  const { id, icon: Icon, name } = data;
  return (
    <div className="flex gap-4 items-center" id={id}>
      <div>
        <Icon
          className="relative text-xl cursor-pointer text-gray-600"
          onClick={() => setActiveId(id)}
        />
        <div
          className={`${
            activeId === data.id ? "absolute" : "hidden"
          }  w-[20px] h-[3px] bg-red-600 mt-1 rounded-sm  `}
        ></div>
      </div>

      <p
        onClick={() => setActiveId(id)}
        className={`hover:cursor-pointer text-gray-600 ${
          hideAsideText && "hidden"
        }`}
      >
        {name}
      </p>
    </div>
  );
};

export default AsideCategory;
