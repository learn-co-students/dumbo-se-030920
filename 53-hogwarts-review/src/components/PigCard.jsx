import React from 'react'
import {Component} from 'react';

class PigCard extends Component {

  state={
    key1: "Hello",
    showDetails: true
  }

  handleImageToggle = (evt) => {
    // this.setState((prevState) => {
    //   return {
    //     showDetails: !prevState.showDetails
    //   }
    // })

    this.setState({
      showDetails: !this.state.showDetails
    })

    // let oldState = this.state
    // let partialState = theThingPassedIntoSetState

    // newState => {...oldState, ...partialState}
  }


  render() {

    let {name, ["highest medal achieved"]: medal, greased, weight} = this.props.hog
    let imageName = name.toLowerCase().split(" ").join("_")
    let pigImage = require(`../hog-imgs/${imageName}.jpg`)

    return (
      <div>
        <p>{name}</p>
        <img src={pigImage} alt={name} onClick={this.handleImageToggle}/>
        {
          this.state.showDetails
          ?
            <div>
              <p>Greased: {greased ? "Greasy" : "Non-Greasy"}</p>
              <p>Medal Won: {this.props.hog["highest medal achieved"]}</p>
              <p>Weight: {weight} Tons</p>
            </div>
          :
            null
        }
      </div>
    );
  }

}

export default PigCard;
