import React, { Component } from 'react';
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import SelfieThumbnail from './SelfieThumbnail';
import NameText from './NameText';
import HeaderLinks from './HeaderLinks';

import '../../stylesheets/header/Header.css';

export class Header extends Component {

  state = {
    showNameText: false,
    firstShowNameTextFlag: false
  };

  toggleShowNameText = () => {
    this.setState({
      showNameText: !this.state.showNameText,
      firstShowNameTextFlag: true
    });
  }

  // after mouseLeave, animate backspacing and destroy NameText
  resetFlag = () => {
    this.setState({
      showNameText: this.state.showNameText,
      firstShowNameTextFlag: false
    });
  }

  render() {
    return (
      <div className="headerWrapper">
        <header>
          <SelfieThumbnail toggleShowNameText={this.toggleShowNameText} />

          { this.state.firstShowNameTextFlag && 
            (<NameText  showNameText={this.state.showNameText} 
                        resetFlag={this.resetFlag} />) }

          <HeaderLinks />
        </header>
      </div>
    )
  }
}

export default Header;
