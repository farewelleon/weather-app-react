import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import Loading from "./Loading";

export default function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("Lviv");
  const inputCity = useRef(null);

  useEffect(() => {
    search();
  }, [city]);

  //   function handleResponse(response) {
  //     setWeatherData({
  //       coordinates: response.data.coord,
  //       temperature: response.data.main.temp,
  //       wind: response.data.wind.speed,
  //       humidity: response.data.main.humidity,
  //       city: response.data.name,
  //       description: response.data.weather[0].description,
  //       icon: response.data.weather[0].icon,
  //       date: new Date(response.data.dt * 1000),
  //     });
  //   }

  function handleResponse({ data }) {
    let { coord, main, wind, name, weather, dt } = data;
    setWeatherData({
      coordinates: coord,
      temperature: main.temp,
      wind: wind.speed,
      humidity: main.humidity,
      city: name,
      description: weather[0].description,
      icon: weather[0].icon,
      date: new Date(dt * 1000),
    });
  }

  function search() {
    const apiKey = "9ef12bc802f7a425a0a46bc5e5d5ffc8";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setCity(inputCity.current.value);
  }

  return (
    <div className="weather">
      {!weatherData ? (
        <Loading />
      ) : (
        <React.Fragment>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9">
                <input
                  ref={inputCity}
                  type="text"
                  placeholder="Enter a city..."
                  className="form-control"
                  autoFocus="on"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary w-100"
                />
              </div>
            </div>
          </form>
          <WeatherInfo data={weatherData} />
          <WeatherForecast coord={weatherData.coordinates} />
        </React.Fragment>
      )}
    </div>
  );
}
