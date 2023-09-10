import { Container, createStyles, rem, Text } from "@mantine/core";

export const FOOTER_HEIGHT = rem(60);

const useStyles = createStyles(() => ({
  root: {
    height: FOOTER_HEIGHT,
    position: "fixed",
    bottom: 0,
    zIndex: 1,
    width: "100%",
    borderTop: "0.0625rem solid #e9ecef",
    backgroundColor: "#fff",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },
}));

export function Footer() {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.header}>
        <Text fz="sm" c="blue">
          テキストフィールドが入る予定です。
        </Text>
      </Container>
    </div>
  );
}
