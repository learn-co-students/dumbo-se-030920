import React from 'react';
import Pet from './Pet'
import PetForm from './PetForm'
import {connect} from 'react-redux'

const PetsContainer = (props) => {
  let arrayOfComponents = props.allThePetsFromGlobalState.map((pet) => {
    return <Pet key={pet.id} pet={pet}/>
  })

  return(
    <>
      <PetForm/>
      <hr/>
      <ul>
        {arrayOfComponents}
      </ul>
    </>
  )
};


let mapStateToProps = (globalState) => {
  return {
    allThePetsFromGlobalState: globalState.petInformation.pets
  }

}

let functionThatAddsProps = connect(mapStateToProps)
let componentThatNowHasProps = functionThatAddsProps(PetsContainer)
export default componentThatNowHasProps;
