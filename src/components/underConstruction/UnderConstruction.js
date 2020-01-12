import React, { Component } from 'react'
import Typed from 'react-typed';

import underConstructionImage from '../../images/underConstruction/under_construction_500x500.png';

import '../../stylesheets/underConstruction/UnderConstruction.css';

export class UnderConstruction extends Component {

  state = {
    onPageLoadFadeImage: true
  };

  // css fade transition to show icons 
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        onPageLoadFadeImage: false
      });
    }, 400);
  }

  // avoid memory leaks 
  componentWillUnmount() {
    if (this.typed) {
      this.typed.destroy();
      this.typed = null;
    }
  }

  // static -> show image and text 
  render() {
    const typedString = "This component is under construction! <br>Coming soon..."; 
    const imageClasses = this.state.onPageLoadFadeImage ?
      "underConstructionImageWrapper zeroOpacity" : "underConstructionImageWrapper";

    return (
      <div className="underConstructionWrapper">
        <div className={imageClasses}>
          <img src={underConstructionImage} alt="UNDER CONSTRUCTION" />
        </div>
        <div className="underConstructionText">
          <Typed  typedRef={(typed => { this.typed = typed; })} 
                  strings={[typedString]} 
                  startDelay={1600} 
                  typeSpeed={25} />
        </div>
      </div>
    )
  }
}

export default UnderConstruction;
