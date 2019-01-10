import React, { Component } from 'react';
import { Container, Image, Icon } from 'semantic-ui-react';
import portfolioData from '../../../../assets/data/data';
import classes from './Item.css';
import { Link } from 'react-router-dom';
import GraphQLImage from '../../../../assets/graphql.svg';

class PortfolioItem extends Component {
	constructor(props) {
		super(props);

		const portItem = portfolioData.find(item => {
			return item.slug === this.props.match.params.slug;
		});

		this.state = {
			item: portItem
		};
	}

	render() {
		return (
			<Container className={classes.Item}>
				<div>
					<Link to="/portfolio">
						<i className="fas fa-arrow-left" />
					</Link>
				</div>
				<div className="mainSection">
					<div className="heading">
						<h1>{this.state.item.title}</h1>
						<h2>{this.state.item.description}</h2>
						<h2>
							<a
								className={classes.gitLink}
								href={this.state.item.gitLink}
								target="_blank"
								rel="noopener noreferrer">
								<Icon name="github" /> Code
							</a>
							{'  |  '}
							<a
								href={this.state.item.deployLink}
								className={classes.gitLink}
								target="_blank"
								rel="noopener noreferrer">
								Deployed Version
							</a>
						</h2>
					</div>
					<section className={classes.built}>
						<h3>Built with: {this.state.item.technology}</h3>
						<div className="tech-icons" style={{ textAlign: 'center' }}>
							{this.state.item.tech.map(el => {
                if (el === 'graphql') {
											return <img src={GraphQLImage} alt="graphql" className="graphql-logo" style={{padding: "0 10px 0 8px", height: "28px"}} key={el} />;
										} else {
											return <i className={el} key={el} />;
									}
                })}
						</div>
						<p>{this.state.item.extendedDescription}</p>
						<ul>
							<li>
								<Image size="big" src={this.state.item.screenShot1} />
							</li>
							<li>
								<Image size="big" src={this.state.item.screenShot2} />
							</li>
							<li>
								<Image size="big" src={this.state.item.screenShot3} />
							</li>
						</ul>
						<h3 className={classes.bottomLink}>
							See the code:
							<a href={this.state.item.gitLink} target="_blank" rel="noopener noreferrer">
								<Icon name="github" />
							</a>
						</h3>
					</section>
				</div>
			</Container>
		);
	}
}

export default PortfolioItem;
