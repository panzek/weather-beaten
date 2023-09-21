import React from 'react';
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Weather = () => {

  const handleClick = () => {
    console.log("Search Weather")
  }
  
  return (
    <>
      <Row>
        <h3>Weather Beaten App</h3>
      </Row>
      <Row>
      <Col><input placeholder="Enter City..." /><button onClick={handleClick}>Submit</button></Col>
      </Row>
      <Row>
        <Col>City Name</Col>
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