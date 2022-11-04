import logo from "../../assets/images/logo-footer.svg";
import { Icon } from "../Icon";

export const Footer = () => {
  return (
    <footer className="flex flex-col lg:flex-row lg:justify-between items-center bg-grey-0 w-full lg:px-16 py-11 lg:py-14 gap-16">
      <img src={logo} alt="Logotipo Motors Shop do rodapé da página" />
      <p className="text-sm text-whiteFixed">
        &copy; 2022 - Todos os direitos reservados
      </p>
      <a
        className="bg-grey-1 rounded px-5 py-5"
        href="#header"
        title="Ir para o topo da página"
      >
        <Icon name="chevronup" />
      </a>
    </footer>
  );
};
