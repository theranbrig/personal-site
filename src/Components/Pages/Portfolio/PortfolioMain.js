import React, { Component } from 'react';
import classes from './PortfolioMain.css'
import { Container, Image, Transition, Grid} from 'semantic-ui-react';
import portfolioData from '../../../assets/data/data';
import {Link} from 'react-router-dom';


class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portfolio: portfolioData,
      visible: false
    }
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
      <Container className={classes.Container}>
        <h1>Theran Brigowatz's Portfolio</h1>
        <h2>Click below for details, screenshots, and GitHub Links</h2>
        <Grid centered relaxed container className={classes.Portfolio} textAlign='center'>
          {
            this.state.portfolio.map( (item, index) =>
              <Grid.Column mobile={12} tablet={8} computer={5} key={item.slug}>
                  <Transition visible={visible} animation='scale' duration={500}>
                    <a href={item.deployLink} className={classes.MainLink}><Image src={item.image} fluid rounded centered/></a>
                  </Transition>
                  <div className={classes.ItemDiv}>
                    <Link to={`/portfolio/${item.slug}`}><h3>{item.title}</h3></Link>
                    <h4>{item.technology}</h4>
                    <h5>
                      <a href={item.gitLink} target='_blank'>Source Code</a> |
                      <Link to={`/portfolio/${item.slug}`}> More Info</Link>
                      </h5>
                  </div>
              </Grid.Column>
            )
          }
        </Grid>
      </Container>
    );
  }
}

export default Portfolio;

