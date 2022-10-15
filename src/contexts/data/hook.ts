import { useContext } from "react";
import { DataContext } from "./data";

export const useData = () => useContext(DataContext);
