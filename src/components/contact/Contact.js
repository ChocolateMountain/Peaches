import React, { Component } from 'react';

import ContactHeader from './ContactHeader';
import ContactIcons from './ContactIcons';

import '../../stylesheets/contact/Contact.css';

/**
 * Not specific to homepage 
 * Should appear on each router link 
 */
export class Contact extends Component {
  render() {
    return (
      <div className="contactWrapper">
        <ContactHeader />
        <ContactIcons />
      </div>
    )
  }
}

export default Contact;
