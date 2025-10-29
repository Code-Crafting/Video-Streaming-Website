import { useEffect } from "react";
import PlayListShrimmer from "../ui/Shrimmer/PlaylistShrimmer";
import { useFetch } from "../hooks/useFetch";
import Card from "../ui/Card";
import { filterData } from "../lib/filterData";

function PlayList({ categoryId }) {
  const [data, fetchPlaylistData] = useFetch(categoryId);

  useEffect(() => {
    fetchPlaylistData(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=US&videoCategoryId=${categoryId}`
    );
  }, [categoryId]);

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-3 no-scrollbar lg:overflow-y-auto pb-2">
      {data ? (
        filterData(data).map((el, i) => {
          const {
            snippet: {
              channelTitle,
              title,
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
              fn={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              url={url}
              title={title}
              channelTitle={channelTitle}
              viewCount={viewCount}
              isFlexRow={true}
            />
          );
        })
      ) : (
        <>
          {Array.from({ length: 10 }).map((_, i) => (
            <PlayListShrimmer key={i} />
          ))}
        </>
      )}
    </div>
  );
}

export default PlayList;
