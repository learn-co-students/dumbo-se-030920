import React, { Component } from 'react';

class Form extends Component {

  state = {
    list_name: "Best Oscar Winning Movies"
  }

  handleAllInput = (evt) => {
    let {name, value} = evt.target
    this.setState({
      [name]: value
    })
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
        <input type="submit" value="Make a new list" />
      </form>
    );
  }

}

export default Form;
