import React from 'react';
import FList from './FList'

const FListContainer = (props) => {

  let arrayOfComponents = props.lists.map((list) => {
    return <FList
      key={list.id}
      list={list}
      changeContributions={props.changeContributions}
    />
  })

  return (
    <div>
      {arrayOfComponents}
    </div>
  )
};

export default FListContainer;
