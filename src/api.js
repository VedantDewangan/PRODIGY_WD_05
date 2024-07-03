// src/api.js
import axios from 'axios';

const API_KEY = '2bace52a659c9e9cb3510d91762b4301';

export const fetchWeatherByCity = async (city) => {
  const TODAY_WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
  const response = await axios.get(TODAY_WEATHER_URL);
  return response.data;
};

export const fetchForecastByCity = async (city) => {
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`);
  return response.data;
};
