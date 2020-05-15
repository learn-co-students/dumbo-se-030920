import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import PigPen from './PigPen'

import hogs from "../porkers_data";

class App extends Component {

  state={
    hogs: [],
    theSearchParameter: "Alphabetical"
  }

  handleTheSearchParameter = (theSearchTerm) => {
    this.setState({
      theSearchParameter: theSearchTerm
    })
  }

  componentDidMount() {
    fetch("http://localhost:3000/hogs")
      .then(r => r.json())
      .then((arrayOfPigs) => {
        this.setState({
          hogs: arrayOfPigs
        })
      })
  }


  decideWhichArrayToRender = () => {
    let {theSearchParameter, hogs} = this.state

    let arrayToReturn = hogs

    if (theSearchParameter === "Alphabetical") {
      let copyOfHogs = [...hogs]
      arrayToReturn = copyOfHogs.sort((hogA, hogB) => {
        return hogA.name.localeCompare(hogB.name)
      })
    }

    if (theSearchParameter === "Greased") {
      arrayToReturn = hogs.filter((hog) => {
        return hog.greased
      })
    }

    if (theSearchParameter === "Non-Greased") {
      arrayToReturn = hogs.filter((hog) => {
        return !hog.greased
      })
    }

    return arrayToReturn
  }

  render() {
    return (
      <div className="App">
        <Nav
          theSearchParameter={this.state.theSearchParameter}
          handleTheSearchParameter={this.handleTheSearchParameter}
        />
        <PigPen
          hogs={this.decideWhichArrayToRender()}
        />
      </div>
    );
  }
}

export default App;
