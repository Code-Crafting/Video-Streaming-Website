import { addViewsSuffix } from "../lib/addViewsSuffix";

const ChannelDetails = ({ data, videoDetails }) => {
  return (
    <div className="flex items-center justify-between mt-4 sm:px-0 px-2 gap-4">
      <div className="flex gap-3 items-center">
        {data ? (
          <img
            src={data.snippet.thumbnails.high.url}
            alt="youtuber pic"
            className="sm:w-[48px] sm:h-[48px] w-[32px] h-[32px] rounded-full "
          />
        ) : (
          <div className="sm:w-[48px] sm:h-[48px] w-[32px] h-[32px] rounded-full bg-gray-500"></div>
        )}

        <div>
          <h1 className="font-bold 448px:text-lg text-sm">
            {videoDetails.snippet.channelTitle}
          </h1>
          <p className="448px:text-[16px] text-[12px]">
            {addViewsSuffix(data ? data.statistics.subscriberCount : 0)}
          </p>
        </div>
      </div>

      <div className="bg-red-500 text-white h-max sm:px-8 px-4 py-1 rounded-md hover:cursor-pointer sm:text-[16px] text-[12px]">
        Subscribe
      </div>
    </div>
  );
};

export default ChannelDetails;
