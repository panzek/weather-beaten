import React from 'react';

import { Row, Col, Card, Button, Form } from 'react-bootstrap';

const Weather = ({
  refresh,
  weather,
  city,
  status,
  error,
  displayTime,
  handleChange,
  handleClick,
  getWeatherIcon,
  refreshText,
  heading,
  checkWeather
}) => {
  
  return (
    <Row>
      <Col>
        <Card className="text-center shadow-sm border-0" style={{ width: '21rem', height: '27rem' }}>
            <Card.Header as="h4" className="text-muted mb-2">{heading}</Card.Header>
          <Card.Body>
            <Card.Text>
              <Form.Control 
                className="w-100 " 
                size="sm"
                type="text"
                value={city} 
                onChange={handleChange} 
                disabled={status === "submitting"} 
                placeholder="Enter City..." />
                <Button className="mt-2" variant="dark" size="sm"
                  onClick={handleClick} 
                  disabled={city.length === 0 || status === "submitting"} >
                  {checkWeather}
                </Button>
                <Button className="mt-2 ms-1" variant="outline-secondary" size="sm" onClick={refresh}>
                  {refreshText}
                </Button>
            </Card.Text>
            <Card.Text>{ error && <div>{error}</div> }</Card.Text>
            {(typeof weather.main !== "undefined") ? (
                <Card.Body>
                  <Card.Text className="mb-0">{displayTime}</Card.Text>
                  <Card.Text as="h4">{weather.name}, {weather.sys.country}</Card.Text>
                  <Card.Text>{error.message}</Card.Text>
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
          </Card.Body>
        </Card>
        </Col>
    </Row>
  )
};

export default Weather