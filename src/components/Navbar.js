import React from 'react';
import {Container, Navbar} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import logo from '../images/weatherBeaten-logo.webp';

const Navigation = () => {
  return (
    <>
      {['sm'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid className="navigation">
            <Navbar.Brand href="#">
            <img
              alt="weatherBeaten-logo"
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
              WeatherBeaten
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          </Container>
        </Navbar>
      ))}
    </>
  )
}

export default Navigation