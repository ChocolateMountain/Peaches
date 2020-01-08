import React, { Component } from 'react';
import Typed from 'react-typed';

export class TabletNameText extends Component {

  // avoid memory leaks 
  componentWillUnmount() {
    if (this.typed) {
      this.typed.destroy();
      this.typed = null;
    }
  }

  render() {
    const typedStrings = ['<a href="/">HI, I\'M LETAO!</a>'];

    return (
      <div className="nameTextWrapper">
        <Typed  typedRef={(typed => { this.typed = typed; })}
                strings={typedStrings} 
                startDelay={1000} 
                typeSpeed={35} 
                showCursor={false} />
      </div>
    )
  }
}

export default TabletNameText;
