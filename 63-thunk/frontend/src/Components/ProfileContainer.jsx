import React, { Component } from 'react';
import {connect} from 'react-redux'

class ProfileContainer extends Component {

  render() {
    return (
      <div>
        <p>
          {this.props.username} is logged in!
        </p>
      </div>
    );
  }

}
// Within the Component
// this.props.key1

// const mapStateToProps = ({userInformation, petInformation}) => {
  // return {
    // key1: userInformation.username,
    // key2: petInformation.selectedPetId
  // }
// }

const mapStateToProps = (globalState) => {
  return {
    username: globalState.userInformation.username,
    token: globalState.userInformation.token
  }
}

export default connect(mapStateToProps)(ProfileContainer)
