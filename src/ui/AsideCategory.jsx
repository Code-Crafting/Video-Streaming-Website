import { category } from "../constants/category";

const AsideCategory = ({ setId, setActiveId, activeId }) => {
  return (
    <div>
      {category.map((el, i) => {
        const { id, name, icon: Icon } = el;
        return (
          <div className="flex gap-4 items-center" key={i} id={el.id}>
            <div className="w-[24px]">
              <Icon
                className="w-[20px] aspect-square hover:cursor-pointer"
                onClick={() => {
                  setId(id);
                  setActiveId(id);
                }}
              />
              <div
                className={`${
                  activeId === el.id ? "absolute" : ""
                } h-[2px] bg-red-600 mt-1 rounded-sm  `}
              ></div>
            </div>

            {hideAsideText ? (
              ""
            ) : (
              <div className="w-[208px]">
                <p
                  onClick={(e) => {
                    setId(el.id);
                    setActiveId(el.id);
                  }}
                  className="hover:cursor-pointer text-gray-600"
                >
                  {el.name}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default AsideCategory;
