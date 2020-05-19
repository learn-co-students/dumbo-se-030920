import React from 'react';

const InputTag = (props) => {

  const handleChange = (evt) => {
    props.handleSecondInput(evt.target.value)
  }

  return(
    <input type="text" value={props.secondInput} onChange={handleChange}/>
  )
}

export default InputTag
