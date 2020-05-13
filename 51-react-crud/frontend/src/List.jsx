import React from 'react'

class List extends React.Component{

  state = {
    showList: false,
  }

  handleContributions = (evt) => {
    let newContributionValue = this.props.list.contributions + 1
    this.props.updateOneList(this.props.list.id, newContributionValue)
  }

  handleShowingList = (evt) => {
    this.setState(prevState => ({
      showList: !prevState.showList
    }))
  }

  handleDelete = (evt) => {
    this.props.deleteOneList(this.props.list.id)
  }

  render(){
    let {list_name, items, contributions} = this.props.list
    let arrayOfItems = items.map((itemObj) => {
      return <li key={itemObj.id}>{itemObj.name}</li>
    })

    return (
      <li className="container">
        <img
          src="https://www.how-to-draw-funny-cartoons.com/images/cartoon-list-007.jpg"
          alt={list_name}
          onClick={this.handleShowingList}
        />
        <button className="delButton" onClick={this.handleDelete}>X</button>
        <h3>{ list_name }</h3>
        {
          this.state.showList
          ?
          <ol>
            {arrayOfItems}
          </ol>
          :
          null
        }
        <button onClick={ this.handleContributions } >
          Contributions: {contributions}
        </button>
      </li>
    )
  }

}

export default List
