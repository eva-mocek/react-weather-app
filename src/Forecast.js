import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastData from "./ForecastData";
import "./Forecast.css";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.name]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index > 0 && index < 7) {
              return (
                <div className="col-sm mb-4" key={index}>
                  <ForecastData data={dailyForecast} units={props.units} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    const apiKey = "a12e1c2t3a5fde8c3o498d0228b3eb28";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.name}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
