import Image from "next/image";
import { memo } from "react";
import { Button, Carousel, Modal } from "react-daisyui";

import { ImageType } from "@/types/TweetType";

type ImageModalProps = {
  images: ImageType[];
  onClose: () => void;
};

export const ImageModal = memo(({ images, onClose }: ImageModalProps) => {
  return (
    <>
      <Modal.Body className="flex items-center justify-center">
        <Carousel
          className="rounded-box w-full align-middle items-center"
          snap="center"
        >
          {images.map((image) => (
            <Carousel.Item
              key={image.url}
              alt={image.url}
              className="rounded-box max-h-[65vh] h-auto w-auto max-w-full align-middle"
            >
              <Image
                src={image.url}
                alt="投稿した画像"
                width={400}
                height={400}
                className="rounded-box object-cover max-h-[65vh]"
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </Modal.Body>
      <Modal.Actions>
        <Button onClick={onClose}>閉じる</Button>
      </Modal.Actions>
    </>
  );
});
