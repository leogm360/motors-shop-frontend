import { ReactNode } from "react";

export interface IDataContext {
  user: IUser;
}

export interface IDataProviderProps {
  children: ReactNode;
}
