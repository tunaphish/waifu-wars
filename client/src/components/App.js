import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Landing from './Landing';
import DivisionList from './DivisionList';
import DivisionBattle from './DivisionBattle.js'
import DivisionRanking from './DivisionRanking';
const About = () => <div>About</div>;
const fourOhFour = () => <div>404 Placeholder</div>;

class App extends Component {
  render() {
    return (
      <div className='container'>
        <BrowserRouter>
          <div>
            <Route
              render={(props) => {
                return <Header {...props} />
              }}
            />
            <Switch>
              <Route exact path='/division/list' component={DivisionList} />
              <Route exact path='/division/:divisionId/battle' component={DivisionBattle} />
              <Route exact path='/division/:divisionId/ranking' component={DivisionRanking} />
              <Route exact path='/about' component={About} />
              <Route exact path='/' component={Landing} />
              <Route component={fourOhFour} />
            </Switch>
            <Footer/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
