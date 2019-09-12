import React, { Component } from 'react';

import Slideshow from './Slideshow';
import Introduction from './Introduction';
import Contact from './Contact';

export class Homepage extends Component {
  render() {
    return (
      <div>
        <Slideshow />
        <Introduction />
        <Contact />
      </div>
    )
  }
}

export default Homepage;
