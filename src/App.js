import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Particles from 'react-particles-js';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Header from './components/header/Header';
import Homepage from './components/homepage/Homepage';
import Contact from './components/contact/Contact';

import TabletHeader from './components/mobile/tablet/header/Header';

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

  const isDesktop = useMediaQuery({ query: '(min-width: 1400px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 750px)' }) && !isDesktop;
  const isPhone = !isTablet && !isDesktop;
  
  const responsive = {
    isDesktop: isDesktop,
    isTablet: isTablet,
    isPhone: isPhone
  };

  let app;
  if (responsive.isDesktop) {
    app = (
      <div className="App desktop">
        <Particles className="particlesBackground" params={particleParams} />
        
        <Header />
        <Route exact path="/" render={(routeProps) => <Homepage {...routeProps} />} />
        <Contact />
      </div>
    );
  } else if (responsive.isTablet || responsive.isPhone) {
    app = (
      <div className="App tablet">
        <Particles className="particlesBackground" params={particleParams} />
        
        <TabletHeader />
        <Route exact path="/" render={(routeProps) => <Homepage {...routeProps} />} />
        <Contact />
      </div>
    );
  }

  return <Router>{ app }</Router>;
}

export default App;
