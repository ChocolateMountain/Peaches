import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';

import profilePic from '../../images/header/profile_pic_thumbnail_96x96.png';
import mountainPic from '../../images/header/mountain_thumbnail_96x96.png';

export class SelfieThumbnail extends Component {

  state = {
    isFlipped: false
  };

  toggleShowNameTextAndFlipThumbnail = (e) => {
    this.props.toggleShowNameText();
    this.setState({ isFlipped: !this.state.isFlipped });
  }

  render() {
    return (
      <div  className="selfieThumbnailWrapper" 
            onMouseEnter={this.toggleShowNameTextAndFlipThumbnail}
            onMouseLeave={this.toggleShowNameTextAndFlipThumbnail}>

        <ReactCardFlip isFlipped={this.state.isFlipped}>
          <img src={profilePic} alt="Letao Chen" key="front" />

          <img src={mountainPic} alt="Mountains" key="back" />
        </ReactCardFlip>
      </div>
    )
  }
}

export default SelfieThumbnail;

