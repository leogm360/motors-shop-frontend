import { useState } from "react";
import { useData } from "@hooks";
import { EUserRoles } from "@utils";
import { ManageAccountModal, ManageAddressModal } from "./partials";
import { IUserConfigProps } from "./UserDialogTypes";

export const UserDialog = ({ isDialogOpen, className }: IUserConfigProps) => {
  const { user } = useData();

  const [isAccountModalOpen, setIsAccountModalOpen] = useState<boolean>(false);
  const [isAddressModalOpen, setIsAddressModalOpen] = useState<boolean>(false);

  return isDialogOpen ? (
    <>
      <ManageAccountModal
        isOpen={isAccountModalOpen}
        setIsOpen={setIsAccountModalOpen}
      />
      <ManageAddressModal
        isOpen={isAddressModalOpen}
        setIsOpen={setIsAddressModalOpen}
      />
      <div
        className={`absolute flex flex-col bg-grey-9 rounded px-4 py-4 gap-y-2 shadow-menu ${className}`}
        role="menu"
      >
        <button
          type="button"
          className="text-left text-grey-2"
          role="menuitem"
          aria-haspopup="dialog"
          onClick={() => setIsAccountModalOpen(true)}
        >
          Editar Perfil
        </button>
        <button
          type="button"
          className="text-left text-grey-2"
          role="menuitem"
          aria-haspopup="dialog"
          onClick={() => setIsAddressModalOpen(true)}
        >
          Editar Endereço
        </button>
        {user.type === EUserRoles.advertiser ? (
          <button
            type="button"
            className="text-left text-grey-2"
            role="menuitem"
          >
            Meus Anúncios
          </button>
        ) : (
          <button
            type="button"
            className="text-left text-grey-2"
            role="menuitem"
          >
            Minhas Compras
          </button>
        )}
        <button type="button" className="text-left text-grey-2" role="menuitem">
          Sair
        </button>
      </div>
    </>
  ) : null;
};
