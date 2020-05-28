import React from 'react';
import './App.css';
import PetForm from './Components/PetForm'
import PetsContainer from './Components/PetsContainer'


class App extends React.Component {

  render(){
    return (
      <div className="App">
        <h1>Pets</h1>
        <PetForm/>
        <PetsContainer/>
      </div>
    );
  }

}

export default App;
