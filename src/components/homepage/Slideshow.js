import React, { Component } from 'react';
import { Fade } from 'react-slideshow-image';

import '../../stylesheets/homepage/Slideshow.css';
import zblSlideshowImage from '../../images/slideshow/zbl_slideshow_image1.png'
import clickerSlideshowImage from '../../images/slideshow/clicker_slideshow_image2.png';

export class Slideshow extends Component {

  state = {
    images: [
      {
        id: 'zbl_image',
        src: zblSlideshowImage
      }, {
        id: 'clicker_image',
        src: clickerSlideshowImage
      }
    ],
    imageDescription: [
      {
        id: 'zbl_image',
        header: '',
        description: ''
      }, {
        id: 'clicker_image',
        header: '',
        description: ''
      }
    ]
  };

  render() {
    const fadeProperties = {
      duration: 7000,
      transitionDuration: 500,
      arrows: false
    };

    return (
      <div className="slideshowWrapper">
        <div className="slideshowImageWrapper">
          <Fade {...fadeProperties}>
            { 
              this.state.images.map((image, index) => {
                return (
                  <div className="each-fade" key={"slideshowImage" + index} >
                    <div className="image-container">
                      <img src={image.src} alt={image.id} />
                    </div>
                  </div>)
              })
            }
          </Fade>
        </div>

        <div className="textDescriptionForSlideshowWrapper"></div>
      </div>
    )
  }
}

export default Slideshow;
