import React, { Component } from "react"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import "../styles/stylesheet.css"
<<<<<<< HEAD
import { BrowserRouter, Switch, Route } from "react-router-dom"

function Main() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SignIn}>
          <SignIn />
        </Route>

        <Route exact path="/sign-up" component={SignUp}>
          <SignUp />
        </Route>
      </Switch>
    </BrowserRouter>
  )
=======
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
>>>>>>> 65c9475e5db75687a501bd330fe163a13176647d
}

export default Main
