import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

type WeatherDataTypes = {
  weatherData: DataTypes;
};

type DataTypes = {
  main: MainTypes;
  wind: WindTypes;
};

type MainTypes = {
  humidity: number;
};

type WindTypes = {
  speed: number;
};

export default function Weather({ weatherData }: WeatherDataTypes) {
  return (
    <Grid container spacing={2} alignItems="center" m={4}>
      <Grid size="grow">
        <Typography variant="h4">Humidity</Typography>
        <p style={{ fontWeight: 'bold' }}>{Math.round(weatherData.main.humidity)}%</p>
      </Grid>
      <Grid size="grow">
        <Typography variant="h4">Wind Speed</Typography>
        <p style={{ fontWeight: 'bold' }}>{Math.round(weatherData.wind.speed)} Km/H</p>
      </Grid>
    </Grid>
  );
}
