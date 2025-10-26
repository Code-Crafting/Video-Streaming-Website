import { useContext, useState } from "react";
import Aside from "../components/Aside";
import Feed from "../components/Feed";
import { SearchContext } from "../contexts/SearchContext";
import SearchedContent from "../components/SearchedContent";

function Home() {
  const [activeId, setActiveId] = useState(0);
  const [debouncedQuery] = useContext(SearchContext);

  return (
    <div className="relative ">
      <div className="w-full absolute top-0 left-0 z-0 ">
        <div className="flex bg-gray-200 ">
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
