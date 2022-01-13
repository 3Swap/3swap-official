import React from 'react';
import About from '../Components/About';
import Footer from '../Components/Footer';
import Hero from '../Components/Hero';
import Nav from '../Components/Nav';
import RoadMap from '../Components/RoadMap';
import SocialMedia from '../Components/SocialMedia';
import Team from '../Components/Team';
import Tokenomics from '../Components/Tokenomics';
import Why from '../Components/Why';

const Home = () => {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Tokenomics />
      <RoadMap />
      <Why />
      <SocialMedia />
      <Team />
      <Footer />
    </>
  );
};

export default Home;
