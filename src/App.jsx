import React, { useState } from 'react';
import './App.css';
import Navigation from './components/Navbar.jsx';
import Weather from './components/Weather';
import Footer from './components/Footer';
import Buttons from './components/Buttons/Buttons';
import Socials from './components/Socials/Socials';
import './Fontawesome.js';

import { DateTime } from 'luxon';
import { Container, Row, Col, Card } from 'react-bootstrap';

import axios from "axios";

const App = () => {

  const refresh = () => {
    window.location.reload()
  }

  const [weather, setWeather] = useState({});
  const [city, setCity] = useState('');
  const [status, setStatus] = useState('typing');
  const [error, setError] = useState(false);
  const [displayTime, setDisplayTime] = useState(null);

  // Destructure environment variables into an object
  const { VITE_API_URL, VITE_API_KEY } = import.meta.env;

  // Fetch data from weather API without using useEffect 
  const getWeather = async () => {
    try {
      const response = await axios.get(`${VITE_API_URL}/weather?q=${city}&APPID=${VITE_API_KEY}&units=metric`);
      const data = response.data;

      // extract coordinates from returned data
      const { dt, timezone } = data;
      // Convert timestamp to local time in the specified city with Luxon
      const time = DateTime.fromSeconds(dt + timezone);
      //define date and time format
      const cityTime = time.toLocaleString(
        {
          hour: '2-digit',
          minute: '2-digit',
          weekday: 'short',
          month: 'short',
          day: '2-digit',
          year: 'numeric',
        }
      );

      setWeather(data);
      setDisplayTime(cityTime);

    } catch (err) {
      console.error(err.message);
      setError(err.message);
    }
  }

  // Get the current year
  const getCurrentYear = () => {
    // Create a local DateTime
    const dateTime = DateTime.local();
    // Get the year
    return dateTime.year;
  }

  const handleChange = (e) => {
    setCity(e.target.value);
  }

  const handleClick = () => {
    setWeather(weather);
    setStatus('submitting');
    getWeather();
  }

  //Dynamically display weather icons based on condition code
  const getWeatherIcon = () => {
    if (!weather) return null;

    const icon = weather.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${icon.replace('n', 'd')}@2x.png`;

    return <img src={iconUrl} alt='Weather Icon' />;
  }

  return (
    <>
      <Navigation />
      <Container>
        <Row>
          <Col className="display position-relative">
            <Card className="text-center shadow-sm" style={{ width: "21rem", height: "28rem" }}>
              <Card.Header className="text-muted fw-bold" style={{ fontSize: "1.4rem" }}>
                Weather-Beaten App
              </Card.Header>
              <Card.Body>
                <Card.Text>
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
              </Card.Body>
              <Card.Body >
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
              </Card.Body>
              <Card.Body >
                <Socials />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row >
          <Col >
            <Footer
              getCurrentYear={getCurrentYear}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;


