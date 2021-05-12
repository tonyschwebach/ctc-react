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
        <Row>
          <Col lg={7} id="hero_body">
            <Container>
              <Row>
                <Col>
                  <h1>Cold Truth Culture -</h1>
                  <h2>
                    A Community That <br />
                    Empowers NFT Artists
                  </h2>
                </Col>
              </Row>
              <Button className="light_button">Learn more</Button>
            </Container>
          </Col>
          <Col lg={5} className="featured_art_container">
            <Container>
              <Row>
                <Col>
                  <img src={cat} alt="cat" id="hero_cat" />
                  <img src={yinyang} alt="yin yang" id="hero_yinyang" />
                  <img src={tv} alt="tv" id="hero_tv" />
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
        <Row id="hero_footer" className="align-middle">
          <Col>Cold Truth Culture</Col>
        </Row>
      </Jumbotron>
    </div>
  );
};

export default Hero;
