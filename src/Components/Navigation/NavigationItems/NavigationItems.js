import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link='/' active>Home</NavigationItem>
      <NavigationItem link='/portfolio'>Portfolio</NavigationItem>
      <NavigationItem link='/about'>About</NavigationItem>
      <NavigationItem link='/contact'>Contact</NavigationItem>
    </ul>
  )
}

export default navigationItems
