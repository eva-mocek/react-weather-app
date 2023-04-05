import React from "react";

export default function WeatherTemperature({ unit, celsius, fahrenheit }) {
  if (unit === "celsius") {
    return (
      <span className="temp-units">
        <span className="temperature">{celsius}°C</span>
      </span>
    );
  } else {
    return (
      <span className="temp-units">
        <span className="temperature">{fahrenheit}°F</span>
      </span>
    );
  }
}
