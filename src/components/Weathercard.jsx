import React, { useEffect, useState } from "react";

import './WeatherCard.css';
const WeatherCard = ({ cityKey }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const apiKey = "28af5ec20b63410ca4261836241712";

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
    return <div>{error}</div>;
  }

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const { location, current, forecast } = weatherData;
  const forecastDay = forecast?.forecastday?.[0];

  if (!forecastDay) {
    return <div>No forecast data available.</div>;
  }

  return (
    <div className="weather-container">
      <h1 className="city-name">{location.name} , {location.country}</h1>
  <ul className="weather-row">
 
    <li className="current-card">
      <p>Current Weather</p>
      <p>Local Time: {location.localtime}</p>
        <p>Temperature: {current.temp_c}°C</p>
        <p>Condition: {current.condition.text}</p>
        <p>Wind Speed: {current.wind_kph} km/h</p>
        <p>UV Index: {current.uv}</p>
    </li>

    <li className="weather-card">
      <h2>Today report {forecast.forecastday[0].date}</h2>
      <p>Max Temp: {forecast.forecastday[0].day.maxtemp_c}°C</p>
      <p>Min Temp: {forecast.forecastday[0].day.mintemp_c}°C</p>
      <p>Condition: {forecast.forecastday[0].day.condition.text}</p>
      <p>Precipitation Chance: {forecast.forecastday[0].day.daily_chance_of_rain}%</p>
    </li>

    <li className="astro-card">
      <p>Sunrise: {forecast.forecastday[0].astro.sunrise}</p>
      <p>Sunset: {forecast.forecastday[0].astro.sunset}</p>
    </li>
  </ul>
</div>

  );
};

export default WeatherCard;

