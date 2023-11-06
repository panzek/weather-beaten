import React from 'react';
import './App.css';
import Navigation from './components/Navbar.js';
import Weather from './components/Weather';
import Footer from './components/Footer';
import './Fontawesome.js';

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
        <div>
          <Footer 
              copyrights="&copy;Panzek 2023. All Rights Reserved."
            />
        </div>
      </div>
    </div>
  )
}

export default App


