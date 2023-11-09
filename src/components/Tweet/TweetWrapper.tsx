import { Container, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

export const TweetWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Container maxW="md" paddingY={16} paddingX={3}>
      <Flex direction="column" width="100%" gap={4}>
        {children}
      </Flex>
    </Container>
  );
};
