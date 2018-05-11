import React from 'react';
import { Link } from 'react-router-dom';
import Sider from './Sider';

export default (props) => {
  let divisionLink;
  if (props.location.pathname) {
    if (props.location.pathname === '/') {
      divisionLink = <li><Link to={'/division/1/ranking'}><i className="fa fa-star-o" aria-hidden="true"></i></Link></li>
    }
    if (props.location.pathname.includes('battle')) {
      divisionLink = <li><Link to={props.location.pathname.replace('battle', 'ranking')}><i className="fa fa-star-o" aria-hidden="true"></i></Link></li>;
    }
    if (props.location.pathname.includes('ranking')) {
      divisionLink = <li className='versus'><Link to={props.location.pathname.replace('ranking', 'battle')}>VS</Link></li>
    }
  }

  return (
    <nav>
      <div className='nav-wrapper flow-text'>
        <ul>
          <li><Sider /></li>
          {divisionLink}
        </ul>
        <div className='right brand-logo'><Link to='/'>WAIFU WARS</Link></div>
      </div>
    </nav>
  ) 
}
