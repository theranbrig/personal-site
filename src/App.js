import React, { Component } from 'react';
import NavBar from './Components/Navigation/NavBar/NavBar';
import Aux from './../src/hoc/Aux';
import SideDrawer from './Components/Navigation/SideDrawer/SideDrawer';
import Home from './Components/Pages/Home/Home';
import Portfolio from './Components/Pages/Portfolio/PortfolioMain';
import About from './Components/Pages/About/About';
import Contact from './Components/Pages/Contact/Contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Item from './Components/Pages/Portfolio/Item/Item';
import { WOW } from 'wowjs';

class App extends Component {
	state = {
		showSideDrawer: false
	};

	componentDidMount() {
		const wow = new WOW({ live: false });
		wow.init();
	}

	sideDrawerToggleHandler = () => {
		this.setState(prevState => {
			return { showSideDrawer: !prevState.showSideDrawer };
		});
	};

	sideDrawerClosedHandler = () => {
		this.setState({ showSideDrawer: false });
	};

	render() {
		return (
			<Aux>
				<Router>
					<div>
						<header>
							<NavBar sideDrawerToggle={this.sideDrawerToggleHandler} />
							<SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
						</header>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/portfolio" component={Portfolio} />
							<Route path="/portfolio/:slug" component={Item} />
							<Route path="/about" component={About} />
							<Route path="/contact" component={Contact} />
						</Switch>
					</div>
				</Router>
			</Aux>
		);
	}
}

export default App;
