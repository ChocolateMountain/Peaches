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

  // avoid memory leaks 
  componentWillUnmount() {
    if (this.typed) {
      this.typed.destroy();
      this.typed = null;
    }
  }

  render() {
    const typedStrings = ['<a href="/">LETAO CHEN</a>', 
                          '<a href="https://github.com/ChocolateMountain" rel="noopener noreferrer" target="_blank">GITHUB@CHOCOLATEMOUNTAIN</a>'];

    return (
      <div className="nameTextWrapper" key="nameText">
        <Typed  typedRef={(typed => { this.typed = typed; })} 
                strings={typedStrings} 
                onStringTyped={this.onStringTyped} 
                startDelay={100} backDelay={0} 
                typeSpeed={20} backSpeed={10} 
                loop={true} 
                showCursor={false} />
      </div>
    )
  }
}

export default NameText;
