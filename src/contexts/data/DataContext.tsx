import { createContext } from "react";
import { IDataContext } from "./DataContextTypes";

export const DataContext = createContext<IDataContext>({} as IDataContext);
