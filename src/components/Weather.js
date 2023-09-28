import React, { useState, useEffect } from 'react';
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//Create a new Date object
const today = new Date();
const currentDate = today.toLocaleDateString();
const currentTime = today.toLocaleTimeString();


const reset = () =>{
  window.location.reload()
}

const {REACT_APP_API_URL, REACT_APP_API_KEY} = process.env;

const Weather = () => {

  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("");

  useEffect(() => {
    const getWeather = async () => {
      const response = await fetch(`${REACT_APP_API_URL}/weather?q=${city}&appid=${REACT_APP_API_KEY}&units=metric`)
      const data = await response.json();
      console.log(data);
      setWeather(data);
    }
    getWeather();
  }, [city]);

  const handleChange = (e) => {
    setCity(e.target.value);
  }

  const handleClick = () => {
    setWeather(weather);
  }

  return (
    <>
      <Row>
        <h3>Weather Beaten App</h3>
      </Row>
      <Row>
        <button onClick={reset}>Reset</button>
      </Row>
      <Row>
      <Col><input value={city} onChange={handleChange} placeholder="Enter City..." /><button onClick={handleClick}>Submit</button></Col>
      </Row>
      <Row>
        <Col>{city}</Col>
      </Row>
      <Row>
        Date: {currentDate} Time: {currentTime}
      </Row>
      <Row>
        <Col sm={6}>Temp: 1oC</Col>
        <Col sm={6}>Wind speed: 2.68km/h</Col>
      </Row>
      <Row>
        <Col sm={6}>Humidity: 90%</Col>
        <Col sm={6}>Wind speed: 2.68km/h</Col>
      </Row>
    </>
   
  )
}

export default Weather