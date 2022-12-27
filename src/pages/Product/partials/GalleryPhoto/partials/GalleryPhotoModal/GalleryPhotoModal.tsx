import { Modal } from "@components";
import { IGalleryPhotoModalProps } from "./GalleryPhotoModalTypes";

export const GalleryPhotoModal = ({
  isOpen,
  setIsOpen,
  productTitle,
  imageURL,
}: IGalleryPhotoModalProps) => (
  <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Foto">
    <img className="rounded w-full h-auto" src={imageURL} alt={productTitle} />
  </Modal>
);
