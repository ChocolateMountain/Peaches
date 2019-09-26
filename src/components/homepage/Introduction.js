import React, { Component } from 'react';
import { Fade } from 'react-slideshow-image';
import Rellax from 'rellax';

import IntroductionDescription from './IntroductionDescription';

import '../../stylesheets/homepage/Introduction.css';
import grouseMountainIntroPhoto from '../../images/introduction/introduction_photo_grouse.png';
import bbqIntroPhoto from '../../images/introduction/introduction_photo_bbq.png';
import garibaldiIntroPhoto from '../../images/introduction/introduction_photo_garibaldi.png';
import griffintownIntroPhoto from '../../images/introduction/introduction_photo_griff.png';
import fireworksIntroPhoto from '../../images/introduction/introduction_photo_fireworks.png';

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

    this.rellaxIntroduction = new Rellax('.rellaxIntroduction', {
      speed: -1
    });
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
      "introductionPhotoWrapper zeroOpacity rellaxIntroduction" : 
      "introductionPhotoWrapper rellaxIntroduction";

    return (
      <div className="introductionWrapper">
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

        <IntroductionDescription />
      </div>
    )
  }
}

export default Introduction;
