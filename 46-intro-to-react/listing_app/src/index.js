import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
// import Definition from 'filePath'


ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root'));








// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();






// Imperative Programming
// NOT THIS
let chickenObj = React.createElement("h1", {id: "chicken"}, "Bawk bawk")

// Declarative Programming
// DO THIS
let goodbyeObj = <span><h1 id="world">Goodbye World</h1></span>
