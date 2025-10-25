import { useContext, useState } from "react";
import Aside from "../components/Aside";
import Feed from "../components/Feed";

function Home() {
  return (
    <>
      <div className="relative">
        <div className="absolute top-0 left-0 flex px-4 gap-4 z-0">
          <Aside />
          {/* <div className="848px:bg-gray-100 bg-white w-full h-dvh flex flex-wrap 848px:justify-start justify-center sm:pt-24 pt-20 pb-4 848px:pl-4 pl-0  gap-4  overflow-y-scroll no-scrollbar overscroll-auto">
            {!query ? (
              <Feed categoryId={id} />
            ) : (
              <SearchedContent
                debouncedQuery={debouncedQuery}
                setQuery={setQuery}
              />
            )}
          </div> */}

          {/* <Feed categoryId={id} /> */}
        </div>
      </div>
    </>
  );
}

export default Home;
