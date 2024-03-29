import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      Coded by{" "}
      <a
        href="https://www.linkedin.com/in/eva-mocek/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Eva Mocek
      </a>
      <br />
      See this project on{" "}
      <a
        href="https://github.com/eva-mocek/react-weather-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </div>
  );
}
