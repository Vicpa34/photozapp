import React, { Component } from "react"
import { useState } from "react"
import "../styles/stylesheet.css"
import { Card, Button, Form, FormGroup, Label, Input, FormText } from "reactstrap"
import SignInHeader from "./SignInHeader"
import { Link } from "react-router-dom"
import Axios from "axios"

function SignIn() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  async function handleSubmit(e) {
    e.preventDefault()
    //alert("hello")

    try {
      const response = await Axios.post("http://localhost:3000/api/v1/auth/session", { email, password })
      if (response.data) {
        localStorage.setItem("appToken", response.data.token)
        localStorage.setItem("appEmail", response.data.email)
        localStorage.setItem("appPassword", response.data.password)
      }
    } catch (e) {
      console.log("There was an error!")
    }
  }

  return (
    <div className="App">
      <SignInHeader />
      <Card className="card">
        <Form className="form" onSubmit={handleSubmit}>
          <h4>Sign In</h4>
          <FormGroup>
            <Label> Email </Label>
            <Input onChange={(e) => setEmail(e.target.value)} type="email" />
          </FormGroup>
          <FormGroup>
            <Label> Password </Label>
            <Input onChange={(e) => setPassword(e.target.value)} type="password" />
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

export default SignIn
