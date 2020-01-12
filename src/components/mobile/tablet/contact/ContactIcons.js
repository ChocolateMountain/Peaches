import React, { Component } from 'react';

import githubIcon from '../../../../images/mobile/tablet/contact/github_icon.png';
import linkedinIcon from '../../../../images/mobile/tablet/contact/linkedin_icon.png';

export class ContactIcons extends Component {

  state = {
    onPageLoadFadeIcons: true
  };

  // css fade transition to show icons 
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        onPageLoadFadeIcons: false
      });
    }, 1800);
  }

  onClickGithubIcon = (e) => {
    window.open("https://github.com/ChocolateMountain", "_blank", "noopener");
  }

  onClickLinkedinIcon = (e) => {
    window.open("https://www.linkedin.com/in/letaochen", "_blank", "noopener");
  }

  render() {
    const iconClasses = 
      this.state.onPageLoadFadeIcons ? 
      "iconWrapper zeroOpacity" : "iconWrapper";

    return (
      <div className="contactIconsWrapper">
        <div  className={iconClasses} 
              onClick={this.onClickGithubIcon} >
          <img src={githubIcon} alt="Github" key="front" />
        </div>

        <div  className={iconClasses} 
              onClick={this.onClickLinkedinIcon} >
          <img src={linkedinIcon} alt="LinkedIn" key="front" />
        </div>
      </div>
    )
  }
}

export default ContactIcons; 
