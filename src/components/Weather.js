import React, { useState } from 'react';

import { DateTime } from 'luxon';
import {Row, Col, Card, Button } from 'react-bootstrap';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

const Weather = () => {

  const refresh = () =>{
    window.location.reload()
  }

  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("");
  const [status, setStatus] = useState("typing");
  const [error, setError] = useState(false);
  const [time, setTime] = useState(null);

  // Destructure environment variables into an object
  const { REACT_APP_API_URL, REACT_APP_API_KEY } = process.env;
  
  const apiUrl = `${REACT_APP_API_URL}/weather?q=${city}&appid=${REACT_APP_API_KEY}&units=metric`;

  // Fetch data from weather API without using useEffect 
  const getWeather = async () => {
    try {
      const response = await fetch(apiUrl);
        if(!response.ok) {
          throw Error('Unable to fetch weather data');
        }
      const data = await response.json();
      console.log('Data from OpenweatherAPI:', data);
      // Convert timestamp to local time in the specified city with Luxon
      const time = DateTime.fromSeconds(data.dt + data.timezone);
      //define data and time format
      const cityTime = time.toLocaleString(
        {
          hour: "2-digit",
          minute: "2-digit",
          weekday: "short",
          month: "short",
          day: "2-digit",
          year: "numeric",
        }
      );

      console.log('city time:', cityTime);
      
      setWeather(data);
      setTime(cityTime);

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
    const iconUrl = `https://openweathermap.org/img/wn/${icon.replace('n','d')}@2x.png`;

    return <img src={iconUrl} alt="Weather Icon"></img>
  }

  return (
    <Card className="text-center" style={{ width: '20rem' }}>
      <Card.Header as="h4">Weather Beaten App</Card.Header>
      <Card.Body>
        <Card.Text>
        <input 
            type="text"
            value={city} 
            onChange={handleChange} 
            disabled={status === "submitting"} 
            placeholder="Enter City..." />
          <button onClick={refresh}>Refresh</button>
          <Button className="mt-2" variant="primary" size="sm"
            onClick={handleClick} 
            disabled={city.length === 0 || status === "submitting"} >
            Checking Weather
          </Button>
        </Card.Text>
        <Card.Text>{ error && <div>{error}</div> }</Card.Text>
        <Card.Text>
        {(typeof weather.main !== "undefined") ? (
          <Row>
            <Row>
              <Col>{time}</Col>
            </Row>
            <Row>
              <Col as="h4">{weather.name}, {weather.sys.country}</Col>
            </Row>
            <Row> <Col>{error.message}</Col></Row>
            <Row className="mt-2">
              <Col as="h1">{getWeatherIcon()} {Math.floor(weather.main.temp)}&deg;C</Col> 
            </Row>
            <Row>
              <Col>{weather.weather[0].description}</Col>
            </Row>
            <Row>
              <Col xs={6}>{weather.wind.speed}km/hr </Col>
              <Col xs={6}>{weather.main.humidity}%</Col>
            </Row>
          </Row>
          ) : <Row>Enter city and click search button</Row>
        }
        </Card.Text>
      </Card.Body>
    </Card>
  )
};

export default Weather