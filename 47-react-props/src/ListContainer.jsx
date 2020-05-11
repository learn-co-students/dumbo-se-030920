import React from 'react'
import List from './List'


let ListContainer = () => {

  return(
    <>
      <h2>List of Lists</h2>
      <ul>
        <List></List>
        <List />
      </ul>
    </>
  )

}

export default ListContainer
