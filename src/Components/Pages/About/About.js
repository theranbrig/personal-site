import React, { Component } from 'react';
import classes from './About.css';
import {Image, Transition, Grid} from 'semantic-ui-react';
import Profile from '../../../assets/IMG_1880.jpg';
import {Link} from 'react-router-dom';


class About extends Component {
  state = {
    visible: false
  }

  componentDidMount() {
    this.makeVisible()
  }

  makeVisible = () => {
    setTimeout(() => {
      this.setState({visible: true})
    }, 200);
  }

  render() {
    const {visible} = this.state
    return (
      <div className={classes.Main} style={{marginTop: '40px'}}>
        <Grid className={classes.Grid} stackable container centered>
            <Grid.Column mobile={16} tablet={4} computer={4}>
              <div className={classes.sidebar}>
                <Transition visible={visible} animation='scale' duration={1000}>
                  <Image size='small' src={Profile} alt='theran brigowatz logo' circular/>
                </Transition>
                <h3><Link to='/contact'>Contact Me <i className="fas fa-comment"></i></Link></h3>
                <h3><a href='https://docs.google.com/document/d/1GOzEZ8lB-KF4j3GQCFPhZ7pdRygX6wl7fHr_pbYKQTw/edit?usp=sharing' target='_blank' rel="noopener noreferrer">Resume <i className="far fa-file"></i></a></h3>
                <h3><a href='https://medium.com/@theran.brigowatz' target='_blank' rel="noopener noreferrer">My Blog <i className="fab fa-readme"></i></a></h3>
              </div>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={12} computer={12}>
              <h1>Theran Brigowatz</h1>
              <h2>About Me</h2>
              <p>I am a full stack web developer with an eye for design who decided to make a career change after more than a decade in the education industry. I specialize in Javascript on both the Front-End and the Back- End, but I am not afraid to take on new languages and challenges.  After moving to South Korea more than a decade ago, I decided that staring at a computer screen had more upside than a classroom of unruly kids and stacks of essays to grade.  Since my childhood, I have had a passion to create, whether it be art, food, or DIY.  My interest in new technology is something that I have always had a great curiosity in pursuing and learning.  I am constantly pushing myself to learn and grow as programmer.  I enjoy spending time with my family, traveling, cooking, brewing craft beer, and the Minnesota Golden Gophers.</p>
              <div className={classes.ImageList}>
              <h2>Skills</h2>
                <div className={classes.Skills}>
                  <h3>Daily Use:</h3>
                  <ul>
                    <li>
                      <span>&#xe636;</span>
                      <p>HTML</p>
                    </li>
                    <li>
                      <span>&#xe649;</span>
                      <p>CSS</p>
                    </li>
                    <li>
                      <span>&#xe64e;</span>
                      <p>JavaScript</p>
                    </li>
                    <li>
                      <span>&#xe6ba;</span>
                      <p>React</p>
                    </li>
                    <li>
                      <span>&#xe618;</span>
                      <p>Node</p>
                    </li>
                    <li>
                      <span>&#xe609;</span>
                      <p>Git</p>
                    </li>
                    <li>
                      <span>&#xe61e;</span>
                      <p>NPM</p>
                    </li>
                    <li>
                      <span>&#xe67b;</span>
                      <p>Heroku</p>
                    </li>
                  </ul>
                </div>
                <div className={classes.Know}>
                  <h3>No Slouch With:</h3>
                    <ul>
                      <li>Firebase</li>
                      <li>Mongo</li>
                      <li>Material UI</li>
                      <li>Semantic UI</li>
                      <li>Bootstrap</li>
                      <li>Express</li>
                      <li>Photoshop</li>
                      <li>Ruby</li>
                    </ul>
                </div>
                <h3>Skills In the Pipeline:</h3>
                <div className={classes.Learn}>
                  <ul>
                    <li>
                      <p>Give me your best shot.  I'll take on anything else you throw at me.*</p>
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