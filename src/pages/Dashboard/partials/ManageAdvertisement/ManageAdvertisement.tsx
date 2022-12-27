import { Modal } from "@components";
import { AdvertisementForm } from "./partials";
import { IManageAdvertisementProps } from "./ManageAdvertisementTypes";

export const ManageAdvertisement = ({
  isOpen,
  setIsOpen,
  product,
}: IManageAdvertisementProps) => {
  return (
    <Modal
      title={product ? "Editar anúncio" : "Criar anúncio"}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <AdvertisementForm />
    </Modal>
  );
};
