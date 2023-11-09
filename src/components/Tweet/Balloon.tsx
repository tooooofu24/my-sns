import { Card, CardBody, Text } from "@chakra-ui/react";
import { FC } from "react";

type BalloonProps = {
  text: string;
  isReply?: boolean;
};

export const Balloon: FC<BalloonProps> = ({ text, isReply }) => {
  return (
    <Card
      variant="outline"
      borderWidth={1}
      borderRadius="0.5rem"
      {...(!isReply && { borderTopLeftRadius: 0 })}
      {...(isReply && { borderTopRightRadius: 0 })}
    >
      <CardBody padding={3}>
        <Text fontSize="sm" whiteSpace="pre-wrap" wordBreak="break-all">
          {text}
        </Text>
      </CardBody>
    </Card>
  );
};
