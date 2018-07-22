import React, { Component } from 'react';
import {Container, Image} from 'semantic-ui-react';
import portfolioData from '../../../../assets/data/data';
import classes from './Item.css';
import {Link} from 'react-router-dom'

class PortfolioItem extends Component {
  constructor(props) {
    super(props);

    const portItem = portfolioData.find( item => {
      return item.slug === this.props.match.params.slug;
    })

    this.state = {
      item: portItem
    };
  }

  render() {
    return (
      <Container className={classes.Item}>
        <div>
          <Link to='/portfolio'><i className="fas fa-arrow-left"></i></Link>
        </div>
        <div className='mainSection'>
          <div className='heading'>
            <h1>{this.state.item.title}</h1>
            <h2>{this.state.item.description}</h2>
            <h2><a className={classes.gitLink} href={this.state.item.gitLink} target='_blank'>GitHub Source Code</a></h2>
          </div>
          <section className={classes.built}>
            <h3>Built with: {this.state.item.technology}</h3>
            <p>{this.state.item.extendedDescription}</p>
            <ul>
              <li>
                <Image size='big' src={this.state.item.screenShot1}/>
              </li>
              <li>
                <Image size='big' src={this.state.item.screenShot2}/>
              </li>
              <li>
                <Image size='big' src={this.state.item.screenShot3}/>
              </li>
            </ul>
            <h3 className={classes.bottomLink}>See more images and the source code on <a>GitHub</a></h3>
          </section>
        </div>
      </Container>
    );
  }
}

export default PortfolioItem;
