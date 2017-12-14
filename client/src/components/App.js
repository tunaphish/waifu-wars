import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Header';
import Landing from './Landing';
import DivisionList from './DivisionList';
import DivisionRanking from './DivisionRanking';
const Footer = () => <div>Footer</div>;
const About = () => <div>About</div>;

class App extends Component {
  render() {
    return (
      <div className='container'>
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route path='/divisions' component={DivisionList} />
              <Route path='/ranking' component={DivisionRanking} />
              <Route path='/about' component={About} />
              <Route path='/' component={Landing} />
            </Switch>
            <Footer/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
