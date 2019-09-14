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
    }
  };

  render() {
    return (
      <div className="contactIconsWrapper">
        <ReactCardFlip isFlipped={this.state.isFlipped.githubIcon}>
          <img src={githubIcon} alt="Github" key="front" />
          <img src={mountainPic} alt="Chocolate Mountain" key="back" />
        </ReactCardFlip>
        
        <ReactCardFlip isFlipped={this.state.isFlipped.linkedinIcon}>
          <img src={linkedinIcon} alt="LinkedIn" key="front" />
          <img src={profilePic} alt="Letao Chen" key="back" />
        </ReactCardFlip>
      </div>
    )
  }
}

export default ContactIcons;
