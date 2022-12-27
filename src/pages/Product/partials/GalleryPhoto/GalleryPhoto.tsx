import { useState } from "react";
import { GalleryPhotoModal } from "./partials";
import { IGalleryPhotoProps } from "./GalleryPhotoTypes";

export const GalleryPhoto = ({
  imageURL,
  productTitle,
}: IGalleryPhotoProps) => {
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState<boolean>(false);

  return (
    <>
      <GalleryPhotoModal
        isOpen={isPhotoModalOpen}
        setIsOpen={setIsPhotoModalOpen}
        imageURL={imageURL}
        productTitle={productTitle}
      />
      <button
        className="flex items-center bg-grey-7 rounded w-[5.625rem] aspect-square px-2 py-4"
        type="button"
        onClick={() => setIsPhotoModalOpen(true)}
        aria-haspopup="dialog"
      >
        <img
          className="rounded w-full object-contain"
          src={imageURL}
          alt={productTitle}
        />
      </button>
    </>
  );
};
