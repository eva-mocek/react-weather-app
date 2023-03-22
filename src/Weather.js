import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import "./Weather.css";
import FormattedDateTime from "./FormattedDateTime";
import clouds from "./clouds.png";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      name: response.data.name,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      iconUrl: clouds,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form className="form-styler d-flex justify-contents-between">
          <input
            type="text"
            className="form-control search-bar"
            placeholder="Enter a city"
            autoFocus="on"
          />
          <input type="submit" value="Search" className="btn btn-light" />
          <input
            type="submit"
            value="Current"
            className="btn btn-light current-btn"
          />
        </form>

        <div className="row">
          <div className="col-6 city-row">
            <div className="city">{weatherData.name}</div>
          </div>
          <div className="col-6">
            <div className="humid-wind text-capitalize">
              {weatherData.description}
              <br />
              Humidity: {weatherData.humidity}%
              <br />
              Wind Speed: {weatherData.wind} km/hr
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6 temp-row">
            <div className="date-time">
              <FormattedDateTime date={weatherData.date} />
            </div>
          </div>
          <div className="col-6">
            <div className="temp-main">
              <img src={weatherData.iconUrl} alt={weatherData.description} />
              <span className="temperature">{weatherData.temperature}</span>
              <span id="units">
                <a href="/" className="active">
                  °C{" "}
                </a>{" "}
                |<a href="/"> °F</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "d583b033935a0872b3f66c9a92145b16";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return <div>Loading...</div>;
  }
}
