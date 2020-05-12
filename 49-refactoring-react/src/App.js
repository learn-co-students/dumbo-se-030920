import React from 'react';
import './App.css'
import ListContainer from './ListContainer'
import lists from './lists'

class App extends React.Component{

  state={
    masterList: lists
  }

  render(){
    return (
      <div className="App">
        <h1>Listings</h1>
        <ListContainer
          title="Lists of lists!"
          lists={this.state.masterList}
        />
      </div>
    );
  }

}

export default App;
