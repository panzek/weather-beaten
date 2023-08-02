import React from 'react';
import './App.css';
import Navigation from './components/Navbar.js';
import Weather from './components/Weather.js'

const App = () => {
  return (
    <div>
    <Navigation />
      <header className="App-header">
        <p>
          <Weather />
        </p>
      </header>
    </div>
  )
}

export default App


