import React from "react";
import Ticker from "react-ticker";
import { Row, Col, Card, CardDeck, Container, Dropdown } from "react-bootstrap";
import "./GetStarted.css";
import ellipsis from "../../Assets/images/misc/ellipsis-v.svg";
import honeyswap from "../../Assets/images/logos/action_honeyswap.png";
import unifty from "../../Assets/images/logos/action_unifty.png";
import unicrpyt from "../../Assets/images/logos/action_unicrypt.png";

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
              <Card className="action-card">
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
                        Honeyswap
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

                  <a
                    href="https://app.honeyswap.org/#/swap?inputCurrency=0xdbcade285846131a5e7384685eaddbdfd9625557&outputCurrency=0xe91d153e0b41518a2ce8dd3d7944fa863463a97d"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={honeyswap} alt="honeyswap" />
                    <Card.Title className="mt-3">Honeyswap</Card.Title>
                    <Card.Text className="content-text">
                      Trade $COLD on xDai Chain
                    </Card.Text>
                  </a>
                </Card.Body>
              </Card>
              <Card className="action-card">
                <Card.Body>
                  <Dropdown>
                    <Dropdown.Toggle variant="link" id="dropdown-basic">
                      <img src={ellipsis} alt="more" height="25px" />
                    </Dropdown.Toggle>

                    <Dropdown.Menu align="right">
                      <Dropdown.Item
                        href="https://unifty.io/xdai/farm-view.html?address=0xb474F405F0DF84fbe57751Af0CB1AE534f5639b5"
                        target="_blank"
                        rel="noreferrer"
                      >
                        CTC RARE NFT Farm HNY/COLD LP STAKE
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="https://unifty.io/xdai/farm-view.html?address=0x5d004F2576465aEa90328bCcC219cC8b4873cC53"
                        target="_blank"
                        rel="noreferrer"
                      >
                        CTC NSFW NFT Farm COLD STAKE
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="https://unifty.io/xdai/farm-view.html?address=0x305dc5048d9680d8b93a60Fd9f0054Bb0F6C5B19"
                        target="_blank"
                        rel="noreferrer"
                      >
                        CTC Music NFT Farm COLD STAKE
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="https://unifty.io/xdai/farm-view.html?address=0x18D57C5Dfe2e5839AC81630bE7dF359F2d4AE0A6"
                        target="_blank"
                        rel="noreferrer"
                      >
                        CTC Music NFT Farm xDAI/COLD LP STAKE
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="https://unifty.io/xdai/farm-view.html?address=0xFcf213136b9D48d210AA79B7F372e6e63BDF2737"
                        target="_blank"
                        rel="noreferrer"
                      >
                        CTC Music NFT Farm xDAI/COLD LP STAKE
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="https://unifty.io/xdai/farm-view.html?address=0xFcf213136b9D48d210AA79B7F372e6e63BDF2737"
                        target="_blank"
                        rel="noreferrer"
                      >
                        The Collective LP NFT Farm xDAI/COLD LP STAKE
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="https://unifty.io/xdai/farm-view.html?address=0x4C0dB34dDfe13C86863c363b03d933f80599a3BD"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Ice Cold NFT Farm COLD STAKE
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="https://unifty.io/xdai/farm-view.html?address=0xe1bD67dcd93C17cbC474aA2BFB7a90D2Ed892EDb"
                        target="_blank"
                        rel="noreferrer"
                      >
                        CRIPTOGRANJA EBOY COLD STAKE
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

                  <a
                    href="https://unifty.io/xdai/market.html?address=0xA0007F3b6B40f9B108b33AAEC3891BD41B906628"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={unifty} alt="unifty" />
                    <Card.Title>Unifty</Card.Title>
                    <Card.Text className="content-text">
                      Acquire NFTs on Unifty
                    </Card.Text>
                  </a>
                </Card.Body>
              </Card>
              <Card className="action-card">
                <Card.Body>
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="link"
                      id="dropdown-basic"
                      className="hidden"
                    >
                      <img src={ellipsis} alt="more" height="25px" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu align="right">
                      <Dropdown.Item
                        href="https://unicrypt.network/amm/honey/token/0xdbcadE285846131a5e7384685EADDBDFD9625557"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Unicrpyt Pairs
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <a
                    href="https://unicrypt.network/amm/honey/token/0xdbcadE285846131a5e7384685EADDBDFD9625557"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={unicrpyt} alt="unicrypt" />
                    <Card.Title>Unicrypt</Card.Title>
                    <Card.Text className="content-text">
                      Trade $COLD on Unicrypt
                    </Card.Text>
                  </a>
                </Card.Body>
              </Card>
            </CardDeck>
          </Container>
        </Col>
      </Row>
      <Row>
        <Col id="get_started_footer" className="align-middle mt-5">
          <Ticker mode="chain" speed={7} offset={70}>
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

export default GetStarted;
