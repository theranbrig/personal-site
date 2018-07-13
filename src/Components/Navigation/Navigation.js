import React, { Component } from 'react';
import Logo from './theran-logo.png';
import classes from './Navigation.css';



class Navigation extends Component {
  render() {
    return (
      <div className={classes.Navigation}>
        <img src={Logo} className={classes.Logo}/>
        <ul>
          <li>Home</li>
          <li>Portfolio</li>
          <li>Contact</li>
          <li>About</li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
