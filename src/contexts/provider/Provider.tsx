import { DataProvider } from "../data";
import { IGlobalProviderProps } from "./ProviderTypes";

export const GlobalProvider = ({ children }: IGlobalProviderProps) => {
  return <DataProvider>{children}</DataProvider>;
};
