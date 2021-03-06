import React, { Component } from 'react';
import Particles from 'react-particles-js';
import ParticlesParams from './ParticleBackground/particlesjs-config.json';
import classes from './Home.css';
import { Image, Icon } from 'semantic-ui-react';
import Logo from '../../../assets/theran-logo.png';
import { Link } from 'react-router-dom';

class Home extends Component {
	render() {
		console.log('Welcome to the the Console.  Hopefully you see no red.');
		console.log(
			'Thanks for checking out my site.  Check out my github @ https://github.com/theranbrig'
		);

		return (
			<div className={classes.MainDiv}>
				<Image src={Logo} id="mainLogoImage" className="wow fadeIn" />
				<div className={classes.MainContent}>
					<h1>Hi. I'm Theran.</h1>
					<h2>I'm a Full-Stack Web Developer. Check out some of the cool stuff I've made.*</h2>
					<h3>
						See some of <Link to="/portfolio">my work</Link> and check out my code.
					</h3>
					<h3>
						<Link to="/about">Learn more</Link> about me and what tech I've been working with.
					</h3>
					<h3>
						Check out my musings on JavaScript and development. Check it out on{' '}
						<a href="https://twitter.com/wellBuilt" target="_blank" rel="noopener noreferrer">
							Twitter <Icon name="twitter" />
						</a>
						{'and '}
						<a
							href="https://medium.com/@theran.brigowatz"
							target="_blank"
							rel="noopener noreferrer">
							{' '}
							Medium <Icon name="medium" />
						</a>
						.
					</h3>
					<p>
						*I'm an American citizen currently located in the "Good" Korea, and available to work
						around the world.
					</p>
				</div>
				<Particles params={ParticlesParams} className={classes.Particles} />
			</div>
		);
	}
}

export default Home;
