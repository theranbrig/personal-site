import React, { Component } from 'react';
import Logo from '../../../assets/theran-logo.png';
import classes from './NavBar.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import ToggleButton from '../SideDrawer/ToggleButton';
import Aux from '../../../hoc/Aux';

class Navigation extends Component {
	state = {
		showSideDrawer: false
	};

	sideDrawerClosedHandler = () => {
		this.setState({ showSideDrawer: false });
	};

	sideDrawerToggleHandler = () => {
		this.setState(prevState => {
			return { showSideDrawer: !prevState.showSideDrawer };
		});
	};

	render() {
		return (
			<Aux>
				<div className={classes.Navigation}>
					<nav>
						<a href="/">
							<img src={Logo} className={classes.Logo} alt="Brigowatz Logo" />
						</a>
						<NavigationItems className={classes.DesktopOnly} />
						<ToggleButton clicked={this.props.sideDrawerToggle} />
					</nav>
				</div>
			</Aux>
		);
	}
}

export default Navigation;
