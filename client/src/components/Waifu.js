import React from 'react';

export default ({ name, picture }) => {
  return (
    <div className='card large'>
      <div className="card-image">
        <img src={process.env.PUBLIC_URL + '/characters/' + picture}/>
      </div>
      <div className='card-content'>
        {name}
      </div>
    </div>
  )
}
