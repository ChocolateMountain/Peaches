import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class HeaderLinks extends Component {
  render() {
    return (
      <div className="headerLinksWrapper">
        <div className="headerLinkWrapper">
          <Link to="/innovations">INNOVATIONS</Link>
        </div>
        <div className="headerLinkWrapper">
          <Link to="/timeline">TIMELINE</Link>
        </div>
        
      </div>
    )
  }
}

export default HeaderLinks;
