import { SVGProps } from "react";
import * as svg from "./Icons";

export type TName = "arrowright" | "clock" | "chevronup" | "bars" | "xmark";

export interface IIconProps extends SVGProps<SVGSVGElement> {
  name: TName;
}
