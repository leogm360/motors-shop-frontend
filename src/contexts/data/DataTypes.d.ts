import { ReactNode } from "react";

export interface IDataContext {
  user: IUser;
  product: IProduct;
  comment: IComment;
}

export interface IDataProviderProps {
  children: ReactNode;
}
