import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Header';
const Footer = () => <div>Footer</div>;
const Landing = () => <div>Landing</div>;
const About = () => <div>About</div>;

class App extends Component {
  render() {
    return (
      <div className='container'>
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route exact path='/about' component={About} />
              <Route exact path='/' component={Landing} />
            </Switch>
            <Footer/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
