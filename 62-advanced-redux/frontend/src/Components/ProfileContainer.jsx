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


let mapStateToProps = (globalState) => {
  return {
    username: globalState.userInformation.username
  }
}

export default connect(mapStateToProps)(ProfileContainer);
