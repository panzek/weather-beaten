import React, { useState } from 'react';
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Weather = () => {

  //Create a new Date object
  const today = new Date();
   //Get current date
  const currentDate = today.toLocaleDateString();
  // console.log(currentDate);
  //Get current time
  const currentTime = today.toLocaleTimeString();
  // console.log(currentTime);

  const refresh = () =>{
    window.location.reload()
  }

  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("");

  const {REACT_APP_API_URL, REACT_APP_API_KEY} = process.env;

  //1. Fetching data from weather API Without using useEffect 
  const getWeather = async () => {
    const response = await fetch(`${REACT_APP_API_URL}/weather?q=${city}&appid=${REACT_APP_API_KEY}&units=metric`)
    const data = await response.json();
    setWeather(data);
  };

  //2. a. Fetching data from weather API using useEffect without useCallback function
  //b. fix "race condition" with cleanup function to ignore stale responses
  // useEffect(() => {
  //   const getWeather = async () => {
  //     let ignore = false;
  //     const response = await fetch(`${REACT_APP_API_URL}/weather?q=${city}&appid=${REACT_APP_API_KEY}&units=metric`)
  //     const data = await response.json();
  //      if (!ignore) {
  //       setWeather(data);
  //      }
  //      return () => {
  //       ignore = true;
  //     };
  //   };
  //   getWeather();
  // }, [REACT_APP_API_URL, REACT_APP_API_KEY, city]);

  // const handleClick = () => {
  //   setWeather(weather);
  // }

  // 3. Because 'getWeather' function makes the dependencies of useEffect Hook change on every render. 
  //To fix this, we wrap the definition of 'getWeather' in its own useCallback() Hook. 
  // const getWeather = useCallback(async () => {
  //   const response = await fetch(`${REACT_APP_API_URL}/weather?q=${city}&appid=${REACT_APP_API_KEY}&units=metric`)
  //   const data = await response.json();
  //   setWeather(data);
  // }, [REACT_APP_API_URL, city, REACT_APP_API_KEY]);

  // useEffect(() => {
  //   getWeather();
  // }, [getWeather]);

  const handleChange = (e) => {
    setCity(e.target.value);
  }

  const handleClick = () => {
    setWeather(weather);
    getWeather();
  }

  //Dynamically display weather icons based on condition code
  const getWeatherIcon = () => {
    if(!weather) return null;

    const icon = weather.weather[0].icon;
    // console.log(icon)
    const getIconUrl = `https://openweathermap.org/img/wn/${icon.replace('n','d')}@2x.png`;

    return <img src={getIconUrl} width="250" height="250" alt="Weather Icon"></img>
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
        <Col><button onClick={handleClick}>Check Weather</button></Col>
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
            <Col>{getWeatherIcon()} </Col>
          </Row>
          <Row>
            <Col>{weather.weather[0].description} </Col>
          </Row>
          <Row>
          <Col sm={6}>Humidity: {weather.main.humidity}%</Col>
          <Col sm={6}>Temperature: {Math.floor(weather.main.temp)}&deg;</Col>
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