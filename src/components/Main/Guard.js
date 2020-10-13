import { Redirect } from "react-router-dom"
import React, { useState, useContext } from "react"
import AuthContext from "../Auth"

export function GuardPrivateRoute(props) {
  const ChildComponent = props.component
  const context = useContext(AuthContext)

  console.log("context values", context)
  if (!context.isSignedIn) {
    return <Redirect to="/sign-in" />
  } else {
    return <ChildComponent />
  }
}
