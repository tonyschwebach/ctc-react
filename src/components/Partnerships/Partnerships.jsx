import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./Partnerships.css";
import partners from "./partners.json";
import Partner from "./Partner/Partner";

const Partnerships = () => {
  return (
    <div>
      <Row id="partnerships">
        <Col lg={4}>images here</Col>
        <Col lg={8}>
          <h2>Our partnerships</h2>
          <Container>
            {partners.map((partner, index) => (
    
              <Partner {...partner} key={index}/>
            ))}
          </Container>
        </Col>
      </Row>
    </div>
  );
};

export default Partnerships;
