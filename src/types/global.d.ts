import { ERandomBackgroundColor } from "../utils";

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
}
