import React from 'react';
import './App.css';
import AppNavbar from './Navbar';
import Routes from './Routes';

function App() {
  return (
    <div>
      <AppNavbar />
      <div className="container mt-3">
        <Routes />
      </div>
    </div>
  );
}

export default App;