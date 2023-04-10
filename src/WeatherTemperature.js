import React from "react";

export default function WeatherTemperature({ units, celsius, fahrenheit }) {
  if (units === "metric") {
    return (
      <span className="WeatherTemperature">
        <span className="temperature">{celsius}°C</span>
      </span>
    );
  } else {
    return <span className="WeatherTemperature">{fahrenheit}°F</span>;
  }
}
