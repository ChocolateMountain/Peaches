import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';

import githubIcon from '../../images/contact/github_icon.png';
import linkedinIcon from '../../images/contact/linkedin_icon.png';
import mountainPic from '../../images/contact/mountain_thumbnail_156x156.png';
import profilePic from '../../images/contact/profile_pic_thumbnail_156x156.png';

export class ContactIcons extends Component {

  state = {
    isFlipped: {
      githubIcon: false, 
      linkedinIcon: false 
    },
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

  toggleFlipGithubIcon = (e) => {
    this.setState(prevState => {
      return {
        isFlipped: {
          githubIcon: !prevState.isFlipped.githubIcon,
          linkedinIcon: prevState.isFlipped.linkedinIcon
        }
      };
    });
  }

  toggleFlipLinkedinIcon = (e) => {
    this.setState(prevState => { 
      return {
        isFlipped: {
          githubIcon: prevState.isFlipped.githubIcon,
          linkedinIcon: !prevState.isFlipped.linkedinIcon
        }
      };
    });
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
              onMouseEnter={this.toggleFlipGithubIcon} onMouseLeave={this.toggleFlipGithubIcon}
              onClick={this.onClickGithubIcon} >
          <ReactCardFlip isFlipped={this.state.isFlipped.githubIcon}>
            <img src={githubIcon} alt="Github" key="front" />
            <img src={mountainPic} alt="Chocolate Mountain" key="back" />
          </ReactCardFlip>
        </div>

        <div  className={iconClasses} 
              onMouseEnter={this.toggleFlipLinkedinIcon} onMouseLeave={this.toggleFlipLinkedinIcon}
              onClick={this.onClickLinkedinIcon} >
          <ReactCardFlip isFlipped={this.state.isFlipped.linkedinIcon}>
            <img src={linkedinIcon} alt="LinkedIn" key="front" />
            <img src={profilePic} alt="Letao Chen" key="back" />
          </ReactCardFlip>
        </div>
      </div>
    )
  }
}

export default ContactIcons;
