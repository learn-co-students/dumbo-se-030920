import React from 'react'

class List extends React.Component{

  // OLD WAY
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  //   this.handleContributions = this.handleContributions.bind(this)
  // }

  // Initial State
  state = {
    numContributions: 11,
    showList: false,
    favoriteFood: "Chicken"
  }

  handleContributions = (evt) => {
    // console.log(evt);
    // console.log(this.props);
    // console.log(this.state);

    let partialStateObj = {
      numContributions: this.state.numContributions + 1
    }


    // First Arg of setState: {}
      // Any keys passed into partialStateObj gets overriden in old state

    this.setState({
      numContributions: this.state.numContributions + 1
    })



    // Second Arg of setState: () => {}
      // This function fires after the state has properly updated

    // this.setState({},() => {
    //   console.log("AFTER",this.state);
    // })



    // Functional setState
      // If your new value of state is DEPENDENT on the old value
      // The return value of that callback function is a POJO
      // That POJO gets merged/overriden in old state

    // this.setState((prevState) => {
    //   return {
    //     numContributions: prevState.numContributions + 1
    //   }
    // })




  }

  render(){
    // When we invoke a function in render, we care about the return value
    // console.log("STATE", this.state);
    return (
      <li className="container">
        <img src="https://www.how-to-draw-funny-cartoons.com/images/cartoon-list-007.jpg" alt={this.props.name} />
        <h3>
          { this.props.name }
        </h3>
        <button
          onClick={ this.handleContributions }
        >
          Contributions: {this.state.numContributions}
        </button>
      </li>
    )
  }

}

export default List
