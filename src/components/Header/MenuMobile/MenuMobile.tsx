import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useData } from "../../../contexts";
import { Button } from "../../Button";
import { Icon } from "../../Icon";
import { UserIcon } from "../../UserIcon";
import { UserDialog } from "../UserDialog";

export const MenuMobile = () => {
  const { user } = useData();

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const handleCloseMenu = () => {
    setIsDialogOpen(false);
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <button className="relative ml-auto" onClick={() => handleCloseMenu()}>
        {isMenuOpen ? <Icon name="xmark" /> : <Icon name="bars" />}
      </button>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="absolute top-[86px] right-0 left-0 bg-whiteFixed"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
          >
            <div className="flex border-b-[1px] border-grey-4 flex-col px-4 py-8 gap-11">
              <a className="font-semibold text-grey-2" href="#cars">
                Carros
              </a>
              <a className="font-semibold text-grey-2" href="#motorcycles">
                Motos
              </a>
              <a className="font-semibold text-grey-2" href="#auctions">
                Leilão
              </a>
            </div>
            <div className="relative flex flex-col px-3 py-8 gap-11">
              {user !== null ? (
                <>
                  <button
                    className="flex items-center gap-2"
                    onClick={() => setIsDialogOpen(!isDialogOpen)}
                  >
                    <UserIcon user={user} size="small" />
                    <span className="text-grey-2">{user.name}</span>
                  </button>
                  <UserDialog
                    className="top-20 left-5"
                    isDialogOpen={isDialogOpen}
                  />
                </>
              ) : (
                <>
                  <a className="font-semibold text-grey-2" href="#auctions">
                    Fazer Login
                  </a>
                  <Button variant="outline-medium" size="medium">
                    Cadastrar
                  </Button>
                </>
              )}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};
