import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter} from 'react-router-dom'

// SETUP FOR REDUX
import { createStore } from 'redux'
// createStore is a function
import { Provider } from 'react-redux'
// combineReducers is a function
import {combineReducers} from 'redux'

// THUNK STUFF
import thunk from 'redux-thunk'
import {applyMiddleware, compose} from 'redux'

// INFO ABOUT PETS BELOW
let initialPetState = {
  pets: [],
  selectedPetId: 0,
}

// return value of reducer becomes the new global state
let petReducer = (state = initialPetState, action) => {

  switch (action.type) {
    case "ADD_ONE_PET":
      let thePetToBeAdded = action.payload
      let copyOfPets = [...state.pets, thePetToBeAdded]

      return {
        ...state,
        pets: copyOfPets
      }

    case "SET_ALL_PETS":
      return {
        ...state,
        pets: action.payload
      }

    default:
      return state
  }

}

// INFO ABOUT USER BELOW

let initialUserState = {
  id: 0,
  username: "",
  appointments: [],
  token: ""
}

let userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case "SET_USER_INFO":
      return {
        ...state,
        id: action.payload.user.id,
        username: action.payload.user.username,
        appointments: action.payload.user.appointments,
        token: action.payload.token,

      }
    default:
      return state
  }
}



// COMBINE ALL THE REDUCERS

// the keys of my singleObject become the highest level keys within the globalState
  // All the reducers in the singleObject will listen for an action being dispatched
let singleObject = {
  petInformation: petReducer,
  userInformation : userReducer
}

let rootReducer = combineReducers(singleObject)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let storeObj = createStore(rootReducer,
  composeEnhancers(applyMiddleware(thunk)
))





ReactDOM.render(
  <Provider store={storeObj}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)























//
