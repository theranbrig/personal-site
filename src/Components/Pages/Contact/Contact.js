import React, { Component } from 'react';
import classes from './Contact.css';
import Logo from '../../../assets/theran-logo.png'
import {Image} from 'semantic-ui-react'


class Contact extends Component {
  render() {
    return (
      <div className={classes.ContactPage}>
        <Image className={classes.Logo} src={Logo} size='medium'/>
        <h1>Contact Theran</h1>
        <p>Get a hold of me for any questions you may have.</p>
        <div className={classes.SocialIcons}>
          <ul>
            <li>
              <a href='https://www.github.com/theranbrig' target='_blank' rel="noopener noreferrer">
                <i className="fab fa-github"></i>
                <h5>theranbrig</h5>
              </a>
            </li>
            <li>
              <a href='https://www.twitter.com/wellBuilt' target='_blank' rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
                <h5>wellBuilt</h5>
              </a>
            </li>
            <li>
              <a href='https://www.facebook.com/brigowatz' target='_blank' rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
                <h5>Theran Brigowatz</h5>
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/theran-brigowatz-a861b3133/' target='_blank' rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
                <h5>Theran Brigowatz</h5>
              </a>
            </li>
            <li>
              <a href='mailTo:theran.brigowatz@gmail.com' target='_blank' rel="noopener noreferrer">
                <i className="far fa-envelope-open"></i>
                <h5>theran.brigowatz@gmail.com</h5>
              </a>
            </li>
          </ul>
        </div>
        <p>I am available to discuss freelance, contract, and full-time work opportunities.  Check out my <a href='https://docs.google.com/document/d/1GOzEZ8lB-KF4j3GQCFPhZ7pdRygX6wl7fHr_pbYKQTw/edit?usp=sharing' target='_blank' rel="noopener noreferrer">resume.</a>  Please get in touch with me, or check out my <a href='https://medium.com/@theran.brigowatz' target='_blank' rel="noopener noreferrer">blog</a>, with any questions, comments, or biting criticism that you may have.</p>
      </div>
    );
  }
}

export default Contact;
