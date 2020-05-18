import React, { Component } from 'react';

class SortingHat extends Component {

  state={
    name: "",
    wand: "",
    house: "Gryffindor",
    image1: "",
    image2: ""
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }


  handleSubmit = (evt) => {
    evt.preventDefault()
    fetch("http://localhost:4000/wizards", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify(this.state)
    })
      .then(r => r.json())
      .then(createdWizard => {
        this.props.addOneWizard(createdWizard)
      })
  }

  render() {
    let {name, wand, house, image1, image2} = this.state
    console.log("STATE OF FORM:", this.state)
    return (
      <section>
        <h2>You Could Be Great, You Know...</h2>
        <form className="new_container" onSubmit={this.handleSubmit}>

          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" value={name} onChange={this.handleChange}/>

          <label htmlFor="wand">Wand:</label>
          <input type="text" name="wand" id="wand" value={wand} onChange={this.handleChange}/>

          <label htmlFor="house">House:</label>
          <select name="house" id="house" value={house} onChange={this.handleChange}>
            <option value="Gryffindor">Gryffindor</option>
            <option value="Hufflepuff">Hufflepuff</option>
            <option value="Ravenclaw">Ravenclaw</option>
            <option value="Slytherin">Slytherin</option>
          </select>

          <label htmlFor="image1">Image 1:</label>
          <input type="url" name="image1" id="image1" value={image1} onChange={this.handleChange}/>

          <label htmlFor="image2">Image 2:</label>
          <input type="url" name="image2" id="image2" value={image2} onChange={this.handleChange}/>

          <input type="submit" value="Log A New Wizard"/>

        </form>
      </section>
    );
  }

}

export default SortingHat;
