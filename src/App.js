import React from "react";

import Weather from "./Weather";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div>
      <Weather defaultCity="Toronto" />
      <Forecast />
    </div>
  );
}
