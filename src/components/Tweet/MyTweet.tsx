import { format } from "date-fns";
import { ja } from "date-fns/locale";

import { Balloon } from "@/components/Tweet/Balloon";
import { Images } from "@/components/Tweet/Images";
import { Time } from "@/components/Tweet/Time";
import { TweetType } from "@/types/TweetType";

export const MyTweet = ({ tweet }: { tweet: TweetType }) => {
  const { createdAt } = tweet;
  return (
    <div className="flex gap-1 flex-col">
      {tweet.images?.length ? (
        <div className="pl-12 pr-6 w-full">
          <Images images={tweet.images} />
        </div>
      ) : null}
      <div className="flex items-end gap-2">
        <div className="max-w-[80%]">
          <Balloon tweet={tweet} />
        </div>
        <Time>{format(new Date(createdAt), "H:mm", { locale: ja })}</Time>
      </div>
    </div>
  );
};
