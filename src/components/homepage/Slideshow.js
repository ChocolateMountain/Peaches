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
        header: '.ZBL',
        shortDescription: 'Patented Zoomable Image Standard',
        description:  '.zbl (zoombable) images can be zoomed in/out without loss of quality. <br />' +
                      'O(n) - linear space complexity. <br />' + 
                      '1 000 000 000 times lighter than gigapixel images that offer similar zooming capabilities.'
      }, {
        id: 'clicker_image',
        header: 'ACLICK',
        shortDescription: 'Dynamic Desktop Automation Tool',
        description:  'Simple autoclicker designed for virtual desktop environment automation tasks. <br />' +
                      'Built with OpenCV/JavaCV.'
      }
    ],
    displayedImageId: 'zbl_image'
  };

  onImageChange = (oldIndex, newIndex) => {
    const newImageId = this.state.images[newIndex].id;
    this.setState({ displayedImageId: newImageId });
  }

  render() {
    const fadeProperties = {
      duration: 7000,
      transitionDuration: 500,
      arrows: false,
      onChange: this.onImageChange
    };

    const { 
      header, 
      shortDescription, 
      description 
    } = this.state.imageDescription.find(desc => desc.id === this.state.displayedImageId);

    return (
      <div className="slideshowWrapper">
        <div className="slideshowImageWrapper">
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

        <div className="imageDescriptionContainer">
          <div className="imageDescriptionWrapper">
            <div className="imageHeaderWrapper">
              <div className="imageDescriptionHeader">
                { header }
              </div>
              <div className="imageShortDescription">
                { shortDescription }
              </div>
            </div>
            <div className="imageDescription">
              { description }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Slideshow;
