import React from "react";
import { Container } from "react-bootstrap";
import mirror from "../../Assets/images/art/mirror.jpg";
import './Education.css'

const Education = () => {
  return (
    <Container className="mt-5">
      <h2>
        <strong>Education</strong>
      </h2>
      <h3 className="truth-green">Coming Soon</h3>
      <img src={mirror} alt="trans dimensional mirror" className='img-fluid rounded shadow-lg mt-5' />
    </Container>
  );
};

export default Education;
