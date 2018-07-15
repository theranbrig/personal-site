import React, { Component } from 'react'
import Particles from 'react-particles-js'
import ParticlesParams from './ParticleBackground/particlesjs-config.json'
import classes from './Home.css'

class Home extends Component {
  render() {
    return (
      <div>
        <Particles
          params={ParticlesParams}
          className={classes.Particles}
        />
        <div>
          <h1>Theran Brigowatz</h1>
          <h2>Full Stack Web Developer</h2>
        </div>
      </div>
    )
  }
}

export default Home;

