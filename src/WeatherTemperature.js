import React from "react";

export default function WeatherTemperature({ unit, celsius, fahrenheit }) {
  console.log(unit);
  console.log(celsius);
  console.log(fahrenheit);
  if (unit === "celsius") {
    return (
      <span className="temp-units">
        <span className="temperature">{celsius}</span>
        <span className="units mt-4">
          <span>°C </span>
        </span>
      </span>
    );
  } else {
    return (
      <span className="temp-units">
        <span className="temperature">{fahrenheit}</span>
        <span className="units mt-4">
          <span> °F</span>
        </span>
      </span>
    );
  }
}
