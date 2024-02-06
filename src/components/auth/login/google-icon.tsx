import * as React from "react";
import { SVGProps } from "react";

export const GoogleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#4285F4"
        d="M15.04 8.167c0-.52-.047-1.02-.133-1.5H8v2.84h3.947a3.382 3.382 0 0 1-1.474 2.206v1.847h2.38c1.387-1.28 2.187-3.16 2.187-5.393Z"
      />
      <path
        fill="#34A853"
        d="M8 15.333c1.98 0 3.64-.653 4.853-1.773l-2.38-1.847c-.653.44-1.486.707-2.473.707-1.907 0-3.527-1.287-4.107-3.02h-2.44v1.893A7.326 7.326 0 0 0 8 15.333Z"
      />
      <path
        fill="#FBBC05"
        d="M3.893 9.393A4.395 4.395 0 0 1 3.66 8c0-.487.087-.953.233-1.393V4.713h-2.44C.953 5.7.667 6.813.667 8c0 1.187.286 2.3.786 3.287l1.9-1.48.54-.414Z"
      />
      <path
        fill="#EA4335"
        d="M8 3.587c1.08 0 2.04.373 2.807 1.093l2.1-2.1C11.633 1.393 9.98.667 8 .667a7.32 7.32 0 0 0-6.547 4.046l2.44 1.894c.58-1.734 2.2-3.02 4.107-3.02Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
