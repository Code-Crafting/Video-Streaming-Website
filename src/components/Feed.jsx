import { useContext, useEffect } from "react";
import FeedShrimmer from "../ui/Shrimmer/FeedShrimmer";
import Card from "../ui/Card";
import { useFetch } from "../hooks/useFetch";
import { SearchContext } from "../contexts/SearchContext";
import { Theme } from "../contexts/Theme";

function Feed({ categoryId }) {
  const [data, fetchData] = useFetch(null);
  const [, , setShowMenubar] = useContext(SearchContext);

  useEffect(() => {
    fetchData(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryId}`
    );
  }, [categoryId]);

  return (
    <div className="2500px:w-[2200px] 2500px:mx-auto w-full sm:px-4 h-dvh overflow-y-auto no-scrollbar">
      <div className=" grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4 sm:pt-20 pt-16">
        {data ? (
          data.map((el) => {
            const {
              snippet: {
                channelTitle,
                title,
                publishedAt,
                thumbnails: {
                  high: { url },
                },
              },
              statistics: { viewCount },
              id,
            } = el;

            return (
              <Card
                key={id}
                id={id}
                categoryId={el.snippet.categoryId}
                url={url}
                title={title}
                channelTitle={channelTitle}
                viewCount={viewCount}
                publishedAt={publishedAt}
                fn={() => setShowMenubar(false)}
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

export default Feed;
