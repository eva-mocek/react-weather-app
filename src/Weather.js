import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

import clouds from "./clouds.png";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
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
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function search() {
    const apiKey = "d583b033935a0872b3f66c9a92145b16";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChangeCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form
          className="form-styler d-flex justify-contents-between"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className="form-control search-bar"
            placeholder="Enter a city"
            autoFocus="on"
            onChange={handleChangeCity}
          />
          <input type="submit" value="Search" className="btn btn-light" />
          <input
            type="submit"
            value="Current"
            className="btn btn-light current-btn"
          />
        </form>

        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return <div>Loading...</div>;
  }
}
