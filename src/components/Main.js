import React, { Component } from "react"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import "../styles/stylesheet.css"
import SignInHeader from "./SignInHeader"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import isAuthenticated from "./Authentication"
import Private from "./Private"

class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/sign-in">
            <SignIn />
          </Route>

          <Route path="/private" render={() => (isAuthenticated() ? <Private /> : <Redirect to="/sign-in" />)} />

          <Route path="/" exact>
            <SignUp />
          </Route>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Main
