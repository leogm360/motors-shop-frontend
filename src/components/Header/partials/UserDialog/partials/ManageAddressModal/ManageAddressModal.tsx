import { Modal } from "@components";
import { ManageAddressForm } from "./partials";

export const ManageAddressModal = ({
  isOpen,
  setIsOpen,
}: IModalGenericProps) => {
  return (
    <Modal title="Editar endereço" isOpen={isOpen} setIsOpen={setIsOpen}>
      <ManageAddressForm setIsOpen={setIsOpen} />
    </Modal>
  );
};
