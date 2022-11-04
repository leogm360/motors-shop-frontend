import { useMediaQuery } from "react-responsive";
import logo from "../../assets/images/logo-header.svg";
import { MenuMobile } from "./MenuMobile";
import { MenuDesktop } from "./MenuDesktop";

export const Header = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });

  return (
    <header
      className="relative flex items-stretch bg-grey-10 border-b-2 border-grey-6 w-full px-4 "
      id="header"
    >
      <img
        className="py-7"
        src={logo}
        alt="Logotipo Motors Shop do cabeçalho da página"
      />
      {isDesktop ? <MenuDesktop /> : <MenuMobile />}
    </header>
  );
};
