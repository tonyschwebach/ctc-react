import React from "react";
import { Row, Col, Carousel, Container } from "react-bootstrap";
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
          <Carousel className="mx-auto" interval={4000}  touch={true}>
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
                    <p className="content-text ">unknown</p>
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
        </Col>
      </Row>
    </>
  );
};

export default Artists;
