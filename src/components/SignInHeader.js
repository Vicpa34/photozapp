import React, { Component } from "react"
import "../styles/stylesheet.css"
import { ReactComponent as Img } from "../images/Appicon.svg"
import { Card, Button, Form, FormGroup, Label, Input, FormText } from "reactstrap"

function SignInHeader() {
  return (
    <div className="signinheader">
      <Img />
      <p>PhotoZ</p>
    </div>
  )
}

export default SignInHeader
