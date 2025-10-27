import { useContext, useState } from "react";
import Aside from "../components/Aside";
import Feed from "../components/Feed";
import { SearchContext } from "../contexts/SearchContext";
import SearchedContent from "../components/SearchedContent";
import { Theme } from "../contexts/Theme";
import AsideMobile from "../ui/AsideMobile";

function Home() {
  const [activeId, setActiveId] = useState(0);
  const [debouncedQuery] = useContext(SearchContext);
  const [isDark] = useContext(Theme);

  return (
    <div className="relative ">
      <div className="w-full absolute top-0 left-0 z-0 ">
        {!debouncedQuery && (
          <AsideMobile activeId={activeId} setActiveId={setActiveId} />
        )}

        <div className={`flex ${isDark ? "bg-feedDark" : "bg-gray-200"} `}>
          <Aside activeId={activeId} setActiveId={setActiveId} />
          {!debouncedQuery ? (
            <Feed categoryId={activeId} />
          ) : (
            <SearchedContent />
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
