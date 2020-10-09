import React, { useState } from "react"
import SignIn from "../SignIn/SignIn"
import SignUp from "../SignUp/index"
import Post from "../Post"
//import Navigation from "../Navigation"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import AuthContext from "../Auth"

function Main() {
  return (
    //<AuthContext.Provider value={setLoggedIn}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <SignUp />
        </Route>

        <Route exact path="/sign-in">
          <SignIn />
        </Route>

        <Route exact path="/post">
          <Post />
        </Route>

        <Route exact path="/">
          {/* {loggedIn ? <Post /> : <SignUp />} */}
        </Route>

        {/* <Route exact path="/sign-up">
          <SignUp />
        </Route> */}
      </Switch>
    </BrowserRouter>
    //</AuthContext.Provider>
  )
}

export default Main
