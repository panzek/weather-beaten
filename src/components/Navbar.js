import React from 'react';
import {Container, Nav, Navbar, Offcanvas} from 'react-bootstrap';
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
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  WeatherBeaten
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">About Me</Nav.Link>  
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  )
}

export default Navigation