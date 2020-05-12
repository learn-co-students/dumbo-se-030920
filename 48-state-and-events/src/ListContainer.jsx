import React from 'react'
import List from './List'

let ListContainer = (props) => {
  return(
    <>
      <h2>{props.title}</h2>
      <ul>
        <List
          name={"Songs to Jam Out To"}
          items={[
            {item: "Graveyard"},
            {item: "Never Gonna Give You Up"},
            {item: "Shelter"}
          ]}
        />
        <List
          name={"Recipes to Cook"}
          items={[
            {item: "Chicken Carbonara"},
            {item: "Eggplant over Rice"},
            {item: "Cereal"}
          ]}
        />
      </ul>
    </>
  )

}

export default ListContainer
