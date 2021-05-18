import React from "react";
import { Container } from "react-bootstrap";
import "./Rewards.css";

const Rewards = () => {
  return (
    <Container className="mt-5">
      <strong>
        <h2>Rewards Program</h2>
      </strong>
      <h5 className="mt-4">Rewards Table</h5>
      <ul className="list-unstyled content-text">
        <li>Ice Cold OGs: 50% Cold Truth Cashback</li>
        <li>Music: 60% Cold Truth Cashback</li>
        <li>Music LP: 75% Cold Truth Cashback</li>
        <li>Collective LP: 80% Cold Truth Cashback</li>
        <li>HNY Rare LP: 85% Cold Truth Cashback</li>
        <li>Ice Cold Rare LP: 90% Cold Truth Cashback</li>
      </ul>
      <br />
      <p>Payments to be made weekly</p>
      <h5>Bonding Curve</h5>
      <ul className="list-unstyled content-text">
        <li>Week 1-4 2x rewards</li>
        <li>Week 4-8 1.5x rewards</li>
        <li>Week 8-12 1x rewards</li>
      </ul>
      <p className="content-text">
        Example: Week 1 at the end of the week the user has farmed the
        following:
      </p>
      <ul className="list-unstyled content-text">
        <li>Music - 2 x 4.95 = 9.90 xDAI x 0.75 (75%) = 7.425 xDAI</li>
        <li>Collective LP - 1 x 3.50 xDAI x 0.80 (80%) = 2.80 xDAI</li>
        <li>
          Bonding Curve Bonus for week 1: 7.425 + 2.80 = 10.255 xDAI ( x2) =
          20.510 xDAI
        </li>
      </ul>
      <p className="content-text">
        Avg cold price: 14.2c so the NFT farmer would get 20.510 xDAI worth of
        cold tokens @ 14.2c each = 144.43 cold tokens
      </p>

      <h5>
        The Cold Truth Culture Rewards Program will be revised by our governance
        council after 12 weeks and adjusted for best results and sustainability.
      </h5>

      <div className="bg-green">
        <p>
          To celebrate launching our latest rewards program we will be
          airdropping cold tokens to 1Hive’s most active wallets with amounts
          based on how well they have held their previous airdrops on the xDAI
          chain. We will also airdrop our current early supporters of Cold Truth
          Culture NFTs based on how many NFTs they redeemed! This will all take
          place 5-10 days before the launch of the Agave NFT promotion involving
          the COLD/AGVE LP token.
        </p>
      </div>
    </Container>
  );
};

export default Rewards;
