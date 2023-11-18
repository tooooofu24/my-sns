import { format } from "date-fns";
import { ja } from "date-fns/locale";

import { Balloon } from "@/components/Tweet/Balloon";
import { Time } from "@/components/Tweet/Time";
import { TweetType } from "@/types/TweetType";

export const ReplyTweet = ({ tweet }: { tweet: TweetType }) => {
  const { publishedAt } = tweet;
  return (
    <div className="flex items-end gap-2 justify-end">
      <Time>{format(new Date(publishedAt), "H:mm", { locale: ja })}</Time>
      <div className="max-w-[80%]">
        <Balloon tweet={tweet} />
      </div>
    </div>
  );
};
