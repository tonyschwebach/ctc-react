import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Cold.css";
import artCluster from "../../Assets/images/art/art_cluster.png";

const Cold = () => {
  return (
    <>
      <Container fluid>
        <Row id="intro-cold" className="justify-content-lg-center">
          <Col lg={{ cols: 7, order: 12 }} className="intro-body ">
            <Container>
              <Row>
                <Col>
                  <h2>What is $COLD?</h2>
                  <p className="content-text">
                    Our native currency COLD token is used to reward artists,
                    NFT collectors and vote towards proposals in our governance.
                    Funds raised from NFT sales are used to buy back and burn
                    COLD until the total supply is reduced to 1,618,000 over a
                    10 year period. There was no presale and liquidity was self
                    funded and locked with Unicrypt for 1 year.
                  </p>
                  <p className="content-text">
                    Newcomers can{" "}
                    <strong>
                      <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLScK6PevtdYqEQj_MCdLhZHEHRQq1K1ESe8uy79DIcZGDTtSxw/viewform"
                        target="_blank"
                        rel="noreferrer"
                        style={{textDecoration:'underline'}}
                      >
                        submit
                      </a>
                    </strong>{" "}
                    quality artwork and in return receive some COLD tokens to
                    join the crew and be a part of the project. We use the
                    artwork to mint as NFTs and deposit them to be collected in
                    one of our many NFT farms.
                  </p>
                  <p className="content-text">
                    <strong>
                      <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSdRAzibIq_W8K4i-Pbx4S-P8JgMFizfXcL8M8xP1VBaz0Nykg/viewform"
                        target="_blank"
                        rel="noreferrer"
                        style={{textDecoration:'underline'}}
                      >
                        Requests
                      </a>
                    </strong>{" "}
                    can be made by consulting with artists, filling out a form
                    and making a deposit ensuring that both parties get the best
                    results possible and a fair deal.
                  </p>
                  <p className="content-text">
                    Farm NFTs by adding a stake to the CTC NFT farms using COLD
                    or LP tokens. You will accumulate points that can be used to
                    redeem NFTs at a discount to the market price as well as
                    earn COLD rewards for each redemption to be distributed
                    weekly in our{" "}
                    <strong>
                      <a href="/cold" style={{textDecoration:'underline'}}>CTC Rewards Program</a>
                    </strong>{" "}
                    for NFT collectors
                  </p>
                </Col>
              </Row>
              <Button
                target="_blank"
                rel="noreferrer"
                href="https://app.honeyswap.org/#/swap?inputCurrency=0xEeeeeEEeeEEEEeeEEEEEeeeeeEEe&outputCurrency=0xdbcade285846131a5e7384685eaddbdfd9625557"
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
              <img src={artCluster} alt="art cluster" className=" img-fluid" />
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Cold;
