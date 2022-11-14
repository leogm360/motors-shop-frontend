import { IUserConfigProps } from "./UserDialogTypes";

export const UserDialog = ({ isDialogOpen, className }: IUserConfigProps) => {
  return isDialogOpen ? (
    <div
      className={`absolute flex flex-col bg-grey-9 rounded px-5 py-4 gap-4 shadow-menu ${className}`}
    >
      <button className="text-left text-grey-2">Editar Perfil</button>
      <button className="text-left text-grey-2">Editar Endereço</button>
      <button className="text-left text-grey-2">Minhas Compras</button>
      <button className="text-left text-grey-2">Sair</button>
    </div>
  ) : null;
};
