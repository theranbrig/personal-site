import React, {Component} from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

class NavigationItems extends Component {
  render() {
    return (
      <ul className={classes.NavigationItems}>
        <NavigationItem link='/'>Home</NavigationItem>
        <NavigationItem link='/portfolio'>Portfolio</NavigationItem>
        <NavigationItem link='/about'>About</NavigationItem>
        <NavigationItem link='/contact'>Contact</NavigationItem>
      </ul>
    )
  }
}

export default NavigationItems
