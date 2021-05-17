import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./Intro.css";
import leaf from "../../Assets/images/art/leaf.png";
import transendence from "../../Assets/images/art/transcendence_black.png";

const Intro = () => {
  return (
    <Row id="intro" className="justify-content-lg-center">
      <Container >
        <Row>
          <Col lg={6} id="intro-body">
            <Container>
              <Row>
                <Col>
                  <h2>What is this?</h2>
                  <p className="content-text">
                    Cold Truth Culture is a community that works together to
                    build something truly special. It’s a safe place in crypto
                    space for people to hang out, talk and learn about digital
                    assets, NFTs, share ideas, share artwork and reward people
                    that do the right thing!
                  </p>
                </Col>
              </Row>
              <Button href="/about" className="green-button">
                About Us
              </Button>
            </Container>
          </Col>
          <Col lg={6} className="featured-art-container">
            <Container id="intro-art">
              <img
                src={leaf}
                alt="leaf"
                id="intro-leaf"
                className="img-move img-fluid"
              />
              <img
                src={transendence}
                alt="transcendence outline 1"
                id="intro-trans-1"
                className="img-move img-fluid"
              />
              <img
                src={transendence}
                alt="transcendence outline 2"
                id="intro-trans-2"
                className="img-move img-fluid"
              />
              <img
                src={transendence}
                alt="transcendence outline 3"
                id="intro-trans-3"
                className="img-move img-fluid"
              />
            </Container>
          </Col>
        </Row>
      </Container>
    </Row>
  );
};

export default Intro;
