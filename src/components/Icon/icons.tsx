import { SVGProps } from "react";

export const icons = ({ ...svgAttributes }: SVGProps<SVGSVGElement>) => ({
  clock: (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgAttributes}
    >
      <path
        d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
        stroke={svgAttributes.stroke ? svgAttributes.stroke : "#4529E6"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 5V11L15 13"
        stroke={svgAttributes.stroke ? svgAttributes.stroke : "#4529E6"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  arrowright: (
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
  ),
  chevronup: (
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
  ),
  bars: (
    <svg
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.5625 2.89062H15.1875C15.4688 2.89062 15.75 2.64453 15.75 2.32812V0.921875C15.75 0.640625 15.4688 0.359375 15.1875 0.359375H0.5625C0.246094 0.359375 0 0.640625 0 0.921875V2.32812C0 2.64453 0.246094 2.89062 0.5625 2.89062ZM0.5625 8.51562H15.1875C15.4688 8.51562 15.75 8.26953 15.75 7.95312V6.54688C15.75 6.26562 15.4688 5.98438 15.1875 5.98438H0.5625C0.246094 5.98438 0 6.26562 0 6.54688V7.95312C0 8.26953 0.246094 8.51562 0.5625 8.51562ZM0.5625 14.1406H15.1875C15.4688 14.1406 15.75 13.8945 15.75 13.5781V12.1719C15.75 11.8906 15.4688 11.6094 15.1875 11.6094H0.5625C0.246094 11.6094 0 11.8906 0 12.1719V13.5781C0 13.8945 0.246094 14.1406 0.5625 14.1406Z"
        fill={svgAttributes.fill ? svgAttributes.fill : "#2C2C2C"}
      />
    </svg>
  ),
  xmark: (
    <svg
      width="13"
      height="12"
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgAttributes}
    >
      <path
        d="M11.8984 9.97656C12.3555 10.3984 12.3555 11.1367 11.8984 11.5586C11.6875 11.7695 11.4062 11.875 11.125 11.875C10.8086 11.875 10.5273 11.7695 10.3164 11.5586L6.625 7.86719L2.89844 11.5586C2.6875 11.7695 2.40625 11.875 2.125 11.875C1.80859 11.875 1.52734 11.7695 1.31641 11.5586C0.859375 11.1367 0.859375 10.3984 1.31641 9.97656L5.00781 6.25L1.31641 2.55859C0.859375 2.13672 0.859375 1.39844 1.31641 0.976562C1.73828 0.519531 2.47656 0.519531 2.89844 0.976562L6.625 4.66797L10.3164 0.976562C10.7383 0.519531 11.4766 0.519531 11.8984 0.976562C12.3555 1.39844 12.3555 2.13672 11.8984 2.55859L8.20703 6.28516L11.8984 9.97656Z"
        fill={svgAttributes.fill ? svgAttributes.fill : "#2C2C2C"}
      />
    </svg>
  ),
});
