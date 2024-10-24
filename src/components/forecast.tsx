import { Card, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

type ForeCastTypes = {
  forecast: DayTypes[];
};

type DayTypes = {
  dt: number;
  weather: WeatherTypes[];
  main: MainTypes;
};

type WeatherTypes = {
  icon: string;
  description: string;
};

type MainTypes = { temp: number };

export default function ForeCast({ forecast }: ForeCastTypes) {
  return (
    <Grid container spacing={2} alignItems="center">
      <Grid size={12} m={4}>
        <Typography variant="h3">5-Day Forecast</Typography>
      </Grid>
      <Grid size={12} className="forecast-days">
        {forecast.map((day: DayTypes, index) => (
          <Card key={index} className="forecast-day" sx={{ width: '20%', margin: '1rem', padding: '1rem' }}>
            <Typography variant="h5">
              {new Date(day.dt * 1000).toLocaleDateString('en-US', {
                weekday: 'short',
              })}
            </Typography>

            <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`} alt={day.weather[0].description} />
            <Typography variant="h6">{Math.round(day.main.temp)}°C</Typography>
          </Card>
        ))}
      </Grid>
    </Grid>
  );
}
