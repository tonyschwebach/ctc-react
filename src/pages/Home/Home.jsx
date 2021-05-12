import React from "react";
import { Container } from "react-bootstrap";
import Artists from "../../components/Artists/Artists";
import GetStarted from "../../components/GetStarted/GetStarted";
import Hero from "../../components/Hero/Hero";
import Intro from "../../components/Intro/Intro";

const Home = () => {
  return (
    <>
    <Container fluid className="bg-red">

      <Hero />
      <Intro />
      <Artists />
      {/* <GetStarted/> */}


    </Container>
    </>
  );
};

export default Home;
