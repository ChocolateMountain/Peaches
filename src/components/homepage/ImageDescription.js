import React, { Component } from 'react';
import Typed from 'react-typed';
import Rellax from 'rellax';

export class ImageDescription extends Component {
  state = {
    imageDescriptions: [
      {
        id: 'zbl_image',
        header: '.ZBL',
        shortDescription: 'Patented Zoomable Image Standard',
        description:  '.zbl (zoombable) images can be zoomed in/out without loss of quality. <br />' +
                      '<b>O(n)</b> - linear space complexity. <br />' + 
                      '<b>1 000 000 000 TIMES LIGHTER</b> than gigapixel images that offer similar zooming capabilities.'
      }, {
        id: 'clicker_image',
        header: 'ACLICK',
        shortDescription: 'Dynamic Desktop Automation Tool',
        description:  'Simple <b>autoclicker</b> designed for virtual desktop environment automation tasks. <br />' +
                      'Compliments bash scripting automation tasks. <br />' + 
                      'Built with <b>OpenCV/JavaCV</b>.'
      }
    ],
    shortDescriptionTyped: false
  };

  componentDidMount() {
    this.rellaxImageDescription = new Rellax('.rellaxImageDescription', {
      speed: 4,
      zindex: 2
    });
  }

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
    const currentImageDescription = this.state.imageDescriptions.find(desc => desc.id === this.props.currentImageId);
    const { header, shortDescription, description } = currentImageDescription;
    
    return (
      <div className="imageDescriptionContainer rellaxImageDescription">
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
