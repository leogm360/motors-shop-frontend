import { TVariant } from "./BadgeTypes";

export const getBadgeVariant = (variant: TVariant) =>
  ({
    brand: "text-sm bg-brand-4 text-brand-1 rounded w-fit px-2 py-1",
    comment: "text-xs bg-grey-7 text-grey-3 rounded-full w-fit px-3 py-1",
  }[variant]);
