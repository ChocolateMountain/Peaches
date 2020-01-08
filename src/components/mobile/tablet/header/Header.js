import React, { Component } from 'react';

import TabletSelfieThumbnail from './SelfieThumbnail';
import TabletNameText from './NameText';
import TabletHeaderLinks from './HeaderLinks';

import '../../../../stylesheets/mobile/tablet/header/Header.css';

export class TabletHeader extends Component {
  render() {
    return (
      <div id="headerWrapper" className="headerWrapper closeHeader">
        <header>
          <TabletSelfieThumbnail />
          <TabletNameText />
          <TabletHeaderLinks />
        </header>
      </div>
    )
  }
}

export default TabletHeader;
