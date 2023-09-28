import React, { useState, useEffect } from 'react';
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Weather = () => {

  //Create a new Date object
  const today = new Date();
   //Get current date
  const currentDate = today.toLocaleDateString();
  console.log(currentDate);
  //Get current time
  const currentTime = today.toLocaleTimeString();
  console.log(currentTime);

  const refresh = () =>{
    window.location.reload()
  }


  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("");

  const {REACT_APP_API_URL, REACT_APP_API_KEY} = process.env;

  useEffect(() => {
    const getWeather = async () => {
      const response = await fetch(`${REACT_APP_API_URL}/weather?q=${city}&appid=${REACT_APP_API_KEY}&units=metric`)
      const data = await response.json();
      console.log(data);
      setWeather(data);
    }
    getWeather();
  }, [REACT_APP_API_URL, REACT_APP_API_KEY, city]);

  const handleChange = (e) => {
    setCity(e.target.value);
  }

  const handleClick = () => {
    setWeather(weather);
  }

  return (
    <>
      <Row>
        <h3>Weather Beaten</h3>
      </Row>
      <Row>
        <Col><input value={city} onChange={handleChange} placeholder="Enter City..." /><button onClick={refresh}>Refresh</button></Col>
      </Row>
      <Row>
        <Col><button onClick={handleClick}>Search</button></Col>
      </Row>
      {(typeof weather.main !== "undefined") ? (
        <Row>
          <Row>
            <Col>{weather.name}</Col>
          </Row>
          <Row>
           <Col>{currentDate} {currentTime}</Col>
          </Row>
          <Row>
            <Col>Icon: {weather.weather.icon} </Col>
            <Col>Timezone: {weather.timezone} </Col>
          </Row>
          <Row>
          <Col sm={6}>Humidity: {weather.main.humidity}%</Col>
          <Col sm={6}>Temperature: {Math.floor(weather?.main?.temp)}&deg;</Col>
          </Row>
          <Row>
            <Col sm={6}>Description: {weather.weather[0].description} </Col>
            <Col sm={6}>Description: {weather.weather[0].icon} </Col>
            <Col sm={6}>Wind speed: {weather.wind.speed}km/hr </Col>
          </Row>
        </Row>
      ) : <Row>Enter city and click search button</Row>
      }
    </>
   
  )
}

export default Weather