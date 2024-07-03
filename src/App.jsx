import React, { useState } from 'react';
import { Box, Container, Heading, Input, Button, Text, Flex, Spinner, Fade, HStack } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { fetchWeatherByCity, fetchForecastByCity } from './api';
import WeatherCard from './components/WeatherCard';
import Forecast from './components/Forecast';

function App() {
  const [city, setCity] = useState('');
  const [searchCity, setSearchCity] = useState(null);

  const { data: todayWeather, isLoading: isLoadingToday } = useQuery(
    ['todayWeather', searchCity],
    () => fetchWeatherByCity(searchCity),
    { enabled: !!searchCity }
  );

  const { data: forecast, isLoading: isLoadingForecast } = useQuery(
    ['forecast', searchCity],
    () => fetchForecastByCity(searchCity),
    { enabled: !!searchCity }
  );

  const handleSearch = () => {
    setSearchCity(city);
  };

  return (
    <Container maxW="full" py={10} bg="gray.800" minH="100vh" color="white">
      <Flex direction="column" align="center">
        <Heading as="h1" mb={8} color="teal.300">🌤️ Weather App</Heading>
        <Box mb={5} w="full" maxW="md">
          <Flex>
            <Input 
              placeholder="Enter city name" 
              value={city}
              onChange={(e) => setCity(e.target.value)}
              mr={2}
              focusBorderColor="teal.300"
              size="lg"
              color="white"
            />
            <Button onClick={handleSearch} colorScheme="teal" size="lg">Search</Button>
          </Flex>
        </Box>
        {!searchCity && (
          <Text fontSize="xl" color="gray.400">Welcome! Please enter a city to see the weather.</Text>
        )}
        {isLoadingToday || isLoadingForecast ? (
          <Spinner size="xl" color="teal.300" />
        ) : (
          searchCity && (
            <Fade in={!!todayWeather && !!forecast}>
              <HStack spacing={8} mt={8} w="full" justify="center">
                <WeatherCard weather={todayWeather} />
                <Box>
                  <Heading as="h2" size="lg" mb={5} color="teal.300">📅 Forecast</Heading>
                  <Forecast forecast={forecast} />
                </Box>
              </HStack>
            </Fade>
          )
        )}
      </Flex>
    </Container>
  );
}

export default App;
