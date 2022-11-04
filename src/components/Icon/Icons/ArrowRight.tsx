import { SVGProps } from "react";

export const ArrowRight = ({ ...svgAttributes }: SVGProps<SVGSVGElement>) => (
  <svg
    width="28"
    height="16"
    viewBox="0 0 28 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...svgAttributes}
  >
    <path
      d="M1 8H27"
      stroke={svgAttributes.stroke ? svgAttributes.stroke : "white"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 1L27 8L20 15"
      stroke={svgAttributes.stroke ? svgAttributes.stroke : "white"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
