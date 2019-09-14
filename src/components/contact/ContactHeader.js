import React, { Component } from 'react';
import Typed from 'react-typed';

export class ContactHeader extends Component {

  state = {
    header: "Contact",
    email: "letao.chen@mail.mcgill.ca"
  };

  componentWillUnmount() {
    if (this.typedContactHeader) {
      this.typedContactHeader.destroy();
      this.typedContactHeader = null;
    }
    if (this.typedContactEmail) {
      this.typedContactEmail.destroy();
      this.typedContactEmail = null;
    }
  }

  render() {
    const { header, email } = this.state;
    return (
      <div className="contactHeaderContainer">
        <div className="contactHeaderWrapper">
          <div className="contactHeader">
            <Typed  typedRef={(typed => { this.typedContactHeader = typed; })} 
                    strings={ [header] } 
                    showCursor={false} 
                    typeSpeed={40} 
                    startDelay={2600} />
          </div>
          <div className="contactEmail">
            <Typed  typedRef={(typed => { this.typedContactEmail = typed; })}
                    strings={ [email] }
                    showCursor={false} 
                    typeSpeed={25} 
                    startDelay={2850} />
          </div>
        </div>
      </div>
    )
  }
}

export default ContactHeader;
