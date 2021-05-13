import React from "react";
import { Col } from "react-bootstrap";

const Partner = (props) => {
  const imageSrc = require("../../../Assets/images/logos/" + props.image);

  return (
    <Col lg={2}>
      <a href={props.link} target="_blank" rel="noreferrer">
        <img src={imageSrc.default} alt={props.name} />
        <p>{props.name}</p>
      </a>
    </Col>
  );
};

export default Partner;
