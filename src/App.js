import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Header from './components/header/Header';
import Homepage from './components/homepage/Homepage';
import Contact from './components/contact/Contact';

function App() {
  return (
    <Router>
      <div className="App">
          <Header />

          <Route exact path="/" component={Homepage} />


          <Contact />
      </div>
    </Router>
  );
}

export default App;
