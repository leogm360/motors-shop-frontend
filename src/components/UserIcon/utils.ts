import { TSize } from "./UserIconTypes";

export const getUserIconSize = (size: TSize) =>
  ({
    small: "text-sm w-8 h-8",
    medium: "text-2.5xl w-20 h-20",
    big: "text-4xl w-28 h-28",
  }[size]);

export const getUserNameInitials = (name: string) => {
  const splitedName = name.split(" ");

  const pattern = splitedName.length >= 2 ? 1 : 2;

  const firstName = 0;
  const lastName = 1;
  const firstLetter = 0;

  return {
    1: splitedName[firstName][firstLetter] + splitedName[lastName][firstLetter],
    2: splitedName[firstName][firstLetter],
  }[pattern];
};
