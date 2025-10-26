import { useParams } from "react-router";
import { addViewsSuffix } from "../lib/addViewsSuffix";
import { getReadableDate } from "../lib/getReadableData";
import { useEffect, useState } from "react";
import CommentSec from "../components/CommentSec";
import SearchedContent from "../components/SearchedContent";
import { SearchContext } from "../contexts/SearchContext";
import PlayList from "../components/PlayLIst";
import Video from "../ui/Video";
import { TbArrowAutofitContent } from "react-icons/tb";
import { useFetch } from "../hooks/useFetch";
import VideoDetails from "../ui/VideoDetails";
import ChannelDetails from "../ui/ChannelDetails";

function Player() {
  const { id, categoryId } = useParams();

  const [videoDetails, fetchVideosData] = useFetch(null);
  const [channelDetails, fetchChannelData] = useFetch(null);
  const [commentsDetails, fetchCommentData] = useFetch(null);
  const [commentOn, setCommentOn] = useState(false);

  // getting video details
  useEffect(() => {
    fetchVideosData(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}`
    );
  }, [id]);

  // getting comment details
  useEffect(() => {
    if (commentOn) {
      fetchCommentData(
        `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2C%20replies&maxResults=50&videoId=${id}`
      );
    }
  }, [commentOn]);

  // getting channel details
  useEffect(() => {
    if (videoDetails) {
      fetchChannelData(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${videoDetails[0].snippet.channelId}`
      );
    }
  }, [videoDetails]);

  return (
    <>
      <div className="max-w-7xl mx-auto h-dvh grid lg:grid-cols-[60%_40%] sm:pt-24 pt-20 gap-4 sm:px-6">
        <div className="lg:overflow-y-scroll no-scrollbar lg:overscroll-auto">
          {/* video */}
          <Video id={id} />

          {/* video details */}
          {videoDetails && (
            <VideoDetails data={videoDetails[0]} setCommentOn={setCommentOn} />
          )}

          <hr className={`mt-4 rounded-md text-gray-600`} />

          {/* channelDetails */}
          {channelDetails && (
            <ChannelDetails
              data={channelDetails[0]}
              videoDetails={videoDetails[0]}
            />
          )}

          {/* comment section */}
          {commentsDetails && (
            <div className="448px:ml-14 ml-2 mt-4 pb-2 448px:pr-0 pr-2">
              <p className="448px:text-[16px] text-[12px]">
                {videoDetails
                  ? videoDetails[0].snippet.description.slice(0, 250) + "..."
                  : ""}
              </p>

              {commentOn && (
                <CommentSec
                  videoDetails={videoDetails[0]}
                  commentsDetails={commentsDetails}
                />
              )}
            </div>
          )}
        </div>

        <PlayList categoryId={categoryId} />
      </div>
      {/* <SearchedContent
            debouncedQuery={debouncedQuery}
            setQuery={setQuery}
          /> */}
    </>
  );
}

export default Player;
