import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Search.css';

const Search = ({ onCitySelect }) => {
  const [query, setQuery] = useState('');  // Input value for city search
  const [cities, setCities] = useState([]);  // To store search results
  const apiKey = process.env.REACT_APP_API_KEY;

  
  useEffect(() => {
    if (query) {
      const fetchCities = async () => {
        try {
          const response = await axios.get(`http://api.weatherapi.com/v1/search.json`, {
            params: {
              key: apiKey,
              q: query,  // City search query
            },
          });

          setCities(response.data);  // Set the list of cities returned from the search
        } catch (error) {
          console.error('Error fetching city data:', error);
        }
      };

      fetchCities();  // Fetch cities as the query changes
    } else {
      setCities([]);  // Clear cities when the query is empty
    }
  }, [query]);  // Trigger this effect whenever the query changes

  // Handle city selection
  const handleCityClick = (cityName) => {
    onCitySelect(cityName);  // Pass the selected city name to the parent
    setQuery('');  // Clear the search field after selecting a city
  };

  return (
    <div className="searchbar-container">
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Enter city name"
        // defaultValue="Razam"

      />

      {cities.length > 0 && (
        <div className="city-list">
          {cities.map((city) => (
            <div 
              key={city.id} 
              className="city" 
              onClick={() => handleCityClick(city.name)}  // Call the click handler on city select
            >
              <p>{city.name}, {city.country}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;




