import { AspectRatio } from "@chakra-ui/react";
import Image from "next/image";

export const MyAvatar = () => {
  return (
    <AspectRatio ratio={1} width={35} height={35}>
      <Image
        src="/avatar.jpg"
        alt="千葉陶也"
        height={35}
        width={35}
        style={{
          borderRadius: "100%",
        }}
      />
    </AspectRatio>
  );
};
