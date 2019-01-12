import classes from './About.css';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import Profile from '../../../assets/IMG_1880.jpg';
import { Image, Grid } from 'semantic-ui-react';
import GraphQLImage from '../../../assets/graphql.svg'

class About extends Component {
	render() {
		return (
			<div className={classes.Main} style={{ marginTop: '40px' }}>
				<Grid className={classes.Grid} stackable container centered>
					<Grid.Column mobile={16} tablet={4} computer={4}>
						<div className={classes.sidebar}>
							<div className="imageArea">
								<Image
									size="small"
									src={Profile}
									alt="theran brigowatz logo"
									circular
									className="wow fadeIn"
								/>
							</div>
							<h3>
								<Link to="/contact">
									Contact Me <i className="fas fa-comment" />
								</Link>
							</h3>
							<h3>
								<a
									href="https://docs.google.com/document/d/1SUCN4YnYe4dDmCRN1bB_HOuhL9MsZyJNGaQaea3TJtY/edit?usp=sharing"
									target="_blank"
									rel="noopener noreferrer">
									Resume <i className="far fa-file" />
								</a>
							</h3>
							<h3>
								<a
									href="https://medium.com/@theran.brigowatz"
									target="_blank"
									rel="noopener noreferrer">
									Twitter Musings <i className="fab fa-twitter" />
								</a>
							</h3>
						</div>
					</Grid.Column>
					<Grid.Column mobile={16} tablet={12} computer={12}>
						<h1>Theran Brigowatz</h1>
						<h2>About Me</h2>
						<p>
							I am a full stack web developer with an eye for design who decided to make a career
							change after more than a decade in the education industry. An education at Bloc has
							given me a love of all things Javascript on both the front end and the back end, but I
							am not afraid to take on new languages, frameworks, and challenges. I have found my
							passion for all things code and development. It has given me a new enthusiasm for a
							career that I love, after a decade of energetic kids and stacks of essays to grade,
							while teaching in South Korea. Since my childhood, I have had a passion to create,
							whether it be art, food, or DIY. My interest in new technology is something that I
							have always had a great curiosity in pursuing and learning. I am constantly pushing
							myself to learn and grow as programmer. I enjoy spending time with my family,
							traveling, cooking, brewing craft beer, and the Minnesota Golden Gophers.
						</p>
						<p>
							I am open to work in South Korea, the United States, or remote positions right now.
							Drop me a line and get in touch about work opportunities.
						</p>
						<div className={classes.ImageList}>
							<h2>Skills</h2>
							<div className={classes.Skills}>
								<h3>Daily Use:</h3>
								<ul>
									<li>
										<i className="devicon-html5-plain" />
										<p>HTML</p>
									</li>
									<li>
										<i className="devicon-css3-plain" />
										<p>CSS</p>
									</li>
									<li>
										<i className="devicon-javascript-plain" />
										<p>JavaScript</p>
									</li>
									<li>
										<i className="devicon-react-original" />
										<p>React</p>
									</li>
									<li>
										<i className="devicon-nodejs-plain" />
										<p>Node</p>
									</li>
									<li>
										<i className="devicon-github-plain" />
										<p>Git</p>
									</li>
									<li>
										<i className="devicon-postgresql-plain" />
										<p>PostgreSQL</p>
									</li>
									<li>
                    <img src={GraphQLImage} alt="graphql" style={{height: "55px"}}/>
										<p>GraphQL</p>
									</li>
								</ul>
							</div>
							<div className={classes.Know}>
								<h3>No Slouch With:</h3>
								<ul>
									<li>Express</li>
									<li>MVC Architecture</li>
									<li>Jasmine</li>
									<li>Jest</li>
									<li>Mongo</li>
									<li>Sass</li>
									<li>Styled Components</li>
									<li>Semantic UI</li>
									<li>Bootstrap</li>
									<li>Material UI</li>
									<li>Heroku</li>
									<li>Photoshop</li>
								</ul>
							</div>
							<h3>Skills In the Pipeline:</h3>
							<div className={classes.Learn}>
								<ul>
									<li>
										<p>Give me your best shot. I'll take on anything else you throw at me.*</p>
									</li>
									<li>
										<p>*Also Sausage Making and Chacuterie.</p>
									</li>
								</ul>
							</div>
						</div>
					</Grid.Column>
				</Grid>
			</div>
		);
	}
}

export default About;
