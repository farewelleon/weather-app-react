import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay({ day, icon, minTemp, maxTemp }) {
  return (
    <div className="col">
      <div className="weather-forecast-day">{day}</div>
      <WeatherIcon code={icon} size={44} />
      <div className="weather-forecast-temp">
        <span className="weather-forecast-temp-max">
          {Math.round(maxTemp)}°
        </span>
        <span className="weather-forecast-temp-min">
          {Math.round(minTemp)}°
        </span>
      </div>
    </div>
  );
}
