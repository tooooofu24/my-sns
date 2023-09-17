import { createStyles, Image, Modal } from "@mantine/core";
import { FC } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { ImageType } from "@/types/TweetType";

const useStyles = createStyles(() => ({
  swiper: {
    height: "100%",
    width: "100%",
  },
}));

type ImageModalProps = {
  opened: boolean;
  onClose: () => void;
  images: ImageType[];
  imageIndex: number;
};

export const ImageModal: FC<ImageModalProps> = ({
  opened,
  onClose,
  images,
  imageIndex,
}) => {
  const { classes } = useStyles();

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      centered
      withCloseButton={false}
      padding={0}
    >
      <Swiper
        className={classes.swiper}
        modules={[Navigation, Pagination]}
        color="gray"
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        centeredSlides
        autoHeight
        initialSlide={imageIndex}
      >
        {images.map((image, i) => (
          <SwiperSlide key={i}>
            <Image
              width="100%"
              height="100%"
              src={image.url}
              alt="投稿した画像"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Modal>
  );
};
