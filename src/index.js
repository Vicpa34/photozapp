import React, { Component } from "react"
import ReactDOM from "react-dom"
import Main from "./components/Main"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Switch, Route } from "react-router-dom"

ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  document.getElementById("root")
)
