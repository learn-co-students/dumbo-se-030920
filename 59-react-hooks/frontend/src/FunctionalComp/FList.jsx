import React, {useState, useEffect} from 'react';

const FForm = ({list: {list_name, items, contributions}}) => {
  let [itemsBool, setItemsBool] = useState(false)

  const handleShowingList = (evt) => {
    // HOW TO TOGGLE STATE
    setItemsBool(!itemsBool)
  }


  useEffect(() => {
    return () => {
      console.log("I WILL ONLY SHOW UP WHEN I AM REMOVED");
    }
  })

  const handleContributions = (evt) => {
    console.log(list_name);
  }


  let arrayOfItems = items.map((itemObj) => {
    return <li key={itemObj.id}>{itemObj.name}</li>
  })

  return (
    <li className="container">
      <img
        src="https://www.how-to-draw-funny-cartoons.com/images/cartoon-list-007.jpg"
        alt={list_name}
        onClick={handleShowingList}
      />
      <h3>{list_name}</h3>

      { itemsBool && <ol>{arrayOfItems}</ol> }
      <button onClick={ handleContributions } >
        Contributions: {contributions}
      </button>

    </li>
  )
};

export default FForm;
