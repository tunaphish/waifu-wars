import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Header';
import Battle from './Battle'

const fourOhFour = () => <img src={'../img/404.jpg'} alt='404' />;

export default () => {
  return (
    <div className='container'>
      <BrowserRouter>
        <div className='page'>
          <Route render={(props) => <Header {...props} />} />
          <div className='content'>
            <Switch>
              <Route exact path='/' component={Battle} />
              <Route component={fourOhFour} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );  
}
