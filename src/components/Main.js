import React, { Component } from "react"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import "../styles/stylesheet.css"
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
}

export default Main
