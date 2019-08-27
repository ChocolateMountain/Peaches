import React, { Component } from 'react';
import Typed from 'react-typed';

export class ImageDescription extends Component {
  state = {
    imageDescriptions: [
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
    ]
  };

  render() {
    const currentImageDescription = this.state.imageDescriptions.find(desc => desc.id === this.props.currentImageId);
    const { header, shortDescription, description } = currentImageDescription;
    
    return (
      <div className="imageDescriptionContainer">
        <div className="imageDescriptionWrapper">
          <div className="imageHeaderWrapper">
            <div className="imageDescriptionHeader">
              <Typed  typedRef={(typed => { this.typedImageDescriptionHeader = typed; })} 
                      strings={ [header] } 
                      showCursor={false} />
            </div>
            <div className="imageShortDescription">
              <Typed  typedRef={(typed => { this.typedImageShortDescription = typed; })} 
                      strings={ [shortDescription] } 
                      showCursor={false} />
            </div>
          </div>
          <div className="imageDescription">
            <Typed  typedRef={(typed => { this.typedImageDescription = typed; })} 
                    strings={ [description] } />
          </div>
        </div>
    </div>
    )
  }
}

export default ImageDescription;
