import React, { Component } from "react"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import "../styles/stylesheet.css"
import SignInHeader from "./SignInHeader"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Authentication from "./Authentication"
import Private from "./Private"

class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route {...props} path="/private" render={props => (isAuthenticated() ? <Private /> : <Redirect to="/" />)} />

          <Route path="/" exact>
            <SignIn />
          </Route>

          <Route path="/sign-up">
            <SignUp />
          </Route>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Main
