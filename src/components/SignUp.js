import React, { Component } from "react"
import { useState } from "react"
import "../styles/stylesheet.css"
import { Card, Button, Form, FormGroup, Label, Input, FormText } from "reactstrap"
import SignInHeader from "./SignInHeader"
import Navbar from "./Navbar"
import { Link } from "react-router-dom"
//import Axios from "axios"

function SignUp() {
<<<<<<< HEAD
  return (
    <div className="App">
      <Navbar />
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

=======
  const [username, setUsername] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  async function handleSubmit(e) {
    e.preventDefault()
    alert("hello")

    //localStorage.setItem("email", "abc@abc.abc");
    try {
      await Axios.post("http://localhost:3000/api/v1/auth/users", { username, email, password })
      console.log("User was successfully created!")
    } catch (e) {
      console.log("There was an error!")
    }
  }
  return (
    <div className="App">
      <SignInHeader />
      <Card className="card">
        <Form className="form" onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <FormGroup>
            <Label> Username </Label>
            <Input onChange={(e) => setUsername(e.target.value)} type="username" />
          </FormGroup>
          <FormGroup>
            <Label> Email </Label>
            <Input onChange={(e) => setEmail(e.target.value)} type="email" />
          </FormGroup>
          <FormGroup>
            <Label> Password </Label>
            <Input onChange={(e) => setPassword(e.target.value)} type="password" />
          </FormGroup>

>>>>>>> 65c9475e5db75687a501bd330fe163a13176647d
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

export default SignUp
