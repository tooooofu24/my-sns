import { Box, Container } from "@chakra-ui/react";

export function Footer() {
  // const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const comment = e.currentTarget.comment.value;
  //   if (!comment) return;
  //   mutate(comment);
  //   e.currentTarget.comment.value = "";
  // };

  // const { mutate, isLoading } = useMutation(postComment, {
  //   onError: () => {
  //     close();
  //     alert(
  //       "コメントの投稿に失敗しました🥺\n陶也まで連絡してもらえると助かります！"
  //     );
  //   },
  // });

  return (
    <>
      <Box
        width="100%"
        height={16}
        bottom={0}
        borderTop="1px"
        borderTopColor="gray.200"
        position="fixed"
        backgroundColor="white"
        zIndex={1}
      >
        <Container height="100%" display="flex" alignItems="center">
          千葉陶也 BLOG
        </Container>
      </Box>
    </>
  );
}
