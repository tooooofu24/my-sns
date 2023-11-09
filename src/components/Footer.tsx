import {
  Box,
  Container,
  Flex,
  IconButton,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa6";
import { useMutation } from "react-query";

import { SuccessModal } from "@/components/SuccessModal";
import { postComment } from "@/utils/postComment";

export function Footer() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const comment = e.currentTarget.comment.value;
    if (!comment) return;
    mutate(comment);
    e.currentTarget.comment.value = "";
  };

  const { mutate, isLoading } = useMutation(postComment, {
    onSuccess: () => onOpen(),
    onError: () => {
      alert(
        "コメントの投稿に失敗しました🥺\n陶也まで連絡してもらえると助かります！"
      );
    },
  });

  return (
    <>
      <Box
        width="100%"
        bottom={0}
        paddingY="0.75rem"
        borderTop="1px"
        borderTopColor="gray.200"
        position="fixed"
        backgroundColor="white"
        zIndex={1}
        as="form"
        onSubmit={onSubmit}
        paddingBottom="calc(0.75rem + env(safe-area-inset-bottom))"
      >
        <Container
          px={2}
          maxW="md"
          height="100%"
          display="flex"
          alignItems="center"
        >
          <Flex gap={2} width="100%">
            <Textarea
              placeholder="匿名でコメントできます！"
              rows={1}
              flex={1}
              name="comment"
            />
            <IconButton
              type="submit"
              variant="solid"
              aria-label="送信"
              icon={<FaPaperPlane />}
              isRound
              isLoading={isLoading}
            />
          </Flex>
        </Container>
      </Box>
      <SuccessModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}
