import { format } from "date-fns";
import { ja } from "date-fns/locale";
import { Badge } from "react-daisyui";

import { MyTweet } from "@/components/Tweet/MyTweet";
import { ReplyTweet } from "@/components/Tweet/ReplyTweet";
import { TweetType } from "@/types/TweetType";

type TweetProps = {
  tweet: TweetType;
  showDate: boolean;
};
export const Tweet = ({ tweet, showDate }: TweetProps) => {
  return (
    <>
      {showDate && (
        <div className="flex justify-center py-2">
          <Badge>
            {format(new Date(tweet.createdAt), "M月d日(E)", { locale: ja })}
          </Badge>
        </div>
      )}
      {!tweet.isReply && (
        <div className="py-2">
          <MyTweet tweet={tweet} />
        </div>
      )}
      {tweet.isReply && (
        <div className="py-2">
          <ReplyTweet tweet={tweet} />
        </div>
      )}
    </>
  );
};
