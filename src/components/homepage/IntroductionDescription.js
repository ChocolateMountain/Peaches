import React, { Component } from 'react';
import Typed from 'react-typed';

import resume from '../../documents/resume_letaochen_2019.pdf';

export class IntroductionDescription extends Component {

  state = {
    introductionDescriptions: [
      {
        header: "Developer - Mentor - Innovator",
        description: "Let's create something <b>cool!</b>"
      }
    ]
  };

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

  onResumeClick = (e) => {
    window.open(resume, "_blank", "noopener");
  }

  render() {
    const { header, description } = this.state.introductionDescriptions[0];

    return (
      <div className="introductionDescriptionContainer">
        <div className="introductionDescriptionWrapper">
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

          <button className="resumeButton" onClick={this.onResumeClick} >
            View Resume
          </button>
        </div>
      </div>
    )
  }
}

export default IntroductionDescription;
