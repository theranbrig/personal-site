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
				<div className={`wow fadeIn ${classes.MainContent}`} data-wow-delay="0.8s">
					<h1>Hi. I'm Theran.</h1>
					<h2>I'm a Full-Stack Web Developer. Check out some of the cool stuff I've made.*</h2>
					<h3>
						See some of <Link to="/portfolio">my work</Link> and check out my code.
					</h3>
					<h3>
						<Link to="/about">Learn more</Link> about me and see my resume.
					</h3>
					<h3>
						I also have some musings on JavaScript and development.{' '}
						<a href="https://twitter.com/wellBuilt" target="_blank" rel="noopener noreferrer">
							Check it out. <Icon name="twitter"/>
						</a>
					</h3>
					<p>*I'm an American citizen currently located in the "Good" Korea.  Soon to be back stateside.</p>
				</div>
				<Particles params={ParticlesParams} className={classes.Particles} />
			</div>
		);
	}
}

export default Home;
