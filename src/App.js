import React from 'react';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import {BrowserRouter, Route} from 'react-router-dom';
import Videos from './components/Videos';
import './app.css';
function App() {
  
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Route path='/videos' component={Videos}/>
      <Route exact path='/' component={Welcome}/>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
