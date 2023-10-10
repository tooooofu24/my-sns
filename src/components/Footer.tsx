import { ActionIcon, Container, createStyles, Textarea } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { FaPaperPlane } from "react-icons/fa6";
import { useMutation } from "react-query";

import { SubmitModal } from "@/components/SubmitModal";
import { postComment } from "@/utils/postComment";

const useStyles = createStyles(() => ({
  root: {
    padding: "0.5rem",
    position: "fixed",
    bottom: 0,
    zIndex: 1,
    width: "100%",
    borderTop: "0.0625rem solid #e9ecef",
    backgroundColor: "#fff",
    paddingBottom: "calc(0.5rem + env(safe-area-inset-bottom))",
  },

  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    paddingLeft: "0",
    paddingRight: "0",
    gap: "0.25rem",
  },
  icon: {
    fontSize: "1.25rem",
  },
}));

export function Footer() {
  const { classes } = useStyles();
  const [isOpen, { open, close }] = useDisclosure(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const comment = e.currentTarget.comment.value;
    if (!comment) return;
    open();
    mutate(comment);
    e.currentTarget.comment.value = "";
  };

  const { mutate, isLoading } = useMutation(postComment, {
    onError: () => {
      close();
      alert(
        "コメントの投稿に失敗しました🥺\n陶也まで連絡してもらえると助かります！"
      );
    },
  });

  return (
    <>
      <form onSubmit={onSubmit} className={classes.root}>
        <Container className={classes.footer}>
          <Textarea
            autosize
            w="100%"
            placeholder="匿名でコメントできます！"
            minRows={1}
            maxRows={8}
            style={{ flex: 1 }}
            name="comment"
          />
          <ActionIcon
            type="submit"
            size={40}
            color="blue"
            className={classes.icon}
          >
            <FaPaperPlane />
          </ActionIcon>
        </Container>
      </form>
      <SubmitModal isLoading={isLoading} isOpen={isOpen} onClose={close} />
    </>
  );
}
