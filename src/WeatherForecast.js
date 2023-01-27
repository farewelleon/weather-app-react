import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import Loading from "./Loading";

export default function WeatherForecast({ coord }) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
    const { lat, lon } = coord;
    const apiKey = "9ef12bc802f7a425a0a46bc5e5d5ffc8";
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showForecast);
    function showForecast({ data }) {
      console.log(data);
      const { list } = data;
      const forecast = {};
      list.forEach((item) => {
        const day = getDayFromMilisecons(item.dt);
        if (!forecast.hasOwnProperty(day)) {
          forecast[day] = [];
        }
        forecast[day].push(item);
        console.log(forecast);
      });
      setForecast(forecast);
      setLoaded(true);
    }
  }, [coord]);

  function getDayFromMilisecons(miliseconds) {
    const day = new Date(miliseconds * 1000).getDay();
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  // function showForecast({ data }) {
  //   console.log(data);
  //   const { list } = data;
  //   const forecast = {};
  //   list.forEach((item) => {
  //     const day = getDayFromMilisecons(item.dt);
  //     if (!forecast.hasOwnProperty(day)) {
  //       forecast[day] = [];
  //     }
  //     forecast[day].push(item);
  //     console.log(forecast);
  //   });
  //   setForecast(forecast);
  //   setLoaded(true);
  // }

  return (
    <div className="weather-forecast">
      {loaded ? (
        <React.Fragment>
          <div className="row">
            {Object.keys(forecast).map((day) => (
              <WeatherForecastDay
                day={day}
                key={day}
                minTemp={forecast[day][0].main.temp_min}
                maxTemp={forecast[day][0].main.temp_max}
                icon={forecast[day][0].weather[0].icon}
              />
            ))}
          </div>
        </React.Fragment>
      ) : (
        <Loading />
      )}
    </div>
  );
}
