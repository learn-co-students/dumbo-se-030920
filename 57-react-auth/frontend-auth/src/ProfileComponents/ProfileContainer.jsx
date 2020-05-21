import React, { Component } from 'react';
import Snack from './Snack'
import NewSnackForm from './NewSnackForm'

class ProfileContainer extends Component {

  render() {

    let {id, username, snacks} = this.props.user
    let arrayOfSnacks = snacks.map((snack) => {
      return <Snack key={snack.id} snack={snack} />
    })
    
    return (
      <div>
        <h2>{username}&apos;s Profile</h2>
        <h3></h3>

        <ol>
          {arrayOfSnacks}
        </ol>

        <NewSnackForm />

      </div>
    );
  }

}

export default ProfileContainer;
