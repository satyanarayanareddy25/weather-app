import React, { useState } from "react";
import Search from "./components/Search";
import WeatherCard from "./components/Weathercard";
import "./App.css";
import DigitalClock from "./components/DigitalClock";


const App = () => {
  const [cityKey, setCityKey] = useState("Razam"); // To store the selected city

  // This function will update the cityKey when a city is selected from the Search component
  const handleCitySelect = (city) => {
    setCityKey(city); // Set the selected city for the WeatherCard
  };

  return (
    <div className="App">
      <div className="app-container">
        <div className="searchbar-container">
          <Search onCitySelect={handleCitySelect} />
        </div>
        {/* <DigitalClock/> */}
        <div className="weather-container">
          {cityKey && <WeatherCard cityKey={cityKey} />}
        </div>
      </div>
    </div>
  );
};

export default App;
