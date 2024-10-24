import { CardContent, CardHeader, Container, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid2';
import { useCallback, useEffect, useState } from 'react';
import './App.css';
import ForeCast from './components/ForeCast';
import Form from './components/Form';
import Header from './components/Header';
import Weather from './components/Weather';

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

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${
          import.meta.env.VITE_API_KEY
        }&units=metric&lang=pt_br`;
        const response = await fetch(url);
        const data = await response.json();
        setWeatherData(data);

        const foreCastresponse = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${
            import.meta.env.VITE_API_KEY
          }&units=metric&lang=pt_br`
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

  if (loading)
    return (
      <Card sx={{ width: '20vw', maxWidth: '20vw', transform: 'scale(0.8)', padding: '2rem' }} variant="outlined">
        Loading...
      </Card>
    );

  return (
    <Container sx={{ bgcolor: '#fff', padding: '2rem' }} fixed>
      <Card sx={{ padding: '2rem', margin: '2rem' }} variant="outlined">
        <CardHeader
          title={
            <Typography variant="h1" className="temperature">
              Weather App
            </Typography>
          }
        />

        {error && <Typography className="error">{error}</Typography>}
        <Form handleSearch={handleSearch} setSearchInput={setSearchInput} searchInput={searchInput} />

        <Grid container spacing={2}>
          <Grid size={12}>
            {weatherData && weatherData.main && weatherData.weather && (
              <CardContent>
                <Header weatherData={weatherData} />
                <Weather weatherData={weatherData} />
              </CardContent>
            )}
            <ForeCast forecast={forecast} />
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
}

export default App;
