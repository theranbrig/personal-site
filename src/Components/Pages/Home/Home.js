import React, { Component } from 'react';
import Particles from 'react-particles-js';
import ParticlesParams from './ParticleBackground/particlesjs-config.json';
import classes from './Home.css';
import { Image } from 'semantic-ui-react';
import Logo from '../../../assets/theran-logo.png';
import { Link } from 'react-router-dom';

class Home extends Component {
	render() {
		return (
			<div className={classes.MainDiv}>
				<Image src={Logo} id="mainLogoImage" />
				<div className={classes.MainContent}>
					<h1>Hi. I'm Theran.</h1>
					<h2>I'm a Full-Stack Web Developer located in Seoul, Korea.*</h2>
					<h3>
						See some of <Link to="/portfolio">my work</Link> and check out my code.
					</h3>
					<h3>
						<Link to="/about">Learn more</Link> about me and see my resume.
					</h3>
					<h3>
						I also have some musings on JavaScript and development.{' '}
						<a href="https://twitter.com/wellBuilt" target="_blank" rel="noopener noreferrer">
							Check it out.
						</a>
					</h3>
					<p>*Yes, that is the "Good" Korea.</p>
				</div>
				<Particles params={ParticlesParams} className={classes.Particles} />
			</div>
		);
	}
}

export default Home;
