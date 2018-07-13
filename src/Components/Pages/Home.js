import React, { Component } from 'react'
import Particles from 'react-particles-js'
import ParticlesParams from './../UI/ParticleBackground/particlesjs-config.json'

class Home extends Component {
  render() {
    return (
      <div>
        <Particles
          params={ParticlesParams}
        />
      </div>
    )
  }
}

export default Home;

