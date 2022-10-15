import { ERandomBackgroundColor } from "../utils";

export declare global {
  interface IUser {
    name: string;
    image: string | null;
    backgroundColor: ERandomBackgroundColor;
  }
}
