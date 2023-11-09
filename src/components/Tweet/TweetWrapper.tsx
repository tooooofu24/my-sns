import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

export const TweetWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Flex direction="column" paddingY={16} width="100%" paddingX={3} gap={4}>
      {children}
    </Flex>
  );
};
