import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Particles from 'react-particles-js';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Header from './components/header/Header';
import Homepage from './components/homepage/Homepage';
import Innovations from './components/innovations/Innovations';
import Timeline from './components/timeline/Timeline';
import Contact from './components/contact/Contact';

import TabletHeader from './components/mobile/tablet/header/Header';
import TabletHomepage from './components/mobile/tablet/homepage/Homepage';
import TabletInnovations from './components/mobile/tablet/innovations/Innovations';
import TabletTimeline from './components/mobile/tablet/timeline/Timeline';
import TabletContact from './components/mobile/tablet/contact/Contact';

import PhoneHeader from './components/mobile/phone/header/Header';
import PhoneHomepage from './components/mobile/phone/homepage/Homepage';
import PhoneInnovations from './components/mobile/phone/innovations/Innovations';
import PhoneTimeline from './components/mobile/phone/timeline/Timeline';
import PhoneContact from './components/mobile/phone/contact/Contact';

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
        <Route exact path="/innovations" render={(routeProps) => <Innovations {...routeProps} />} />
        <Route exact path="/timeline" render={(routeProps) => <Timeline {...routeProps} />} />
        <Contact />
      </div>
    );
  } else if (responsive.isTablet) {
    app = (
      <div className="App tablet">
        <Particles className="particlesBackground" params={particleParams} />
        
        <TabletHeader />
        <Route exact path="/" render={(routeProps) => <TabletHomepage {...routeProps} />} />
        <Route exact path="/innovations" render={(routeProps) => <TabletInnovations {...routeProps} />} />
        <Route exact path="/timeline" render={(routeProps) => <TabletTimeline {...routeProps} />} />
        <TabletContact />
      </div>
    );
  } else if (responsive.isPhone) {
    app = (
      <div className="App phone">
        <Particles className="particlesBackground" params={particleParams} />
        
        <PhoneHeader />
        <Route exact path="/" render={(routeProps) => <PhoneHomepage {...routeProps} />} />
        <Route exact path="/innovations" render={(routeProps) => <PhoneInnovations {...routeProps} />} />
        <Route exact path="/timeline" render={(routeProps) => <PhoneTimeline {...routeProps} />} />
        <PhoneContact />
      </div>
    );
  }

  return <Router>{ app }</Router>;
}

export default App;
