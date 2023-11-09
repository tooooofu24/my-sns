import Image from "next/image";

export const MyAvatar = () => {
  return (
    <Image
      src="/avatar.jpg"
      alt="千葉陶也"
      height={35}
      width={35}
      style={{
        borderRadius: "100%",
      }}
    />
  );
};
