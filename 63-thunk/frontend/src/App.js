import React from 'react';
import './App.css';
import PetsContainer from './Components/PetsContainer'
import Home from './Components/Home'
import Form from './Components/Form'
import NavBar from  './Components/Navbar'
import ProfileContainer from './Components/ProfileContainer'
import {Switch, Route, withRouter} from 'react-router-dom'

// This App needs to be connected
import {connect} from 'react-redux'

class App extends React.Component {

  componentDidMount() {
    if (localStorage.token) {
      fetch("http://localhost:4000/users/stay_logged_in", {
        headers: {
          "Authorization": localStorage.token
        }
      })
      .then(r => r.json())
      .then(this.handleResponse)
    }

    fetch("http://localhost:4000/pets")
      .then(r => r.json())
      .then((pets) => {
        this.props.setAllPets(pets)
      })
  }


  handleLoginSubmit = (userInfo) => {
    fetch("http://localhost:4000/users/login", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
    .then(r => r.json())
    .then(this.handleResponse)
  }


  handleRegisterSubmit = (userInfo) => {
    fetch("http://localhost:4000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
      .then(r => r.json())
      .then(this.handleResponse)
  }


  handleResponse = (resp) => {
    localStorage.token = resp.token
    this.props.setUserInfo(resp)
    this.props.history.push("/profile")
  }


  renderForm = (routerProps) => {

    if(routerProps.location.pathname === "/login"){
      return <Form
        formName="Login Form"
        handleSubmit={this.handleLoginSubmit}
      />
    } else if (routerProps.location.pathname === "/register") {
      return <Form
        formName="Register Form"
        handleSubmit={this.handleRegisterSubmit}
      />
    }
  }

  renderProfile = (routerProps) => {
    if (this.props.token) {
      return <ProfileContainer />
    } else {
      this.props.history.push("/login")
    }
  }


  render(){
    return (
      <div className="App">
        <NavBar/>
        <Switch>
          <Route path="/login" render={ this.renderForm } />
          <Route path="/register" render={ this.renderForm } />
          <Route path="/profile" render={ this.renderProfile } />
          <Route path="/pets" component={ PetsContainer } />
          <Route path="/" exact component={Home} />
          <Route render={ () => <p>Page not Found</p> } />
        </Switch>
      </div>
    );
  }

}


let setAllPets = (allPets) => {
  return {
    type: "SET_ALL_PETS",
    payload: allPets
  }
}

let setUserInfo = (resp) => {
  return {
    type: "SET_USER_INFO",
    payload: resp
  }
}




let mapDispatchToProps = {
  setAllPets: setAllPets,
  setUserInfo: setUserInfo
}

let mapStateToProps = (globalState) => {
  return {
    token: globalState.userInformation.token
  }
}

let componentWithRouterProps = withRouter(App)

export default connect(mapStateToProps, mapDispatchToProps)(componentWithRouterProps)
// export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App))
