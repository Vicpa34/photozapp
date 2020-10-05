import React, { Component } from "react"
import Logo from "../Logo"
import Brand from "../Brand"
import { Link } from "react-router-dom"
import "./Navigation.scss"

//import SignInHeader from "../Brand/Brand"
//import "../styles/stylesheet.css"
import { Collapse, Navbar, NavbarToggler, Button, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from "reactstrap"

function Navigation() {
  return (
    <Navbar className="nav" color="primary">
      <Logo />
      <Brand />

      <NavItem>
        <Button className="navitem" Link to="/">
          Create new post
        </Button>
      </NavItem>

      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle className="toggleitem" nav caret>
          Name
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem Link to="">
            Sign Out
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </Navbar>
  )
}

export default Navigation
