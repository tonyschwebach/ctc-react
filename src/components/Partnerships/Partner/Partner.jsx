import React from "react";
import { Col } from "react-bootstrap";
import "./Partner.css";

const Partner = (props) => {
  const imageSrc = require("../../../Assets/images/logos/" + props.image);

  return (
    <Col sm={2} xs={6} className="partner mb-4">
      <a href={props.link} target="_blank" rel="noreferrer">
        <img
          src={imageSrc.default}
          alt={props.name}
          className="partner-icon-container mb-2"
        />
        <p>{props.name}</p>
      </a>
    </Col>
  );
};

export default Partner;
