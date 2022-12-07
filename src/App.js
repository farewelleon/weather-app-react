import React from "react";
import "./App.css";
import Search from "./Search";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <h1>Weather Search Engine</h1>
      <Search />
      <Weather />
      <footer><a className="" href="https://github.com/farewelleon/weather-app-react" target="_blank" rel="noreferrer">Open-source code</a>, by farewelleon</footer>
      </div>
      </div>
  );
}