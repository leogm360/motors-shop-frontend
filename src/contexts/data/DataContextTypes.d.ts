import { ReactNode } from "react";

export interface IDataContext {
  user: IUser;
  product: IProduct;
  comment: IComment;
  bind: IBind;
}
