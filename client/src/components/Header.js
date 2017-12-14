import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav>
        <div className='nav-wrapper'>
          <ul>
            <li><Link to='/'>Landing</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/division/ranking'>Division Ranking</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header;
