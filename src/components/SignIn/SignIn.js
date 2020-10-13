import React, { useState, useContext } from "react"

import "bootstrap/dist/css/bootstrap.min.css"
import { Card, Button, Form, FormGroup, Label, Input } from "reactstrap"
import Logo from "../Logo"
import Brand from "../Brand"
import { Link } from "react-router-dom"
import { withRouter } from "react-router-dom"
import Axios from "axios"
import "./SignIn.scss"
import AuthContext from "../Auth"

function AuthService(username, password) {
  if (password === "correct") {
    return "mocked token"
  } else {
    throw Error("Invalid password")
  }
}

function SignIn(props) {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [remoteError, setRemoteError] = useState()
  const context = useContext(AuthContext)

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const token = await AuthService(email, password)
      localStorage.setItem("token", token)
      context.setSignedIn(true)
      props.history.push("/post")
    } catch (err) {
      setRemoteError("wrong password")
    }
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
              {remoteError && <p>{remoteError}</p>}
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
