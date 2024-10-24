export default function Header({ weatherData }) {
  return (
    <div className="header">
      <h1 className="city">{weatherData.name}</h1>
      <p className="temperature">{weatherData.main.temp}°C</p>
      <p className="condition">{weatherData.weather[0].main}</p>
    </div>
  );
}
