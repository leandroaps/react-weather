export default function Weather({ weatherData }) {
  return (
    <div className="weather-details">
      <div>
        <p>Humidity</p>
        <p style={{ fontWeight: 'bold' }}>{Math.round(weatherData.main.humidity)}%</p>
      </div>
      <div>
        <p>Wind Speed</p>
        <p style={{ fontWeight: 'bold' }}>{Math.round(weatherData.wind.speed)} mph</p>
      </div>
    </div>
  );
}
