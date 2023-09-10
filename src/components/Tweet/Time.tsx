import { createStyles, Text } from "@mantine/core";
import { format } from "date-fns";
import { FC } from "react";

const useStyles = createStyles(() => ({
  root: {
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
    marginTop: "auto",
  },
}));

type TimeProps = {
  createdAt: string;
};

export const Time: FC<TimeProps> = ({ createdAt }) => {
  const { classes } = useStyles();
  return (
    <Text fz="xs" c="dimmed" px={4} className={classes.root}>
      {format(new Date(createdAt), "H:mm")}
    </Text>
  );
};
