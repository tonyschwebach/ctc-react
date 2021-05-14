import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import CTClogoText from "../../Assets/images/logos/CTC_logo_text.png";
import telegram from "../../Assets/images/logos/telegram.png";
import twitter from "../../Assets/images/logos/twitter.png";
import discord from "../../Assets/images/logos/discord.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <Container fluid className="pt-5 pb-5">
        <Row>
          <Col lg={3}>
            <a href="/" className="ml-3">
              <img src={CTClogoText} alt="CTC logo" className="mr-3" />
            </a>
          </Col>
          <Col lg={3}>
            <ul className="list-unstyled">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/cold">$COLD</Link>
              </li>
              <li>
                <Link to="/education">Education</Link>
              </li>
              <li>
                <Link to="/rewards">Rewards</Link>
              </li>
            </ul>
          </Col>
          <Col lg={3}>
            <h5>We invite you</h5>
            <p className="content-text ">
              Looking to learn more about Cold Truth Culture? No matter where
              you’re from and what's your skills are, you can always become part
              of the Community just by joining our social media channels. We
              invite you to explore with us!
            </p>
          </Col>
          <Col lg={3}>
            <a
              href="mailto:coldtruthcult@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              coldtruthcult@gmail.com
            </a>
            <Container className="d-flex justify-content-around">
              <a
                href="https://t.me/ColdTruthCultureNFTs"
                target="_blank"
                rel="noreferrer"
              >
                <img src={telegram} alt="telegram" />
              </a>
              <a
                href="https://twitter.com/ColdTruthCult"
                target="_blank"
                rel="noreferrer"
              >
                <img src={twitter} alt="twitter" />
              </a>
              <a
                href="https://discord.com/invite/GSmaQYuwcZ"
                target="_blank"
                rel="noreferrer"
              >
                <img src={discord} alt="discord" />
              </a>
            </Container>
          </Col>
        </Row>
      </Container>

      {/* <a href="http://www.onlinewebfonts.com">oNline Web Fonts</a> */}
    </footer>
  );
};

export default Footer;
