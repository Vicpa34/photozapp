import React, { Component } from "react"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import "../styles/stylesheet.css"
import SignInHeader from "./SignInHeader"
import { BrowserRouter, Switch, Route } from "react-router-dom"

class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
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
