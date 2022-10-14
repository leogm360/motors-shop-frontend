import { IMileageBadgeProps } from "./MileageBadgeTypes";

export const MileageBadge = ({ mileage }: IMileageBadgeProps) => {
  if (mileage < 0) {
    throw new TypeError(`Mileage should be positive, instead got ${mileage}.`);
  }

  return (
    <span className="block text-sm font-medium bg-brand-4 text-brand-1 rounded w-fit px-2 py-1">
      {`${mileage.toLocaleString("pt-BR", {
        useGrouping: true,
        maximumFractionDigits: 0,
      })} KM`}
    </span>
  );
};
