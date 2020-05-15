import piggy from "../porco.png";
import React from "react";

const Nav = (props) => {

  let handleSelect = (evt) => {
    // evt.target.value => "Greased" || "Non-Greased"
    props.handleTheSearchParameter(evt.target.value)
  }


  return (
    <div className="navWrapper">
      <span className="headerText">Hogwarts</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span>

      <select value={props.theSearchParameter} onChange={handleSelect}>
        <option value="Greased">Show Greased</option>
        <option value="Non-Greased">Show Clean Pigs</option>
        <option value="Alphabetical">Sort Alphabetically</option>
      </select>
    </div>
  );
};

export default Nav;
