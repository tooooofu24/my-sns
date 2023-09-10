import { Avatar, createStyles } from "@mantine/core";
import { FC } from "react";

import { Balloon } from "@/components/Tweet/Balloon";
import { Images } from "@/components/Tweet/Images";
import { TweetType } from "@/types/TweetType";

const useStyles = createStyles((theme) => ({
  root: {
    display: "flex",
    gap: theme.spacing.xs,
  },

  reply: {
    display: "flex",
    justifyContent: "flex-end",
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
          <Avatar src="/avatar.jpg" alt="とーや" size={35} radius="xl" />
          <div style={{ flex: 1 }}>
            <Images images={images} />
          </div>
        </div>
      ) : null}
      <div className={classes.root}>
        <Avatar src="/avatar.jpg" alt="とーや" size={35} radius="xl" />
        {text ? <Balloon text={text} createdAt={createdAt} /> : null}
      </div>
    </>
  );
};

const Reply: FC<TweetProps> = ({ tweet }) => {
  const { classes } = useStyles();
  const { text, createdAt, isReply } = tweet;
  return (
    <div className={classes.reply}>
      <Balloon text={text ?? ""} createdAt={createdAt} isReply={isReply} />
    </div>
  );
};
