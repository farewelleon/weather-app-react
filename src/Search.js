import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function Search() {
  const [city, setCity] = useState("");
  const [message, setMesagge] = useState("");
  const [temperature, setTemperature] = useState("");
  const [description, setDescription] = useState("");
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");
  const [image, setImage] = useState();

  function searchCity(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9ef12bc802f7a425a0a46bc5e5d5ffc8&units=metric`;
    axios.get(url).then(showWeather);
  }

  function ChangeCity(event) {
    setCity(event.target.value);
  }

  function showWeather(response) {
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setImage(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
    setMesagge(
      <div>
        <p>Temperature: {Math.round(temperature)}°C</p>
        <p>Description: {description}</p>
        <p>Humidity: {humidity} %</p>
        <p>Wind: {wind} km/h</p>
        <img src={image} alt="current weather" />
      </div>
    );
  }

  return (
    <div className="SearchContainer">
      <form onSubmit={searchCity}>
        <input
          type="search"
          placeholder="Write some city"
          onChange={ChangeCity}
        />
        <input type="submit" value="Search" />
      </form>
      <h2>{message}</h2>
    </div>
  );
}
