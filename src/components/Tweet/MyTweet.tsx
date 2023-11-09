import { Box, Flex } from "@chakra-ui/react";
import { format } from "date-fns";
import { ja } from "date-fns/locale";

import { MyAvatar } from "@/components/MyAvatar";
import { Balloon } from "@/components/Tweet/Balloon";
import { Images } from "@/components/Tweet/Images";
import { Time } from "@/components/Tweet/Time";
import { TweetType } from "@/types/TweetType";

export const MyTweet = ({ tweet }: { tweet: TweetType }) => {
  return (
    <Flex flexDir="column" gap={2}>
      {tweet.images?.length ? (
        <Flex gap={2}>
          <MyAvatar />
          <Images images={tweet.images} />
        </Flex>
      ) : null}
      <Flex gap={2}>
        <MyAvatar />
        <Box maxW="70%">
          <Balloon text={tweet.text} />
        </Box>
        <Flex alignItems="end">
          <Time>
            {format(new Date(tweet.createdAt), "H:mm", { locale: ja })}
          </Time>
        </Flex>
      </Flex>
    </Flex>
  );
};
