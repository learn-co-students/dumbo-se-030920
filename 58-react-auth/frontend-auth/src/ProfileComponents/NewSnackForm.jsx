import React, { Component } from 'react';

class NewSnackForm extends Component {

  state = {
    name: ""
  }

  handleSubmit = (e) => {
    e.preventDefault()

    fetch("http://localhost:4000/snacks", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "Authorization": this.props.token
      },
      body: JSON.stringify(this.state)
    })
    .then(r => r.json())
    .then((newlyCreatedSnack) => {
      this.props.addNewSnack(newlyCreatedSnack)
      this.setState({
        name: ""
      })
    })



  }

  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Snack Name:</label>
        <input type="text" autoComplete="off" name="name" value={this.state.name} onChange={this.handleChange} />
        <input type="submit" value="Create New Snack" />
      </form>
    );
  }

}

export default NewSnackForm;
