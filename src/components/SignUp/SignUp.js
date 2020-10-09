import React, { useState, useContext } from "react"
import { Card, Button, Form, FormGroup, Label, Input, FormText } from "reactstrap"
import Logo from "../Logo"
import Brand from "../Brand"
import "./SignUp.scss"
import { Link } from "react-router-dom"
import Axios from "axios"
import AuthContext from "../Auth"

function SignUp(props) {
  const [username, setUsername] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  function handleSubmit(e) {
    //const {setLoggedIn} = useContext(AuthContext)
    e.preventDefault()

    // try {
    // await Axios.post("https://localhost:3000", { email, password })

    localStorage.setItem("username", username)
    localStorage.setItem("email", email)
    localStorage.setItem("password", password)
    // console.log(localStorage)
    // console.log("User was successfully created!")

    // } catch (e) {
    //   alert("There was an error!")
    // }
  }
  return (
    <div>
      <div className="container">
        <Logo />
        <Brand />
        <Card body className="p-4 mb-2">
          <Form className="form" onSubmit={handleSubmit}>
            <h4>Sign Up</h4>
            <FormGroup>
              <Label> Username </Label>
              <Input onChange={(e) => setUsername(e.target.value)} type="text" />
            </FormGroup>
            <FormGroup>
              <Label> Email </Label>
              <Input onChange={(e) => setEmail(e.target.value)} type="email" />
            </FormGroup>
            <FormGroup className="mb-4">
              <Label> Password </Label>
              <Input onChange={(e) => setPassword(e.target.value)} type="password" />
            </FormGroup>
            <div>
              <Button color="primary" className="button" size="lg">
                Sign Up
              </Button>
            </div>
          </Form>
        </Card>
        <div className="bottomlink">
          <Link to="/sign-in">Sign In</Link>
        </div>
      </div>
    </div>
  )
}

export default SignUp
