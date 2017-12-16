import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    let divisionLink;
    if (this.props.location.pathname) {
      if (this.props.location.pathname === '/') {
        divisionLink = <li><Link to={'/division/1/ranking'}><i className="fa fa-star-o" aria-hidden="true"></i></Link></li>
      }
      if (this.props.location.pathname.includes('battle')) {
        divisionLink = <li><Link to={this.props.location.pathname.replace('battle', 'ranking')}><i className="fa fa-star-o" aria-hidden="true"></i></Link></li>;
      }
      if (this.props.location.pathname.includes('ranking')) {
        divisionLink = <li className='versus'><Link to={this.props.location.pathname.replace('ranking', 'battle')}>VS</Link></li>
      }
    }

    return (
      <nav>
        <div className='nav-wrapper flow-text'>
          <ul>
            <li><Link to='/division/list'><i className="fa fa-bars" aria-hidden="true"></i></Link></li>
            {divisionLink}
          </ul>
          <div className='right brand-logo'><Link to='/'>WAIFU WARS</Link></div>
        </div>
      </nav>
    )
  }
}

export default Header;
