import { useNavigate } from "react-router-dom";
import { gotToTop } from "@utils";
import { Button, Modal, Title } from "@components";
import { ISuccessModalProps } from "./SuccessModalTypes";

export const SuccessModal = ({ isOpen, setIsOpen }: ISuccessModalProps) => {
  const navigate = useNavigate();

  return (
    <Modal title="Sucesso!" isOpen={isOpen} setIsOpen={setIsOpen}>
      <Title
        className="text-grey-1 mb-4"
        level={3}
        size="base"
        weight="semibold"
      >
        Sua conta foi criada com sucesso!
      </Title>
      <p className="text-grey-2">
        Agora você poderá ver seus negócios crescendo em grande escala.
      </p>

      <Button
        className="w-fit mt-4 mb-6"
        type="button"
        variant="brand"
        size="medium"
        onClick={() => {
          navigate("/login");
          gotToTop();
        }}
      >
        Ir para o login
      </Button>
    </Modal>
  );
};
