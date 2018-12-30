import React, { Component } from 'react';
import classes from './PortfolioMain.css';
import { Container, Image, Icon, Grid } from 'semantic-ui-react';
import portfolioData from '../../../assets/data/data';
import { Link } from 'react-router-dom';

class Portfolio extends Component {
	constructor(props) {
		super(props);
		this.state = {
			portfolio: portfolioData
		};
	}

	render() {
		return (
			<Container className={classes.Container}>
				<h1>Theran Brigowatz's Portfolio</h1>
				<h2>Click on the icon to see the deployed version.</h2>
				<h2>Check out the links below for further details, screenshots, and GitHub Links.</h2>
				<Grid centered relaxed container className={classes.Portfolio} textAlign="center">
					{this.state.portfolio.map((item, index) => (
						<Grid.Column mobile={16} tablet={8} computer={8} key={item.slug}>
							<a
								href={item.deployLink}
								className={classes.MainLink}
								target="_blank"
								rel="noopener noreferrer">
								<Image src={item.image} size="medium" rounded centered className="wow fadeIn" />
							</a>
							<div className={classes.ItemDiv}>
								<Link to={`/portfolio/${item.slug}`}>
									<h3>{item.title}</h3>
								</Link>
								<h4>{item.technology}</h4>
								<div className="tech-icons" style={{ textAlign: 'center' }}>
									{item.tech.map(el => (
										<i className={el} key={el} />
									))}
								</div>
								<h5>
									<a href={item.gitLink} target="_blank" rel="noopener noreferrer">
										See it on Git
									</a>{' '}
									|<Link to={`/portfolio/${item.slug}`}> Learn More</Link>
								</h5>
							</div>
						</Grid.Column>
					))}
				</Grid>
				<h4>
					<a href="https://github.com/theranbrig" target="_blank" rel="noopener noreferrer">
						Check it all out on <Icon name="github" />
					</a>
				</h4>
			</Container>
		);
	}
}

export default Portfolio;
