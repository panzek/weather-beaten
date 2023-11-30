import React from 'react';

import { Card } from 'react-bootstrap';

const Weather = ({
  weather,
  error,
  displayTime,
  getWeatherIcon,
}) => {
  
  return (
    <>
      {(typeof weather.main !== "undefined") ? (
      <Card.Body >
        <Card.Text className="mb-0" style={{fontSize: "0.9rem", color: "#c11b17"}}>
          {displayTime}
        </Card.Text>
        <Card.Text className="mb-0 fw-bold">
          {weather.name}, {weather.sys.country}
        </Card.Text>
        <Card.Text className="mb-0 fw-bold" style={{fontSize: "2.5rem"}}>
          {getWeatherIcon()} {Math.floor(weather.main.temp)}&deg;C
        </Card.Text> 
        <Card.Text >{weather.weather[0].description}</Card.Text>
        <Card.Text style={{ fontSize: "0.9rem" }}>
          Wind Speed: {weather.wind.speed}km/hr. Humidity: {weather.main.humidity}%
        </Card.Text>
      </Card.Body>
      ) : (
      <Card.Text></Card.Text>
      )}
      {error && (
        <div style={{fontSize: "0.9rem", color: "#c11b17"}}>{error}</div> 
      )}
    </>
  );
};

export default Weather;