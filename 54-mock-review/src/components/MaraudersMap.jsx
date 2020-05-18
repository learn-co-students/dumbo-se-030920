import React, { Component } from 'react';

class MaraudersMap extends Component {

  handleChange = (e) => {
    this.props.changeSearchTerm(e.target.value)
  }

  render() {
    return (
      <nav>
        <h2>Houses of Hogwarts</h2>
        <select id="map"
          value={this.props.searchTerm}
          onChange={this.handleChange}
        >
          <option value="All">All</option>
          <option value="Gryffindor">Gryffindor</option>
          <option value="Hufflepuff">Hufflepuff</option>
          <option value="Ravenclaw">Ravenclaw</option>
          <option value="Slytherin">Slytherin</option>
        </select>
      </nav>
    );
  }

}

export default MaraudersMap;
