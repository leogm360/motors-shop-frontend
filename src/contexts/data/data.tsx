import { createContext, useMemo } from "react";
import { getRandomBackgroundColor } from "./utils";
import { IDataProviderProps, IDataContext } from "./dataTypes";

export const DataContext = createContext<IDataContext>({} as IDataContext);

export const DataProvider = ({ children }: IDataProviderProps) => {
  const color = useMemo(() => getRandomBackgroundColor(), []);

  const user: IUser = {
    name: "Leonardo Moraes",
    image:
      "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_960_720.jpg",
    backgroundColor: color,
  };

  return (
    <DataContext.Provider value={{ user }}>{children}</DataContext.Provider>
  );
};
