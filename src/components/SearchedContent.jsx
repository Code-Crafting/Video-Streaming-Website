import { useContext, useEffect } from "react";
import FeedShrimmer from "../ui/Shrimmer/FeedShrimmer";
import { getRandomId } from "../lib/getRandomId";
import { SearchContext } from "../contexts/SearchContext";
import { useFetch } from "../hooks/useFetch";
import Card from "../ui/Card";

function SearchedContent() {
  const [debouncedQuery, setQuery] = useContext(SearchContext);
  const [data, fetchData] = useFetch(null);

  useEffect(() => {
    if (debouncedQuery) {
      fetchData(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${debouncedQuery}`
      );
    }
  }, [debouncedQuery]);

  return (
    <div className="2500px:w-[2200px] 2500px:mx-auto w-full sm:px-4 h-dvh overflow-y-auto no-scrollbar">
      <div className=" grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4 sm:pt-20 pt-16">
        {data ? (
          data
            .filter((el) => el.id.videoId)
            .map((el, i) => {
              const {
                snippet: {
                  channelTitle,
                  title,
                  thumbnails: {
                    high: { url },
                  },
                },
                id,
              } = el;

              return (
                <Card
                  key={i}
                  id={el.id.videoId}
                  categoryId={getRandomId([0, 20, 2, 17, 24, 28, 10, 22, 25])}
                  title={title}
                  channelTitle={channelTitle}
                  url={url}
                  fn={() => setQuery("")}
                />
              );
            })
        ) : (
          <>
            {Array.from({ length: 10 }).map((_, i) => (
              <FeedShrimmer key={i} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}
export default SearchedContent;
