import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      name: response.data.name,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      date: new Date(response.data.dt * 1000),
      unit: "celsius",
      celsius: Math.round(response.data.main.temp),
      fahrenheit: Math.round((response.data.main.temp * 9) / 5 + 32),
      iconCode: response.data.weather[0].icon,
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

  function changeUnits(event) {
    console.log("beforeChange");
    console.log(weatherData);
    console.log();
    event.preventDefault();
    if (weatherData.unit === "celsius") {
      console.log("changing to F");
      const newData = {
        ...weatherData,
        unit: "fahrenheit",
      };
      setWeatherData(newData);
    } else {
      console.log("changing to C");
      const newData = {
        ...weatherData,
        unit: "celsius",
      };
      setWeatherData(newData);
    }
    console.log("afterChange");
    console.log(weatherData);
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
            value="Change Units"
            className="btn btn-light current-btn"
            onClick={changeUnits}
          />
        </form>

        <WeatherInfo data={weatherData} />
        <hr />
        <Forecast name={weatherData.name} />
      </div>
    );
  } else {
    search();
    return <div>Loading...</div>;
  }
}
