import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { MenuMobile, MenuDesktop } from "./partials";
import logo from "@assets/images/logo-header.svg";

export const Header = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });

  return (
    <header
      className="sticky lg:static top-0 flex items-stretch bg-grey-10 border-b-2 border-grey-6 w-full px-4 z-10"
      id="header"
    >
      <Link to="/">
        <img
          className="py-7"
          src={logo}
          alt="Logotipo Motors Shop do cabeçalho da página"
        />
      </Link>
      {isDesktop ? <MenuDesktop /> : <MenuMobile />}
    </header>
  );
};
