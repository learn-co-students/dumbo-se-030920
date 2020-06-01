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

    // this.props.fetchAndAddOnePet(this.props.token, this.state)

      // OR

    fetch("http://localhost:4000/pets", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "Authorization": this.props.token
      },
      body: JSON.stringify(this.state)
    })
      .then(r => r.json())
      .then((createdPet) => {
        this.props.addOnePet(createdPet)
      })

  }

  render() {
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

// actionCreator

const addOnePet = (createdPet) => {
  return {
    type: "ADD_ONE_PET",
    payload: createdPet
  }
}

// START THUNK BELOW
const fetchAndAddOnePet = (tokenFromComponent, stateFromComponent) => {
  return (dispatch) => {
    fetch("http://localhost:4000/pets", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "Authorization": tokenFromComponent
      },
      body: JSON.stringify(stateFromComponent)
    })
      .then(r => r.json())
      .then((createdPet) => {
        dispatch({type:"ADD_ONE_PET", payload: createdPet})
      })
  }
}

// END THUNK ABOVE



let mapDispatchToProps = {
  addOnePet: addOnePet,
  fetchAndAddOnePet: fetchAndAddOnePet
}




const mstp = (globalState) => {
  return {
    token: globalState.userInformation.token
  }
}

export default connect(mstp, mapDispatchToProps)(PetForm)















//
