import React, { Component } from 'react';
import Typed from 'react-typed';

import resume from '../../../../documents/resume_letaochen_2019.pdf';

export class IntroductionDescription extends Component {

  // todo: move these constant texts out of the state 
  state = {
    introductionDescriptions: [
      {
        header: ["DEVELOPER", "MENTOR", "INNOVATOR"],
        description: "Let's create <br />something <b>cool!</b>"
      }
    ]
  };

  // avoid memory leaks 
  componentWillUnmount() {
    if (this.typedIntroductionDescriptionHeader && this.typedIntroductionDescriptionHeader.length) {
      for (let typedHeader of this.typedIntroductionDescriptionHeader) {
        typedHeader.destroy();
        typedHeader = null;
      }
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
            {
              header.map((headerText, index) => {
                return (
                  <Typed  typedRef={
                    (typed => {
                      if (!this.typedIntroductionDescriptionHeader) {
                        this.typedIntroductionDescriptionHeader = [];
                      }
                      this.typedIntroductionDescriptionHeader[index] = typed; 
                    })
                  } 
                          strings={ [headerText] } 
                          showCursor={false} 
                          typeSpeed={45}
                          startDelay={2000 + (index * 900)} 
                          key={"introDescHeader" + index} />
                );
              })
            }
          </div>

          <div className="introductionDescAndResumeWrapper">
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
      </div>
    )
  }
}

export default IntroductionDescription;
