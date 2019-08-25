import React, { Component } from 'react';
import Typed from 'react-typed';

export class NameText extends Component {

  state = {
    ignoreTypedStop: false,
    flipNameText: false
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (this.typed && 
          !nextState.ignoreTypedStop &&                           // only set `ignoreTypedStop` once 
          nextProps.flipNameText !== nextState.flipNameText) {    // only set upon props update 

      this.typed.start();                                         // this will trigger `onStringTyped()`, do not call stop()
      this.setState((state) => ({ 
        ignoreTypedStop: true,
        flipNameText: !state.flipNameText
      }));
    }
    return false;
  }

  onStringTyped = (index, typed) => {
    if (typed) {
      if (!this.state.ignoreTypedStop) {
        typed.stop();
      } else {
        // if we did ignore the stop, reset the flag 
        this.setState({ ignoreTypedStop: false });
      }
    }
  }

  render() {
    const typedStrings = ['<a href="/">Letao Chen</a>', 
                          '<a href="https://github.com/ChocolateMountain" target="_blank">github.com/ChocolateMountain</a>'];

    return (
      <div className="nameTextWrapper" key="nameText">
        <Typed  typedRef={(typed => { this.typed = typed; })} 
                strings={typedStrings} 
                onStringTyped={this.onStringTyped} 
                startDelay={0} backDelay={0} 
                typeSpeed={10} backSpeed={15} 
                loop={true} />
      </div>
    )
  }
}

export default NameText;
