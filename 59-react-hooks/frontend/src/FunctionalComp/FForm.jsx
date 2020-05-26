import React, { useState } from 'react';

// state = {
  // list_name: ""
// }


const FForm = (props) => {

  let [list_name, setList_name] = useState("")

  let handleChange = (evt) => {
    setList_name(evt.target.value)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    setList_name("")
    let copyOfList = {
      list_name,
      contributions: 0
    }

    fetch("http://localhost:3000/lists", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify(copyOfList)
    })
    .then(r => r.json())
    .then(props.addList)
  }


  // let [objState, setObjState] = useState({
  //   list_name: "Worst Oscar Winning Movies",
  //   contributions: 0
  // })

  // const handleChange = (evt) => {
  //   // setList_name(evt.target.value)
  //   evt.persist()
  //   setObjState((prevState) => {
  //     return {...prevState, list_name: evt.target.value}
  //   })
  // }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="l_name">Name</label>
      <input
        type="text"
        name="list_name"
        id="l_name"
        autoComplete="off"
        value={list_name}
        onChange={handleChange}
      />
      <input type="submit" value="Make a new list" />
    </form>
  )
};

export default FForm;
