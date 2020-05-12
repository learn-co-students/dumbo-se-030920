import React from 'react';
import './App.css'
import ListContainer from './ListContainer'

function App(props) {
  return (
    <div className="App">
      <h1>Listings</h1>
      <ListContainer
        title="Lists of lists!"
      />
    </div>
  );
}

export default App;
