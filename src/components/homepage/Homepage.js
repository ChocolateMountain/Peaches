import React, { Component } from 'react';

import Slideshow from './Slideshow';
import Introduction from './Introduction';

export class Homepage extends Component {
  render() {
    return (
      <div>
        <Slideshow />
        <Introduction />
      </div>
    )
  }
}

export default Homepage;
