import { Virtuoso } from "react-virtuoso";

import { Tweet } from "@/components/Tweet/Tweet";
import { TweetType } from "@/types/TweetType";

type Props = {
  tweets: TweetType[];
};

export const Test = ({ tweets }: Props) => {
  return (
    <div className="container max-w-md px-3 py-16 mx-auto h-full">
      <Virtuoso
        className="flex flex-col gap-4 w-full"
        totalCount={tweets.length}
        initialTopMostItemIndex={tweets.length - 1}
        itemContent={(index) => (
          <Tweet tweet={tweets[index]} showDate={false} />
        )}
      />
    </div>
  );
};
