import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import partners from "./partners.json";
import Partner from "./Partner/Partner";
import catBlue from "../../Assets/images/art/cat_3_blue.png";
import catGreen from "../../Assets/images/art/cat_3_green.png";
import catPink from "../../Assets/images/art/cat_3_pink.png";
import "./Partnerships.css";

const Partnerships = () => {
  return (
    <div>
      <Row id="partnerships" className="justify-content-lg-center">
        <Container>
          <Row>
            <Col lg={5} className="featured-art-container">
              <Container id="partner-art">
                <img
                  src={catBlue}
                  alt="blue cat"
                  id="blue-cat"
                  className="img-move img-fluid"
                />
                <img
                  src={catGreen}
                  alt="green cat"
                  id="green-cat"
                  className="img-move img-fluid"
                />
                <img
                  src={catPink}
                  alt="pink cat"
                  id="pink-cat"
                  className="img-move img-fluid"
                />
              </Container>
            </Col>
            <Col lg={7}>
              <h2 className="mb-5">Our partnerships</h2>
              <Row className="justify-content-center">
                {partners.map((partner, index) => (
                  <Partner {...partner} key={index} />
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </Row>
    </div>
  );
};

export default Partnerships;
