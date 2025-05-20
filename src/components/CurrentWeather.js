import React from "react";
import {
  CurrentWeatherWrapper,
  Temperature,
  WeatherCode,
} from "./styles/StyledComponents";
import { formatDailyData, getWeatherDescription } from "../utils/weather";

const CurrentWeather = ({ weatherData, isLoading }) => {
  if (isLoading) {
    return <div>로딩</div>;
  }

  const lastIdx = weatherData.hourly.time.length - 1;
  const time = weatherData.hourly.time[lastIdx];
  const temperature_2m = weatherData.hourly.temperature_2m[lastIdx];
  const weather_code = weatherData.hourly.weather_code[lastIdx];

return (
  <CurrentWeatherWrapper>
    <Temperature>{temperature_2m}°C</Temperature>
    <WeatherCode>{getWeatherDescription(weather_code)}</WeatherCode>
  </CurrentWeatherWrapper>
  )
};

export default CurrentWeather;
