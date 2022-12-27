import { Modal } from "@components";
import { ManageAccountForm } from "./partials";

export const ManageAccountModal = ({
  isOpen,
  setIsOpen,
}: IModalGenericProps) => {
  return (
    <Modal title="Editar perfil" isOpen={isOpen} setIsOpen={setIsOpen}>
      <ManageAccountForm setIsOpen={setIsOpen} />
    </Modal>
  );
};
