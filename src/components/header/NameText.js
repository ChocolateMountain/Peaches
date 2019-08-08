import React, { Component } from 'react';
import Typed from 'react-typed';

export class NameText extends Component {

  state = {
    fullyTyped: false,
    mouseLeaveBeforeFullyTyped: false
  };

  shouldComponentUpdate(nextProps) {
    if (nextProps && !nextProps.showNameText) {
      this.typed.start();

      if (!this.state.fullyTyped && !this.state.mouseLeaveBeforeFullyTyped) {
        this.setState((state) => ({
          mouseLeaveBeforeFullyTyped: true
        }));
      }
    }
    return false;
  }

  onStringTyped = (index, typed) => {
    if (typed && typed.pause && !typed.pause.curString) {
      typed.stop(); // curString === ""

      if (!this.state.fullyTyped) {
        this.setState((state) => ({
          fullyTyped: true
        }));
      }

      if (this.state.mouseLeaveBeforeFullyTyped) {
        typed.start();
      }
    }
  }

  onComplete = (typed) => {
    if (typed) {
      typed.destroy();
    } else if (this.typed) {
      this.typed.destroy();
    }
    this.props.resetFlag();
  }

  render() {
    return (
      <div className="nameTextWrapper" key="nameText">
        <Typed  typedRef={(typed => { this.typed = typed; })} 
                strings={ ['Letao Chen', ''] } 
                onStringTyped={this.onStringTyped} 
                startDelay={0} backDelay={0} 
                typeSpeed={10} backSpeed={20} 
                onComplete={ this.onComplete } />
      </div>
    )
  }
}

export default NameText;
