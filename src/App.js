import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Header from './components/header/Header';
import Slideshow from './components/homepage/Slideshow';

function App() {
  return (
    <Router>
      <div className="App">
          <Header />

          <Route exact path="/" component={Slideshow} />

      </div>
    </Router>
  );
}

export default App;
