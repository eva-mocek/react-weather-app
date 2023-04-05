import React from "react";

export default function WeatherTemperature({ unit, celsius, fahrenheit }) {
  if (unit === "celsius") {
    return (
      <span className="WeatherTemperature">
        <span className="temperature">{celsius}°C</span>
      </span>
    );
  } else {
    return <span className="WeatherTemperature">{fahrenheit}°F</span>;
  }
}
