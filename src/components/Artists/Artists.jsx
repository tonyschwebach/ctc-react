import React from "react";
import { Row, Col, Carousel } from "react-bootstrap";
import "./Artists.css";
import portals from "../../Assets/images/art/artist_portals.png";
// import sammyCold from "../../Assets/images/art/artist_sammy_cold.png";
// import chomsky from "../../Assets/images/art/artist_chomsky.png";
// import sammiches from "../../Assets/images/art/artist_sammiches.png";

const Artists = () => {
  return (
    <Row id="artists">
      <Col>
        <h2>Featured Artists</h2>
        <p className="content-text">
          We are here to <span className="truth_green">shape</span> the future
        </p>

        <Row className="">
          <Col lg={8}>
            <Carousel>
              <Carousel.Item>
                <img className="d-block" src={portals} alt="portals" />
                <Carousel.Caption>
                  <h5>Portals</h5>
                  <p>
                    Founder of Cold Truth Culture NFTs, Developer and Music
                    Artist
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Artists;
