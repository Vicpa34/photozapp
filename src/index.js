import React, { Component } from "react"
import ReactDOM from "react-dom"
import Main from "./components/Main"
import { BrowserRouter } from "react-router-dom"
import "./styles/stylesheet.css"

ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  document.getElementById("root")
)
