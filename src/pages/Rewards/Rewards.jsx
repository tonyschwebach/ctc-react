import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import "./Rewards.css";

const Rewards = () => {
  return (
    <>
      <div className="green-block mt-4"></div>
      <Container className="mt-5 text-left">
        <Row className="mt-4">
          <Col>
            <h2>
              <strong>How to earn Rewards?</strong>
            </h2>
          </Col>
        </Row>
        <Row className="ml-5">
          <Col sm={10}>
            <p className="content-text">
              {/* <strong> */}
              The Cold Truth Culture Rewards Program will be revised by our
              governance council after 12 weeks and adjusted for best results
              and sustainability.
              {/* </strong> */}
            </p>
          </Col>
        </Row>
        <div className="bg-green">
          <p>
            To celebrate launching our latest rewards program we will be
            airdropping cold tokens to 1Hive’s most active wallets with amounts
            based on how well they have held their previous airdrops on the xDAI
            chain. We will also airdrop our current early supporters of Cold
            Truth Culture NFTs based on how many NFTs they redeemed! This will
            all take place 5-10 days before the launch of the Agave NFT
            promotion involving the COLD/AGVE LP token.
          </p>
        </div>

        <Row className="ml-5">
          <Col md={8} className="mx-auto">
            <h5 className="mt-4">Rewards Table</h5>
            <Table striped bordered hover responsive="md">
              <thead>
                <tr>
                  <th>Farm</th>
                  <th>Reward</th>
                </tr>
              </thead>
              <tbody className="content-text">
                <tr>
                  <td>
                    <a
                      href="https://unifty.io/xdai/farm-view.html?address=0x4C0dB34dDfe13C86863c363b03d933f80599a3BD"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Ice Cold OGs
                    </a>
                  </td>
                  <td>50% Cold Truth Cashback</td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://unifty.io/xdai/farm-view.html?address=0x305dc5048d9680d8b93a60Fd9f0054Bb0F6C5B19"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Music
                    </a>
                  </td>
                  <td>60% Cold Truth Cashback</td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://unifty.io/xdai/farm-view.html?address=0x18D57C5Dfe2e5839AC81630bE7dF359F2d4AE0A6"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Music LP
                    </a>
                  </td>
                  <td>75% Cold Truth Cashback</td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://unifty.io/xdai/farm-view.html?address=0xFcf213136b9D48d210AA79B7F372e6e63BDF2737"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Collective LP
                    </a>
                  </td>
                  <td>80% Cold Truth Cashback</td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://unifty.io/xdai/farm-view.html?address=0xb474F405F0DF84fbe57751Af0CB1AE534f5639b5"
                      target="_blank"
                      rel="noreferrer"
                    >
                      HNY Rare LP
                    </a>
                  </td>
                  <td>85% Cold Truth Cashback</td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://unifty.io/xdai/market.html?address=0xA0007F3b6B40f9B108b33AAEC3891BD41B906628"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Ice Cold Rare LP
                    </a>
                  </td>
                  <td>90% Cold Truth Cashback</td>
                </tr>
              </tbody>
            </Table>
            <p>Payments to be made weekly</p>
          </Col>

          <Col md={4}>
            <h5 className="mt-4">Bonding Curve</h5>
            <ul className="list-unstyled content-text">
              <li>Week 1-4 2x rewards</li>
              <li>Week 4-8 1.5x rewards</li>
              <li>Week 8-12 1x rewards</li>
            </ul>
          </Col>
        </Row>

        <Row className="ml-5">
          <Col>
            <div className="bg-gray py-2 px-4">
              <p>
                Example:
                <span className="content-text">
                  {" "}
                  Week 1 at the end of the week the user has farmed the
                  following:
                </span>
              </p>
              <ul className="list-unstyled content-text">
                <li>Music - 2 x 4.95 = 9.90 xDAI x 0.75 (75%) = 7.425 xDAI</li>
                <li>Collective LP - 1 x 3.50 xDAI x 0.80 (80%) = 2.80 xDAI</li>
                <li>
                  Bonding Curve Bonus for week 1: 7.425 + 2.80 = 10.255 xDAI (
                  x2) = 20.510 xDAI
                </li>
              </ul>
              <p className="content-text">
                Avg cold price: 14.2c so the NFT farmer would get 20.510 xDAI
                worth of cold tokens @ 14.2c each = 144.43 cold tokens
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Rewards;
