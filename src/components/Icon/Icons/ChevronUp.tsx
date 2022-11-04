import { SVGProps } from "react";

export const ChevronUp = ({ ...svgAttributes }: SVGProps<SVGSVGElement>) => (
  <svg
    width="12"
    height="8"
    viewBox="0 0 12 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...svgAttributes}
  >
    <path
      d="M6.53125 1C6.21875 0.71875 5.75 0.71875 5.46875 1L1.21875 5.25C0.90625 5.5625 0.90625 6.03125 1.21875 6.3125L1.90625 7.03125C2.21875 7.3125 2.6875 7.3125 2.96875 7.03125L6 4L9 7.03125C9.28125 7.3125 9.78125 7.3125 10.0625 7.03125L10.7812 6.3125C11.0625 6.03125 11.0625 5.5625 10.7812 5.25L6.53125 1Z"
      fill={svgAttributes.fill ? svgAttributes.fill : "white"}
    />
  </svg>
);
