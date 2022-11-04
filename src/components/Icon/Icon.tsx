import * as SVG from "./Icons";
import { IIconProps } from "./IconTypes";

export const Icon = ({ name, ...svgAttributes }: IIconProps) => {
  return (
    <>
      {name
        ? {
            clock: <SVG.Clock {...svgAttributes} />,
            arrowright: <SVG.ArrowRight {...svgAttributes} />,
            chevronup: <SVG.ChevronUp {...svgAttributes} />,
            bars: <SVG.Bars {...svgAttributes} />,
            xmark: <SVG.Xmark {...svgAttributes} />,
          }[name]
        : null}
    </>
  );
};
