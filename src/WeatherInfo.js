import React from "react";
import WeatherIcon from "./WeatherIcon";
import FormattedDateTime from "./FormattedDateTime";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-sm-6 city-row">
          <div className="city">{props.data.name}</div>
        </div>
        <div className="row d-block d-sm-none">
          <div className="col-sm-6  date-time">
            <FormattedDateTime date={props.data.date} />
          </div>
        </div>
        <div className="col-sm-6 d-none d-sm-block humid-wind text-capitalize">
          {props.data.description}
          <br />
          Humidity: {props.data.humidity}%
          <br />
          Wind Speed: {props.data.wind}{" "}
          <span className="text-lowercase">km/hr </span>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 d-none d-sm-block date-time">
          <FormattedDateTime date={props.data.date} />
        </div>
        <div className="col-sm-6">
          <div className="temp-main">
            <WeatherIcon code={props.data.iconCode} size={64} />
            <WeatherTemperature
              unit={props.data.unit}
              celsius={props.data.celsius}
              fahrenheit={props.data.fahrenheit}
            />
          </div>
        </div>
        <div className="row d-block d-sm-none humid-wind text-capitalize">
          <div className="col-sm">
            {props.data.description}
            <br />
            Humidity: {props.data.humidity}%
            <br />
            Wind Speed: {props.data.wind}{" "}
            <span className="text-lowercase">km/hr </span>
          </div>
        </div>
      </div>
    </div>
  );
}
