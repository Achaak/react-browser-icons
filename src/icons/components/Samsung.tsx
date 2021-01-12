import React from "react";
import { SVGComponent } from "../../types";

export default ({ ...props }: SVGComponent) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Samsung Internet"
      viewBox="0 0 512 512"
      {...props}
    >
      <rect width={512} height={512} rx="15%" fill="#706CF5" />
      <g fill="none" stroke="#fff" strokeWidth={26}>
        <circle cx={256} cy={256} r={179} />
        <path stroke="#706CF5" d="M46 221a228 80 15 10441 118" />
        <path d="M105 160a228 80 15 10331 87" />
      </g>
    </svg>
  );
}