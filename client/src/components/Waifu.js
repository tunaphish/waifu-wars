import React from 'react';

export default ({ name, picture, isLeft }) => {
  //Only usage of inline styling because background image needs to be dynamic
  //Otherwise majority of styling uses materialize css or index.css in root src folder
  const imageUrl = '/images/' + picture;
  const style = {
    backgroundImage: `url(${imageUrl})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
  }

  return (
    <div
      className={ (isLeft ? 'left-waifu ' : 'right-waifu ') + 'card large waifu-card'}
      style={style}
    >
      {name}
    </div>
  )
}
