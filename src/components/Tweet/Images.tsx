import { AspectRatio, Grid, GridItem } from "@chakra-ui/react";
import Image from "next/image";

import { ImageType } from "@/types/TweetType";

export const Images = ({ images }: { images: ImageType[] }) => {
  const repeat = images.length >= 3 ? 3 : 2;
  return (
    <Grid
      templateColumns={`repeat(${repeat}, 1fr)`}
      gap={1}
      paddingLeft="2.5rem"
      paddingRight="1rem"
    >
      {images.map((image) => (
        <GridItem key={image.url} w="100%">
          <AspectRatio ratio={1}>
            <Image
              src={image.url}
              alt=""
              height={100}
              width={100}
              style={{
                borderRadius: "0.4rem",
              }}
            />
          </AspectRatio>
        </GridItem>
      ))}
    </Grid>
  );
};
