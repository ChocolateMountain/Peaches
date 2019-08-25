import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Typed from 'react-typed';

export class HeaderLinks extends Component {
  render() {
    return (
      <div className="headerLinksWrapper">
        <div className="headerLinkWrapper">
          <Link to="/innovations">
            <Typed  typedRef={(typed => { this.innovationsTyped = typed; })} 
                    strings={["innovations"]} 
                    startDelay={500} 
                    typeSpeed={35} />
          </Link>
        </div>
        <div className="headerLinkWrapper">
          <Link to="/timeline">
            <Typed  typedRef={(typed => { this.timelineTyped = typed; })} 
                    strings={["timeline"]} 
                    startDelay={300} 
                    typeSpeed={35} />
            </Link>
        </div>
        
      </div>
    )
  }
}

export default HeaderLinks;
