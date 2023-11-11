import clsx from "clsx";
import Image from "next/image";
import { Modal } from "react-daisyui";

import { ImageModal } from "@/components/Tweet/ImageModal";
import { ImageType } from "@/types/TweetType";

export const Images = ({ images }: { images: ImageType[] }) => {
  const gridCols = images.length >= 3 ? "grid-cols-3" : "grid-cols-2";

  const { Dialog, handleShow, handleHide } = Modal.useDialog();

  return (
    <>
      <div className={clsx("grid gap-1", gridCols)}>
        {images.map((image) => (
          <Image
            key={image.url}
            src={image.url}
            alt={image.url}
            height={100}
            width={100}
            style={{
              borderRadius: "0.35rem",
            }}
            className="cursor-pointer w-full aspect-[1/1] object-cover"
            onClick={handleShow}
          />
        ))}
      </div>
      <Dialog>
        <ImageModal images={images} onClose={handleHide} />
      </Dialog>
    </>
  );
};
