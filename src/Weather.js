import React from "react";
import "bootstrap/dist/css/bootstrap.css";
// import axios from "axios";

import "./Weather.css";

export default function Weather() {
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
          <div className="city">Toronto</div>
        </div>
        <div className="col-6">
          <div className="humid-wind">
            Partly Cloudy
            <br />
            Humidity: 10%
            <br />
            Wind Speed: 5 km/hr
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6 temp-row">
          <div className="date-time">
            <span id="current-date">Sunday, March 5</span>
            <br />
            Last updated at 6:15pm
          </div>
        </div>
        <div className="col-6">
          <div className="temp-main">
            <img src="imgUrl" alt="partly cloudy" />
            <span className="temperature">2</span>
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
