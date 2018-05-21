import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Header';
import Battle from './Battle'
import Ranking from './Ranking';

import image404 from '../img/404.jpg';
const fourOhFour = () => <img src={image404} alt='404' />;

export default () => {
  return (
    <div className='container'>
      <BrowserRouter>
        <div className='page'>
          <Route render={(props) => <Header {...props} />} />
          <div className='content'>
            <Switch>
            {/*Added keys to DivisionBattles to force remounting*/}
              <Route exact path='/division/:divisionId/battle' component={Battle} />
              <Route exact path='/division/:divisionId/ranking' component={Ranking} />
              <Route exact path='/' component={Battle} key={'index'}/>
              <Route component={fourOhFour} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );  
}
