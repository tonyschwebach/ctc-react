import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./About.css";
import cobweb from "../../Assets/images/art/CTC_cobweb.png";
import pyramid_bw from "../../Assets/images/art/pyramid_bw.png";
import pyramid_wb from "../../Assets/images/art/pyramid_wb.png";

const About = () => {
  return (
    <>
      <div className="green-block mt-4"></div>
      <Container className="mt-5 text-left">
        <Row className="mt-4">
          <Col>
            <h2>
              <strong>What is Cold TruthCulture?</strong>
            </h2>
          </Col>
        </Row>

        <Row className="ml-5">
          <Col sm={10}>
            <p className="content-text">
              {/* <strong> */}
              Cold Truth Culture is a community that works together to build
              something truly special. It’s a safe place in crypto space for
              people to hang out, talk and learn about digital assets, NFTs,
              share ideas, share artwork and reward people that do the right
              thing!
              {/* </strong> */}
            </p>
          </Col>
        </Row>
        <Row className="ml-5 mt-4">
          <Col sm={{ cols: 3, order: 12 }}>
            <img
              src={cobweb}
              alt="cold truth culture cobweb art"
              className="img-fluid my-3 mx-auto px-5 "
            />
          </Col>
          <Col sm={{ cols: 9, order: 1 }}>
            <p className="mt-4">
              <strong>Our history...</strong>
            </p>
            <p className="content-text">
              Since the beginning of time, every culture from all around of the
              world has appreciated and dedicated time to creating and
              collecting meaningful works of art. Until now, there have been a
              number of barriers holding artists back from sharing, exchanging,
              and getting recognition for their artwork all around the globe.
              Limited means to increase exposure for artist's work can prevent
              collectors and enthusiasts from ever seeing, purchasing, or
              admiring such art. There are thousands of incredibly talented
              artists from 2nd and 3rd world countries who may never get the
              chance to share their craft despite the decades of experience they
              have. These artists may lack the initial capital and education
              required to set up an online store in order to begin to sell and
              market their own work. Even seemingly small purchases from 1st
              world countries could go a long way for these artist's families
              and wellbeing. Another barrier is the difficulty for the unbanked
              population to acquire cryptocurrency without access to financial
              services or KYC requirements. Without having an issued means of
              Identification in some countries, it may be impossible to get
              started with cryptocurrency in order to get equal opportunities as
              all of the other NFT artists on the blockchain.
            </p>
          </Col>
        </Row>
        <Row className="ml-5 mt-4 bg-ctc-black">
          <Col sm={{ cols: 3, order: 1 }}>
            <img
              src={pyramid_bw}
              onMouseEnter={(e) => (e.currentTarget.src = pyramid_wb)}
              onMouseOut={(e) => (e.currentTarget.src = pyramid_bw)}
              alt="pyramid black and white"
              id="pyramid"
              className="img-fluid my-3 mx-auto px-5"
            />
          </Col>

          <Col sm={{ cols: 3, order: 12 }}>
            <p className="mt-4">
              <strong>This is where Cold Truth Culture steps in...</strong>
            </p>
            <p className="content-text">
              We offer the chance for artists of all skill levels to begin their
              journey with digital artwork on the blockchain as well as provide
              them with an incubator of sorts to help kick start their career.
              CTC artists are paid in our native cryptocurrency (COLD) for
              submitting artwork and promoting the artwork in our NFT farms. We
              provide them with the tools and advice to create their very own
              projects and use our resources to get recognition among the
              community. Some artists have even received requests for paid work.
            </p>
          </Col>
        </Row>
        <Row className="ml-5 mt-4">
          <Col>
            <p>
              <strong>
                Here is your chance to create, capture, and collect the unseen
                artwork of the world...
              </strong>
            </p>

            <p className="content-text">
              Pioneers in the early stages of the new digital blockchain age
              within popular media, the Cold Truth Culture NFT community has
              solidified itself within the Unifty NFT environment by creating a
              decentralised autonomous organisation on the xDai chain for the
              benefit of all crypto-artists. The Cold Truth Cash token ($COLD)
              has attracted many experienced artists as well as newcomers into
              the crypto NFT space from all over the world and united them on a
              mission to spread crypto-knowledge to a new generation of artists
              and enthusiasts. The Cold Truth Culture is a major part of this
              NFT phenomenon by simultaneously increasing its value for artists,
              the consumers, and the crypto-world: the only place where this can
              be possible.
            </p>
            <Button
              target="_blank"
              rel="noreferrer"
              href="https://app.honeyswap.org/#/swap?inputCurrency=0eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee&outputCurrency=0xdbcade285846131a5e7384685eaddbdfd9625557"
              className="green-button my-5"
            >
              $COLD
            </Button>
            <Button href="/join" className="green-button my-5 ml-5">
              Join Us
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
