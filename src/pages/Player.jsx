import { useParams } from "react-router";
import { useContext, useEffect, useState } from "react";
import CommentSec from "../components/CommentSec";
import SearchedContent from "../components/SearchedContent";
import PlayList from "../components/PlayLIst";
import Video from "../ui/Video";
import { useFetch } from "../hooks/useFetch";
import VideoDetails from "../components/VideoDetails";
import ChannelDetails from "../components/ChannelDetails";
import { SearchContext } from "../contexts/SearchContext";
import { Theme } from "../contexts/Theme";

function Player() {
  const { id, categoryId } = useParams();
  const [videoDetails, fetchVideosData] = useFetch(null);
  const [channelDetails, fetchChannelData] = useFetch(null);
  const [commentsDetails, fetchCommentData] = useFetch(null);
  const [commentOn, setCommentOn] = useState(false);
  const [debouncedQuery] = useContext(SearchContext);
  const [isDark] = useContext(Theme);

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
    <div className={`${isDark ? "bg-primary" : "bg-white"}`}>
      {!debouncedQuery ? (
        <div
          className={`max-w-7xl lg:h-dvh mx-auto grid lg:grid-cols-[60%_40%] sm:pt-24 pt-18 gap-4 sm:px-6 ${
            isDark && "text-white"
          }`}
        >
          <div className="no-scrollbar lg:overflow-y-auto">
            {/* video */}
            <Video id={id} />

            {/* video details */}
            {videoDetails && (
              <VideoDetails
                data={videoDetails[0]}
                setCommentOn={setCommentOn}
              />
            )}

            <hr
              className={`mt-4 rounded-md ${
                isDark ? "text-secondary" : "text-gray-600"
              }`}
            />

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
                <p className="512px:text-md text-sm">
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
      ) : (
        <SearchedContent />
      )}
    </div>
  );
}

export default Player;
