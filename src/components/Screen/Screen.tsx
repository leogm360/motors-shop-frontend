import { Footer } from "../Footer";
import { Header } from "../Header";
import { IScreenProps } from "./ScreenTypes";

export const Screen = ({
  children,
  className = "",
  ...mainAttributes
}: IScreenProps) => {
  return (
    <>
      <Header />
      <main className={`h-full bg-grey-8 ${className}`} {...mainAttributes}>
        {children}
      </main>
      <Footer />
    </>
  );
};
