import { FC } from "react";
import { ChatBubble } from "react-daisyui";

import { MyAvatar } from "@/components/MyAvatar";
import { TweetType } from "@/types/TweetType";

type BalloonProps = {
  tweet: TweetType;
};

export const Balloon: FC<BalloonProps> = ({ tweet }) => {
  const { text, isReply } = tweet;
  return (
    <ChatBubble end={isReply}>
      {!isReply && (
        <ChatBubble.Avatar>
          <div className="w-9 rounded-full">
            <MyAvatar />
          </div>
        </ChatBubble.Avatar>
      )}
      <ChatBubble.Message className="max-w-full flex items-center">
        <p className="whitespace-pre-wrap break-all text-sm">{text}</p>
      </ChatBubble.Message>
    </ChatBubble>
  );
};
