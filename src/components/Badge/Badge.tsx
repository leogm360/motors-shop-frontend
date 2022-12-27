import { ElementType } from "react";
import { getBadgeVariant } from "./utils";
import { TBadgeProps } from "./BadgeTypes";

export const Badge = <E extends ElementType>({
  as,
  variant = "brand",
  formatter,
  children,
  ...attributes
}: TBadgeProps<E>) => {
  const Tag = as ? as : "span";

  return (
    <Tag
      className={`block flex-none font-medium ${getBadgeVariant(variant)}`}
      {...attributes}
    >
      {formatter ? formatter(children) : children}
    </Tag>
  );
};
