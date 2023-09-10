import { createStyles } from "@mantine/core";
import { FC } from "react";

import { Balloon } from "@/components/Tweet/Balloon";
import { Images } from "@/components/Tweet/Images";
import { MyAvatar } from "@/components/Tweet/MyAvatar";
import { Time } from "@/components/Tweet/Time";
import { TweetType } from "@/types/TweetType";

const useStyles = createStyles(() => ({
  root: {
    display: "flex",
  },

  reply: {
    display: "flex",
    justifyContent: "flex-end",
  },

  content: {
    width: "fit-content",
    maxWidth: "70%",
  },
}));

type TweetProps = {
  tweet: TweetType;
};

export const Tweet: FC<TweetProps> = ({ tweet }) => {
  const { classes } = useStyles();
  const { text, createdAt, isReply, images } = tweet;
  if (isReply) {
    return <Reply tweet={tweet} />;
  }
  return (
    <>
      {images?.length ? (
        <div className={classes.root}>
          <MyAvatar />
          <div
            style={{
              flex: 1,
            }}
          >
            <Images images={images} />
          </div>
        </div>
      ) : null}
      <div className={classes.root}>
        <MyAvatar />
        <div className={classes.content}>
          <Balloon text={text} />
        </div>
        <Time createdAt={createdAt} />
      </div>
    </>
  );
};

const Reply: FC<TweetProps> = ({ tweet }) => {
  const { classes } = useStyles();
  const { text, isReply, createdAt } = tweet;
  return (
    <div>
      <div className={classes.reply}>
        <Time createdAt={createdAt} />
        <div className={classes.content}>
          <Balloon text={text ?? ""} isReply={isReply} />
        </div>
      </div>
    </div>
  );
};
