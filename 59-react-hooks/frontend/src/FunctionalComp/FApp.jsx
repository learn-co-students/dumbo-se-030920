import React, { useState, useEffect } from 'react';
// useState allows us to useState in a fn component
// useEffect allows us to have lifecycle methodS in a fn component
import '../App.css'

import FForm from './FForm'
import FListContainer from './FListContainer'
import FSearchBar from './FSearchBar'

const App = () => {


  let [masterList, setMasterList] = useState([])
  let [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    console.log("hello");
    fetch("http://localhost:3000/lists")
    .then(r => r.json())
    .then((indexArray) => {
      setMasterList(indexArray)
    })

  }, [])

  // The callback gets ran every time that something in the array of dependencies change (componentDidUpdate)
    // If the array of dependencies is empty, it acts as componentDidMount
  // The return value of the callback should be a function definition
    // That function will get invoked when the component unmounts (componentWillUnmount)


  const addList = (newList) => {
    // console.log(newList, "FROM APP");

    let copyOfMasterList = [...masterList, newList]
    setMasterList(copyOfMasterList)
  }


  const changeContributions = (updatedList) => {
    console.log(updatedList, "FROM APP");
  }


  return (
    <div className="App">
      <h1>Listings</h1>
      <FForm
        addList={addList}
      />
      <FSearchBar />
      <FListContainer
        lists={masterList}
        changeContributions={changeContributions}
      />
    </div>
  )
};

export default App;
