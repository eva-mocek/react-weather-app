import React from "react";
import ForecastDays from "./ForecastDays";
import ForecastIcon from "./ForecastIcon";

export default function ForecastData(props) {
  let day = props.data.time;
  let iconCode = props.data.condition.icon;
  let tempMax = Math.round(props.data.temperature.maximum);
  let tempMin = Math.round(props.data.temperature.minimum);

  return (
    <div className="Forecast-day">
      <div>
        <ForecastDays timestamp={day} />
      </div>
      <div className="Forecast-icon">
        <ForecastIcon code={iconCode} size={40} />
      </div>
      <div>
        <span className="Forecast-temp-max">{tempMax}°</span>
        <span className="Forecast-temp-min">{tempMin}°</span>
      </div>
    </div>
  );
}
