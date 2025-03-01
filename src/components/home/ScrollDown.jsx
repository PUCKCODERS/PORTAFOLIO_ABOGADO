import React from "react";

const ScrollDown = () => {
  return (
    <div className="home__scroll">
      <a href="#about" className="home__scroll-button button--flex">
        <svg
          width="70"
          height="70"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="black"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <rect
            x="85"
            y="170"
            width="30"
            height="15"
            fill="#8B5E3B"
            stroke="none"
          />
          <rect
            x="92"
            y="150"
            width="16"
            height="20"
            fill="#6B4226"
            stroke="none"
          />

          <line
            x1="100"
            y1="40"
            x2="100"
            y2="150"
            stroke="#6B4226"
            stroke-width="6"
          />

          <circle cx="100" cy="30" r="8" fill="#FFD700" stroke="black" />

          <line
            x1="50"
            y1="50"
            x2="150"
            y2="50"
            stroke="#6B4226"
            stroke-width="6"
          />

          <line x1="60" y1="50" x2="45" y2="90" stroke="black" />
          <line x1="80" y1="50" x2="95" y2="90" stroke="black" />

          <line x1="120" y1="50" x2="105" y2="90" stroke="black" />
          <line x1="140" y1="50" x2="155" y2="90" stroke="black" />

          <path d="M45 90 Q70 110 95 90" fill="#FFD700" stroke="black" />
          <path d="M105 90 Q130 110 155 90" fill="#FFD700" stroke="black" />
        </svg>
        <span className="home__scroll-name">DESLIZA</span>
        <i class="uil uil-arrow-circle-down home__scroll-arrow"></i>
      </a>
    </div>
  );
};

export default ScrollDown;
