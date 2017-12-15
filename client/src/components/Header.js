import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    let divisionLink;
    if (this.props.location.pathname) {
      if (this.props.location.pathname.includes('battle')) {
        divisionLink = <li><Link to={this.props.location.pathname.replace('battle', 'ranking')}>RANKING</Link></li>
      }
      if (this.props.location.pathname.includes('ranking')) {
        divisionLink = <li><Link to={this.props.location.pathname.replace('ranking', 'battle')}>BATTLE</Link></li>
      }
    }

    return (
      <nav>
        <div className='nav-wrapper flow-text'>
          <ul>
            <li><Link to='/division/list'>Division List</Link></li>
            <li><Link to='/about'>About</Link></li>
            {divisionLink}
          </ul>
          <div className='right brand-logo'><Link to='/'>WAIFU WARS</Link></div>
        </div>
      </nav>
    )
  }
}

export default Header;
