import React from 'react';
import classes from './ToggleButton.css';

const toggleButton = props => {
	return <i onClick={props.clicked} className={`${classes.ToggleButton} fas fa-bars`} />;
};

export default toggleButton;
