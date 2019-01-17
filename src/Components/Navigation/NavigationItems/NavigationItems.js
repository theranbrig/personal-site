import React, { Component } from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

class NavigationItems extends Component {
	render() {
		return (
			<ul className={classes.NavigationItems}>
				<NavigationItem closed={this.props.closed} link="/">
					Home
				</NavigationItem>
				<NavigationItem closed={this.props.closed} link="/portfolio">
					Portfolio
				</NavigationItem>
				<NavigationItem closed={this.props.closed} link="/about">
					About
				</NavigationItem>
				<NavigationItem closed={this.props.closed} link="/contact">
					Contact
				</NavigationItem>
			</ul>
		);
	}
}

export default NavigationItems;
