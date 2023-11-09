import { AspectRatio, Grid, GridItem, useDisclosure } from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";

import { ImageModal } from "@/components/Tweet/ImageModal";
import { ImageType } from "@/types/TweetType";

export const Images = ({ images }: { images: ImageType[] }) => {
  const repeat = images.length >= 3 ? 3 : 2;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [imageIndex, setImageIndex] = useState(0);

  const onClick = (index: number) => {
    setImageIndex(index);
    onOpen();
  };

  return (
    <>
      <Grid
        templateColumns={`repeat(${repeat}, 1fr)`}
        gap={1}
        flex={1}
        paddingRight="1rem"
      >
        {images.map((image, i) => (
          <GridItem key={image.url} w="100%">
            <AspectRatio ratio={1} onClick={() => onClick(i)} cursor="pointer">
              <Image
                src={image.url}
                alt=""
                height={100}
                width={100}
                style={{
                  borderRadius: "0.35rem",
                }}
              />
            </AspectRatio>
          </GridItem>
        ))}
      </Grid>
      <ImageModal
        isOpen={isOpen}
        onClose={onClose}
        images={images}
        index={imageIndex}
      />
    </>
  );
};
