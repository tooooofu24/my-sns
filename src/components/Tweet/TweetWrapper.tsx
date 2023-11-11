import { format } from "date-fns";
import { Virtuoso } from "react-virtuoso";

import { Tweet } from "@/components/Tweet/Tweet";
import { TweetType } from "@/types/TweetType";

type TweetWrapperProps = {
  tweets: TweetType[];
};

export const TweetWrapper = ({ tweets }: TweetWrapperProps) => {
  return (
    <div className="container max-w-md px-3 py-16 mx-auto h-full">
      <Virtuoso
        totalCount={tweets.length}
        initialTopMostItemIndex={tweets.length - 1}
        itemContent={(index) => (
          <Tweet tweet={tweets[index]} showDate={showDate(tweets, index)} />
        )}
      />
    </div>
  );
};

const showDate = (tweets: TweetType[], index: number) => {
  const tweet = tweets[index];
  const prev = tweets[index - 1];
  const currentDate = new Date(tweet.createdAt);
  const prevDate = new Date(prev?.createdAt ?? null);
  const showDate =
    format(currentDate, "yyyy-MM-dd") != format(prevDate, "yyyy-MM-dd");
  return showDate;
};
