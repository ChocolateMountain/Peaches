import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class TabletHeaderLinks extends Component {

  state = {
    onPageLoadFadeTexts: true
  };

  // css transition - fade profile picture 
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        onPageLoadFadeTexts: false
      });
    }, 1600);
  }

  render() {

    const introHeaderLinkClasses = 
      this.state.onPageLoadFadeTexts ?
      "headerLinkWrapper zeroOpacity" :
      "headerLinkWrapper";

    return (
      <div className="headerLinksWrapper">
        <div className={introHeaderLinkClasses}>
          <Link to="/innovations">INNOVATIONS</Link>
        </div>
        <div className={introHeaderLinkClasses}>
          <Link to="/timeline">TIMELINE</Link>
        </div>
      </div>
    )
  }
}

export default TabletHeaderLinks;
