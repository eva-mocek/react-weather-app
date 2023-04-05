import React from "react";

export default function ForecastTemp(props) {
  if (props.units === "metric") {
    return (
      <div className="ForecastTemp">
        <span className="Forecast-temp-max">{props.data.celsiusMax}°</span>
        <span className="Forecast-temp-min">{props.data.celsiusMin}°</span>
      </div>
    );
  } else {
    return (
      <div className="ForecastTemp">
        <span className="Forecast-temp-max">{props.data.fahrenheitMax}°</span>
        <span className="Forecast-temp-min">{props.data.fahrenheitMin}°</span>
      </div>
    );
  }
}
