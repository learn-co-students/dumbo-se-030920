import React, { Component } from 'react';
import {connect} from 'react-redux'


class PetForm extends Component {

  state={
    name: "",
    age: "",
    breed: ""
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    this.setState({
      name: "",
      age: "",
      breed: ""
    })
    this.props.propsAddOnePet(this.state)
  }

  render() {
    console.log("FORM", this.props);
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" autoComplete="off" value={this.state.name} onChange={this.handleChange} />
        <label htmlFor="age">Age</label>
        <input type="number" name="age" id="age" autoComplete="off" value={this.state.age} onChange={this.handleChange} />
        <label htmlFor="breed">Breed</label>
        <input type="text" name="breed" id="breed" autoComplete="off" value={this.state.breed} onChange={this.handleChange} />
        <input type="submit" />
      </form>
    );
  }

}














// ActionCreator

let addOnePet = (singlePet) => {
  return {
    type: "ADD_ONE_PET",
    payload: singlePet
  }
}


let mapDispatchToProps = {
  propsAddOnePet: addOnePet
}

// mapDispatchToProps is a POJO that will be merged as props

export default connect(null, mapDispatchToProps)(PetForm);
// export default connect(null, {addOnePet})(PetForm)

































//
