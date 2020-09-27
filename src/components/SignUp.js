import React, { Component } from "react"
import "../styles/stylesheet.css"
import { Card, Button, Form, FormGroup, Label, Input, FormText } from "reactstrap"
import SignInHeader from "./SignInHeader"
import { Link } from "react-router-dom"
import Axios from "axios"

class SignUp extends Component {
  render() {
    return (
      <div className="App">
        <SignInHeader />
        <Card className="card">
          <Form className="form">
            <h1>Sign Up</h1>
            <FormGroup>
              <Label> Username </Label>
              <Input type="username" />
            </FormGroup>
            <FormGroup>
              <Label> Email </Label>
              <Input type="email" />
            </FormGroup>
            <FormGroup>
              <Label> Password </Label>
              <Input type="password" />
            </FormGroup>

            <div className="button">
              <Button color="primary" size="lg">
                Sign Up
              </Button>
            </div>
          </Form>
        </Card>
        <div className="bottomlink">
          <Link to="/">Sign In</Link>
        </div>
      </div>
    )
  }
}

export default SignUp
