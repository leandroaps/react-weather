export default function ForeCast({ forecast }) {
  return (
    <div className="forecast">
      <h2 className="forecast-header">5-Day Forecast</h2>
      <div className="forecast-days">
        {forecast.map((day, index) => (
          <div key={index} className="forecast-day">
            <p>
              {new Date(day.dt * 1000).toLocaleDateString('en-US', {
                weekday: 'short',
              })}
            </p>
            <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`} alt={day.weather[0].description} />
            <p>{Math.round(day.main.temp)}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
}
