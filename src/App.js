import React from 'react';
import Navbar from './components/Navbar';
import HomeExtra from './components/HomeExtra';
import Welcome from './components/Welcome';
import Extrainfo from './components/Extrainfo';
import Artistas from './components/Artistas';
import Footer from './components/Footer';
import './app.css';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcome />
      <Extrainfo />
      <HomeExtra />
      <Artistas />
      <Footer />
    </div>
  );
}

export default App;
