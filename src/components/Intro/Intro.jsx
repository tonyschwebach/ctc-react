import React from "react";
import { Jumbotron, Button, Container, Row, Col } from "react-bootstrap";
import "./Intro.css";
import leaf from "../../Assets/images/art/leaf.png";
import transendence from "../../Assets/images/art/transcendence_outline.png";

const Intro = () => {
  return (
    <div>
      <Jumbotron id="intro">
        <Row>
          <Col lg={7} id="intro_body">
            <Container>
              <Row>
                <Col>
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
                  <img src={leaf} alt="leaf" id="intro_leaf" />
                  <img
                    src={transendence}
                    alt="transcendence outline 1"
                    id="intro_trans_1"
                  />
                  <img
                    src={transendence}
                    alt="transcendence outline 2"
                    id="intro_trans_2"
                  />
                  <img
                    src={transendence}
                    alt="transcendence outline 3"
                    id="intro_trans_3"
                  />
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
};

export default Intro;
