import React, { useEffect, useState } from "react";

import './WeatherCard.css';
import apiKey1 from "../api/weatherApi";
const WeatherCard = ({ cityKey }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const apiKey=apiKey1;

  useEffect(() => {
    // Clear old data from localStorage whenever cityKey changes
    localStorage.removeItem("weatherData");

    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityKey}&days=1`
        );
        const data = await response.json();
        console.log("Fetched Data:", data);

        // Store the fetched data in localStorage
        localStorage.setItem("weatherData", JSON.stringify(data));

        // Set weather data in state
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setError("Failed to fetch weather data.");
      }
    };

    // Check if data is already stored in localStorage
    const storedData = localStorage.getItem("weatherData");
    if (storedData) {
      setWeatherData(JSON.parse(storedData));
    } else {
      fetchWeather(); // Fetch new data if no data in localStorage
    }
  }, [cityKey]); // Re-fetch when cityKey changes

  if (error) {
    return <div className="class1">{error}</div>;
  }

  if (!weatherData) {
    return <div className="class1">Loading...</div>;
  }

  const { location, current, forecast } = weatherData;
  const forecastDay = forecast?.forecastday?.[0];

  if (!forecastDay) {
    return <div className="class1">No forecast data available.</div>;
  }

  return (
    <div className="weather-container">
      <h1 className="city-name">{location.name} , {location.country}</h1>
      {/* <h1 className="date">{forecast.forecastday[0].date}</h1> */}
  <ul className="weather-row">
 
    <li className="current-card card">
      <h2>Current Weather</h2>
        <p><b>Temperature</b>: {current.temp_c}°C</p>
        <p><b>Condition</b>: {current.condition.text}</p>
        <p><b>Wind Speed</b>: {current.wind_kph} km/h</p>
        <p><b>UV Index</b>: {current.uv}</p>
    </li>

    <li className="weather-card card">
      <h2>Today report </h2>
      <p><b>Max Temperature</b>: {forecast.forecastday[0].day.maxtemp_c}°C</p>
      <p><b>Min Temperature</b>: {forecast.forecastday[0].day.mintemp_c}°C</p>
      <p><b>Condition</b>: {forecast.forecastday[0].day.condition.text}</p>
      <p><b>Precipitation </b>: {forecast.forecastday[0].day.daily_chance_of_rain}%</p>
    </li>

    <li className="astro-card card">
      <p><b>Sunrise</b>: {forecast.forecastday[0].astro.sunrise}</p>
      <p><b>Sunset </b>: {forecast.forecastday[0].astro.sunset}</p>
      <img src={current.condition.icon} alt="weather"></img>
    </li>
  </ul>
</div>

  );
};

export default WeatherCard;

