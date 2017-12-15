import React from 'react';

export default ({ name, picture }) => {
  //Only usage of inline styling because background image needs to be dynamic
  //Otherwise majority of styling uses materialize css or index.css in root src folder
  const imageUrl = process.env.PUBLIC_URL + '/characters/' + picture;
  const style = {
    backgroundImage: `url(${imageUrl})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
  }

  return (
    <div className='card large waifu-card' style={style}>
      {name}
    </div>
  )
}
