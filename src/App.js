import React, { Component } from 'react';
import NavBar from './Components/Navigation/NavBar/NavBar'
import Aux from './../src/hoc/Aux';
import SideDrawer from './Components/Navigation/SideDrawer/SideDrawer';
import Home from './Components/Pages/Home/Home'
import Portfolio from './Components/Pages/Portfolio/Portfolio'
import About from './Components/Pages/About/About'
import Contact from './Components/Pages/Contact/Contact'
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  state = {
    showSideDrawer: false
  }

  sideDrawerToggleHandler = () => {
    this.setState( (prevState) => {
      return {showSideDrawer: !prevState.showSideDrawer}
    });
  }

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false})
  }

  render() {
    return (
    <Aux>
      <Router>
        <div>
          <div className="App">
            <NavBar sideDrawerToggle={this.sideDrawerToggleHandler}/>
            <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
          </div>
          <div>
            <Route exact path='/' component={Home} />
            <Route path='/portfolio' component={Portfolio} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
          </div>
        </div>
      </Router>
    </Aux>

    );
  }
}

export default App;
