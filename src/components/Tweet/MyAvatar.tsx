import { Avatar } from "@mantine/core";
import { FC } from "react";

export const MyAvatar: FC = () => {
  return (
    <Avatar
      src="/avatar.jpg"
      alt="とーや"
      size={35}
      radius="xl"
      style={{
        marginRight: "10px",
      }}
    />
  );
};
