import React, { Component } from 'react';
import Typed from 'react-typed';

export class ImageDescription extends Component {

  state = {
    imageDescriptions: {
      zbl_image: {
        header: '.zbl',
        shortDescription: 'Patented Zoomable Image Standard',
        description:  'Zoom without loss of quality<br />' +
                      '<b>O(n)</b> - linear space complexity<br />' + 
                      '<b>BILLION TIMES LIGHTER</b> than gigapixels'
      },
      clicker_image: {
        header: 'ACLICK',
        shortDescription: 'Dynamic Desktop Automation Tool',
        description:  '<b>Autoclicker</b> for desktop automation<br />' +
                      'Compliments bash scripting<br />' + 
                      'Built with <b>OpenCV/JavaCV</b>'
      }
    },
    shortDescriptionTyped: false
  };

  // avoid memory leaks 
  componentWillUnmount() {
    if (this.typedImageDescriptionHeader) {
      this.typedImageDescriptionHeader.destroy();
      this.typedImageDescriptionHeader = null;
    }
    if (this.typedImageShortDescription) {
      this.typedImageShortDescription.destroy();
      this.typedImageShortDescription = null;
    }
    if (this.typedImageDescription) {
      this.typedImageDescription.destroy();
      this.typedImageDescription = null;
    }
  }

  /**
   * this also gets triggered right after `start()` is called
   * set & check state so we dont call `stop()` again
   */
  onShortDescriptionTyped = (index, typed) => {
    if (typed && !this.state.shortDescriptionTyped) {
      typed.stop();
      this.setState({ shortDescriptionTyped: true });
      setTimeout(() => {
        typed.start();
      }, this.props.onPageLoadDelayTypedAnimation ? 9500 : 10500);
    }
  }

  render() {
    const currentImageDescription = this.state.imageDescriptions[this.props.currentImageId];
    const { header, shortDescription, description } = currentImageDescription;

    return (
      <div className="imageDescriptionContainer">
        <div className="imageDescriptionWrapper">
          <div className="imageHeaderWrapper">
            <div className="imageDescriptionHeader">
              <Typed  typedRef={(typed => { this.typedImageDescriptionHeader = typed; })} 
                      strings={ [header] } 
                      showCursor={false} 
                      typeSpeed={60}
                      startDelay={this.props.onPageLoadDelayTypedAnimation ? 1000 : 100} />
            </div>
            <div className="imageShortDescription">
              <Typed  typedRef={(typed => { this.typedImageShortDescription = typed; })} 
                      strings={ [shortDescription, ''] } 
                      showCursor={false} 
                      typeSpeed={25} backSpeed={10} 
                      startDelay={this.props.onPageLoadDelayTypedAnimation ? 1350 : 350} 
                      onStringTyped={this.onShortDescriptionTyped} />
            </div>
          </div>
          <div className="imageDescription">
            <Typed  typedRef={(typed => { this.typedImageDescription = typed; })} 
                    strings={ [description] } 
                    typeSpeed={5} 
                    startDelay={this.props.onPageLoadDelayTypedAnimation ? 1700 : 700} />
          </div>
        </div>
      </div>
    )
  }
}

export default ImageDescription;
