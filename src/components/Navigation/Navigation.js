import React, { Component } from "react"
import SignInHeader from "../SignInHeader"
//import "../styles/stylesheet.css"
import { Collapse, Navbar, NavbarToggler, Button, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from "reactstrap"

function Navigation() {
  return (
    <div>
      <Navbar className="nav" color="primary" light expand="md">
        <NavbarBrand href="/">
          <SignInHeader />
        </NavbarBrand>

        <Nav className="mr-auto" navbar>
          <NavItem className="navitem">
            <Button color="success" href="/">
              Create new post
            </Button>
          </NavItem>

          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle className="navitem" nav caret>
              Name
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Sign Out</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Navbar>
    </div>
  )
}

export default Navigation
