import { TVariant, TSize } from "./ButtonTypes";

export const getButtonVariant = (variant: TVariant) =>
  ({
    default: "text-whiteFixed bg-grey-0 hover:bg-grey-1",
    brand:
      "text-whiteFixed bg-brand-1 border-brand-1 hover:border-brand-2 hover:bg-brand-2",
    negative: "text-grey-2 bg-grey-6 hover:bg-grey-5",
    light: "text-grey-1 bg-grey-10",
    link: "text-grey-0 bg-transparent hover:bg-grey-8",
    alert: "text-alert-1 bg-alert-3 hover:bg-alert-2",
    success: "text-success-1 bg-success-3 hover:bg-success-2",
    "brand-opacity": "text-brand-1 bg-brand-4",
    "outline-brand":
      "text-brand-1 bg-transparent border-brand-1 hover:bg-brand-4",
    "outline-light":
      "text-grey-10 bg-transparent border-grey-10 hover:text-grey-1 hover:bg-grey-10",
    "outline-medium":
      "text-grey-0 bg-transparent border-grey-4 hover:border-grey-0 hover:text-whiteFixed hover:bg-grey-1",
    "outline-heavy":
      "text-grey-0 bg-transparent border-grey-0 hover:text-whiteFixed hover:bg-grey-1",
  }[variant]);

export const getButtonSize = (size: TSize) =>
  ({
    big: "text-base h-12",
    medium: "text-sm h-10",
  }[size]);

export const getButtonDisabled = (variant: TVariant) =>
  variant === "brand"
    ? "disabled:text-brand-4 disabled:bg-brand-3"
    : "disabled:text-whiteFixed disabled:bg-grey-5";
