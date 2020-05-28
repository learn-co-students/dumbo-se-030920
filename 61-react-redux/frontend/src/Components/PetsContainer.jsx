import React from 'react';
import Pet from './Pet'
import {connect} from 'react-redux'
// connect is a function that takes in a component and returns a magical component
  // Higher Ordered Components


  // component definition start
const PetsContainer = (props) => {
  let arrayOfComponents = props.allThePetsFromGlobalState.map((pet) => {
    return <Pet key={pet.id} pet={pet}/>
  })

  return(
    <ul>
      {arrayOfComponents}
    </ul>
  )
};
// component definition end


let mapStateToProps = (globalState) => {
  // Instructions on what to grab from the global state
  // IMPORTANT: RETURN VALUE OF THIS CALLBACK FUNCTION WILL BE MERGED AN OBJECT AS PROPS
  console.log("HELLO, I AM RUNNING TO THE STORE", globalState);

  return {
    allThePetsFromGlobalState: globalState.pets
  }

}

let functionThatAddsProps = connect(mapStateToProps)
let componentThatNowHasProps = functionThatAddsProps(PetsContainer)
// magicalFunction keeps the structure, but adds some props
export default componentThatNowHasProps;

// export default connect(mapStateToProps)(PetsContainer)



















//
