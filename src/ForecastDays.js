import React from "react";

export default function ForecastDays(props) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  let timestamp = new Date(props.timestamp * 1000);
  let day = timestamp.getDay();

  return <div>{days[day]}</div>;
}
