import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class HeaderLinks extends Component {

  state = {
    displayHomeLink: false
  };

  onClickHome = () => {
    this.setState({ displayHomeLink: false });
  }

  onClickPath = () => {
    this.setState({ displayHomeLink: true });
  }

  render() {
    let links = this.state.displayHomeLink ? 
      (
        <div className="headerLinksWrapper">
          <div className="headerLinkWrapper" id="homeLink">
            <Link to="/" onClick={this.onClickHome}>HOME</Link>
          </div>
        </div>
      ) : (
        <div className="headerLinksWrapper">
          <div className="headerLinkWrapper">
            <Link to="/innovations" onClick={this.onClickPath}>INNOVATIONS</Link>
          </div>
          <div className="headerLinkWrapper">
            <Link to="/timeline" onClick={this.onClickPath}>TIMELINE</Link>
          </div>
        </div>
      );

    return links;
  }
}

export default HeaderLinks;
