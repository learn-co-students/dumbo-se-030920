import React, { Component } from 'react';
import GreatHall from './GreatHall'
import SortingHat from './SortingHat'
import MaraudersMap from './MaraudersMap'

class Hogwarts extends Component {

  state = {
    wizards: [],
    searchTerm: "All"
  }

  changeSearchTerm = (termFromChild) => {
    // Function definition from Parent goes down to Child 1 (props)
    // When an event happens in Child 1, the function gets invoked
    // The function changes the state of the Parent
    // Parent re-renders
    // Inside the render function, some logic decide what to pass down to Child 2
      // (Helper methods are nice)
      // We care about the return value of a function when invoked
    this.setState({
      searchTerm: termFromChild
    })
  }

  componentDidMount() {
    fetch("http://localhost:4000/wizards")
      .then(r => r.json())
      .then((wizards) => {
        this.setState({
          wizards: wizards
        })
      })
  }

  decideWhichArrayToRender = () => {
    let {searchTerm, wizards} = this.state
    let arrayToBeReturned = wizards

    if (searchTerm === "All") {
      arrayToBeReturned = wizards
    } else {
      arrayToBeReturned = wizards.filter((wizard) => wizard.house === searchTerm)
    }
    return arrayToBeReturned
  }


  addOneWizard = (newlyCreatedWizard) => {
    let copyOfList = [...this.state.wizards, newlyCreatedWizard]
    this.setState({
      wizards: copyOfList
    })
  }

  deleteAWizard = (id) => {
    let copyOfList = this.state.wizards.filter((wizard) => wizard.id !== id)
    this.setState({
      wizards: copyOfList
    })
  }


  render() {
    let {searchTerm, wizards} = this.state
    let displayedWizards = this.decideWhichArrayToRender()

    return (
      <main>
        <MaraudersMap
          searchTerm={searchTerm}
          changeSearchTerm={this.changeSearchTerm}
        />
        <GreatHall
          wizards={displayedWizards}
          deleteAWizard={this.deleteAWizard}
        />
        <SortingHat
          addOneWizard={this.addOneWizard}
        />
      </main>
    )
  }

}

export default Hogwarts;
