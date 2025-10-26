import { useEffect } from "react";
import FeedShrimmer from "../ui/Shrimmer/FeedShrimmer";
import Card from "../ui/Card";
import { useFetch } from "../hooks/useFetch";

function Feed({ categoryId }) {
  const [data, fetchData] = useFetch(null);

  useEffect(() => {
    fetchData(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryId}`
    );
  }, [categoryId]);

  return (
    <div className="2500px:w-[2200px] 2500px:mx-auto w-full px-4 h-dvh overflow-y-auto no-scrollbar">
      <div className=" grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4 pt-20">
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
              />
            );
          })
        ) : (
          <>
            <FeedShrimmer />
            <FeedShrimmer />
            <FeedShrimmer />
            <FeedShrimmer />
            <FeedShrimmer />
            <FeedShrimmer />
            <FeedShrimmer />
            <FeedShrimmer />
            <FeedShrimmer />
          </>
        )}
      </div>
    </div>
  );
}

export default Feed;
