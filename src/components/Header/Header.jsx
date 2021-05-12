import React from "react";
import { Navbar, Nav, NavDropdown, DropdownButton } from "react-bootstrap";
import { withRouter } from "react-router";
import "./Header.css";
import CTClogoGreen from "../../Assets/images/logos/CTC_logo_green.png";

const Header = (props) => {
  const { location } = props;

  return (
    <Navbar variant="dark" id="navbar" expand="lg" collapseOnSelect>
      <Navbar.Brand href="/" className="ml-3">
        <img src={CTClogoGreen} alt="CTC logo" className="mr-3" />
        Cold <span className="truth_green">Truth</span> Culture
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" activeKey={location.pathname}>
          <Nav.Link href="/" className="mx-1">
            Home
          </Nav.Link>
          <Nav.Link href="/about" className="mx-1">
            About
          </Nav.Link>
          <Nav.Link href="/cold" className="mx-1">
            $COLD
          </Nav.Link>
          <Nav.Link href="/education" className="mx-1">
            Education
          </Nav.Link>
          <Nav.Link href="/rewards" className="mx-1">
            Rewards
          </Nav.Link>

          <DropdownButton
            title="Join Us"
            id="collapsible-nav-dropdown"
            menuAlign="right"
            variant="light"
            className="mr-3 ml-1 my-auto"
          >
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
            {/* <NavDropdown.Divider />
            <NavDropdown.Item href="#" target="_blank">
              Governance
            </NavDropdown.Item> */}
          </DropdownButton>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

const HeaderWithRouter = withRouter(Header);

export default HeaderWithRouter;
