import React from "react";
import { SVGComponent } from "../../types";

export default ({ ...props }: SVGComponent) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Chrome"
      viewBox="0 0 512 512"
      {...props}
    >
      <path d="M256 140h228a256 256 0 01-240 371.7" fill="#fc4" />
      <path d="M357 314L244 511.7A256 256 0 0140 118" fill="#0f9d58" />
      <path d="M256 140h228a256 256 1 00-444-22l115 196" fill="#db4437" />
      <circle
        cx={256}
        cy={256}
        r={105}
        fill="#4285f4"
        stroke="#f1f1f1"
        strokeWidth={24}
      />
    </svg>
  );
}