import { AspectRatio, createStyles, Grid } from "@mantine/core";
import Image from "next/image";
import { FC } from "react";

import { ImageType } from "@/types/TweetType";

const useStyles = createStyles((theme) => ({
  image: {
    borderRadius: theme.radius.md,
    width: "100%",
    height: "100%",
  },
}));

type ImageProps = {
  images: ImageType[];
};

export const Images: FC<ImageProps> = ({ images }) => {
  const { classes } = useStyles();
  return (
    <Grid gutter={5}>
      {images.map((image, i) => (
        <Grid.Col span={5} key={i}>
          <AspectRatio ratio={1 / 1}>
            <Image
              src={image.url}
              alt="画像"
              width={300}
              height={300}
              className={classes.image}
            />
          </AspectRatio>
        </Grid.Col>
      ))}
    </Grid>
  );
};
