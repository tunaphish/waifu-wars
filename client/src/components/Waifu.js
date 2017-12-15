import React from 'react';

export default ({ name, picture }) => {
  const imageUrl = process.env.PUBLIC_URL + '/characters/' + picture;
  const style = {
    backgroundImage: `url(${imageUrl})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
  }

  return (
    <div className='card large waifu-card' style={style}>
      <div className='card-content'>
        {name}
      </div>
    </div>
  )
}
