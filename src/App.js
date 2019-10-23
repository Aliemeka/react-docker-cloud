import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Just deployed React app. Nice, right?
        </p>
        <p>Check out my
        <a
          className="App-link"
          href="https://github.com/Aliemeka"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github profile
        </a>
        </p>
      </header>
    </div>
  );
}

export default App;
