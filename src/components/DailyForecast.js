import React from "react";
import { DailyForecastWrapper, DailyItem } from "./styles/StyledComponents";
import { getWeatherDescription, formatDailyData } from "../utils/weather";


const DailyForecast = ({ weatherData }) => {
  const dailyData = formatDailyData(weatherData);

  return ( <DailyForecastWrapper>
    {dailyData.map ((item) => (
      <DailyItem key={item.date}>
        <div>{item.date}</div>
        <div>{getWeatherDescription(item.weatherCode)}</div>
        <div>{item.temperature}°C</div>
      </DailyItem>
    ))}
  </DailyForecastWrapper>
  );
};

export default DailyForecast;
