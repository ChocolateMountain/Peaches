import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import SelfieThumbnail from './SelfieThumbnail';
import NameText from './NameText';
import HeaderLinks from './HeaderLinks';

import '../../stylesheets/header/Header.css';

export class Header extends Component {

  state = {
    flipNameText: false
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
    /** 
     * todo: transitions
     *  after scrolling, wait 1 second, then fade + move out the header 
     * 
     * careful - make sure this doesnt get called 100 times 
     */


  }

  toggleFlipNameText = () => {
    this.setState((state) => ({
      flipNameText: !state.flipNameText,
    }));
  }

  render() {
    return (
      <div className="headerWrapper">

        <ReactCSSTransitionGroup  transitionName="showHeader"
                                  transitionEnterTimeout={500} 
                                  transitionLeaveTimeout={500} >

          <header key="headerKey">
            <SelfieThumbnail toggleFlipNameText={this.toggleFlipNameText} />
            <NameText flipNameText={this.state.flipNameText} />
            <HeaderLinks />
          </header>

        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

export default Header;
