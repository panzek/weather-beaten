import React, { useState } from 'react';

import { DateTime } from 'luxon';
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Weather = () => {

  // Create a new Date object
  const today = DateTime.local();
  // Format the date and time in 12-hour am/pm format
  const currentTime = today.toLocaleString(
    {
      hour: "numeric",
      minute: "2-digit",
      hour12: "true",
      weekday: "short",
      month: "short",
      day: "2-digit",
      year: "numeric",
    }
  );

  const refresh = () =>{
    window.location.reload()
  }

  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("");
  const [status, setStatus] = useState("typing");
  const [error, setError] = useState(false);

  const {REACT_APP_API_URL, REACT_APP_API_KEY} = process.env;

  // Fetching data from weather API without using useEffect 
  const getWeather = async () => {
    try {
      const response = await fetch(`${REACT_APP_API_URL}/weather?q=${city}&appid=${REACT_APP_API_KEY}&units=metric`)
        if(!response.ok) {
          throw Error('Unable to fetch weather data');
        }
      const data = await response.json();
      setWeather(data);
    } catch(err) {
      console.error(err.message);
      setError(err.message);
    }
  };

  const handleChange = (e) => {
    setCity(e.target.value);
  }

  const handleClick = () => {
    setWeather(weather);
    setStatus("submitting")
    getWeather();
  }

  //Dynamically display weather icons based on condition code
  const getWeatherIcon = () => {
    if(!weather) return null;

    const icon = weather.weather[0].icon;
    const getIconUrl = `https://openweathermap.org/img/wn/${icon.replace('n','d')}@2x.png`;

    return <img src={getIconUrl} width="250" height="250" alt="Weather Icon"></img>
  }

  return (
    <>
      <Row>
        <h3>Weather Beaten</h3>
      </Row>
      <Row>
        <Col>
          <input 
            value={city} 
            onChange={handleChange} 
            disabled={status === "submitting"} 
            placeholder="Enter City..." />
          <button onClick={refresh}>Refresh</button>
        </Col>
      </Row>
      <Row>
        <Col>
        <button 
          onClick={handleClick} 
          disabled={city.length === 0 || status === "submitting"} >
          Check Weather
        </button>
        </Col>
      </Row>
      <Row>
        <Col>{ error && <div>{error}</div> }</Col>
      </Row>
      {(typeof weather.main !== "undefined") ? (
        <Row>
          <Row>
            <Col>{weather.name}</Col>
            <Col>{error.message}</Col>
          </Row>
          <Row>
           <Col> {currentTime}</Col>
          </Row>
          <Row>
            <Col>{getWeatherIcon()} </Col>
          </Row>
          <Row>
            <Col>{weather.weather[0].description} </Col>
          </Row>
          <Row>
          <Col sm={6}>Humidity: {weather.main.humidity}%</Col>
          <Col sm={6}>Temperature: {Math.floor(weather.main.temp)}&deg;C</Col>
          </Row>
          <Row>
            <Col sm={6}>Wind speed: {weather.wind.speed}km/hr </Col>
          </Row>
        </Row>
      ) : <Row>Enter city and click search button</Row>
      }
    </>
   
  )
}

export default Weather