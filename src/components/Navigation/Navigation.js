import React, { Component } from "react"
import Logo from "../Logo"
import Brand from "../Brand"
import { Link } from "react-router-dom"
import "./Navigation.scss"

//import SignInHeader from "../Brand/Brand"
import { Row, Collapse, Navbar, NavbarToggler, Button, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText, Card } from "reactstrap"

function Navigation() {
  function handleClick() {
    localStorage.removeItem("username", "email", "password")
  }
  return (
    <Navbar className="nav" color="primary">
      <Row className="logo-brand">
        <Logo />
        <Brand />
      </Row>

      <Row>
        <NavItem>
          <Button className="navitem navbarButton" Link to="/">
            Create new post
          </Button>
        </NavItem>

        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle className="toggleitem navbarName" nav caret>
            {localStorage.getItem("username")}
          </DropdownToggle>
          <DropdownMenu right>
            <Link to="/sign-in" onClick={handleClick}>
              Sign Out
            </Link>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Row>
    </Navbar>
  )
}

export default Navigation
