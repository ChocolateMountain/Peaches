import React, { Component } from 'react';

import SelfieThumbnail from './SelfieThumbnail';
import NameText from './NameText';
import HeaderLinks from './HeaderLinks';

import '../../../../stylesheets/mobile/phone/header/Header.css';

export class PhoneHeader extends Component {
  render() {
    return (
      <div id="headerWrapper" className="headerWrapper closeHeader">
        <header>
          <SelfieThumbnail />
          <NameText />
          <HeaderLinks />
        </header>
      </div>
    )
  }
}

export default PhoneHeader;
