import tom from "../assets/subscriber/tom.png";
import simon from "../assets/subscriber/simon.png";
import megan from "../assets/subscriber/megan.png";
import cameron from "../assets/subscriber/cameron.png";
import jack from "../assets/subscriber/jack.png";

import { useState } from "react";
import AsideCategory from "../ui/AsideCategory";

function Aside({ setId, hideAsideText }) {
  const [activeId, setActiveId] = useState(0);

  const suscribed = [
    { name: "PewDiePie", img: jack },
    { name: "MrBeast", img: simon },
    { name: "Justin Bieber", img: tom },
    { name: "5-Minute Crafts", img: megan },
    { name: "Nas Daily", img: cameron },
  ];

  // const category = [0, 20, 2, 17, 24, 28, 10, 22, 25];

  return (
    <div
      className={`h-dvh flex pt-20 pb-4 flex-col gap-4 overflow-y-scroll no-scrollbar overscroll-auto 848px:flex hidden`}
    >
      <AsideCategory
        setId={setId}
        setActiveId={setActiveId}
        activeId={activeId}
      />

      <hr className="text-gray-600" />

      <p className="text-gray-600 tracking-wide font-medium">
        {hideAsideText ? "" : "SUBSCRIBED"}
      </p>

      <div className="flex flex-col gap-4 justify-center">
        {suscribed.map((el, i) => (
          <div className="flex gap-4 items-center" key={i}>
            <img
              src={el.img}
              alt="name"
              className="w-[24px] h-[24px] rounded-full"
            />
            <p className="hover:cursor-pointer text-gray-600">
              {hideAsideText ? "" : el.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Aside;
