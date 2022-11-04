import { HTMLAttributes, ReactNode } from "react";

export type TLevel = 1 | 2 | 3 | 4 | 5 | 6;

export type TSize = "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";

export type TWeight =
  | "thin"
  | "extralight"
  | "light"
  | "normal"
  | "medium"
  | "semibold"
  | "bold"
  | "extrabold"
  | "black";

export type THeading = Pick<
  JSX.IntrinsicElements,
  "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
>;

interface ITitleProps extends HTMLAttributes<HTMLHeadingElement> {}

export interface ITitleProps {
  level?: TLevel;
  size?: TSize;
  weight?: TWeight;
  children: ReactNode;
}
