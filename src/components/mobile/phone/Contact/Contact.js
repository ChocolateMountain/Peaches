import React, { Component } from 'react';

import ContactHeader from './ContactHeader';
import ContactIcons from './ContactIcons';

import '../../../../stylesheets/mobile/phone/contact/Contact.css';

export class PhoneContact extends Component {
  render() {
    return (
      <div className="contactWrapper">
        <ContactHeader />
        <ContactIcons />
      </div>
    )
  }
}

export default PhoneContact;
