import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Header';
import DivisionBattle from './DivisionBattle.js'
import DivisionRanking from './DivisionRanking';

import image404 from '../404.jpg';

const About = () => <div>About</div>;
const fourOhFour = () => <img src={image404} alt='404' />;

class App extends Component {
  render() {
    return (
      <div className='container'>
        <BrowserRouter>
          <div className='page'>
            <Route
              render={(props) => {
                return <Header {...props} />
              }}
            />
            <div className='content'>
              <Switch>
              {/*Added keys to DivisionBattles to force remounting*/}
                <Route exact path='/division/:divisionId/battle' component={DivisionBattle} />
                <Route exact path='/division/:divisionId/ranking' component={DivisionRanking} />
                <Route exact path='/about' component={About} />
                <Route exact path='/' component={DivisionBattle} key={'index'}/>
                <Route component={fourOhFour} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
