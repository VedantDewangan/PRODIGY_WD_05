import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const WeatherCard = ({ weather }) => {
  return (
    <Box 
      p={6} 
      shadow="lg" 
      borderWidth="1px" 
      borderRadius="lg" 
      bg="teal.300" 
      color="white"
      transition="transform 0.2s"
      _hover={{ transform: 'scale(1.05)' }}
      maxW="400px"
      w="full"
    >
      <Text fontSize="3xl" mb={3}>{weather.name} 🌍</Text>
      <Text fontSize="2xl" mb={2}>{weather.main.temp}°C 🌡️</Text>
      <Text fontSize="lg">{weather.weather[0].description} ☁️</Text>
      <Text fontSize="sm" mt={2}>Humidity: {weather.main.humidity}% 🌡️</Text>
      <Text fontSize="sm">Wind: {weather.wind.speed} m/s 🌬️</Text>
    </Box>
  );
};

export default WeatherCard;
