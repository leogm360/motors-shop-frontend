import { icons } from "./icons";
import { IIconProps } from "./IconTypes";

export const Icon = ({ name, ...svgAttributes }: IIconProps) =>
  icons({ ...svgAttributes })[name];
