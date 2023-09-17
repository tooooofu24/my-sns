import { AspectRatio, createStyles, Grid } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Image from "next/image";
import { FC, useState } from "react";

import { ImageModal } from "@/components/Tweet/ImageModal";
import { ImageType } from "@/types/TweetType";

const useStyles = createStyles((theme) => ({
  image: {
    borderRadius: theme.radius.md,
    width: "100%",
    height: "100%",
    cursor: "pointer",
  },
}));

type ImageProps = {
  images: ImageType[];
};

export const Images: FC<ImageProps> = ({ images }) => {
  const { classes } = useStyles();
  const [opened, { open, close }] = useDisclosure(false);
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <>
      <Grid gutter={5}>
        {images.map((image, i) => (
          <Grid.Col span={5} key={i} onClick={() => setImageIndex(i)}>
            <AspectRatio ratio={1}>
              <Image
                src={image.url}
                alt="画像"
                width={300}
                height={300}
                className={classes.image}
                onClick={open}
              />
            </AspectRatio>
          </Grid.Col>
        ))}
      </Grid>
      <ImageModal
        opened={opened}
        onClose={close}
        images={images}
        imageIndex={imageIndex}
      />
    </>
  );
};
