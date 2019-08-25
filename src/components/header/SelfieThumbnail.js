import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';

import profilePic from '../../images/header/profile_pic_thumbnail_96x96.png';
import mountainPic from '../../images/header/mountain_thumbnail_96x96.png';

export class SelfieThumbnail extends Component {

  state = {
    isFlipped: false
  };

  toggleFlipNameTextAndFlipThumbnail = (e) => {
    this.props.toggleFlipNameText();
    this.setState({ isFlipped: !this.state.isFlipped });
  }

  render() {
    return (
      <div  className="selfieThumbnailWrapper" 
            onMouseEnter={this.toggleFlipNameTextAndFlipThumbnail} >

        <ReactCardFlip isFlipped={this.state.isFlipped}>
          <img src={profilePic} alt="Letao Chen" key="front" />
          <img src={mountainPic} alt="Chocolate Mountain" key="back" />
        </ReactCardFlip>
      </div>
    )
  }
}

export default SelfieThumbnail;

