import React from 'react';

const Logo = () => {
  return (
    <svg
      width="180"
      height="50"
      viewBox="0 0 180 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="25" cy="25" r="12" fill="#4FC3F7" />
      <polygon points="22,18 30,25 22,32" fill="#000000" />

      <text
        x="50"
        y="30"
        font-family="Montserrat, sans-serif"
        font-size="20"
        fill="white"
        font-weight="bold"
      >
        Flick<tspan fill="#4FC3F7">Loom</tspan>
      </text>
    </svg>
  );
};

export default Logo;
