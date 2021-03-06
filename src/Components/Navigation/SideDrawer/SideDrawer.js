import React from 'react';
import NavigationItems from './../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

const sideDrawer = props => {
	let attachedClasses = [classes.SideDrawer, classes.Close];
	if (props.open) {
		attachedClasses = [classes.SideDrawer, classes.Open];
	}

	return (
		<Aux>
			<Backdrop show={props.open} clicked={props.closed} />
			<div className={attachedClasses.join(' ')}>
				<div>
					<i onClick={props.closed} className={`${classes.ToggleButton} fas fa-arrow-right`} />
					<NavigationItems closed={props.closed} />
				</div>
			</div>
		</Aux>
	);
};

export default sideDrawer;
