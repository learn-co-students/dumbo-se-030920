import React, { Component } from 'react';
import './App.css';

import Header from './components/Header'
import Hogwarts from './components/Hogwarts'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Hogwarts />
      </div>
    );
  }
  
}

export default App;
