import { useCallback, useEffect, useState } from 'react';
import './App.css';
import ForeCast from './components/forecast';
import Form from './components/form';
import Header from './components/header';
import Weather from './components/weather';

import { Avatar, CardContent, CardHeader, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import { red } from '@mui/material/colors';

const API_KEY = '3e3d2617c48cb5e56ac4fa02471f942f';

function App() {
  const [weatherData, setWeatherData] = useState<string | null>(null);
  const [city, setCity] = useState<string>('campinas');
  const [forecast, setForecast] = useState<Array<string | number>>([]);
  const [searchInput, setSearchInput] = useState<string>('');

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchWeatherData = useCallback(
    async (cityName: string) => {
      setCity(cityName);
      try {
        setLoading(true);
        setError(null);

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric&lang=pt_br`;
        const response = await fetch(url);
        const data = await response.json();
        setWeatherData(data);

        const foreCastresponse = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric&lang=pt_br`
        );
        const forecastdata = await foreCastresponse.json();

        const dailyForecast = forecastdata.list.filter((item, index) => index % 8 === 0);

        setForecast(dailyForecast);
      } catch (error) {
        setError(`Couldnt fetch data,please try again: ${error}`);
      } finally {
        setLoading(false);
      }
    },
    [city]
  );

  function handleSearch(e: { preventDefault: () => void }) {
    e.preventDefault();
    fetchWeatherData(searchInput);
  }

  useEffect(() => {
    fetchWeatherData(city);
  }, [city, fetchWeatherData]);

  if (loading) return <div className="wrapper">Loading...</div>;

  return (
    <Card sx={{ width: '20vw', maxWidth: '20vw', transform: 'scale(0.8)', padding: '2rem' }}>
      <CardHeader
        title="React Weather App"
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="Weather">
            W
          </Avatar>
        }
      />

      {error && <Typography className="error">{error}</Typography>}

      <Form handleSearch={handleSearch} setSearchInput={setSearchInput} searchInput={searchInput} />

      {weatherData && weatherData.main && weatherData.weather && (
        <CardContent>
          <Header weatherData={weatherData} />
          <Weather weatherData={weatherData} />
        </CardContent>
      )}
      <ForeCast forecast={forecast} />
    </Card>
  );
}

export default App;
