import React from "react";
import { Row, Col, Card, CardDeck, Container } from "react-bootstrap";
import "./GetStarted.css";
import honeyswap from "../../Assets/images/logos/honeyswap.png";
import unifty from "../../Assets/images/logos/unifty.png";
import unicrpyt from "../../Assets/images/logos/unicrypt.png";

const GetStarted = () => {
  return (
    <>
      <Row id="get_started">
        <Col>
          <h2>Get Started</h2>
          <p className="content-text">
            Platform gates to Cold Truth Culture NFT farms and $COLD token
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Container>
            <CardDeck>
              <Card>
                <Card.Body>
                  <img src={honeyswap} alt="honeyswap" />
                  <Card.Title>honeyswap</Card.Title>
                  <Card.Text>Trade $COLD on xDai Chain</Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <img src={unifty} alt="unifty" />
                  <Card.Title>Unifty</Card.Title>
                  <Card.Text>Acquire NFTs on Unifty</Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <img src={unicrpyt} alt="unicrypt" />
                  <Card.Title>Unicrypt</Card.Title>
                  <Card.Text>Trade $COLD on Unicrypt</Card.Text>
                </Card.Body>
              </Card>
            </CardDeck>
          </Container>
        </Col>
      </Row>
    </>
  );
};

export default GetStarted;
