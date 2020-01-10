import React, { Component } from 'react';

import profilePic from '../../../../images/mobile/phone/header/profile_pic_thumbnail_540x540.png';

export class SelfieThumbnail extends Component {

  state = {
    onPageLoadFadeProfilePic: true
  };

  // css transition - fade profile picture 
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        onPageLoadFadeProfilePic: false
      });
    }, 300);
  }

  render() {

    const introProfilePicClasses = 
      this.state.onPageLoadFadeProfilePic ?
      "selfieThumbnailWrapper zeroOpacity" : 
      "selfieThumbnailWrapper";

    return (
      <div className={introProfilePicClasses}>
        <img src={profilePic} alt="Letao Chen" />
      </div>
    )
  }
}

export default SelfieThumbnail;
