import { useState } from "react";
import { isObjectEmpty } from "../../../utils";
import { useData } from "../../../contexts";
import { Button } from "../../Button";
import { UserIcon } from "../../UserIcon";
import { UserDialog } from "../UserDialog";

export const MenuDesktop = () => {
  const { user } = useData();

  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  return (
    <nav className="flex ml-auto">
      <div className="flex items-center mr-11">
        <a className="font-semibold text-base text-grey-2" href="#cars">
          Carros
        </a>
        <a
          className="font-semibold text-base text-grey-2 ml-11"
          href="#motorcycles"
        >
          Motos
        </a>
        <a
          className="font-semibold text-base text-grey-2 ml-11"
          href="#auctions"
        >
          Leilão
        </a>
      </div>
      <div className="border-l-2 border-grey-6 pl-11">
        {!isObjectEmpty(user) ? (
          <div className="flex items-center h-full">
            <button
              className="relative flex items-center gap-2"
              onClick={() => setIsDialogOpen(!isDialogOpen)}
            >
              <UserIcon user={user} size="small" />
              <span className="text-grey-2">{user.name}</span>
              <UserDialog
                className="top-12 left-0"
                isDialogOpen={isDialogOpen}
              />
            </button>
          </div>
        ) : (
          <div className="flex items-center h-full gap-11">
            <a className="min-w-max font-semibold text-grey-2" href="#auctions">
              Fazer Login
            </a>
            <Button variant="outline-medium" size="medium">
              Cadastrar
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
