import { useEffect } from "react";
import PlayListShrimmer from "../ui/Shrimmer/PlaylistShrimmer";
import { useFetch } from "../hooks/useFetch";
import Card from "../ui/Card";
import { categoryIds } from "../constants/categoryIds";

function PlayList({ categoryId }) {
  const [data, fetchPlaylistData] = useFetch(categoryId);

  useEffect(() => {
    fetchPlaylistData(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=US&videoCategoryId=${categoryId}`
    );
  }, [categoryId]);

  const handleFilter = (d) => {
    const filterdData = d.filter((el) =>
      categoryIds.some((id) => id === el.snippet.categoryId)
    );
    return filterdData;
  };

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-3 no-scrollbar lg:overflow-y-auto pb-2">
      {data ? (
        handleFilter(data).map((el, i) => {
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
