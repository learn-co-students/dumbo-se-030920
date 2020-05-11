import React from 'react';
import './App.css'
import ListContainer from './ListContainer'

// functional components
  // needs to return ONE bit of JSX

  // You have access to props via the first argument of that function

// class components
  // needs to extend React.Component
  // needs to have a `render` function
    // needs to return ONE bit of JSX

  // You have access to props via `this.props`

function App(props) {

  console.log("APP PROPS", props)

  return (
    <div className="App">
      <h1>Hello! This is an App about Lists</h1>
      <ListContainer
        title="Lists of lists!"
      />
    </div>
  );
}

export default App;
