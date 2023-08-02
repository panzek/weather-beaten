import React from 'react';
import './App.css';
import Navigation from './components/Navbar.js';

const App = () => {
  return (
    <div>
    <Navigation />
      <header className="App-header">
        <p>
          Weather Beaten App.
        </p>
      </header>
    </div>
  )
}

export default App


