import React from "react";

export default function FormattedDateTime(props) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let day = props.date.getDay();
  let month = props.date.getMonth();
  let date = props.date.getDate();
  let hours = props.date.getHours();
  if (hours > 12) {
    hours = hours - 12;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let amPm = "am";
  if (props.date.getHours() >= 12) {
    amPm = "pm";
  }

  return (
    <div className="FormattedDateTime">
      <div>
        {days[day]}, {months[month]} {date}
      </div>
      <div>
        Last updated at {hours}:{minutes} {amPm}
      </div>
    </div>
  );
}
