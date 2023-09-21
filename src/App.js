import React from 'react';
import './App.css';
import Navigation from './components/Navbar.js';
import Weather from './components/Weather'

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
        </div>
      </div>
    </div>
  )
}

export default App


