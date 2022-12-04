import React from "react";
import "./App.css";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <h1>Weather Search Engine</h1>
      <Search />
      <p><a href="https://github.com/farewelleon/weather-app-react" target="_blank">Open-source code</a>, by farewelleon</p>
    </div>
  );
}