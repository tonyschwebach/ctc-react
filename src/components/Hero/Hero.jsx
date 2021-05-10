import React from "react";
import { Jumbotron, Button, Container, Row, Col } from "react-bootstrap";
import "./Hero.css";
import cat from "../../Assets/images/art/cat.png";
import yinyang from "../../Assets/images/art/yinyang.png";
import tv from "../../Assets/images/art/tv.png";

const Hero = () => {
  return (
    <div>
      <Jumbotron id="hero">
        <Row id="hero_body">
          <Col lg={7}>
            <Container>
              <h1>Cold Truth Culture -</h1>
              <h2>
                A Community That <br />
                Empowers NFT Artists
              </h2>
              <Button variant="light">Learn more</Button>
            </Container>
          </Col>
          <Col lg={5}>
            <Container id="featured_art_container">
              <img src={cat} alt="cat" id="hero_cat" />
              <img src={yinyang} alt="yin yang" id="hero_yinyang" />
              <img src={tv} alt="tv" id="hero_tv" />
            </Container>
          </Col>
        </Row>
        <Row>
          <Col id="hero_footer">Cold Truth Culture</Col>
        </Row>
      </Jumbotron>
    </div>
  );
};

export default Hero;
