import React from "react";
import { Navbar, Row } from "react-bootstrap";
import CTClogoGreen from "../../Assets/images/logos/CTC_logo_green.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <a href="/" className="ml-3">
        <img src={CTClogoGreen} alt="CTC logo" className="mr-3" />
        Cold <span className="truth-green">Truth</span> Culture
      </a>

      {/* <a href="http://www.onlinewebfonts.com">oNline Web Fonts</a> */}
    </footer>
  );
};

export default Footer;
