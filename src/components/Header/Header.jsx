import React from "react";
import { Navbar, Nav, NavDropdown, DropdownButton } from "react-bootstrap";
import { withRouter } from "react-router";
import "./Header.css";
import CTClogoGreen from "../../Assets/images/logos/CTC_logo_text.png";

const Header = (props) => {
  const { location } = props;

  return (
    <Navbar variant="dark" id="navbar" expand="md" collapseOnSelect>
      <Navbar.Brand href="/" className="ml-3">
        <img src={CTClogoGreen} alt="CTC logo" className="mr-3" />
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
          <Nav.Link
            target="_blank"
            rel="noreferrer"
            href="https://app.honeyswap.org/#/swap?inputCurrency=0xe91d153e0b41518a2ce8dd3d7944fa863463a97d&outputCurrency=0xdbcade285846131a5e7384685eaddbdfd9625557"
            className="mx-1"
          >
            $COLD
          </Nav.Link>
          <Nav.Link href="/education" className="mx-1">
            Education
          </Nav.Link>
          <Nav.Link href="/rewards" className="ml-1 mr-2">
            Rewards
          </Nav.Link>

          <DropdownButton
            title="Join Us"
            id="collapsible-nav-dropdown"
            menuAlign="right"
            variant="light"
            className="mr-3 ml-1 my-auto mx-auto"
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
