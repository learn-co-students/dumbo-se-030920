import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// SETUP FOR REDUX
import { createStore } from 'redux'
// createStore is a function
import { Provider } from 'react-redux'
// Provider is a component


let initialState = {
  pets: [
    {
      id: 29,
      name: "Heihei",
      breed: "Chicken"
    }
  ]
}


// RETURN VALUE OF REDUCER BECOMES THE NEW STATE
let reducer = (state = initialState, action) => {

  switch (action.type) {
    case "ADD_ONE_PET":
      let thePetToBeAdded = action.payload
      let copyOfPets = [...state.pets, thePetToBeAdded]

      return {
        ...state,
        pets: copyOfPets
      }

    default:
      return state
  }

}


let storeObj = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())





ReactDOM.render(
  <Provider store={storeObj}>
    <App />
  </Provider>,
  document.getElementById('root')
)























//
