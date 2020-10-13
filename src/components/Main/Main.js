import React, { useState } from "react"
import SignIn from "../SignIn/SignIn"
import SignUp from "../SignUp/index"
import Post from "../Post"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import AuthContext from "../Auth"
import { GuardPrivateRoute } from "./Guard"

function Main() {
  const [isSignedIn, setSignedIn] = useState(false)
  return (
    <AuthContext.Provider value={{ isSignedIn, setSignedIn }}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <SignUp />
          </Route>
          <Route exact path="/sign-in">
            <SignIn />
          </Route>
          <Route exact path="/post">
            <GuardPrivateRoute component={Post} />
          </Route>
          {/* <Route exact path="/">
          {/* {loggedIn ? <Post /> : <SignUp />} */}
          {/* </Switch></Route> */}
          {/* <Route exact path="/sign-up">
          <SignUp />
        </Route> */} *
        </Switch>
      </BrowserRouter>
      //
    </AuthContext.Provider>
  )
}

export default Main
