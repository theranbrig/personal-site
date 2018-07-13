import React, { Component } from 'react';
import {Route, BrowserRouter} from 'react-router-dom'
import Home from './Components/Pages/Home'
import Portfolio from './Components/Pages/Portfolio'
import About from './Components/Pages/About'
import Contact from './Components/Pages/Contact';
import Navigation from './Components/Navigation/Navigation'
import Aux from './../src/hoc/Aux';

class App extends Component {
  render() {
    return (
    <Aux>
      <div className="App">
      <Navigation/>
        <BrowserRouter>
          <div>
            <Route exact path='/' component={Home} />
            <Route path='/portfolio' component={Portfolio} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
          </div>
        </BrowserRouter>
      </div>
    </Aux>

    );
  }
}

export default App;
