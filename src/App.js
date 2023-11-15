import React, { useState } from 'react';
import './App.css';
import Navigation from './components/Navbar.js';
import Weather from './components/Weather';
import Footer from './components/Footer';
import Buttons from './components/Buttons/Buttons';
import './Fontawesome.js';

import { DateTime } from 'luxon';
import { Row, Col, Card } from 'react-bootstrap';

const App = () => {

  const refresh = () =>{
    window.location.reload()
  }

  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("");
  const [status, setStatus] = useState("typing");
  const [error, setError] = useState(false);
  const [displayTime, setDisplayTime] = useState(null);

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
      setDisplayTime(cityTime);

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
    <>
      <Navigation />
      <Row>
        <Col className="col display">
          <header className="App-header">
            <Card className="text-center shadow-sm border-0" style={{ width: '21rem', height: '27rem' }}>
              <Card.Header as="h4" className="text-muted mb-2">Weather-Beaten App</Card.Header>
              <Card.Body>
                <Card.Text className="mb-0">
                  <Buttons 
                    refresh={refresh}
                    city={city} 
                    status={status}
                    handleChange={handleChange}
                    handleClick={handleClick}
                    checkWeather="Check Weather"
                    refreshText="Refresh"
                  />
                </Card.Text>
                <Card.Text className="mt-0">
                  <Weather 
                    refresh={refresh}
                    weather={weather}
                    city={city}
                    status={status}
                    error={error}
                    displayTime={displayTime}
                    handleChange={handleChange}
                    handleClick={handleClick}
                    getWeatherIcon={getWeatherIcon}
                    refreshText="Refresh"
                    heading="Weather-Beaten App"
                    checkWeather="Check Weather"
                  />
                </Card.Text>
              </Card.Body>
            </Card>
          </header>
        </Col>
      </Row>
      <Row>
        <Footer 
            copyrights="&copy;Panzek 2023. All Rights Reserved."
          />
      </Row>
    </>
  )
}

export default App


