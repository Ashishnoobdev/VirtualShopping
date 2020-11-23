import React from 'react';

// TODO: Make this component recieve props to make Image, Name and Description dynamic.
// HINT: make a object. Object structure should contain image, Name, Description, id as key values.

const Card = (props) => {
  console.log(props);
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt='images' src={`https://robohash.org/${props.id}.png?size=200x200&set=set2`} />
      <div>
        <h3>{props.name}</h3>  
        <p>{props.description}</p>
        <h4>Price: {props.price}</h4>
      </div>
    </div>
  )
};


export default Card;
