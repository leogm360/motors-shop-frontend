import {
  PropsWithChildren,
  ComponentPropsWithoutRef,
  ElementType,
  ReactNode,
} from "react";

export type TVariant = "brand" | "comment";

export type TBadgeProps<E extends ElementType> = {
  as?: E;
  variant?: TVariant;
  formatter?: (value: any) => string;
} & PropsWithChildren<ComponentPropsWithoutRef<E>>;
