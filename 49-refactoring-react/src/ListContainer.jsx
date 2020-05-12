import React from 'react'
import List from './List'

let ListContainer = (props) => {
  // console.log(props, "PROPS OF LIST CONTAINER")

  // [{}, {}] => [<html>, <html>]
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
