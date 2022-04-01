import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {}

  let apiKey = "375047dec9386322672b073ccc06d9ac";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweather.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid${apiKey}&units=imperial`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <WeatherIcon code="01d" size={36} />
          <div className="WeatherForecast-temps">
            <span className="temperatureMax">19°</span>
            <span className="temperatureMin">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
