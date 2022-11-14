import { ReactNode } from "react";
import { IndexRouteObject } from "react-router-dom";
import { ERandomBackgroundColor, EUserRoles } from "../utils";

export declare global {
  interface IUser {
    name: string;
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

  interface IComment {
    issuedAt: string;
    text: string;
  }

  interface IRoute {
    path: string;
    key: string;
    element: ReactNode;
    allowedRoles: EUserRoles[];
    autheticated: boolean;
  }
}
