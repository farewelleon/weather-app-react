import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function  WeatherInfo(props) {
    let condititionText = `${props.data.description[0].toUpperCase() + props.data.description.substring(1)}`;
    return (
        <div className="WeatherInfo">
            <h1>{props.data.city}</h1>
            <ul>
                <li>
                    <FormattedDate date={props.data.date}
                     />
                </li>
                <li>
                    {condititionText}
                </li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="clearfix">
                        <div className="float-left">
                            <WeatherIcon code={props.data.icon} size={52}/>
                        </div>
                        <div className="float-left margin-left">
                            <WeatherTemperature celsius={props.data.temperature} />
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Humidity: {props.data.humidity}%</li>
                        <li>Wind: {props.data.wind} km/h</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}


