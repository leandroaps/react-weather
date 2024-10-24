import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

type WeatherDataTypes = {
  weatherData: DataTypes;
};

type DataTypes = {
  name: string;
  main: MainTypes;
  weather: WeatherTypes[];
};

type MainTypes = {
  temp: string;
};

type WeatherTypes = {
  main: string;
};

export default function Header({ weatherData }: WeatherDataTypes) {
  return (
    <Grid container spacing={2} alignItems="center">
      <Grid alignItems="center" size={12}>
        <Typography variant="h2">{weatherData.name}</Typography>
      </Grid>

      <Grid alignItems="center" size={12}>
        <Typography variant="h3" className="temperature">
          {weatherData.main.temp}°C
        </Typography>
      </Grid>

      <Grid alignItems="center" size={12}>
        <Typography variant="h4" className="condition">
          {weatherData.weather[0].main}
        </Typography>
      </Grid>
    </Grid>
  );
}
