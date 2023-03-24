import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [units, setUnits] = useState("celcius");

  function unitsToFahrenheit(event) {
    event.preventDefault();
    setUnits("fahrenheit");
  }

  function unitsToCelsius(event) {
    event.preventDefault();
    setUnits("celcius");
  }

  if (units === "celcius") {
    return (
      <span className="temp-units">
        <span className="temperature">{props.celcius}</span>
        <span className="units mt-4">
          <span>°C </span> |
          <a href="/" onClick={unitsToFahrenheit}>
            {" "}
            °F
          </a>
        </span>
      </span>
    );
  } else {
    let fahrenheitTemp = (props.celcius * 9) / 5 + 32;
    return (
      <span className="temp-units">
        <span className="temperature">{Math.round(fahrenheitTemp)}</span>
        <span className="units mt-4">
          <a href="/" onClick={unitsToCelsius}>
            °C{" "}
          </a>{" "}
          |<span> °F</span>
        </span>
      </span>
    );
  }
}
