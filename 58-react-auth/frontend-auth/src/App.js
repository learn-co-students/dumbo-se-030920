import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Form from './components/Form'
import NavBar from './components/NavBar'
import Home from './components/Home'
import ProfileContainer from './ProfileComponents/ProfileContainer'

import {withRouter} from 'react-router-dom'

class App extends React.Component {

  state = {
    user: {
      id: 0,
      username: "",
      snacks: []
    },
    token: ""
  }

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
  }

  handleLoginSubmit = (userInfo) => {
    console.log("Login form has been submitted")
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
    console.log("Register form has been submitted")

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
    if (resp.message) {
      alert(resp.message)
    } else {
      localStorage.token = resp.token
      this.setState(resp, () => {
        this.props.history.push("/profile")
      })
    }
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
    if (this.state.token) {
      return <ProfileContainer user={this.state.user} token={this.state.token} addNewSnack={this.addNewSnack}/>
    } else {
      this.props.history.push("/login")
    }
  }


  addNewSnack = (newSnack) => {
    let copyOfSnacks = [...this.state.user.snacks, newSnack]
    let copyOfUser = {
      ...this.state.user,
      snacks: copyOfSnacks
    }


    this.setState({
      user: copyOfUser
    })
  }





  render(){
    return (
      <div className="App">
        <NavBar/>
        <Switch>
          <Route path="/login" render={ this.renderForm } />
          <Route path="/register" render={ this.renderForm } />
          <Route path="/profile" render={ this.renderProfile } />
          <Route path="/" exact component={Home} />
          <Route render={ () => <p>Page not Found</p> } />
        </Switch>
      </div>
    );
  }

}

let MagicalComponent = withRouter(App)
export default MagicalComponent
















//
