import { useContext } from "react";
import { HideText } from "../contexts/HideText";
import { Theme } from "../contexts/Theme";

const AsideCategory = ({ data, setActiveId, activeId }) => {
  const [hideAsideText] = useContext(HideText);
  const [isDark] = useContext(Theme);
  const { id, icon: Icon, name } = data;
  return (
    <div className="flex gap-4 items-center" id={id}>
      <div className="relative">
        <Icon
          className={`text-xl cursor-pointer ${
            isDark ? "text-white" : "text-gray-600"
          }`}
          onClick={() => setActiveId(id)}
        />
        <div
          className={`${
            activeId === data.id ? "absolute" : "hidden"
          }  w-[20px] h-[3px] bg-red-600 mt-1 rounded-sm -bottom-1 left-0`}
        ></div>
      </div>

      <p
        onClick={() => setActiveId(id)}
        className={`hover:cursor-pointer ${
          isDark ? "text-white" : "text-gray-600"
        } ${hideAsideText && "hidden"}`}
      >
        {name}
      </p>
    </div>
  );
};

export default AsideCategory;
