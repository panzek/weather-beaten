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
      <Card.Text>{ error && <div style={{ fontSize: '0.9rem', color: "#c11b17" }}>{error}</div> }</Card.Text>
      {(typeof weather.main !== "undefined") ? (
        <Card.Body>
          <Card.Text className="mb-0" style={{ fontSize: '0.9rem', color: "#c11b17"}}>{displayTime}</Card.Text>
          <Card.Text as="h4">{weather.name}, {weather.sys.country}</Card.Text>
            <Card.Text className="mb-0" as="h1">{getWeatherIcon()} {Math.floor(weather.main.temp)}&deg;C</Card.Text> 
            <Card.Text>{weather.weather[0].description}</Card.Text>
            <Card.Text 
              className="ms-2" 
              style={{ fontSize: '0.9rem' }}>
              Wind Speed: {weather.wind.speed}km/hr. Humidity: {weather.main.humidity}%
            </Card.Text>
        </Card.Body>
        ) : <Card.Text>Enter city & click Check Weather button</Card.Text>
      }
    </>
  )
};

export default Weather