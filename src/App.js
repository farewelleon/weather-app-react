import React from "react";
import "./App.css";

import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="Lviv"/>
      <footer><a className="" href="https://github.com/farewelleon/weather-app-react" target="_blank" rel="noreferrer">Open-source code</a>, by farewelleon</footer>
      </div>
      </div>
  );
}