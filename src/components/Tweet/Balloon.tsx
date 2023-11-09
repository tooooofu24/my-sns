import clsx from "clsx";
import { FC } from "react";

import { MyAvatar } from "@/components/MyAvatar";
import { TweetType } from "@/types/TweetType";

type BalloonProps = {
  tweet: TweetType;
};

export const Balloon: FC<BalloonProps> = ({ tweet }) => {
  const { text, isReply } = tweet;
  return (
    <div className={clsx("chat", isReply ? "chat-end" : "chat-start")}>
      {!isReply && (
        <div className="chat-image avatar">
          <div className="w-9 rounded-full">
            <MyAvatar />
          </div>
        </div>
      )}
      <div className="chat-bubble flex items-center max-w-full">
        <p className="whitespace-pre-wrap break-all text-sm">{text}</p>
      </div>
    </div>
  );
};
