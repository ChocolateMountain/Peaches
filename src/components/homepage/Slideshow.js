import React, { Component } from 'react';
import { Fade } from 'react-slideshow-image';
import Rellax from 'rellax';

import ImageDescription from './ImageDescription';

import '../../stylesheets/homepage/Slideshow.css';
import zblSlideshowImage from '../../images/slideshow/zbl_slideshow_image0.png';
import clickerSlideshowImage from '../../images/slideshow/clicker_slideshow_image0.png';

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
    displayedImageId: 'zbl_image',
    onPageLoadDelayTypedAnimation: true,
    onPageLoadFadeIntoFirstImage: true
  };

  // css transition to show first image 
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        onPageLoadFadeIntoFirstImage: false
      });
    }, 700);

    this.rellaxSlideshowImage = new Rellax('.rellaxSlideshowImage', {
      speed: -2
    });
  }

  // prevent memory leaks
  componentWillUnmount() {
    if (this.rellaxSlideshowImage) {
      this.rellaxSlideshowImage.destroy();
      this.rellaxSlideshowImage = null;
    }
  }

  onImageChange = (oldIndex, newIndex) => {
    const newImageId = this.state.images[newIndex].id;
    this.setState({
      displayedImageId: newImageId,
      onPageLoadDelayTypedAnimation: false
    });
  }

  render() {
    const fadeProperties = {
      duration: 13000,
      transitionDuration: 700,
      arrows: false,
      onChange: this.onImageChange
    };

    const slideshowImageClasses = 
      this.state.onPageLoadFadeIntoFirstImage ? 
      "slideshowImageWrapper zeroOpacity rellaxSlideshowImage" : 
      "slideshowImageWrapper rellaxSlideshowImage";

    return (
      <div className="slideshowWrapper">
        <div className={slideshowImageClasses}>
          <Fade {...fadeProperties}>
            { this.state.images.map((image, index) => {
                return (
                  <div className="each-fade" key={"slideshowImage" + index} >
                    <div className="image-container">
                      <img src={image.src} alt={image.id} />
                    </div>
                  </div>)
              }) }
          </Fade>
        </div>

        <ImageDescription currentImageId={this.state.displayedImageId} 
                          key={this.state.displayedImageId + '_key'} 
                          onPageLoadDelayTypedAnimation={this.state.onPageLoadDelayTypedAnimation} />
      </div>
    )
  }
}

export default Slideshow;
