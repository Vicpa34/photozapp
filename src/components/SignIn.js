import React, { Component } from "react"
import "../styles/stylesheet.css"
import { Card, Button, Form, FormGroup, Label, Input, FormText } from "reactstrap"
import SignInHeader from "./SignInHeader"
import { Link } from "react-router-dom"
import Axios from "axios"

class SignIn extends Component {
  render() {
    return (
      <div className="App">
        <SignInHeader />
        <Card className="card">
          <Form className="form">
            <h4>Sign In</h4>
            <FormGroup>
              <Label> Email </Label>
              <Input type="email" />
            </FormGroup>
            <FormGroup>
              <Label> Password </Label>
              <Input type="password" />
            </FormGroup>
            <Link to="#">Forgot password?</Link>
            <div className="button">
              <Button color="primary" size="lg">
                Sign In
              </Button>
            </div>
          </Form>
        </Card>
        <div className="bottomlink">
          <Link to="/sign-up">Sign Up</Link>
        </div>
      </div>
    )
  }
}

export default SignIn
