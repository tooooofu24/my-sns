import { Text } from "@chakra-ui/react";
import { ReactNode } from "react";

export const Time = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontSize="xs" color="gray.500">
      {children}
    </Text>
  );
};
