import React from 'react';
import './App.css'

import Form from './Form'
import ListContainer from './ListContainer'

import lists from './lists'



class App extends React.Component{

  state={
    masterList: lists
  }

  addOneList = (newListObj) => {
    console.log("IN APP", newListObj);
    // setState(???)
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
        />
      </div>
    );
  }

}

export default App;
