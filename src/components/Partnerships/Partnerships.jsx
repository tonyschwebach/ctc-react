import React from "react";
import { Row, Col } from "react-bootstrap";
import partners from "./partners.json";
import Partner from "./Partner/Partner";
import catBlue from "../../Assets/images/art/cat_3_blue.png";
import catGreen from "../../Assets/images/art/cat_3_green.png";
import catPink from "../../Assets/images/art/cat_3_pink.png";
import "./Partnerships.css";

const Partnerships = () => {
  return (
    <div>
      <Row id="partnerships" className="justify-content-center">
        <Col lg={5}>
          <img src={catBlue} alt="blue cat" id="blue_cat" />
          <img src={catGreen} alt="green cat" id="green_cat" />
          <img src={catPink} alt="pink cat"  id="pink_cat"/>
        </Col>
        <Col lg={7}>
          <h2>Our partnerships</h2>
          <Row className="justify-content-center">
            {partners.map((partner, index) => (
              <Partner {...partner} key={index} />
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Partnerships;
