import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";

const TopNav = () => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand as={Link} to="/">
      Books
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
  </Navbar>
);

export default TopNav;
