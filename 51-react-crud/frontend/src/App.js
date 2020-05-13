import React from 'react';
import './App.css'

import Form from './Form'
import ListContainer from './ListContainer'


class App extends React.Component{

  state={
    masterList: []
  }

  componentDidMount(){
    // READ
    fetch("http://localhost:3000/lists")
      .then(r => r.json())
      .then((allLists) => {
        this.setState({
          masterList: allLists
        })
      })
  }

  addOneList = (newListObj) => {
    // CREATE
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
      // HERE IS HOW YOU MODIFY STATE
      let copyOfMasterList = [...this.state.masterList, newlyCreatedList]
      this.setState({
        masterList: copyOfMasterList
      })
    })
  }



  deleteOneList = (idOfListToDelete) => {
    // DELETE
    fetch(`http://localhost:3000/lists/${idOfListToDelete}`, {
      method: "DELETE"
    })
      .then(r => r.json())
      .then((deletedList) => {
        // HERE IS HOW YOU MODIFY STATE
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
        // HERE IS HOW YOU MODIFY STATE

        let copyOfMasterList = this.state.masterList.map((singleList) => {
          return (singleList.id === updatedList.id ? updatedList : singleList)
        })

        this.setState({
          masterList: copyOfMasterList
        })


      })
  }




  render(){
    return (
      <div className="App">
        <h1>Listings</h1>
        <Form
          addOneList={this.addOneList}
        />
        <ListContainer
          title="Lists of lists!"
          lists={this.state.masterList}
          deleteOneList={this.deleteOneList}
          updateOneList={this.updateOneList}
        />
      </div>
    );
  }

}

export default App;
