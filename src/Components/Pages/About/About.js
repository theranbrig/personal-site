import React, { Component } from 'react';
import classes from './About.css';
import {Image, Transition, Grid} from 'semantic-ui-react';
import Profile from '../../../assets/IMG_1880.jpg';


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
    });
  }

  render() {
    const {visible} = this.state

    return (
      <div classeName={classes.Main} style={{marginTop: '40px'}}>
        <Grid className={classes.Grid} stackable container centered>
            <Grid.Column mobile={16} tablet={4} computer={4}>
              <div>
                <Transition visible={visible} animation='scale' duration={1000}>
                  <Image size='medium' src={Profile} alt='theran brigowatz logo' circular/>
                </Transition>
              </div>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={12} computer={12}>
              <h1>Theran Brigowatz</h1>
              <h2>About Me</h2>
              <p>I am a web designer and full stack web developer who decided to make a career change after more than a decade in the education industry.  After moving to South Korea more than a decade ago, I decided that staring at a computer screen had more upside than yelling and screaming kids.  I have a passion to create and learn new technologies that I have continued since my childhood.  I am constantly pushing myself to learn and grow as programmer.  I enjoy spending time with my family, traveling, cooking, and brewing great craft beer.</p>
              <div className={classes.ImageList}>
              <h2>Skills</h2>
                <div>
                  <h3>Tech I've Got Down Pat</h3>
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
                      <span>&#xe609;</span>
                      <p>Git</p>
                    </li>
                    <li>
                      <span>&#xe61e;</span>
                      <p>NPM</p>
                    </li>
                    <li>
                      <span>&#xe66e;</span>
                      <p>PostgreSQL</p>
                    </li>
                  </ul>
                </div>
                <div className={classes.Know}>
                  <h3>Tech I Know My Way Around</h3>
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
                <h3>Tech to Learn</h3>
                <div className={classes.Learn}>
                  <ul>
                    <li>
                      <p>Anything else you throw at me.</p>
                    </li>
                  </ul>
                </div>
              <h2>Check out my resume <i className="far fa-file"></i></h2>
              <h2>Contact Me <i className="fas fa-at"></i></h2>
              </div>
            </Grid.Column>

          </Grid>
      </div>
    );
  }
}

export default About;
