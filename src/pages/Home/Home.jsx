import React from "react";
import { Container } from "react-bootstrap";
import Artists from "../../components/Artists/Artists";
import GetStarted from "../../components/GetStarted/GetStarted";
import Hero from "../../components/Hero/Hero";
import Intro from "../../components/Intro/Intro";
import Partnerships from "../../components/Partnerships/Partnerships";

const Home = () => {
  return (
    <>
      <Container fluid>
        <Hero />
        <Intro />
        <Artists />
        <GetStarted />
        <Partnerships />
      </Container>
    </>
  );
};

export default Home;
