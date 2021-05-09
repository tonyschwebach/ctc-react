import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { withRouter } from "react-router";
import "./Header.css";

const Header = (props) => {
  const { location } = props;

  return (
      <Navbar bg="dark" variant="dark" id="navbar">
        <Navbar.Brand href="/">Cold Truth Culture</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" activeKey={location.pathname}>
            <Nav.Link href="/" activeClassName="active">
              Home
            </Nav.Link>
            <Nav.Link href="/about" activeClassName="active">
              About
            </Nav.Link>
            <Nav.Link href="/cold" activeClassName="active">
              $COLD
            </Nav.Link>
            <Nav.Link href="/education" activeClassName="active">
              Education
            </Nav.Link>
            <Nav.Link href="/rewards" activeClassName="active">
              Rewards
            </Nav.Link>
            <NavDropdown title="Join Us" id="basic-nav-dropdown">
              <NavDropdown.Item
                href="https://discord.gg/GSmaQYuwcZ"
                target="_blank"
              >
                Discord
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://twitter.com/ColdTruthCult"
                target="_blank"
              >
                Twitter
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://t.me/ColdTruthCultureNFTs"
                target="_blank"
              >
                Telegram
              </NavDropdown.Item>
              <NavDropdown.Item
                href="mailto:crosschainapplications@gmail.com"
                target="_blank"
              >
                Email
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#" target="_blank">
                Governance
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

  );
};

const HeaderWithRouter = withRouter(Header)


export default HeaderWithRouter;
