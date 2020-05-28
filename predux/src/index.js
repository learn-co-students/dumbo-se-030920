import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// SETUP FOR REDUX
import { createStore } from 'redux'

let initialState = {
  counter: 9,
  hello: "everyone"
}



let reducer = (state = initialState, action) => {

  switch (action.type) {

    case "ADD_TO_COUNTER":
      let newNumber = state.counter + action.payload
      return {
        ...state,
        counter: newNumber
      }

    default:
      return state
  }
}















let storeObj = createStore(reducer)
// console.log(storeObj);
console.log("INITIAL:",storeObj.getState());

let actionObj = {
  type: "ADD_TO_COUNTER",
  payload: 7
}

storeObj.dispatch(actionObj)
storeObj.dispatch(actionObj)
storeObj.dispatch(actionObj)

console.log("AFTER:", storeObj.getState());






















ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
