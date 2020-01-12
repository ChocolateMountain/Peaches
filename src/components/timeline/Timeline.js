import React, { Component } from 'react';

import UnderConstruction from '../underConstruction/UnderConstruction';

import '../../stylesheets/timeline/Timeline.css';

export class Timeline extends Component {
  render() {
    return (
      <div className="timelineWrapper">
        <UnderConstruction />
      </div>
    )
  }
}

export default Timeline;
