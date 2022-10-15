import { DataProvider } from "../data";
import { IGlobalProviderProps } from "./providerTypes";

export const GlobalProvider = ({ children }: IGlobalProviderProps) => {
  return <DataProvider>{children}</DataProvider>;
};
