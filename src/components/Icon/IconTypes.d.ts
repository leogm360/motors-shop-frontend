import { SVGProps } from "react";
import { icons } from "./icons";

export interface IIconProps extends SVGProps<SVGSVGElement> {
  name: keyof ReturnType<typeof icons>;
}
