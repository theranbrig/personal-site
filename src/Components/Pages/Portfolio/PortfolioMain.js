import React, { Component } from 'react';
import classes from './PortfolioMain.css'
import { Card, Container, Image, Transition } from 'semantic-ui-react';
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
    let headerStyle = {
      color: '#40a4c8',
      fontSize: '1.3em',
      padding: '10px',
      fontFamily: 'Raleway'
    };

    let divStyle = {
      padding: '0 0 10px',
    }

    const {visible} = this.state
    return (
      <Container className={classes.Container}>
        <h1>Theran Brigowatz's Portfolio</h1>
        <h2>Click below for details, screenshots, and GitHub Links</h2>
        <Card.Group stackable centered itemsPerRow={3} className={classes.Portfolio}>
          {
            this.state.portfolio.map( (item, index) =>
              <Card className={classes.Card} key={item.slug}>
                  <Transition visible={visible} animation='scale' duration={500}>
                    <Link to={`/portfolio/${item.slug}`}><Image src={item.image} size='medium' centered/></Link>
                  </Transition>
                  <Card.Content style={divStyle}>
                    <Link to={`/portfolio/${item.slug}`}><Card.Header style={headerStyle}>{item.title}</Card.Header></Link>
                    <Card.Meta>{item.technology}</Card.Meta>
                    <Card.Meta>
                      <a href={item.gitLink} target='_blank'>Source Code</a> |
                      <Link to={`/portfolio/${item.slug}`}> More Info</Link>
                      </Card.Meta>
                  </Card.Content>
              </Card>
            )
          }
        </Card.Group>
      </Container>
    );
  }
}

export default Portfolio;

