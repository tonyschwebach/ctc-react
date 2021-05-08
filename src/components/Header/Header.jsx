import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Cold Truth Culture</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/cold">$COLD</Nav.Link>
          <Nav.Link href="/education">Education</Nav.Link>
          <Nav.Link href="/rewards">Rewards</Nav.Link>
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

export default Header;
