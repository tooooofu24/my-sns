import { createStyles, Paper, Text } from "@mantine/core";
import { FC } from "react";

const useStyles = createStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "75%",
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
  },

  textAlignRight: {
    textAlign: "right",
  },
}));

type BalloonProps = {
  text: string;
  createdAt: string;
  isReply?: boolean;
};

export const Balloon: FC<BalloonProps> = ({ text, isReply }) => {
  const { classes, cx } = useStyles();
  return (
    <div className={classes.root}>
      <Paper
        shadow="xs"
        radius="md"
        p="sm"
        className={cx(
          classes.balloon,
          isReply ? classes.balloonRight : classes.balloonLeft
        )}
      >
        <Text fz="sm" className={classes.text}>
          {text}
        </Text>
      </Paper>
    </div>
  );
};
