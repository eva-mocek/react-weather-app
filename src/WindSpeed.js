import React from "react";

export default function WindSpeed(props) {
  if (props.units === "metric") {
    return <span className="text-lowercase">{props.metricSpeed} km/hr</span>;
  } else {
    return <span className="text-lowercase">{props.imperialSpeed} mph</span>;
  }
}
