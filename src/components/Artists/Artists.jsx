import React from "react";
import { Row, Col, Carousel, Container, Button } from "react-bootstrap";
import "./Artists.css";
import portals from "../../Assets/images/art/artist_portals.png";
import sammyCold from "../../Assets/images/art/artist_sammy_cold.png";
import chomsky from "../../Assets/images/art/artist_chomsky.png";
import sammiches from "../../Assets/images/art/artist_sammiches.png";

const Artists = () => {
  return (
    <>
      <Row id="artists">
        <Col>
          <h2>Featured Artists</h2>
          <p className="content-text">
            We are here to <span className="truth-green">shape</span> the future
          </p>

          <div id="carousel-outline"></div>
          <Carousel className="mx-auto" interval={4000} touch={true}>
            <Carousel.Item>
              <Container>
                <Row className="artist">
                  <Col xs={4} className="my-auto">
                    <img src={portals} alt="portals" className="artist-image" />
                  </Col>
                  <Col xs={8} className="my-auto">
                    <h5>Portals</h5>
                    <p className="content-text ">
                      Founder of Cold Truth Culture NFTs, Developer and Music
                      Artist
                    </p>
                  </Col>
                </Row>
              </Container>
            </Carousel.Item>

            <Carousel.Item>
              <Container>
                <Row className="artist">
                  <Col xs={4} className="my-auto">
                    <img
                      src={sammyCold}
                      alt="sammy cold"
                      className="artist-image"
                    />
                  </Col>
                  <Col xs={8} className="my-auto">
                    <h5>Sammy Cold</h5>
                    <p className="content-text ">
                      OG Music and Tattoo Artist of Cold Truth Culture, Music
                      Producer, Clothing Designer
                    </p>
                  </Col>
                </Row>
              </Container>
            </Carousel.Item>
            <Carousel.Item>
              <Container>
                <Row className="artist">
                  <Col xs={4} className="my-auto">
                    <img src={chomsky} alt="shomsky" className="artist-image" />
                  </Col>
                  <Col xs={8} className="my-auto">
                    <h5>Chomsky</h5>
                    <p className="content-text ">NFT artist, illustrator and sticker pack creator</p>
                  </Col>
                </Row>
              </Container>
            </Carousel.Item>
            <Carousel.Item>
              <Container>
                <Row className="artist">
                  <Col xs={4} className="my-auto">
                    <img
                      src={sammiches}
                      alt="sammiches"
                      className="artist-image"
                    />
                  </Col>
                  <Col xs={8} className="my-auto">
                    <h5>Sammiches</h5>
                    <p className="content-text ">
                      Engineer turned Cold Truth Culture NFT Artist using
                      Photoshop, Illustrator, Solidworks and Vizualize
                    </p>
                  </Col>
                </Row>
              </Container>
            </Carousel.Item>
          </Carousel>
          <div className="mt-5">
            <Button
              target="_blank"
              rel="noreferrer"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdRAzibIq_W8K4i-Pbx4S-P8JgMFizfXcL8M8xP1VBaz0Nykg/viewform"
              className="green-white-button mt-5"
            >
              Request Art
            </Button>
            <Button
              target="_blank"
              rel="noreferrer"
              href="https://docs.google.com/forms/d/e/1FAIpQLScK6PevtdYqEQj_MCdLhZHEHRQq1K1ESe8uy79DIcZGDTtSxw/viewform"
              className="green-white-button ml-5 mt-5"
            >
              Submit Art
            </Button>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Artists;
