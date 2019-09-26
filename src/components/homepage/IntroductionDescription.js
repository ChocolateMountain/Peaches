import React, { Component } from 'react';
import Typed from 'react-typed';
import Rellax from 'rellax';

export class IntroductionDescription extends Component {

  state = {
    introductionDescriptions: [
      {
        header: "Developer - Mentor - Innovator",
        description: "Let's create something <b>cool!</b>"
      }
    ]
  };

  componentDidMount() {
    this.rellaxIntroductionDescription = new Rellax('.rellaxIntroductionDescription', {
      speed: 4,
      zindex: 2
    });
  }

  // avoid memory leaks 
  componentWillUnmount() {
    if (this.typedIntroductionDescriptionHeader) {
      this.typedIntroductionDescriptionHeader.destroy();
      this.typedIntroductionDescriptionHeader = null;
    }
    if (this.typedIntroductionDescription) {
      this.typedIntroductionDescription.destroy();
      this.typedIntroductionDescription = null;
    }
  }

  render() {
    const { header, description } = this.state.introductionDescriptions[0];

    return (
      <div className="introductionDescriptionContainer rellaxIntroductionDescription">
        <div className="introductionDescriptonWrapper">
          <div className="introductionDescriptionHeader">
            <Typed  typedRef={(typed => { this.typedIntroductionDescriptionHeader = typed; })} 
                    strings={ [header] } 
                    showCursor={false} 
                    typeSpeed={30}
                    startDelay={2000} />
          </div>
          <div className="introductionDescription">
            <Typed  typedRef={(typed => { this.typedIntroductionDescription = typed; })} 
                    strings={ [description] } 
                    typeSpeed={15}
                    startDelay={2400} />
          </div>
        </div>
      </div>
    )
  }
}

export default IntroductionDescription;
