import React from 'react'

class List extends React.Component{

  state = {
    showList: false,
    status: "disliked",
    nameOfNewItem: ""
  }

  handleNewItemInput = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmitOfNewItem = (evt) => {
    evt.preventDefault()

    fetch(`http://localhost:3000/lists/${this.props.list.id}/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.state.nameOfNewItem
      })
    })
      .then(r => r.json())
      .then((newItem) => {
        this.props.addItemToOneList(newItem);
      })

  }


  handleContributions = (evt) => {
    let randomNumber = Math.random() < 0.5 ? 20 : -15
    let newContributionValue = this.props.list.contributions + randomNumber
    this.props.updateOneList(this.props.list.id, newContributionValue)
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.list.contributions > prevProps.list.contributions) {
      this.setState({
        status: "liked"
      })
    }

    if (this.props.list.contributions < prevProps.list.contributions) {
      this.setState({
        status: "disliked"
      })
    }

  }


  handleShowingList = (evt) => {
    this.setState(prevState => ({
      showList: !prevState.showList
    }))
  }


  handleDelete = (evt) => {
    this.props.deleteOneList(this.props.list.id)
  }

  componentWillUnmount() {
    console.log("GOODBYE FROM", this.props.list.list_name);
  }


  render(){
    let {list_name, items, contributions} = this.props.list
    let arrayOfItems = items.map((itemObj) => {
      return <li key={itemObj.id}>{itemObj.name}</li>
    })

    return (
      <li className={`container ${this.state.status}`}>
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
          <>
            <ol>
              {arrayOfItems}
            </ol>
            <form onSubmit={this.handleSubmitOfNewItem}>
              <input type="text" name="nameOfNewItem" autoComplete="off"
                value={this.state.nameOfNewItem}
                onChange={this.handleNewItemInput}
              />
              <input type="submit" value="Add Item" />
            </form>
          </>
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
