import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <nav>
      <div className='nav-wrapper flow-text'>
        <div className='right brand-logo'><Link to='/'>WAIFU WARS</Link></div>
      </div>
    </nav>
  ) 
}
