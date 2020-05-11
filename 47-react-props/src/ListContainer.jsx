import React from 'react'
import List from './List'

// Responsible Parent
  // You get what you get, and you don't get upset 
let ListContainer = (props) => {

  console.log("LIST CONTAINER PROPS", props)

  return(
    <>
      <h2>{props.title}</h2>
      <ul>
        <List
          name={"Songs to Jam Out To"}
          itemsArr={[]}
          obj={{}}
          boolean={false}
          number={37}
          funcDef={() => {}}
        />
        <List name="Recipes to Cook"/>
      </ul>
    </>
  )

}

export default ListContainer
