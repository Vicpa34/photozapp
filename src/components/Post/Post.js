import React, { Component } from "react"
import Navigation from "../Navigation"
import { Card, CardLink, Button, Input, CardBody, CardTitle, InputGroup } from "reactstrap"
import "./Post.scss"
import Axios from "axios"
//import { Link } from "react-router-dom"

function Post() {
  function handleSubmit(e) {
    e.preventDefault()

    //Axios.post("https://localhost:3000/api/v1/media/{imageId}/comments/", { imageId })
  }
  return (
    <div>
      <Navigation />
      <div className="cardContainer">
        <Card>
          <CardTitle className>
            <p className="titleText">Butterfly</p>
          </CardTitle>
          <Card img src="#" />

          <CardBody>
            {/* <CardLink href="#">Link to avatar</CardLink> */}
            <Button onClick={handleSubmit} className="comment">
              Show comments
            </Button>
            <InputGroup className="input">
              <Input placeholder="Write a comment..." />
              <Button color="primary">Submit</Button>
            </InputGroup>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default Post
