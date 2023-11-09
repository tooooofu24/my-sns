import { Container, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

export const TweetWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Container
      maxW="md"
      paddingY="4rem"
      paddingX={3}
      paddingBottom="calc(4rem + env(safe-area-inset-bottom))"
    >
      <Flex direction="column" width="100%" gap={4}>
        {children}
      </Flex>
    </Container>
  );
};
