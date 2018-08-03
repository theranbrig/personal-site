import classes from './About.css';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import Profile from '../../../assets/IMG_1880.jpg';
import { Image, Transition, Grid } from 'semantic-ui-react';

class About extends Component {
	state = {
		visible: false
	};

	componentDidMount() {
		this.makeVisible();
	}

	makeVisible = () => {
		setTimeout(() => {
			this.setState({ visible: true });
		}, 200);
	};

	render() {
		const { visible } = this.state;
		return (
			<div className={classes.Main} style={{ marginTop: '40px' }}>
				<Grid className={classes.Grid} stackable container centered>
					<Grid.Column mobile={16} tablet={4} computer={4}>
						<div className={classes.sidebar}>
							<Transition visible={visible} animation="scale" duration={1000}>
								<Image
									size="small"
									src={Profile}
									alt="theran brigowatz logo"
									circular
								/>
							</Transition>
							<h3>
								<Link to="/contact">
									Contact Me <i className="fas fa-comment" />
								</Link>
							</h3>
							<h3>
								<a
									href="https://docs.google.com/document/d/1GOzEZ8lB-KF4j3GQCFPhZ7pdRygX6wl7fHr_pbYKQTw/edit?usp=sharing"
									target="_blank"
									rel="noopener noreferrer"
								>
									Resume <i className="far fa-file" />
								</a>
							</h3>
							<h3>
								<a
									href="https://medium.com/@theran.brigowatz"
									target="_blank"
									rel="noopener noreferrer"
								>
									My Blog <i className="fab fa-readme" />
								</a>
							</h3>
						</div>
					</Grid.Column>
					<Grid.Column mobile={16} tablet={12} computer={12}>
						<h1>Theran Brigowatz</h1>
						<h2>About Me</h2>
						<p>
							I am a full stack web developer with an eye for design who decided
							to make a career change after more than a decade in the education
							industry. An education at Bloc has allowed me to specialize in
							Javascript on both the front end and the back end, but I am not
							afraid to take on new languages and challenges. After moving to
							South Korea more than a decade ago, I decided that staring at a
							computer screen had more upside than a classroom of unruly kids
							and stacks of essays to grade. Since my childhood, I have had a
							passion to create, whether it be art, food, or DIY. My interest in
							new technology is something that I have always had a great
							curiosity in pursuing and learning. I am constantly pushing myself
							to learn and grow as programmer. I enjoy spending time with my
							family, traveling, cooking, brewing craft beer, and the Minnesota
							Golden Gophers.
						</p>
						<div className={classes.ImageList}>
							<h2>Skills</h2>
							<div className={classes.Skills}>
								<h3>Daily Use:</h3>
								<ul>
									<li>
										<i className="devicon-html5-plain colored" />
										<p>HTML</p>
									</li>
									<li>
										<i class="devicon-css3-plain colored" />
										<p>CSS</p>
									</li>
									<li>
										<i class="devicon-javascript-plain colored" />
										<p>JavaScript</p>
									</li>
									<li>
										<i class="devicon-react-original colored" />
										<p>React</p>
									</li>
									<li>
										<i class="devicon-nodejs-plain colored" />
										<p>Node</p>
									</li>
									<li>
										<i class="devicon-github-plain" />
										<p>Git</p>
									</li>
									<li>
										<i class="devicon-sass-original colored" />
										<p>Sass</p>
									</li>
									<li>
										<i class="devicon-jasmine-plain colored" />
										<p>Jasmine</p>
									</li>
								</ul>
							</div>
							<div className={classes.Know}>
								<h3>No Slouch With:</h3>
								<ul>
									<li>Express</li>
									<li>Mongo</li>
									<li>PostgreSQL</li>
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
										<p>
											Give me your best shot. I'll take on anything else you
											throw at me.*
										</p>
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
