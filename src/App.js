import "./App.css";

import React from "react";

export default function Main() {
  let weatherData = {
    city: "Toronto",
    description: "Partly Cloudy",
    humidity: 10,
    wind: 5,
    currentDay: "Friday",
    currentMonth: "January",
    currentDate: 27,
    currentHours: 11,
    currentMinutes: 58,
    amPm: "am",
    currentTemp: 2,
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
  };

  return (
    <div className="Main">
      <div className="row">
        <div className="col-6 city-row">
          <div className="city">{weatherData.city}</div>
        </div>
        <div className="col-6">
          <div className="humid-wind">
            {weatherData.description}
            <br />
            Humidity: {weatherData.humidity}%
            <br />
            Wind Speed: {weatherData.wind}km/hr
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6 temp-row">
          <div className="date-time">
            <span id="current-date">
              {weatherData.currentDay}, {weatherData.currentMonth}{" "}
              {weatherData.currentDate}
            </span>
            <br />
            Last updated at {weatherData.currentHours}:
            {weatherData.currentMinutes}
            {weatherData.amPm}
            <span></span>
            <span></span>
            <br />
          </div>
        </div>
        <div className="col-6">
          <div className="temp-main">
            <img src={weatherData.imgUrl} alt={weatherData.description} />
            <span className="temperature">{weatherData.currentTemp}</span>
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
}
