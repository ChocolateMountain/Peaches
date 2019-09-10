import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Header from './components/header/Header';
import Homepage from './components/homepage/Homepage';

function App() {
  return (
    <Router>
      <div className="App">
          <Header />

          <Route exact path="/" component={Homepage} />
      </div>
    </Router>
  );
}

export default App;
