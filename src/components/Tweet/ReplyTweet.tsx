import { Box, Flex } from "@chakra-ui/react";
import { format } from "date-fns";
import { ja } from "date-fns/locale";

import { Balloon } from "@/components/Tweet/Balloon";
import { Time } from "@/components/Tweet/Time";
import { TweetType } from "@/types/TweetType";

export const ReplyTweet = ({ tweet }: { tweet: TweetType }) => {
  return (
    <Flex gap={2} justifyContent="end">
      <Flex alignItems="end">
        <Time>{format(new Date(tweet.createdAt), "H:mm", { locale: ja })}</Time>
      </Flex>
      <Box maxW="70%">
        <Balloon text={tweet.text} isReply />
      </Box>
    </Flex>
  );
};
