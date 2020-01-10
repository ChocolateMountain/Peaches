import React, { Component } from 'react';

import ContactHeader from './ContactHeader';
import ContactIcons from './ContactIcons';

import '../../../../stylesheets/mobile/tablet/contact/Contact.css';

export class TabletContact extends Component {
  render() {
    return (
      <div className="contactWrapper">
        <ContactHeader />
        <ContactIcons />
      </div>
    )
  }
}

export default TabletContact;
