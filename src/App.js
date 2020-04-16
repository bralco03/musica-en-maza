import React from 'react';
import Navbar from './components/Navbar';
import HomeExtra from './components/HomeExtra';
import Welcome from './components/Welcome';
import Extrainfo from './components/Extrainfo';
import './app.css';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcome />
      <Extrainfo />
      <HomeExtra />
    </div>
  );
}

export default App;
