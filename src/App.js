import React from 'react';
import './App.css';
import Navigation from './components/Navbar.js';
import Weather from './components/Weather';
import './Fontawesome.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
        <div className="col socials"> 
          <span>
            Social Network
          </span>
          <span>
          <a href="https://twitter.com/ipanzek" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon="fa-brands fa-twitter" />
          </a>
          <a href="https://instagram.com/panzek" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon="fa-brands fa-instagram" />
          </a>
          <a href="https://github.com/panzek" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon="fa-brands fa-github" />
          </a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default App


