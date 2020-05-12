import React from 'react'

class List extends React.Component{

  state = {
    // SHOULD NOT BE WRITING THIS.PROPS ANYWHERE IN YOUR STATE OBJ
    showList: false,
  }

  handleContributions = (evt) => {
    // WILL COME BACK TO THIS IN A BIT
  }

  handleShowingList = (evt) => {
    this.setState({
      showList: !this.state.showList
    })

    // this.setState((prevState) => {
      // return {
      //   showList: !prevState.showList
      // }
    // })
  }

  render(){
    let {name, items, contributions} = this.props.list
    let arrayOfItems = items.map((itemObj) => {
      return <li key={itemObj.item}>{itemObj.item}</li>
    })

    return (
      <li className="container">
        <img
          src="https://www.how-to-draw-funny-cartoons.com/images/cartoon-list-007.jpg"
          alt={name}
          onClick={this.handleShowingList}
        />
        <h3>
          { name }
        </h3>

        {this.state.showList && <ol>{arrayOfItems}</ol>}

        {
          this.state.showList
          ?
          <ol>
            {arrayOfItems}
          </ol>
          :
          null
        }


        <button
          onClick={ this.handleContributions }
        >
          Contributions: {contributions}
        </button>
      </li>
    )
  }

}

export default List
