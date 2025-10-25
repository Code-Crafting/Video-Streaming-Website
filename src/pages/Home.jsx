import { useContext, useState } from "react";
import Aside from "../components/Aside";
import Feed from "../components/Feed";
import { HideText } from "../contexts/HideText";

function Home() {
  const [hideAsideText] = useContext(HideText);
  const [activeId, setActiveId] = useState(0);

  return (
    <div className="relative ">
      <div className="w-full absolute top-0 left-0 z-0 ">
        <div className="flex bg-gray-200 ">
          <Aside activeId={activeId} setActiveId={setActiveId} />
          <Feed categoryId={activeId} />
        </div>
      </div>
    </div>
  );
}

export default Home;
