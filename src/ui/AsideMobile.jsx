import { useContext } from "react";
import { category } from "../constants/category";
import { Theme } from "../contexts/Theme";
const AsideMobile = ({ activeId, setActiveId }) => {
  const [isDark] = useContext(Theme);

  const getCategoryColor = (id) => {
    if (isDark) {
      return activeId === id
        ? "bg-white text-primary"
        : "bg-feedDark text-white";
    } else {
      return activeId === id
        ? "bg-feedDark text-white"
        : "bg-gray-200 text-primary";
    }
  };
  return (
    <div
      className={`md:hidden flex ${
        isDark ? "bg-primary" : "bg-white"
      }  items-center gap-2 sm:px-4 px-2 sm:pt-18 448px:pt-16 pt-15 pb-4 overflow-x-auto no-scrollbar`}
    >
      {category.map((el) => {
        return (
          <div
            key={el.id}
            className={`w-max px-4 py-1 rounded-md font-semibold  ${getCategoryColor(
              el.id
            )}`}
            onClick={() => setActiveId(el.id)}
          >
            {el.name}
          </div>
        );
      })}
    </div>
  );
};

export default AsideMobile;
