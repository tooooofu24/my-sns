import { createStyles, Paper, Text } from "@mantine/core";
import { FC } from "react";

const useStyles = createStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },

  balloon: {
    width: "fit-content",
  },

  balloonLeft: {
    borderTopLeftRadius: 0,
  },

  balloonRight: {
    borderTopRightRadius: 0,
  },

  text: {
    width: "fit-content",
    whiteSpace: "pre-wrap",
    wordWrap: "break-word",
    wordBreak: "break-all",
  },

  textAlignRight: {
    textAlign: "right",
  },
}));

type BalloonProps = {
  text: string;
  isReply?: boolean;
};

export const Balloon: FC<BalloonProps> = ({ text, isReply }) => {
  const { classes, cx } = useStyles();
  return (
    <div className={classes.root}>
      <Paper
        withBorder
        radius="md"
        p="sm"
        className={cx(
          classes.balloon,
          isReply ? classes.balloonRight : classes.balloonLeft,
        )}
      >
        <Text fz="sm" className={classes.text}>
          {text}
        </Text>
      </Paper>
    </div>
  );
};
