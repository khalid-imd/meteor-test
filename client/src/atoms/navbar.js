import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import DropDownNavbar from "./dropDown";

const Navbartable = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg md sm">
        <Container fluid>
          <Navbar.Brand>halaman utama</Navbar.Brand>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <DropDownNavbar />
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbartable;
