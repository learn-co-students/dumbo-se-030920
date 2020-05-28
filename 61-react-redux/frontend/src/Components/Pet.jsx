import React from 'react';

const Pet = (props) => {

  const handleClick = (evt) => {
    console.log(":(");
  }
  
  let {name, age, breed} = props.pet
  return(
    <li>
      <h3>Name: {name}</h3>
      <h4>Breed: {breed}</h4>
      <p>Age: {age}</p>
      <button onClick={handleClick}>Send to Farm Upstate</button>
    </li>
  )
}

export default Pet;
