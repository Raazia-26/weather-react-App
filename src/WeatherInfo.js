import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";

export default function WeatherInfo(props) {
  return (
    <div>
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-4">
        <div className="col-6 ">
          <div className="d-flex ">
            <div>
              <WeatherIcon code={props.data.icon} />
            </div>
            <div>
              <WeatherTemp celsius={props.data.temp} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li> Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
