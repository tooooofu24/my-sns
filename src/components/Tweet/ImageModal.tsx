import Image from "next/image";
import { forwardRef } from "react";
import { Button, Carousel, Modal } from "react-daisyui";

import { ImageType } from "@/types/TweetType";

type ImageModalProps = {
  images: ImageType[];
};

export const ImageModal = forwardRef(
  ({ images }: ImageModalProps, ref: React.Ref<HTMLDialogElement>) => {
    return (
      <Modal ref={ref}>
        <Modal.Body>
          <Carousel className="w-full rounded-box flex items-center">
            {images.map((image) => (
              <Carousel.Item
                key={image.url}
                alt={image.url}
                className="rounded-box w-full max-h-[60vh] h-auto"
              >
                <Image
                  src={image.url}
                  alt="投稿した画像"
                  width={400}
                  height={400}
                  className="rounded-box w-auto h-auto max-w-full max-h-[60vh] object-contain mx-auto"
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
        <Modal.Actions>
          <form method="dialog">
            <Button>閉じる</Button>
          </form>
        </Modal.Actions>
      </Modal>
    );
  }
);
