import React, { Component } from 'react';

class Wizard extends Component {

  state={
    flipped: false
  }

  handleImage = (evt) => {

    this.setState((prevState) => {
      return {
        flipped: !prevState.flipped
      }
    })

  }


  handleGraduate = (e) => {
    let {deleteAWizard, wizard} = this.props
    fetch(`http://localhost:4000/wizards/${wizard.id}`, {
      method: "DELETE"
    })
      .then(r => r.json())
      .then(emptyObj => {
        deleteAWizard(wizard.id)
      })
  }

  render() {

    let {name, house, wand, image1, image2} = this.props.wizard
    let properImageToShow = this.state.flipped ? image2 : image1

    return (
        <li className={`card ${house}`}>
          <div className="decorative">
            <div className="top">
              <div className="name">
                <h3>{name}</h3>
              </div>
              <div className="border">
                <img src={this.state.flipped ? image2 : image1} alt={name} onClick={this.handleImage}/>
              </div>
            </div>
            <div className="card_bottom">
              <p className="house_name">{house}</p>
              <p className="description">Wand: {wand}</p>
              <button onClick={this.handleGraduate}>
                Graduate
              </button>
            </div>
          </div>
        </li>

    );
  }

}

export default Wizard;
