import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { ImageType } from "@/types/TweetType";

type ImageModalProps = {
  isOpen: boolean;
  onClose: () => void;
  images: ImageType[];
  index: number;
};

export const ImageModal = ({
  isOpen,
  onClose,
  images,
  index,
}: ImageModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="full">
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody
          p={0}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Swiper
            modules={[Navigation, Pagination]}
            color="gray"
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            centeredSlides
            initialSlide={index}
          >
            {images.map((image, i) => (
              <SwiperSlide
                key={i}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  width={400}
                  height={400}
                  src={image.url}
                  alt="投稿した画像"
                  style={{
                    flex: 1,
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
