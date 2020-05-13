import React from 'react'
import List from './List'

let ListContainer = (props) => {

  let arrayOfComponents = props.lists.map((singularListPOJO, index) => {
    return <List
      list={singularListPOJO}
      key={singularListPOJO.id}
    />
  })

  return(
    <>
      <h2>{props.title}</h2>
      <ul>
        {
          arrayOfComponents
        }
      </ul>
    </>
  )

}

export default ListContainer
