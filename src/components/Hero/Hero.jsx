import React from "react";
import Ticker from "react-ticker";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./Hero.css";
import cat from "../../Assets/images/art/cat.png";
import yinyang from "../../Assets/images/art/yinyang.png";
import tv from "../../Assets/images/art/tv.png";

const Hero = () => {
  return (
    <>
      <Row id="hero">
        <Col lg={6} id="hero_body">
          <h1>Cold Truth Culture -</h1>
          <h2>
            A Community That <br />
            Empowers NFT Artists
          </h2>

          <Button className="light_button">Learn more</Button>
        </Col>
        <Col lg={6} className="featured_art_container">
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
      <Row>
        <Col id="hero_footer" className="align-left text-left">
          <Ticker mode="chain" speed={7}>
            {({ index }) => (
              <>
                <p className="ticker-text">COLD TRUTH CULTURE</p>
              </>
            )}
          </Ticker>
        </Col>
      </Row>
    </>
  );
};

export default Hero;
