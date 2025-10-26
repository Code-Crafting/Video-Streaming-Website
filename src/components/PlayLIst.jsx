import { useEffect } from "react";
import { Link } from "react-router";
import { addViewsSuffix } from "../lib/addViewsSuffix";
import PlayListShrimmer from "../ui/Shrimmer/PlaylistShrimmer";
import { useFetch } from "../hooks/useFetch";

function PlayList({ categoryId }) {
  const [data, fetchPlaylistData] = useFetch();

  useEffect(() => {
    fetchPlaylistData(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=US&videoCategoryId=${categoryId}`
    );
  }, [categoryId]);

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-3 no-scrollbar lg:overflow-y-auto pb-2">
      {data ? (
        data.map((el) => {
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
            <Link
              to={`/player/${id}/${el.snippet.categoryId}`}
              key={id}
              className="flex lg:flex-row flex-col lg:items-center items-start gap-4 w-full"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <div className="lg:w-1/2 w-full aspect-video sm:rounded-sm  overflow-hidden">
                <img
                  src={url}
                  alt="thumbnails"
                  className="w-full h-full hover:cursor-pointer"
                />
              </div>
              <div className="lg:w-1/2 flex flex-col items-between lg:mt-4 mt-0 gap-1 448px:pl-0 pl-2 break-all">
                <h1 className="font-bold">{title}</h1>
                <p className="font-medium tracking-wide">{channelTitle}</p>
                <div className="flex gap-4">
                  <p>{addViewsSuffix(viewCount ? viewCount : 0)} views</p>
                </div>
              </div>
            </Link>
          );
        })
      ) : (
        <>
          <PlayListShrimmer />
          <PlayListShrimmer />
          <PlayListShrimmer />
          <PlayListShrimmer />
          <PlayListShrimmer />
          <PlayListShrimmer />
          <PlayListShrimmer />
          <PlayListShrimmer />
          <PlayListShrimmer />
          <PlayListShrimmer />
          <PlayListShrimmer />
          <PlayListShrimmer />
        </>
      )}
    </div>
  );
}

export default PlayList;
