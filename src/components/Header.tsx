import {
  Container,
  createStyles,
  Header as MantineHeader,
  rem,
} from "@mantine/core";
import { MantineLogo } from "@mantine/ds";

export const HEADER_HEIGHT = rem(60);

const useStyles = createStyles(() => ({
  root: {
    position: "fixed",
    top: 0,
    zIndex: 1,
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },
}));

export function Header() {
  const { classes } = useStyles();

  return (
    <MantineHeader height={HEADER_HEIGHT} mb={120} className={classes.root}>
      <Container className={classes.header}>
        <MantineLogo size={28} />
      </Container>
    </MantineHeader>
  );
}
