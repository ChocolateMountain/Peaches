import React, { Component } from 'react';
import { Fade } from 'react-slideshow-image';

import IntroductionDescription from './IntroductionDescription';

import '../../../../stylesheets/mobile/tablet/homepage/Introduction.css';
import grouseMountainIntroPhoto from '../../../../images/mobile/tablet/introduction/introduction_photo_grouse.png';
import bbqIntroPhoto from '../../../../images/mobile/tablet/introduction/introduction_photo_bbq.png';
import garibaldiIntroPhoto from '../../../../images/mobile/tablet/introduction/introduction_photo_garibaldi.png';
import griffintownIntroPhoto from '../../../../images/mobile/tablet/introduction/introduction_photo_griff.png';
import fireworksIntroPhoto from '../../../../images/mobile/tablet/introduction/introduction_photo_fireworks.png';

export class Introduction extends Component {

  state = {
    photos: [ 
      { // play slideshow in this order 
        id: "grouse_photo",
        src: grouseMountainIntroPhoto
      }, {
        id: "bbq_photo",
        src: bbqIntroPhoto
      }, {
        id: "garibaldi_photo",
        src: garibaldiIntroPhoto
      }, {
        id: "griffintown_photo",
        src: griffintownIntroPhoto
      }, {
        id: "fireworks_photo",
        src: fireworksIntroPhoto
      }
    ],
    displayedPhotoId: "grouse_photo",
    onPageLoadFadeIntoFirstPhoto: true
  };

  // css transition to show first photo 
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        onPageLoadFadeIntoFirstPhoto: false
      });
    }, 1600);
  }

  onPhotoChange = (oldIndex, newIndex) => {
    const newPhotoId = this.state.photos[newIndex].id;
    this.setState({
      displayedPhotoId: newPhotoId,
    });
  }

  render() {
    const fadeProperties = {
      duration: 6000,
      transitionDuration: 700,
      arrows: false,
      onChange: this.onPhotoChange
    };

    const introPhotoClasses = 
      this.state.onPageLoadFadeIntoFirstPhoto ? 
      "introductionPhotoWrapper zeroOpacity" : 
      "introductionPhotoWrapper";

    return (
      <div className="introductionWrapper">

        <div className="emptyBlock"></div>
        <div className="emptyBlock"></div>
        <div className="emptyBlock"></div>
        <div className="emptyBlock"></div>

        <div className={introPhotoClasses}>
          <Fade {...fadeProperties}>
            { this.state.photos.map((photo, index) => {
                return (
                  <div className="each-fade" key={"introPhoto" + index} >
                    <div className="photo-container">
                      <img src={photo.src} alt={photo.id} />
                    </div>
                  </div>)
              }) }
          </Fade>
        </div>

        <div className="emptyBlock"></div>
        <div className="emptyBlock"></div>
        <div className="emptyBlock"></div>
        <div className="emptyBlock"></div>

        <IntroductionDescription />
      </div>
    )
  }
}

export default Introduction;
