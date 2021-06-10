import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./Intro.css";
import leaf from "../../Assets/images/art/leaf.png";
import transendence from "../../Assets/images/art/transcendence_black.png";
import artCluster from "../../Assets/images/art/art_cluster.png";

const Intro = () => {
  return (
    <div id="intro">
      <Row id="intro-this" className="justify-content-lg-center">
        <Container>
          <Row>
            <Col lg={6} className="intro-body">
              <Container>
                <Row>
                  <Col>
                    <h2>What is this?</h2>
                    <p className="content-text">
                      Cold Truth Culture is a community that works together to
                      build something truly special. It’s a safe place in crypto
                      space for people to hang out, talk and learn about digital
                      assets, NFTs, share ideas, share artwork and reward people
                      that contribute to our ecosystem.
                    </p>
                  </Col>
                </Row>
                <Button href="/about" className="green-button mt-4">
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

      <Row id="intro-cold" className="justify-content-lg-center">
        <Container>
          <Row>
            <Col lg={{ cols: 7, order: 12 }} className="intro-body ">
              <Container>
                <Row>
                  <Col>
                    <h2>What is $COLD?</h2>
                    <p className="content-text">
                      $COLD is a currency of Cold Truth Culture that's used to
                      acquire rare NFTs by staking it. A wide range of creators,
                      such as Musicians, Tattoo Artists, Designers earn $COLD by
                      contributing to the community. Proceeds are shared between
                      NFT artists, and used to buy back and burn $COLD.
                    </p>
                  </Col>
                </Row>
                <Button
                  target="_blank"
                  rel="noreferrer"
                  href="https://app.honeyswap.org/#/swap?inputCurrency=0eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee&outputCurrency=0xdbcade285846131a5e7384685eaddbdfd9625557"
                  className="light-button mt-4"
                >
                  Buy $COLD
                </Button>
                <Button
                  target="_blank"
                  rel="noreferrer"
                  href="https://forum.1hive.org/t/announcing-cold-truth-culture-airdrop-cold/3857/11"
                  className="light-button ml-5 mt-4"
                >
                  Learn More
                </Button>
              </Container>
            </Col>
            <Col lg={{ cols: 5, order: 1 }} className="featured-art-container">
              <Container>
                <img
                  src={artCluster}
                  alt="art cluster"
                  className=" img-fluid"
                />
              </Container>
            </Col>
          </Row>
        </Container>
      </Row>
    </div>
  );
};

export default Intro;
