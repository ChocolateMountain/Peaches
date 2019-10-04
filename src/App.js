import React from 'react';
import Particles from 'react-particles-js';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Header from './components/header/Header';
import Homepage from './components/homepage/Homepage';
import Contact from './components/contact/Contact';

function App() {
  const particleParams = {
    particles: {
      number: {
        value: 40
      },
      color: {
        value: "#dc929a"
      },
      move: {
        enable: true,
        speed: 1
      },
      size: {
        value: 3,
        random: true
      },
      opacity: {
        value: 0.8
      }
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "grab"
        }
      },
      detect_on: "window"
    }
  };

  return (
    <Router>
      <div className="App">
          <Particles  className="particlesBackground" 
                      params={particleParams} />
          <Header />
          <Route exact path="/" component={Homepage} />
          <Contact />
      </div>
    </Router>
  );
}

export default App;
