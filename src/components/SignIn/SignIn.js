import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Card, Button, Form, FormGroup, Label, Input } from "reactstrap"
import Logo from "../Logo"
import Brand from "../Brand"
import { Link } from "react-router-dom"
import Axios from "axios"
import "./SignIn.scss"

function SignIn(props) {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  function handleSubmit(e) {
    e.preventDefault()
    //alert("hello")
    if (email === localStorage.getItem(email)) {
      props.setLoggedIn(true)
    } else {
      props.setLoggedIn(false)
    }
    // try {
    //   if (email)
    //await Axios.post("https://localhost:3000/api/v1/media", { email, password })
    //     console.log("User was successfully created!")
    // } catch (e) {
    //   console.log("There was an error!")
    // }
  }
  return (
    <div>
      <div className="container">
        <Logo />
        <Brand />
        <Card body className="p-4 mb-2">
          <Form className="form" onSubmit={handleSubmit}>
            <h4>Sign In</h4>
            <FormGroup>
              <Label> Email </Label>
              <Input onChange={(e) => setEmail(e.target.value)} type="email" />
            </FormGroup>
            <FormGroup className="mb-4">
              <Label> Password </Label>
              <Input onChange={(e) => setPassword(e.target.value)} type="password" />
            </FormGroup>
            <Link to="#">Forgot password?</Link>
            <div>
              <Button color="primary" className="button" size="lg">
                Sign In
              </Button>
            </div>
          </Form>
        </Card>
        <div className="bottomlink">
          <Link to="/sign-up">Sign Up</Link>
        </div>
      </div>
    </div>
  )
}

export default SignIn
