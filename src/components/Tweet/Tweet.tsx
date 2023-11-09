import { Flex } from "@chakra-ui/react";
import { format } from "date-fns";
import { ja } from "date-fns/locale";

import { DateBadge } from "@/components/Tweet/DateBadge";
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
        <Flex justifyContent="center">
          <DateBadge>
            {format(new Date(tweet.createdAt), "M月d日(E)", { locale: ja })}
          </DateBadge>
        </Flex>
      )}
      {!tweet.isReply && <MyTweet tweet={tweet} />}
      {tweet.isReply && <ReplyTweet tweet={tweet} />}
    </>
  );
};
