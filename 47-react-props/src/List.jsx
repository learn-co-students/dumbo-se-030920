import React from 'react'

class List extends React.Component{

  render(){
    // ALWAYS WRITE YOUR CONSOLE LOG ABOVE YOUR RETURN
    // console.log(this);
    console.log("LIST PROPS", this.props);
    // console.log(this.props.name);
    return (
      <li>{ this.props.name }</li>
    )
  }

}

export default List
