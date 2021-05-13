import React from "react";
import { Row, Col, Card, CardDeck, Container, Dropdown } from "react-bootstrap";
import { Link, BrowserRouter as Router } from "react-router-dom";
import "./GetStarted.css";
import ellipsis from "../../Assets/images/misc/ellipsis-v.svg";
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
                  <Dropdown>
                    <Dropdown.Toggle variant="link" id="dropdown-basic">
                      <img src={ellipsis} alt="more" height="25px" />
                    </Dropdown.Toggle>

                    <Dropdown.Menu align="right">
                      <Dropdown.Item
                        href="https://honeyswap.org/setup-wallet.html"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Setup Wallet
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="https://honeyswap.org/xdai-bridges.html"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Bridge
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="https://honeyswap.org/xdai-ramp.html"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Ramp
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="https://app.honeyswap.org/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Honeswap
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

                  <a
                    href="https://app.honeyswap.org/#/swap?inputCurrency=0xdbcade285846131a5e7384685eaddbdfd9625557&outputCurrency=0xe91d153e0b41518a2ce8dd3d7944fa863463a97d"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={honeyswap} alt="honeyswap" />
                    <Card.Title>honeyswap</Card.Title>
                    <Card.Text>Trade $COLD on xDai Chain</Card.Text>
                  </a>
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
