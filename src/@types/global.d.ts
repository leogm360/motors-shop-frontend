import { ReactNode } from "react";
import { ERandomBackgroundColor, EUserRoles } from "@utils";

export declare global {
  interface IModalGenericProps {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
  }

  interface IUser {
    name: string;
    description: string;
    type: EUserRoles;
    image: string | null;
    backgroundColor: ERandomBackgroundColor;
  }

  interface IProduct {
    image: string;
    gallery: string[];
    title: string;
    description: string;
    mileage: number;
    year: number;
    price: number;
    expiresIn: string;
    isAuction: boolean;
    isActive: boolean;
  }

  interface IBind {
    issuedBy: IUser;
    issuedAt: string;
    value: bind;
  }
  interface IComment {
    issuedBy: IUser;
    issuedAt: string;
    text: string;
  }

  interface IRoute {
    path: string;
    key: string;
    element: ReactNode;
    allowedRoles: EUserRoles[];
    authenticated: boolean;
  }
}
