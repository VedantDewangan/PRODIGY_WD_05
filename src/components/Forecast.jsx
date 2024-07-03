import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

const Forecast = ({ forecast }) => {
  const limitedForecast = forecast.list.slice(0, 5);

  return (
    <Flex direction="row" justify="space-between" w="full">
      {limitedForecast.map((item) => (
        <Box 
          p={5} 
          shadow="md" 
          borderWidth="1px" 
          borderRadius="md" 
          key={item.dt}
          transition="transform 0.2s"
          _hover={{ transform: 'scale(1.05)' }}
          bg="gray.700"
          color="white"
          maxW="200px"
          textAlign="center"
          flex="1"
          mr={4}
        >
          <Text fontSize="xl" mb={2}>{new Date(item.dt * 1000).toLocaleDateString()}</Text>
          <Text fontSize="2xl" mb={2}>{item.main.temp}°C</Text>
          <Text fontSize="md">{item.weather[0].description} ☁️</Text>
          <Text fontSize="sm" mt={2}>Humidity: {item.main.humidity}% 🌡️</Text>
          <Text fontSize="sm">Wind: {item.wind.speed} m/s 🌬️</Text>
        </Box>
      ))}
    </Flex>
  );
};

export default Forecast;
