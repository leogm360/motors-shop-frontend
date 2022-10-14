import { IYearBadgeProps } from "./YearBadgeTypes";

export const YearBadge = ({ year }: IYearBadgeProps) => {
  return (
    <span className="block text-sm font-medium bg-brand-4 text-brand-1 rounded w-fit px-2 py-1">
      {year}
    </span>
  );
};
