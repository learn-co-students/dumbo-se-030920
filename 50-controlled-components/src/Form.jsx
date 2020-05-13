import React, { Component } from 'react';

class Form extends Component {

  state = {
    // the keys of your state should match the name of your input
    list_name: "Favorite Places to Bingo"
  }

  handleAllInput = (evt) => {
    let {name, value} = evt.target
    // let name = evt.target.name
    this.setState({
      [name]: value
    })
    // this.setState({[evt.target.name]: evt.target.value})
    // this.setState({list_name: evt.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addOneList(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="l_name">Name</label>
        <input
          type="text"
          name="list_name"
          id="l_name"
          autoComplete="off"
          value={this.state.list_name}
          onChange={this.handleAllInput}
        />
        {/* Value is state controlling the input */}
        {/* onChange is input controlling the state */}
        <input type="submit" value="Make a new list" />
      </form>
    );
  }

}

export default Form;
