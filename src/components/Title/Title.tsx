import { getTitleSize, getTitleWeight } from "./utils";
import { ITitleProps, THeading } from "./TitleTypes";

export const Title = ({
  level = 1,
  size = "5xl",
  weight = "bold",
  children,
  ...headingAttributes
}: ITitleProps) => {
  const HLevel = ("h" + level) as keyof THeading;

  const titleSize = getTitleSize(size);
  const titleWeight = getTitleWeight(weight);

  return (
    <HLevel className={`${titleSize} ${titleWeight}`} {...headingAttributes}>
      {children}
    </HLevel>
  );
};
