import React from 'react';

const Card = ({ id, name, description, price }) => {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-2">
      <img alt='images' src={`https://robohash.org/${id}.png?size=200x200&set=set2`} />
      <div>
        <h3>{name}</h3>  
        <p>{description}</p>
        <h4>Price: {price}</h4>
      </div>
    </div>
  )
};


export default Card;
