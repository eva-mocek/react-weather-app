import React from "react";
import ForecastDays from "./ForecastDays";
import ForecastIcon from "./ForecastIcon";
import ForecastTemp from "./ForecastTemp";

export default function ForecastData(props) {
  let day = props.data.time;
  let iconCode = props.data.condition.icon;
  let forecastData = {
    celsiusMax: Math.round(props.data.temperature.maximum),
    celsiusMin: Math.round(props.data.temperature.minimum),
    fahrenheitMax: Math.round((props.data.temperature.maximum * 9) / 5 + 32),
    fahrenheitMin: Math.round((props.data.temperature.minimum * 9) / 5 + 32),
  };

  return (
    <div className="Forecast-day">
      <div>
        <ForecastDays timestamp={day} />
      </div>
      <div className="Forecast-icon">
        <ForecastIcon code={iconCode} size={40} />
      </div>
      <div>
        <ForecastTemp data={forecastData} units={props.units} />
      </div>
    </div>
  );
}
