import React, { Component } from "react"
import { useState } from "react"
import "../styles/stylesheet.css"
import { Card, Button, Form, FormGroup, Label, Input, FormText } from "reactstrap"
import SignInHeader from "./SignInHeader"
import Navbar from "./Navbar"
import { Link } from "react-router-dom"
import Axios from "axios"

function SignIn() {
<<<<<<< HEAD
  async function handleSubmit(e) {
    e.preventDefault()
    //alert("hello")
    try {
      await Axios.post("https://localhost:3000", { username: "test", email: "test@test.com", password: "111111111111" })
      console.log("User was successfully created!")
=======
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
>>>>>>> 65c9475e5db75687a501bd330fe163a13176647d
    } catch (e) {
      console.log("There was an error!")
    }
  }
<<<<<<< HEAD
  return (
    <div className="App">
      <Navbar />

=======

  return (
    <div className="App">
>>>>>>> 65c9475e5db75687a501bd330fe163a13176647d
      <SignInHeader />
      <Card className="card">
        <Form className="form" onSubmit={handleSubmit}>
          <h4>Sign In</h4>
          <FormGroup>
            <Label> Email </Label>
<<<<<<< HEAD
            <Input type="email" />
          </FormGroup>
          <FormGroup>
            <Label> Password </Label>
            <Input type="password" />
=======
            <Input onChange={(e) => setEmail(e.target.value)} type="email" />
          </FormGroup>
          <FormGroup>
            <Label> Password </Label>
            <Input onChange={(e) => setPassword(e.target.value)} type="password" />
>>>>>>> 65c9475e5db75687a501bd330fe163a13176647d
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
