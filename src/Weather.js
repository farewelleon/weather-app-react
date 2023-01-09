import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ready: false});
    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.temperature.current,
            wind: response.data.wind.speed,
            humidity: response.data.temperature.humidity,
            city: response.data.city,
            description: response.data.condition.description,
            iconUrl: response.data.condition.icon_url,
            date: new Date(response.data.time * 1000)

        })
    }
    if (weatherData.ready) {
        return (
            <div className="Weather">
                <form>
                    <div className="row">
                        <div className="col-9">
                            <input type="search"
                             placeholder="Enter a city..." 
                             className="form-control"
                             autoFocus="on" />
                        </div>
                        <div className="col-3">
                            <input type="submit" value="Search"
                             className="btn btn-primary w-100" />
                        </div>
                    </div>
                </form>
                <h1>{weatherData.city}</h1>
                <ul>
                    <li>
                        <FormattedDate date={weatherData.date} />
                    </li>
                    <li>
                        {weatherData.description[0].toUpperCase() + weatherData.description.substring(1)}
                    </li>
                </ul>
                <div className="row mt-3">
                    <div className="col-6">
                        <div className="clearfix">
                        <img
                        src={weatherData.iconUrl}
                        alt={weatherData.description}
                        className="float-left"  />
                        <div className="float-left">
                        <span className="temperature">{Math.round(weatherData.temperature)}</span>
                        <span className="unit">°C</span>
                        </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <ul>
                            <li>Precipitation: 15%</li>
                            <li>Humidity: {weatherData.humidity}%</li>
                            <li>Wind: {weatherData.wind} km/h</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    } else {
        const apiKey = "8f87b043f8f6ac9a35b778oe0a0t51e6";
    let url = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);
  return "Loading..."
    }
    
}