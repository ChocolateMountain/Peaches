import React, { Component } from 'react';
import Typed from 'react-typed';

export class NameText extends Component {

  shouldComponentUpdate(nextProps) {
    if (nextProps && !nextProps.showNameText) {
      this.typed.start();
    }
    return false;
  }

  onStringTyped = (index, typed) => {
    if (typed && typed.pause && !typed.pause.curString) {
      typed.stop(); // curString === ""
    }
  }

  render() {
    return (
      <div className="nameTextWrapper" key="nameText">
        <Typed  typedRef={(typed => { this.typed = typed; })} 
                strings={ ['Letao Chen', ''] } 
                onStringTyped={this.onStringTyped} 
                startDelay={0} backDelay={0} 
                typeSpeed={10} backSpeed={20} 
                onComplete={ this.props.resetFlag } />
      </div>
    )
  }
}

export default NameText;
