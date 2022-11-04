import { HTMLAttributes, ReactNode } from "react";

export interface IScreenProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}
