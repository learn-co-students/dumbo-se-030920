import React, { Component } from 'react';
import PigCard from './PigCard'

class PigPen extends Component {


  renderPiggies = () => {
    return this.props.hogs.map((singlePigObj) => {
      return <p key={singlePigObj.name}>{singlePigObj.name}</p>
    })
  }

  render() {
    // YOU CAN DEFINE VARIABLES ABOVE YOUR RETURN
    let arrayOfPigComponents = this.props.hogs.map((singlePigObj) => {
      return <PigCard
        key={singlePigObj.name}
        hog={singlePigObj}
      />
    })

    return (
      <div>
        <h2>Check out all our pigs</h2>
        {arrayOfPigComponents}
        {/* YOU CAN ALSO INVOKE HELPER METHODS*/}
        {/* YOU CAN RENDER VARIABLES HERE */}
      </div>
    );
  }

}

export default PigPen;
