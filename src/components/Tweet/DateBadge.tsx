import { Tag } from "@chakra-ui/react";
import { ReactNode } from "react";

export const DateBadge = ({ children }: { children: ReactNode }) => {
  return (
    <Tag colorScheme="gray" size="sm">
      {children}
    </Tag>
  );
};
