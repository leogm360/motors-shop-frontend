import { Footer, Header } from "@components";
import { IScreenProps } from "./ScreenTypes";

export const Screen = ({
  children,
  className = "",
  ...mainAttributes
}: IScreenProps) => (
  <>
    <Header />
    <main className={`h-full bg-grey-8 ${className}`} {...mainAttributes}>
      {children}
    </main>
    <Footer />
  </>
);
