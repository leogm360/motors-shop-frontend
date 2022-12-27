import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IModalProps extends IModalGenericProps {
  title: string;
  children: ReactNode;
}
