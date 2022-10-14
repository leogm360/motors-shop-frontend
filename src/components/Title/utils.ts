import { TSize, TWeight } from "./TitleTypes";

export const getTitleSize = (size: TSize) =>
  ({
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
  }[size]);

export const getTitleWeight = (weight: TWeight) =>
  ({
    thin: "font-thin",
    extralight: "font-extralight",
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    bold: "font-bold",
    extrabold: "font-extrabold",
    black: "font-black",
  }[weight]);
