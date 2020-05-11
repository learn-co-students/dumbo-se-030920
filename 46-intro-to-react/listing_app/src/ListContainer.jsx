import React from 'react'
import List from './List'


let ListContainer = () => {

  return(
    <>
      <h2>List of Lists</h2>
      <ol>
        <List></List>
        <List />
      </ol>
    </>
  )

}

export default ListContainer
