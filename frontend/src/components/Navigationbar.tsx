import React from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";

const Navigationbar = () => {
  return (
    <>
      <h2
        className="text-center mt-5"
        style={{ color: "#8903dc", fontWeight: "bold" }}
      >
        Rubicon Coding Challenge
      </h2>
      <Navbar>
        <Nav className="me-auto mt-5 ml-auto container space-between">
          <NavItem>
            <Link
              className="text-center links bg-light py-2 p-3 rounded"
              to="/projects"
              style={{ color: "#8903DC", textDecoration: "none" }}
            >
              Projects
            </Link>
          </NavItem>
          <NavItem>
            <Link
              className="text-center links bg-light py-2 p-3 rounded space-between"
              to="/tasks"
              style={{
                color: "#8903DC",
                textDecoration: "none",
                margin: "15%",
              }}
            >
              Tasks
            </Link>
          </NavItem>
        </Nav>
      </Navbar>
    </>
  );
};

export default Navigationbar;
