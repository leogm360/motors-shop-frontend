import { ButtonHTMLAttributes, ReactNode } from "react";

export type TVariant =
  | "default"
  | "brand"
  | "negative"
  | "light"
  | "link"
  | "alert"
  | "success"
  | "brand-opacity"
  | "outline-brand"
  | "outline-light"
  | "outline-medium"
  | "outline-heavy";

export type TSize = "big" | "medium";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export interface IButtonProps {
  variant?: TVariant;
  size?: TSize;
  isLoading?: boolean;
  children: ReactNode;
}
