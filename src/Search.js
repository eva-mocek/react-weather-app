import React from "react";

import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form action="" className="form-search-city">
        <input type="text" className="search-bar" placeholder="Enter a city" />
        <button>Search</button>
        <button>Current</button>
      </form>
    </div>
  );
}
