import React from "react";
import { Row, Col, Carousel, Container } from "react-bootstrap";
import "./Artists.css";
import portals from "../../Assets/images/art/artist_portals.png";
import sammyCold from "../../Assets/images/art/artist_sammy_cold.png";
import chomsky from "../../Assets/images/art/artist_chomsky.png";
import sammiches from "../../Assets/images/art/artist_sammiches.png";
import next from "../../Assets/images/misc/next.svg";
import prev from "../../Assets/images/misc/prev.svg";

const Artists = () => {
  return (
    <Row id="artists" className='pb-5'>
      <Col>
        <h2>Featured Artists</h2>
        <p className="content-text">
          We are here to <span className="truth-green">shape</span> the future
        </p>

        <Carousel
          className="mx-auto"
          nextIcon={<img src={next} alt="previous" />}
          prevIcon={<img src={prev} alt="next" />}
        >
          <Carousel.Item>
            <img src={portals} alt="portals" className="" />
            {/* <Carousel.Caption> */}
            <div className="">
              <h5>Portals</h5>
              <p>
                Founder of Cold Truth Culture NFTs, Developer and Music Artist
              </p>
            </div>
            {/* </Carousel.Caption> */}
          </Carousel.Item>

          <Carousel.Item>
            <img src={sammyCold} alt="sammy cold" className="" />
            {/* <Carousel.Caption> */}
            <div className="">
              <h5>Sammy Cold</h5>
              <p>
                OG Music and Tattoo Artist of Cold Truth Culture, Music
                Producer, Clothing Designer
              </p>
            </div>
            {/* </Carousel.Caption> */}
          </Carousel.Item>

          <Carousel.Item>
            <img src={chomsky} alt="shomsky" className="" />
            {/* <Carousel.Caption> */}
            <div className="">
              <h5>Chomsky</h5>
              <p>unknown</p>
            </div>
            {/* </Carousel.Caption> */}
          </Carousel.Item>

          <Carousel.Item>
            <img src={sammiches} alt="sammiches" className="" />
            {/* <Carousel.Caption> */}
            <div className="">
              <h5>Sammiches</h5>
              <p>
                Engineer turned NFT Artist of Cold Truth Culture working with
                programs such as Photoshop, Illustrator, Solidworks and
                Vizualize
              </p>
            </div>
            {/* </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
  );
};

export default Artists;
