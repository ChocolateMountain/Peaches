import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class HeaderLinks extends Component {

  state = {
    onPageLoadFadeTexts: true,
    displayHomeLink: false
  };

  // css transition - fade profile picture 
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        onPageLoadFadeTexts: false
      });
    }, 1600);
  }

  onClickHome = () => {
    this.setState({ displayHomeLink: false });
  }

  onClickPath = () => {
    this.setState({ displayHomeLink: true });
  }

  render() {
    const introHeaderLinkClasses = 
      this.state.onPageLoadFadeTexts ?
      "headerLinkWrapper zeroOpacity" :
      "headerLinkWrapper";

    let links = this.state.displayHomeLink ? 
      (
        <div className="headerLinksWrapper">
          <div className={introHeaderLinkClasses} id="homeLink">
            <Link to="/" onClick={this.onClickHome}>HOME</Link>
          </div>
        </div>
      ) : (
        <div className="headerLinksWrapper">
          <div className={introHeaderLinkClasses}>
            <Link to="/innovations" onClick={this.onClickPath}>INNOVATIONS</Link>
          </div>
          <div className={introHeaderLinkClasses}>
            <Link to="/timeline" onClick={this.onClickPath}>TIMELINE</Link>
          </div>
        </div>
      );

    return links;
  }
}

export default HeaderLinks;
