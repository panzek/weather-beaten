import React from 'react';
import './App.css';
import Navigation from './components/Navbar.js';
import Weather from './components/Weather';
import './Fontawesome.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col } from 'react-bootstrap';

const App = () => {
  return (
    <div>
    <Navigation />
      <div >
        <div className="col display">
          <header className="App-header">
            <Weather />
          </header>
        </div>
        <Container className="col socials"> 
          <Row>
            <Col>
            (c) Panzek 2023. All Rights Reserved.
            </Col>
          </Row>
          <Row >
            <Col>
            <a href="https://twitter.com/ipanzek" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon="fa-brands fa-twitter" size="lg"  className="icon-color"/>
            </a>
            </Col>
            <Col>
              <a href="https://instagram.com/panzek" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon="fa-brands fa-instagram" size="lg" className="icon-color"/>
              </a>
            </Col>
            <Col>
              <a href="https://github.com/panzek" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon="fa-brands fa-github" size="lg" className="icon-color"/>
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default App


