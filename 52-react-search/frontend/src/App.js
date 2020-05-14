import React from 'react';
import './App.css'

import Form from './Form'
import ListContainer from './ListContainer'
import SearchBar from './SearchBar'

class App extends React.Component{

  state={
    masterList: [],
    searchTerm: "Oscar"
  }

  // SEARCH BELOW

  handleSearchTerm = (termFromChild) => {
    this.setState({
      searchTerm: termFromChild
    })
  }


  decideWhichArrayToReturn = () => {
    // Helper Method
    let anArray = this.state.masterList.filter((singleList) => {
      return singleList.list_name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
        ||
      singleList.items.some(item => item.name.includes(this.state.searchTerm))
    })
    return anArray
  }

  // CRUD BELOW





  componentDidMount(){
    // console.log("CDM Hello")
    fetch("http://localhost:3000/lists")
      .then(r => r.json())
      .then((allLists) => {
        this.setState({
          masterList: allLists
        })
      })

  }


  addOneList = (newListObj) => {

    let copyOfList = {...newListObj, contributions: 1}
    fetch("http://localhost:3000/lists", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify(copyOfList)
    })
    .then(r => r.json())
    .then((newlyCreatedList) => {
      let copyOfMasterList = [...this.state.masterList, newlyCreatedList]
      this.setState({
        masterList: copyOfMasterList
      })
    })

  }


  deleteOneList = (idOfListToDelete) => {

    fetch(`http://localhost:3000/lists/${idOfListToDelete}`, {
      method: "DELETE"
    })
      .then(r => r.json())
      .then((deletedList) => {
        let copyOfMasterList = this.state.masterList.filter((singleList) => {
          return singleList.id !== idOfListToDelete
        })
        this.setState({
          masterList: copyOfMasterList
        })
      })

  }


  updateOneList = (listId, contributions) => {

    fetch(`http://localhost:3000/lists/${listId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify({
        contributions: contributions
      })
    })
      .then(r => r.json())
      .then(updatedList => {
        let copyOfMasterList = this.state.masterList.map((singleList) => {
          return (singleList.id === updatedList.id ? updatedList : singleList)
        })
        this.setState({
          masterList: copyOfMasterList
        })
      })

  }

  render(){
    console.log("SEARCHTERM: ", this.state.searchTerm);
    // WHENEVER INVOKE A FUNCTION IN REACT'S RENDER, YOU CARE ABOUT THE RETURN VALUE

    return (
      <div className="App">
        <h1>Listings</h1>
        <Form
          addOneList={this.addOneList}
        />
        <SearchBar
          searchTerm={this.state.searchTerm}
          handleSearchTerm={this.handleSearchTerm}
        />
        <ListContainer
          title="Lists of lists!"
          lists={this.decideWhichArrayToReturn()}
          deleteOneList={this.deleteOneList}
          updateOneList={this.updateOneList}
        />
      </div>
    );
  }

}

export default App;
