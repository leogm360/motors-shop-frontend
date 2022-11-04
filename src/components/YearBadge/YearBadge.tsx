import { IYearBadgeProps } from "./YearBadgeTypes";

export const YearBadge = ({ year }: IYearBadgeProps) => {
  if (year < 0) {
    throw new TypeError(`Year should be positive, instead got ${year}.`);
  }

  return (
    <span className="block text-sm font-semibold bg-brand-4 text-brand-1 rounded w-fit px-2 py-1">
      {year}
    </span>
  );
};
