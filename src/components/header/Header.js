import React, { Component } from 'react';

import SelfieThumbnail from './SelfieThumbnail';
import NameText from './NameText';
import HeaderLinks from './HeaderLinks';

import '../../stylesheets/header/Header.css';

export class Header extends Component {

  state = {
    flipNameText: false,
    headerOpen: true
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  toggleCloseHeader = (delay = 900) => {
    const headerWrapper = document.getElementById('headerWrapper');
    if (headerWrapper) {
      setTimeout(() => {
        headerWrapper.classList.toggle('closeHeader');
      }, delay);
    }
  }

  handleScroll = (event) => {
    /** 
     * transitions
     *  after scrolling, wait 1 second, then fade + move out the header 
     * 
     * careful - make sure this doesnt get called 100 times 
     */
    if (window.scrollY === 0 && !this.state.headerOpen) {
      // scrolled to top, animate opening the header 
      this.toggleCloseHeader(350);
      this.setState({ headerOpen: true });
    } else if (window.scrollY !== 0 && this.state.headerOpen) {
      // scrolled down, animate closing the header 
      this.toggleCloseHeader();
      this.setState({ headerOpen: false });
    }
  }

  toggleFlipNameText = () => {
    this.setState((state) => ({
      flipNameText: !state.flipNameText,
    }));
  }

  render() {
    return (
      <div id="headerWrapper" className="headerWrapper">
        <header key="headerKey">
          <SelfieThumbnail toggleFlipNameText={this.toggleFlipNameText} />
          <NameText flipNameText={this.state.flipNameText} />
          <HeaderLinks />
        </header>
      </div>
    )
  }
}

export default Header;
